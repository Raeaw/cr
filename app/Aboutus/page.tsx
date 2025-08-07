import Image from "next/image";
import Link from "next/link";
import AutoSliderEnd from "@/components/organisms/AutoSliderEnd";
import ArrowIcon from "@/components/icon/ArrowIcon";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-10 space-y-20">
      <AutoSliderEnd />

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="max-w-xl">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-justify leading-relaxed">
            CR-Fandom is a digital community created by devoted Clash Royale fans,
            with the goal of providing an interactive, informative, and enjoyable
            space for everyone who loves strategy, competition, and the thrill of
            Supercell’s iconic game.
          </p>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/source/blue-king.png"
            fill
            alt="gambar sigma"
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-justify">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
          We believe that every player — whether you&apos;re just starting out or a
          seasoned veteran — deserves quick and easy access to accurate information.
          That’s why this platform offers a wide range of features, including a
          complete card database, latest balance updates, and official news directly
          pulled from the Clash Royale API. All of these are designed to help you
          better understand the game and build the perfect deck that suits your
          playstyle.
        </p>
      </div>

      <div className="bg-white py-10 text-black text-center">
        <div className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-bold transition hover:text-purple-500 hover:animate-pulse">
          <ArrowIcon direction="left" />
          <Link href="https://supercell.com/en/games/clashroyale/">
            CHECK THE OFFICIAL SITE HERE!
          </Link>
          <ArrowIcon direction="right" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        <div className="max-w-xl">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-justify leading-relaxed">
            Behind CR-Fandom is a small team of active Clash Royale players, web
            developers, and content contributors. We’re constantly working to maintain
            the quality of our content and improve the platform with new, relevant
            features. Support and feedback from the community mean the world to us —
            because CR-Fandom isn’t just an information site, it’s a hub where Royale
            Warriors from around the globe can connect, learn, and grow together.
          </p>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/source/apalah.png"
            fill
            alt="gambar sigma"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
