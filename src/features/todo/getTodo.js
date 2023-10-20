import axios from "@/lib/axios";

export async function getTodo(url) {
    return await axios.get(url)
        .then(res => res.data)
        .catch(error => {
            if (error.response.status !== 409) throw error
        })
}