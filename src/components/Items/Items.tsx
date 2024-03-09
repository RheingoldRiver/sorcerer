import items from "./../GameStateProvider/items.json";
import { InventorySlot } from "../InventorySlot/InventorySlot";
import { useContext, useState } from "react";
import { GameStateContext } from "../GameStateProvider/GameStateProvider";

export const Items = () => {
  const { getQuantity } = useContext(GameStateContext);
  const [curElement, setCurElement] = useState<string>("");

  const elements = Array.from(
    Object.values(items).reduce((acc, item) => {
      acc.add(item.element);
      return acc;
    }, new Set<string>())
  ).sort();

  return (
    <>
      <h2 className="text-lg">Inventory</h2>
      <div>
        <button
          className="rounded border-solid border border-gray-800 bg-gray-200 hover:bg-gray-400 px-1 ml-4"
          onClick={(e) => {
            e.preventDefault();
            setCurElement("");
          }}
        >
          Show all
        </button>
        {elements.map((elem) => (
          <button
            className="rounded border-solid border border-gray-800 bg-gray-200 hover:bg-gray-400 px-1 ml-4"
            onClick={(e) => {
              e.preventDefault();
              setCurElement(elem);
            }}
          >
            {elem}
          </button>
        ))}
      </div>
      <div>
        {Object.entries(items)
          .filter(([, info]) => curElement === "" || curElement === info.element)
          .map(([item, info]) => (
            <InventorySlot key={item} item={item as keyof typeof items} info={info} />
          ))}
      </div>
      <div>
        <h2 className="text-lg">Total weight</h2>
        {Object.entries(items).reduce((acc, [val, info]) => {
          return getQuantity(val as keyof typeof items) * info.weight + acc;
        }, 0)}
      </div>
    </>
  );
};
