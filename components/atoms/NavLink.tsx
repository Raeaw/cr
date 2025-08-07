import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-white transition delay-75 duration-400 hover:text-purple-500 hover:animate-pulse"
    >
      {label}
    </Link>
  );
}
