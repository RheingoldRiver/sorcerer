import items from "./../GameStateProvider/items.json";
import { InventorySlot } from "../InventorySlot/InventorySlot";
import { useContext } from "react";
import { GameStateContext } from "../GameStateProvider/GameStateProvider";

export const Items = () => {
  const { getQuantity } = useContext(GameStateContext);

  return (
    <>
      <h2 className="text-l">Inventory</h2>
      <div>
        {Object.entries(items).map(([item, info]) => (
          <InventorySlot key={item} item={item as keyof typeof items} info={info} />
        ))}
      </div>
      <div>
        <h2 className="text-l">Total weight</h2>
        {Object.entries(items).reduce((acc, [val, info]) => {
          return getQuantity(val as keyof typeof items) * info.weight + acc;
        }, 0)}
      </div>
    </>
  );
};
