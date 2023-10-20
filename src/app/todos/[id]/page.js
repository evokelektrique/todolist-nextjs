import CreateTodoForm from "@/components/createTodoForm";

export default async function TodoSinglePage({ params: {id} }) {
    return (
        <CreateTodoForm id={id} />
    );
}