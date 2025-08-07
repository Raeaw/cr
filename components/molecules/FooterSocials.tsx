import { Twitter, Youtube, Instagram } from "lucide-react";
import FooterSocialIcon from "../atoms/FooterSocialIcon";

export default function FooterSocials() {
  return (
    <div className="ml-20">
      <h3 className="text-xl font-semibold mb-3">Official Clash Royale</h3>
      <ul className="space-y-3 text-sm text-blue-300">
        <FooterSocialIcon
          href="https://twitter.com/ClashRoyale"
          label="Twitter"
          icon={<Twitter className="w-5 h-5" />}
        />
        <FooterSocialIcon
          href="https://www.youtube.com/clashroyale"
          label="YouTube"
          icon={<Youtube className="w-5 h-5" />}
        />
        <FooterSocialIcon
          href="https://www.instagram.com/clashroyale/"
          label="Instagram"
          icon={<Instagram className="w-5 h-5" />}
        />
        {/* <FooterSocialIcon
          href="https://www.reddit.com/r/ClashRoyale/"
          label="Reddit"
          icon={<Reddit className="w-5 h-5" />}
        /> */}
      </ul>
    </div>
  );
}
