import GameStateProvider from "../GameStateProvider/GameStateProvider";
import { Items } from "../Items/Items";

export const Game = () => {
  return (
    <GameStateProvider>
      <Items />
    </GameStateProvider>
  );
};
