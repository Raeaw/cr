import Link from "next/link";
import NavMenu from "@/components/molecules/NavMenu";

export default function Header() {
  return (
    <header className="w-full bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-white transition delay-75 duration-400 hover:text-purple-500 hover:animate-pulse"
          >
            CR-Fandom
          </Link>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
