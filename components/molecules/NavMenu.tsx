import NavLink from "@/components/atoms/NavLink";

export default function NavMenu() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink href="/" label="Home" />
      <NavLink href="/List" label="Cards" />
      <NavLink href="/Aboutus" label="About Us" />
    </nav>
  );
}
