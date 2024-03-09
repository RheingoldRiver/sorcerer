import { useContext } from "react";
import { GameStateContext } from "../GameStateProvider/GameStateProvider";
import { Item } from "../Item/Item";
import items from "./../GameStateProvider/items.json";

export const InventorySlot = ({
  item,
  info,
}: {
  item: keyof typeof items;
  info: (typeof items)[keyof typeof items];
}) => {
  const { getQuantity, addItem, craftItem } = useContext(GameStateContext);
  return (
    <div>
      {getQuantity(item)}x <Item item={item} size="medium"></Item> ={" "}
      {info.ingredients.length > 0 ? (
        <>
          {" "}
          <ul className="inline-block separated-plus">
            {info.ingredients.map(({ ingredient, quantity }) => (
              <li key={`${item}-${ingredient}`} className="inline-block">
                {quantity}x <Item item={ingredient} size="small"></Item>
              </li>
            ))}
          </ul>
          <>
            <button
              className="rounded border-solid border border-gray-800 bg-gray-200 hover:bg-gray-400 px-1 ml-4"
              onClick={(e) => {
                e.preventDefault();
                craftItem(item);
              }}
            >
              Craft!
            </button>
          </>
        </>
      ) : (
        <>
          Base ingredient
          <button
            className="rounded border-solid border border-gray-800 bg-gray-200 hover:bg-gray-400 px-1 ml-4"
            onClick={(e) => {
              e.preventDefault();
              addItem(item);
            }}
          >
            Harvest!
          </button>
        </>
      )}
    </div>
  );
};
