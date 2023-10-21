import axios from "@/lib/axios";

export default async function deleteTodo({ id, ...props }){
    return await axios
        .delete('/api/todo/' + id, props)
        .then(res => res.data)
        .catch(error => {
            if(error.response.data.errors) {
                Object.entries(error.response.data.errors).map(([key, value]) => {
                    setError(key, { type: 'focus', message: value });
                });
            }

            if (error.response.status !== 422) throw error
        })
}