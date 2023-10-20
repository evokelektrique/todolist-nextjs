"use client"

import useSWR from 'swr'
import TodoComponent from './todoComponent.jsx';
import { getTodoList } from '@/features/todo/getTodoList';
import PaginationComponent from './paginationComponent';
import { useState } from 'react';
import { useAuth } from "@/hooks/auth";

export default function TodoListComponent() {
    const { user } = useAuth({ middleware: 'auth' });
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_BACKEND_URL + '/todo/list?page=' + page, getTodoList);

    if (error) return <div>failed to load - {JSON.stringify(error)}</div>
    if (isLoading) return <div>loading...</div>

    const fetchNextPage = (link) => {
        if (!link) {
            return;
        }

        const url = new URL(link);
        setPage(parseInt(url.searchParams.get('page')));
    }

    // render data
    return (
        <div>
            {data.data.map((todo) => (<TodoComponent key={todo.id} todo={todo} />))}

            <div className='buttons'>
                <PaginationComponent data={data} fetchNextPage={fetchNextPage} />
            </div>
        </div >
    );
}