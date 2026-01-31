import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { ArrowRight, MapIcon, MapPin, Star } from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Anyseat - Find Your Working Chill Places in Bangkok" },
    { name: "description", content: "Discover the best working spots in Bangkok. Cafes, coworking spaces, libraries, and chill places to work remotely with good WiFi and atmosphere." },
    { name: "keywords", content: "Bangkok coworking, work from Bangkok, cafe workspace, remote work Thailand, digital nomad Bangkok, study spots Bangkok" },
    { property: "og:title", content: "Anyseat - Find Your Working Chill Places in Bangkok" },
    { property: "og:description", content: "Discover the best working spots in Bangkok. From cozy cafes to modern coworking spaces." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Anyseat - Find Your Working Chill Places in Bangkok" },
    { name: "twitter:description", content: "Discover the best working spots in Bangkok. From cozy cafes to modern coworking spaces." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">anyseat</h1>
          <Button color="primary" as={Link} to="/app">
            Explore
          </Button>
        </div>
      </nav>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Find your working<br />
              <span className="text-neutral-400">chill places</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10">
              Discover cafes, coworking spaces, and hidden gems perfect for remote work and study
            </p>
            <Button color="primary" as={Link} to="/app">
              Start exploring
              <ArrowRight size={16} />
            </Button>
          </section>
          <section className="mb-24">
            <h3 className="text-2xl font-semibold mb-8">Why Anyseat?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center">
                    <MapPin />
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className="text-lg font-semibold mb-2">Curated Locations</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Hand-picked spots with reliable WiFi, comfortable seating, and work-friendly atmosphere
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center">
                    <MapIcon />
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Explore Bangkok's best working spots on an easy-to-use map with detailed information
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center">
                    <Star />
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className="text-lg font-semibold mb-2">Community Reviews</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Real reviews from remote workers, students, and digital nomads like you
                  </p>
                </CardBody>
              </Card>
            </div>
          </section>
          <section className="mb-24">
            <h3 className="text-2xl font-semibold mb-8">Popular Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">☕</div>
                  <h4 className="font-medium mb-1">Cafes</h4>
                  <p className="text-xs text-neutral-500">Coffee & work</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">💼</div>
                  <h4 className="font-medium mb-1">Coworking</h4>
                  <p className="text-xs text-neutral-500">Shared spaces</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">📚</div>
                  <h4 className="font-medium mb-1">Libraries</h4>
                  <p className="text-xs text-neutral-500">Quiet study</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">🌿</div>
                  <h4 className="font-medium mb-1">Outdoor</h4>
                  <p className="text-xs text-neutral-500">Fresh air vibes</p>
                </CardBody>
              </Card>
            </div>
          </section>
          <section className="mb-24">
            <Card className="bg-neutral-900 rounded-3xl p-12 md:p-16 text-white">
              <CardHeader>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Ready to find your perfect workspace?
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-neutral-400 text-lg">
                  Join hundreds of remote workers discovering Bangkok's best spots every day
                </p>
              </CardBody>
              <CardFooter>
                <Button size="lg" as={Link} to="/app">
                  Get started
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-sm text-neutral-500">© 2025 Anyseat.</p>
        </div>
      </footer>
    </div>
  );
}