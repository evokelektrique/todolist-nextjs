"use client"

import { getTodo } from "@/features/todo/getTodo";
import updateTodo from "@/features/todo/updateTodo";
import { useForm } from "react-hook-form";
import useSWR from 'swr'
import {
    SkeletonText,
    SkeletonBlock,
} from "skeleton-elements/react";
import { ErrorMessage } from "@hookform/error-message";

export default function CreateTodoForm({ id }) {
    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/todo/' + id, getTodo);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        setError,
    } = useForm();

    async function onSubmit(data) {
        const { content, complete } = data;

        const update = await updateTodo({
            content,
            complete,
            id: id,
            setError,
        });

        console.log(update)
    }

    if (isLoading) {
        return (
            <div>
                <div className="mb-4">
                    <SkeletonText effect={"wave"} tag="p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                        animi nihil ullam! Asperiores recusandae ullam deleniti, modi
                        adipisci omnis alias quis magnam quod quidem dolores exercitationem
                        dolor repellendus neque ex.
                    </SkeletonText>
                </div>

                <SkeletonBlock width="85px" height="40px" effect="wave" />
            </div>
        )
    }

    if (error) {
        return ("error: " + JSON.stringify(error));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label" htmlFor="content">Content</label>
            <textarea
                type="text"
                className="textarea mb-3"
                id="content"
                defaultValue={data.content}
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
                    defaultChecked={data.complete}
                    {...register("complete", { maxLength: 255 })}
                /> Completed?
            </div>

            <button type="submit" className={"button is-success " + (isSubmitting && "is-loading")}>Update</button>
            {(isSubmitSuccessful) && <p>Form submit successful.</p>}
        </form>
    );
}