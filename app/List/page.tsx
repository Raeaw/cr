import Image from "next/image";
import Link from "next/link";

interface cr {
  id: number;
  name: string;
  maxLevel: number;
  rarity: string;
  iconUrls: {
    medium: string;
    large: string;
  };
}

async function getData() {
  const res = await fetch("https://api.clashroyale.com/v1/cards", {
    headers: {
      Authorization: process.env.CLASH_API_KEY!
    }
  });

  const cards = await res.json();
  console.log(cards);

  return cards.items;
}

function getBorderColor(rarity: string) {
  switch (rarity.toLowerCase()) {
    case "common":
      return "border-gray-500";
    case "rare":
      return "border-orange-500";
    case "epic":
      return "border-purple-700";
    case "legendary":
      return "border-yellow-400";
    case "champion":
      return "border-amber-100";
    default:
      return "border-gray-900";
  }
}

export default async function List() {
  const listCards = await getData()
  return (
    <div className="p-6 font-sans min-h-screen bg-black">
      <h1 className="text-3xl font-bold mb-6 text-center">List Clash Royale Cards</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {listCards.map((card: cr) => (
        <div 
          key={card.id}
          className={`bg-gray-900 rounded-xl shadow-2xl border-3 p-4 text-center transition delay-45 duration-200 animation-pulse hover:scale-105 hover:-translate-y-2 hover:bg-gray-600 hover:border-purple-500 hover:border-3 ${getBorderColor(card.rarity)}`}
        >
          <Image
            src={card.iconUrls.medium || card.iconUrls.large}
            alt={card.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-20 w-auto mx-auto mb-2"
          />
          <p className="text-lg font-semibold"><Link href={`/List/${card.name}`}>{card.name}</Link></p>
        </div>
      ))}
      </div>
    </div>
  );
}
