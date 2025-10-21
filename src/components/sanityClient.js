import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "uma8cfiu",
  dataset: "blog",
  apiVersion: "2025-09-19",
  useCdn: false,
});
