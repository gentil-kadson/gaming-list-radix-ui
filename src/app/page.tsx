import GameCard from "@/components/GameCard";
import Game from "@/types/GameType";

export default async function Home() {
  const response = await fetch("http://localhost:3001/games");
  const games: Game[] = await response.json();

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Games Catalog</h1>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}
