interface FooterSocialIconProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function FooterSocialIcon({ href, label, icon }: FooterSocialIconProps) {
  return (
    <li className="flex items-center gap-2 justify-center md:justify-start">
      <span className="w-5 h-5">{icon}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {label}
      </a>
    </li>
  );
}
