import { type Migrations } from "rwsdk/db";

export const migrations = {
    "001_initial_schema": {
        async up(db) {
            await db.schema
                .createTable("tows")
                .addColumn("id", "text", (col) => col.primaryKey())
                .addColumn("vehicle", "text", (col) => col.notNull())
                .addColumn("pickup", "text", (col) => col.notNull())
                .addColumn("dropoff", "text", (col) => col.notNull())
                .addColumn("status", "text", (col) => col.notNull().defaultTo("pending"))
                .addColumn("createdAt", "text", (col) => col.notNull())
                .execute();
        },
        async down(db) {
            await db.schema.dropTable("tows").ifExists().execute();
        },
    },
} satisfies Migrations;
