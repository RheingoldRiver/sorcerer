import { ReactNode, createContext, useState } from "react";
import { PlayerItems } from "./constants";
import items from "./items.json";

interface GameState {
  getQuantity: (item: keyof typeof items) => number;
  addItem: (item: keyof typeof items) => void;
  craftItem: (item: keyof typeof items) => boolean;
}

const DEFAULT_GAME_STATE: GameState = {
  getQuantity: () => 0,
  addItem: () => {},
  craftItem: () => false,
};

export const GameStateContext = createContext(DEFAULT_GAME_STATE);
export default function GameStateProvider({ children }: { children: ReactNode }) {
  const [currentItems, setCurrentItems] = useState<PlayerItems>({});
  const getQuantity = (item: keyof typeof items) => {
    return currentItems[item] ?? 0;
  };
  const addItem = (item: keyof typeof items) => {
    setCurrentItems({ ...currentItems, [item]: getQuantity(item) + 1 });
  };
  const craftItem = (item: keyof typeof items) => {
    let canCraft = true;
    items[item].ingredients.forEach(({ ingredient, quantity }) => {
      if (getQuantity(ingredient as keyof typeof items) < quantity) {
        canCraft = false;
      }
    });
    if (!canCraft) return false;
    const nextItems = { ...currentItems };
    nextItems[item] = getQuantity(item) + 1;
    items[item].ingredients.forEach(({ ingredient, quantity }) => {
      nextItems[ingredient] = getQuantity(ingredient as keyof typeof items) - quantity;
    });
    setCurrentItems(nextItems);
    return true;
  };
  return (
    <GameStateContext.Provider
      value={{
        getQuantity,
        addItem,
        craftItem,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
