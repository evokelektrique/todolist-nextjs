"use client"

import useSWR from 'swr'
import TodoComponent from './todoComponent';
import PaginationComponent from './paginationComponent';
import { useState } from 'react';
import { getTodo } from '@/features/todo/getTodo';
import TodoListSkeletonComponent from './todoListSkeletonComponent';

export default function TodoListComponent() {
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_BACKEND_URL + '/todo/list?page=' + page, getTodo);

    if (error) return <div>failed to load - {error.message}</div>
    if (isLoading) {
        return(<TodoListSkeletonComponent />)
    }

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