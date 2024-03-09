import { ReactNode, createContext, useState } from "react";
import { PlayerItems } from "./constants";

interface GameState {
  currentItems: PlayerItems;
  addItem: (item: string) => void;
}

const DEFAULT_GAME_STATE: GameState = {
  currentItems: {},
  addItem: () => {},
};

export const GameStateContext = createContext(DEFAULT_GAME_STATE);
export default function GameStateProvider({ children }: { children: ReactNode }) {
  const [currentItems, setCurrentItems] = useState<PlayerItems>({});
  const addItem = (item: string) => {
    setCurrentItems({ ...currentItems, item: (currentItems[item] ?? 0) + 1 });
  };
  return (
    <GameStateContext.Provider
      value={{
        currentItems,
        addItem,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
