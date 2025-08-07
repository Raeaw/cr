import FooterLink from "../atoms/FooterLink";

export default function FooterNav() {
  return (
    <div className="ml-20">
      <h3 className="text-xl font-semibold mb-3">Navigation</h3>
      <ul className="text-sm space-y-2 text-gray-300">
        <li><FooterLink href="/Aboutus">About Us</FooterLink></li>
        <li><FooterLink href="#top">Back to Top</FooterLink></li>
      </ul>
    </div>
  );
}
