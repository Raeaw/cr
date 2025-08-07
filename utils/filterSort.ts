const rarityOrder = ["common", "rare", "epic", "legendary", "champion"];
const rarityOrderDesc = ["champion", "legendary", "epic", "rare", "common"];

export function filterAndSortCards(cards: any[], filters: {
  name: string;
  rarity: string;
  sort: "asc" | "desc" | "rarity" | "rarity-reverse";
}) {
  let result = [...cards];

  if (filters.name) {
    result = result.filter(card =>
      card.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }

  if (filters.rarity) {
    result = result.filter(card =>
      card.rarity.toLowerCase() === filters.rarity.toLowerCase()
    );
  }

  // HANYA SATU BLOK SORT
  if (filters.sort === "rarity") {
    result.sort((a, b) =>
      rarityOrder.indexOf(a.rarity.toLowerCase()) - rarityOrder.indexOf(b.rarity.toLowerCase())
    );
  } else if (filters.sort === "rarity-reverse") {
    result.sort((a, b) =>
      rarityOrderDesc.indexOf(a.rarity.toLowerCase()) - rarityOrderDesc.indexOf(b.rarity.toLowerCase())
    );
  } else if (filters.sort === "desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    result.sort((a, b) => a.name.localeCompare(b.name)); // default asc
  }

  return result;
}
