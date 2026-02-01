import { Button } from "@heroui/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router";

const articles = {
  "1": {
    id: "1",
    title: "10 คาเฟ่เงียบสงบที่เหมาะสำหรับการทำงานในกรุงเทพฯ",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## ทำไมต้องเลือกร้านกาแฟที่เงียบสงบ?

การทำงานในสถานที่ที่เงียบสงบมีหลายข้อดี:
- ช่วยเพิ่มความสามารถในการโฟกัส
- ลดสิ่งรบกวนที่มาจากเสียงรบกวน
- อากาศถ่ายเทดีกว่าห้องปิด
- สามารถเปลี่ยนบรรยากาศเมื่อเหนื่อยล้าได้ง่าย

## ร้านกาแฟที่เหมาะสำหรับการทำงาน

เลือกเฉพาะร้านที่มี WiFi เสถียรและที่นั่งสะดวกสบาย บางร้านอาจจะมีปลั๊กไฟไม่เพียงพอ ควรเช็คล่วงหน้า

การทำงานในร้านกาแฟต้องคำนึงถึงคนอื่นด้วย เช่น ไม่ควรพูดเสียงดัง หรือใช้ที่นั่งเป็นเวลานานโดยไม่สั่งเครื่องดื่ม`,
    date: "2025-01-15",
    readTime: "5 นาที",
    category: "คาเฟ่",
    author: "Anyseat Team"
  }
};

export function meta({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles];
  return [
    { title: article ? `${article.title} | Anyseat` : "ไม่พบบทความ | Anyseat" },
    { name: "description", content: "ค้นหาบทความและคู่มือการทำงานจากระยะไกล คาวอร์กกิ้ง และสถานที่เรียนที่ดีที่สุดในกรุงเทพฯ" },
  ];
}

export default function BlogPost() {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ไม่พบบทความ</h1>
          <Button as={Link} to="/blog">
            <ArrowLeft size={16} />
            กลับไปหน้าบทความ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      <nav className="fixed top-0 left-0 px-3 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="max-w-6xl py-3 mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tight">Anyseat</Link>
          <Button color="primary" as={Link} to="/app">
            สำรวจ
          </Button>
        </div>
      </nav>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Button as={Link} to="/blog" variant="light" className="mb-6">
            <ArrowLeft size={16} />
            กลับไปหน้าบทความ
          </Button>
          
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime}
                </div>
                <span className="bg-neutral-100 px-3 py-1 rounded-full text-neutral-600">
                  {article.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {article.title}
              </h1>
              <p className="text-neutral-600">โดย {article.author}</p>
            </header>
            
            <div className="prose prose-neutral max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={`heading-${index}`} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={`list-${index}`} className="list-disc pl-6 mb-4 space-y-1">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={`list-item-${index}-${i}`}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={`paragraph-${index}`} className="text-neutral-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>
          
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-semibold mb-4">แบ่งปันบทความ</h3>
            <div className="flex gap-3">
              <Button variant="light" size="sm">Facebook</Button>
              <Button variant="light" size="sm">Twitter</Button>
              <Button variant="light" size="sm">LinkedIn</Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-neutral-200 px-3">
        <div className="max-w-6xl mx-auto py-3">
          <p className="text-sm text-neutral-500">© 2025 Anyseat.</p>
        </div>
      </footer>
    </div>
  );
}
