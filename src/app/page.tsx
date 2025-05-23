import GameCard from "@/components/GameCard";
import Game from "@/types/GameType";
import { CirclePlus, Gamepad } from "lucide-react";

export default async function Home() {
  const response = await fetch("http://localhost:3001/games");
  const games: Game[] = await response.json();

  return (
    <>
      <section className="flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-5">
          <Gamepad size={64} />
          <span>
            <span className="text-purple-600">Games</span> Catalog
          </span>
        </h1>
        <button className="bg-purple-600 w-36 p-3 rounded flex items-center justify-around">
          <CirclePlus />
          Add Game
        </button>
      </section>
      <div className="max-w-7xl m-auto flex flex-col gap-7 mt-9">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
