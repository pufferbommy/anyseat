import LandingPage from "./LandingPage";

export function meta() {
  return [
    { title: "Anyseat - Discover Your Perfect Workspace" },
    { name: "description", content: "Find the best cafes, co-working spaces, and quiet spots for remote work and study in Bangkok with Anyseat." },
    { name: "keywords", content: "coworking Bangkok, remote work Bangkok, work friendly cafe, remote work Thailand, digital nomad Bangkok, study spots Bangkok" },
    { property: "og:title", content: "Anyseat - Discover Your Perfect Workspace" },
    { property: "og:description", content: "Find the best remote-work friendly locations in Bangkok, from cozy cafes to modern co-working spaces." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Anyseat - Discover Your Perfect Workspace" },
    { name: "twitter:description", content: "Find the best remote-work friendly locations in Bangkok, from cozy cafes to modern co-working spaces." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
