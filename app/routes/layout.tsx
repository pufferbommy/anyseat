import { Button } from "@heroui/react";
import { Link, Outlet } from "react-router";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Layout() {
  return (
    <>
      <nav className="sticky top-0 left-0 px-9 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-neutral-900">
        <div className="py-3 flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tight">
            Anyseat
          </Link>
          <div className="flex gap-3">
            <Button as={Link} to="/blog" variant="light">
              บทความ
            </Button>
            <Button color="primary" as={Link} to="/places">
              สำรวจ
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="border-t border-neutral-200 px-9">
        <div className="py-3 flex items-center justify-between">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Anyseat.</p>
          <Link to="/blog" className="text-sm text-neutral-600 hover:text-neutral-900">
            บทความ
          </Link>
        </div>
      </footer>
    </>
  )
}