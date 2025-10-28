import { useEffect, useState } from "react";

export interface Tow {
    id: string;
    vehicle: string;
    pickup: string;
    dropoff: string;
    status: string;
    createdAt: string;
}

export function useTows() {
    const [tows, setTows] = useState<Tow[]>([]);
    const [filtered, setFiltered] = useState<Tow[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const loadTows = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/tows");
            const data = await res.json();
            setTows(data);
            setFiltered(data);
        } catch (err) {
            console.error("Failed to load tows:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTows();
    }, []);

    useEffect(() => {
        const lower = search.toLowerCase();
        setFiltered(tows.filter((t) => t.vehicle?.toLowerCase().includes(lower)));
    }, [search, tows]);

    const createTow = async (tow: Partial<Tow>) => {
        await fetch("/api/tows", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tow),
        });
        await loadTows();
    };

    const updateTowStatus = async (id: string, status: string) => {
        await fetch(`/api/tows/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
        await loadTows();
    };

    return {
        tows: filtered,
        allTows: tows,
        loading,
        search,
        setSearch,
        createTow,
        updateTowStatus,
        reload: loadTows,
    };
}
