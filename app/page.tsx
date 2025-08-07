import Link from "next/link";
import AutoSlider from "../components/organisms/AutoSlider";
import AutoSliderL from "@/components/organisms/AutoSliderL";
import AutoSliderR from "@/components/organisms/AutoSliderR";
import ArrowIcon from "@/components/icon/ArrowIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-10 space-y-20">
      <AutoSlider />

      <div className="text-center space-y-10">
        <h1 className="text-5xl md:text-7xl font-bold transition hover:text-purple-500 hover:animate-pulse">
          CR-Fandom
        </h1>
        <p className="max-w-5xl mx-auto text-lg md:text-xl lg:text-2xl font-bold text-justify leading-relaxed">
          Welcome to CR-Fandom, an interactive and informative platform specially designed for
          dedicated fans of the game Clash Royale. Here, you&apos;ll find a wide range of essential
          information about the Clash Royale universe — from a complete card database and gameplay
          strategies to the latest news and updates from Supercell. With a modern look and responsive
          design, we aim to deliver the best experience for all players, whether you&apos;re just
          beginning your journey in the arena or you&apos;re a seasoned warrior climbing the ladder.
          CR-Fandom is not just a place to view information, but a community hub for learning,
          sharing, and growing together in the spirit of fair competition.
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

      <div className="flex flex-col md:flex-row items-center gap-10">
        <AutoSliderL />
        <div className="max-w-3xl text-justify text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
          <p>
            One of the main features of CR-Fandom is the Clash Royale Card List page,
            dynamically developed with direct integration from the official Clash Royale API.
            On this page, you can explore every card available in the game including troops,
            spells, and buildings — complete with visuals, card names, and their maximum level.
            The data is continuously updated to reflect in-game changes such as balance updates
            or the release of new cards. We&apos;re also developing a smart filtering and search
            system that will allow you to sort cards by rarity, elixir cost, attack type, or role
            in a deck — all designed to help you easily build a deck that suits your playstyle.
          </p>
        </div>
      </div>

      <div className="bg-white py-10 text-black text-center">
        <div className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-bold transition hover:text-purple-500 hover:animate-pulse">
          <ArrowIcon direction="left" />
          <Link href="/List">LIST CARD</Link>
          <ArrowIcon direction="right" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="max-w-3xl text-justify text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
          <p>
            Beyond just information, CR-Fandom aims to foster a thriving community of Clash Royale
            enthusiasts. We are building interactive features such as user-submitted strategies,
            card reviews, and tier lists — all designed to encourage engagement and knowledge
            sharing among players. Whether you&apos;re looking to improve your deck, stay updated
            with the latest meta, or simply connect with fellow fans, CR-Fandom is your go-to hub.
            As the platform grows, we plan to introduce forums, comment sections, and account-based
            customization to make your experience even more personal and meaningful.
          </p>
        </div>
        <AutoSliderR />
      </div>
    </div>
  );
}
