import FooterBrand from "../molecules/FooterBrand";
import FooterSocials from "../molecules/FooterSocials";
import FooterNav from "../molecules/FooterNav";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <FooterBrand />
        <FooterSocials />
        <FooterNav />
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} CR-Fandom. Not affiliated with Supercell. All rights belong to their respective owners.
      </div>
    </footer>
  );
}
