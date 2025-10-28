import { db } from "@/db/db";

export const towByIdRoute = async (req: any) => {
    try {
        const method = req.request.method.toUpperCase();
        if (method !== "PUT") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        const { id } = req.params;
        const body = await req.request.json();

        await db
            .updateTable("tows")
            .set({ status: body.status })
            .where("id", "=", id)
            .execute();

        return Response.json({ ok: true });
    } catch (err: any) {
        console.error("Error in /api/tows/:id:", err);
        return new Response(`Internal Server Error: ${err.message}`, { status: 500 });
    }
};
