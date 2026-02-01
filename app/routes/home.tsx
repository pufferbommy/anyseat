import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { ArrowRight, MapIcon, MapPin, Star } from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Anyseat - ค้นหาสถานที่ทำงานสบายๆ ในกรุงเทพฯ" },
    { name: "description", content: "ค้นหาสถานที่ทำงานที่ดีที่สุดในกรุงเทพฯ ร้านกาแฟ คาเฟ่ สถานที่ทำงานร่วม ห้องสมุด และสถานที่เงียบสงบเหมาะสำหรับการทำงานจากระยะไกลพร้อม WiFi ดีและบรรยากาศดี" },
    { name: "keywords", content: "คาวอร์กกิ้ง กรุงเทพฯ, ทำงานที่กรุงเทพฯ, ร้านกาแฟทำงาน, ทำงานจากระยะไกล ประเทศไทย, ดิจิทัลโนมาด กรุงเทพฯ, สถานที่เรียน กรุงเทพฯ" },
    { property: "og:title", content: "Anyseat - ค้นหาสถานที่ทำงานสบายๆ ในกรุงเทพฯ" },
    { property: "og:description", content: "ค้นหาสถานที่ทำงานที่ดีที่สุดในกรุงเทพฯ ตั้งแต่ร้านกาแฟอบอุ่นไปจนถึงสถานที่ทำงานร่วมทันสมัย" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Anyseat - ค้นหาสถานที่ทำงานสบายๆ ในกรุงเทพฯ" },
    { name: "twitter:description", content: "ค้นหาสถานที่ทำงานที่ดีที่สุดในกรุงเทพฯ ตั้งแต่ร้านกาแฟอบอุ่นไปจนถึงสถานที่ทำงานร่วมทันสมัย" },
  ];
}

export default function Home() {
  return (
    <div className="bg-neutral-50">
      <nav className="fixed top-0 left-0 px-3 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="max-w-6xl py-3 mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Anyseat</h1>
          <div className="flex gap-2">
            <Button as={Link} to="/blog" variant="light">
              บทความ
            </Button>
            <Button color="primary" as={Link} to="/app">
              สำรวจ
            </Button>
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-24">
          <section className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              ค้นหาสถานที่<br />
              <span className="text-neutral-400">ทำงานสบายๆ</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10">
              ค้นหาร้านกาแฟ สถานที่ทำงานร่วม และสถานที่ซ่อนตัวที่เหมาะสำหรับการทำงานจากระยะไกลและการเรียน
            </p>
            <Button color="primary" as={Link} to="/app" size="lg">
              เริ่มสำรวจ
              <ArrowRight size={16} />
            </Button>
          </section>
          <section>
            <h3 className="text-2xl font-semibold mb-8">ทำไมต้อง Anyseat?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center">
                    <MapPin />
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className="text-lg font-semibold mb-2">สถานที่ที่คัดสรรแล้ว</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    สถานที่คัดสรรมาอย่างดี พร้อม WiFi เชื่อถือได้ ที่นั่งสะดวกสบาย และบรรยากาศที่เหมาะสำหรับการทำงาน
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
                  <h4 className="text-lg font-semibold mb-2">แผนที่โต้ตอบ</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    สำรวจสถานที่ทำงานที่ดีที่สุดในกรุงเทพฯ บนแผนที่ที่ใช้งานง่ายพร้อมข้อมูลรายละเอียด
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
                  <h4 className="text-lg font-semibold mb-2">รีวิวจากชุมชน</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    รีวิวจริงจากผู้ทำงานจากระยะไกล นักเรียน และดิจิทัลโนมาดเหมือนคุณ
                  </p>
                </CardBody>
              </Card>
            </div>
          </section>
          <section>
            <h3 className="text-2xl font-semibold mb-8">หมวดหมู่ยอดนิยม</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">☕</div>
                  <h4 className="font-medium mb-1">ร้านกาแฟ</h4>
                  <p className="text-xs text-neutral-500">กาแฟและการทำงาน</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">💼</div>
                  <h4 className="font-medium mb-1">คาวอร์กกิ้ง</h4>
                  <p className="text-xs text-neutral-500">พื้นที่ร่วมกัน</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">📚</div>
                  <h4 className="font-medium mb-1">ห้องสมุด</h4>
                  <p className="text-xs text-neutral-500">เรียนเงียบๆ</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="text-3xl mb-4">🌿</div>
                  <h4 className="font-medium mb-1">กลางแจ้ง</h4>
                  <p className="text-xs text-neutral-500">บรรยากาศอากาศบริสุทธิ์</p>
                </CardBody>
              </Card>
            </div>
          </section>
          <section>
            <Card className="bg-neutral-900 rounded-3xl p-12 md:p-16 text-white">
              <CardHeader>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  พร้อมที่จะค้นหาสถานที่ทำงานที่สมบูรณ์แบบของคุณหรือยัง?
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-neutral-400 text-lg">
                  ร่วมเป็นส่วนหนึ่งของผู้ทำงานจากระยะไกลหลายร้อยคนที่ค้นพบสถานที่ดีที่สุดในกรุงเทพฯ ทุกวัน
                </p>
              </CardBody>
              <CardFooter>
                <Button size="lg" as={Link} to="/app">
                  เริ่มต้นเลย
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
      <footer className="border-t border-neutral-200 px-3">
        <div className="max-w-6xl mx-auto py-3 flex items-center justify-between">
          <p className="text-sm text-neutral-500">© 2025 Anyseat.</p>
          <Link to="/blog" className="text-sm text-neutral-600 hover:text-neutral-900">
            บทความ
          </Link>
        </div>
      </footer>
    </div>
  );
}