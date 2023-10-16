"use client"

export default function PaginationComponent({ data, fetchNextPage }) {
    const links = data.links

    return (
        <>
            {
                links.map((link, index) => (
                    <button
                        key={index}
                        className={`button is-responsive ${link.active ? 'is-primary' : 'is-white'}`}
                        onClick={() => { fetchNextPage(link.url) }}
                        disabled={link.active}
                    >
                        {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                    </button>
                ))
            }
        </>
    );
}