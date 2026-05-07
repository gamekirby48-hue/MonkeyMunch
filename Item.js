function editCosmetic(index) {
  const cosmetics = getCosmetics();
  const c = cosmetics[index];

  const name = prompt("Item Name", c.itemName);
  const id = prompt("Item ID", c.itemId);
  const type = prompt("Type", c.cosmeticType);
  const cost = prompt("Cost", c.cost);
  const icon = prompt("Icon URL", c.itemIcon);
  const desc = prompt("Description", c.description || "");

  cosmetics[index] = {
    itemName: name,
    itemId: id,
    cosmeticType: type,
    cost: cost,
    itemIcon: icon,
    description: desc
  };

  saveCosmetics(cosmetics);
  loadCosmetics();
}
