import { Item } from "../Item/Item";
import items from "./../GameStateProvider/items.json";

export const Items = () => {
  return (
    <div>
      {Object.entries(items).map(([item, info]) => (
        <div key={item}>
          <Item item={item} size="medium"></Item> ={" "}
          <ul className="inline-block separated-plus">
            {info.ingredients.length > 0
              ? info.ingredients.map(({ item: ing, quantity }) => (
                  <li key={`${item}-${ing}`} className="inline-block">
                    {quantity}x <Item item={ing} size="small"></Item>
                  </li>
                ))
              : "Base ingredient"}
          </ul>
        </div>
      ))}
    </div>
  );
};
