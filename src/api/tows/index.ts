import { db } from "@/db/db";

export const towsRoute = async (req: any) => {
    try {
        const method = req.request.method.toUpperCase();

        if (method === "GET") {
            const tows = await db.selectFrom("tows").selectAll().execute();
            return Response.json(tows);
        }

        if (method === "POST") {
            const body = await req.request.json();
            const newTow = {
                id: crypto.randomUUID(),
                vehicle: body.vehicle ?? "Unknown",
                pickup: body.pickup ?? "",
                dropoff: body.dropoff ?? "",
                status: body.status ?? "pending",
                createdAt: new Date().toISOString(),
            };
            await db.insertInto("tows").values(newTow).execute();
            return Response.json(newTow, { status: 201 });
        }

        return new Response("Method Not Allowed", { status: 405 });
    } catch (err: any) {
        console.error("Error in /api/tows:", err);
        return new Response(`Internal Server Error: ${err.message}`, { status: 500 });
    }
};
