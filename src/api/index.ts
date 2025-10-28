import { route } from "rwsdk/router";
import { towsRoute } from "./tows";
import { towByIdRoute } from "./tows/[id]";

export const apiRoutes = [
    route("/api/tows", towsRoute),
    route("/api/tows/:id", towByIdRoute),
];
