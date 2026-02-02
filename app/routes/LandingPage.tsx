import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { ArrowRight, MapPin, Map, Star, Search, FileText, Handshake, Quote } from "lucide-react"; // Import Lucide icons
import { Link } from "react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Placeholder for a section component
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 px-3 min-h-[80vh] flex items-center justify-center ${className}`}>
    <div className="max-w-6xl mx-auto w-full">
      {children}
    </div>
  </section>
);

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const features = [
    {
      id: 1,
      title: "Find Your Spot",
      description: "Effortlessly discover cafes, co-working spaces, and hidden gems tailored to your work style.",
      icon: <Search size={64} className="text-blue-500" />
    },
    {
      id: 2,
      title: "Smart Filters",
      description: "Filter by WiFi speed, noise level, power outlets, and more to find your ideal work environment.",
      icon: <Map size={64} className="text-green-500" />
    },
    {
      id: 3,
      title: "Community Insights",
      description: "Read real-time reviews and tips from a vibrant community of remote workers and students.",
      icon: <Star size={64} className="text-yellow-500" />
    },
    {
      id: 4,
      title: "Interactive Maps",
      description: "Navigate with ease using our interactive maps to locate and get directions to your chosen workspace.",
      icon: <MapPin size={64} className="text-red-500" />
    }
  ];

  const numFeatures = features.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(numFeatures - 1) * 100}%`]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const smoothX = useSpring(x, physics);


  return (
    <section ref={containerRef} className="bg-gray-100 h-[300vh]"> {/* min-h to allow vertical scroll */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x: smoothX }} className="flex">
          {features.map((feature, i) => {
            const inputRange = [
              i / numFeatures,
              (i + 0.5) / numFeatures,
              (i + 1) / numFeatures,
            ];

            const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 0]);
            const scale = useTransform(scrollYProgress, inputRange, [0.8, 1, 0.8]);
            const yOffset = useTransform(scrollYProgress, inputRange, ["50px", "0px", "50px"]);

            return (
              <motion.div
                key={feature.id}
                className="flex-shrink-0 w-screen h-screen flex items-center justify-center p-8"
                style={{ opacity, scale, y: yOffset }}
              >
                <Card className="max-w-md w-full p-8 text-center bg-white shadow-lg rounded-xl">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div> {/* Render icon component */}
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-lg text-neutral-700">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};


export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <motion.div ref={heroRef} style={{ opacity }} className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden">
        <motion.div style={{ y }} className="relative z-10 p-5">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Find Your Perfect <br />
            <span className="text-blue-200">Workspace</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Discover the best remote-work friendly cafes, co-working spaces, and quiet spots in Bangkok.
          </p>
          <Button color="primary" as={Link} to="/places" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explore Places
            <ArrowRight size={16} />
          </Button>
        </motion.div>
        {/* Background elements for visual interest */}
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
           <motion.div
            className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.9, 0.6],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
          {/* Adjusted these animations for smoother and less distracting movement */}
          <motion.circle
            cx="20%" cy="80%" r="20%" stroke="currentColor" strokeWidth="0.5"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], x: ["0%", "10%", "0%"] }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.rect
            x="70%" y="10%" width="15%" height="15%" stroke="currentColor" strokeWidth="0.5"
            animate={{ rotate: [0, 90, 0], scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Problem/Solution Section */}
      <Section className="bg-gray-50 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tired of endless searching for the ideal spot?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Anyseat connects you with the perfect place to focus, create, and thrive, whether it's a vibrant cafe or a quiet co-working space.
        </motion.p>
      </Section>

      {/* Existing Features Section */}
      <Section className="bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Why Choose Anyseat?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Curated Places",
              description: "Handpicked locations with reliable WiFi, comfy seating, and work-friendly vibes.",
              icon: <MapPin size={48} className="text-blue-500" />
            },
            {
              title: "Interactive Map",
              description: "Explore the best spots on an easy-to-use map with detailed information and filters.",
              icon: <Map size={48} className="text-green-500" />
            },
            {
              title: "Community Reviews",
              description: "Real reviews from remote workers, students, and digital nomads like you.",
              icon: <Star size={48} className="text-yellow-500" />
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* New Horizontal Scroll Section */}
      <HorizontalScrollSection />

      {/* How It Works Section */}
      <Section className="bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "1",
              title: "Search & Filter",
              description: "Easily search for places by location, amenities like WiFi speed, power outlets, and noise level.",
              icon: <Search size={48} className="text-blue-500" />
            },
            {
              step: "2",
              title: "Explore Details",
              description: "View detailed profiles, photos, and genuine reviews from our community.",
              icon: <FileText size={48} className="text-green-500" />
            },
            {
              step: "3",
              title: "Work & Connect",
              description: "Find your perfect spot and connect with a community of like-minded individuals.",
              icon: <Handshake size={48} className="text-yellow-500" />
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.step}. {item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonial/Social Proof Section (New) */}
      <Section className="bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              quote: "Anyseat transformed my remote work experience. Finding quiet cafes with great Wi-Fi is now effortless!",
              author: "Pornchai S.",
              role: "Digital Nomad"
            },
            {
              quote: "The interactive map and community reviews are incredibly helpful. I've discovered so many hidden gems.",
              author: "Naree P.",
              role: "Student"
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="p-8 bg-gray-50 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <Quote size={36} className="text-blue-400 absolute top-4 left-4 opacity-30" />
              <p className="relative text-lg italic text-neutral-700 mb-4">"{testimonial.quote}"</p>
              <p className="relative font-semibold text-gray-900">- {testimonial.author}</p>
              <p className="relative text-sm text-neutral-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final Call to Action Section */}
      <Section className="bg-blue-600 text-white text-center min-h-[50vh]">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Your ideal workspace is just a click away.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Button color="secondary" as={Link} to="/places" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Exploring Now
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </Section>
    </main>
  );
}