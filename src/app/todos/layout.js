"use client"

import { useAuth } from "@/hooks/auth";

export default function TodosLayout({ children }) {
    const { user } = useAuth({ middleware: 'auth' });

    return (
        <div className="container">
            {children}
        </div>
    );
}