"use client"

import createTodo from "@/features/todo/createTodo";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";

export default function NewTodoForm({ mutate }) {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        setError,
    } = useForm();


    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ content: '', complete: '' });
        }

        mutate();
    }, [formState, mutate, isSubmitSuccessful, reset]);


    async function onSubmit(data) {
        const { content, complete } = data;

        const create = await createTodo({
            content,
            complete,
            setError,
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label" htmlFor="content">Content</label>
            <textarea
                type="text"
                className="textarea mb-3"
                id="content"
                {...register("content", {
                    required: "This field is required",
                    maxLength: {
                        value: 255,
                        message: "This input exceed maxLength."
                    }
                })}
            ></textarea>

            <ErrorMessage
                errors={errors}
                name="content"
                render={({ message }) => <p className="has-text-danger">{message}</p>}
            />

            <div className="mb-3">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="content"
                    {...register("complete", { maxLength: 255 })}
                /> Completed?
            </div>

            <button type="submit" className={"button is-success " + (isSubmitting && "is-loading")}>Create</button>
        </form>
    );
}