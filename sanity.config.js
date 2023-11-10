import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "d9o5wefz",
  dataset: "production",
  title: "Blog",
  apiVersion: "2023-06-06",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
