
import TodoListComponent from "@/components/todoListComponent";
import "@/app/globals.scss";

export default function TodoListPage() {
    return (
        <div>
            <h1 className="is-size-1 my-5 has-text-weight-bold has-text-centered">
                Todo list page
            </h1>

            <TodoListComponent />
        </div>
    );
}
