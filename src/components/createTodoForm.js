import { useForm } from "react-hook-form";

export default function CreateTodoForm({ todo }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="content">Content</label>
            <input
                type="text"
                className="input"
                id="content"
                defaultValue={todo.content}
                {...register("content", { required: true, maxLength: 255 })}
            />
            {errors.content && <span className="has-text-danger">This field is required</span>}

            <input
                type="checkbox"
                className="checkbox"
                id="content"
                defaultChecked={todo.complete}
                {...register("complete", { maxLength: 255 })}
            />

            <input type="submit" />
        </form>
    );
}