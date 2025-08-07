import Image from "next/image";

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

export default async function Page({ params }: { params: { name: string } }) {
  const nameFromUrl = params.name.toLowerCase().replace(/-/g, " ");

  const res = await fetch("https://api.clashroyale.com/v1/cards", {
    headers: {
      Authorization: process.env.CLASH_API_KEY!,
    },
    cache: "no-store",
  });

  const data = await res.json();
  const cards = data.items;

  const matchedCard = cards.find((card: cr) => 
    card.name.toLowerCase() === nameFromUrl
  );

  console.log(matchedCard);
  
  if (!matchedCard) {
    return <div className="text-white">Card not found: {params.name}</div>;
  }

 return (
  <div className="flex h-104 justify-center items-center text-white p-4 space-x-6">
    <Image
      src={matchedCard.iconUrls?.medium}
      alt={matchedCard.name}
      width={180}
      height={100}
    />

    {matchedCard.iconUrls?.evolutionMedium && (
      <Image
        src={matchedCard.iconUrls.evolutionMedium}
        alt={`${matchedCard.name} Evolution`}
        width={180}
        height={100}
      />
    )}

    <div>
      <h1 className="text-7xl font-bold">{matchedCard.name}</h1>
      <p className="text-2xl">Elixir cost: {matchedCard.elixirCost}</p>
      <p className="text-2xl">Rarity: {matchedCard.rarity}</p>
      <p className="text-2xl">Upgrade needed to max: {matchedCard.maxLevel}x times</p>
    </div>
  </div>
);

}
