import { AppDurableObject } from "@/db/durableObject";
import { defineApp } from "rwsdk/worker";
import { route, render } from "rwsdk/router";
import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { apiRoutes } from "@/api";
import { Tows } from "@/app/pages/Tows";

export { AppDurableObject };

export default defineApp([
  setCommonHeaders(),
  ...apiRoutes,
  render(Document, [route("/", Tows)]),
]);
