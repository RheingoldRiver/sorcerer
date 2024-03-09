import items from "./../GameStateProvider/items.json";
import { InventorySlot } from "../InventorySlot/InventorySlot";

export const Items = () => {
  return (
    <div>
      {Object.entries(items).map(([item, info]) => (
        <InventorySlot key={item} item={item as keyof typeof items} info={info} />
      ))}
    </div>
  );
};
