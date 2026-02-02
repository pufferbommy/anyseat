import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("places", "routes/places.tsx"),
    route("places/:id", "routes/places.$id.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/:id", "routes/blog.$id.tsx")
  ])
] satisfies RouteConfig;