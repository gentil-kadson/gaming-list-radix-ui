"use client";

import GameCard from "@/components/GameCard";
import Game from "@/types/GameType";
import AddGameModal from "@/components/AddGameModal";
import { CirclePlus, Gamepad } from "lucide-react";
import { Dialog } from "radix-ui";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((response) => response.json())
      .then((games) => setGames(games));
  }, []);

  return (
    <>
      <section className="flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-5">
          <Gamepad size={64} />
          <span>
            <span className="text-purple-600">Games</span> Catalog
          </span>
        </h1>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="bg-purple-600 w-36 p-3 rounded flex items-center justify-around">
              <CirclePlus />
              Add Game
            </button>
          </Dialog.Trigger>
          <AddGameModal
            handleAddGame={setGames}
            handleCloseDialog={() => setOpen(false)}
          />
        </Dialog.Root>
      </section>
      <div className="max-w-7xl m-auto flex flex-col gap-7 mt-9">
        {games.map((game) => (
          <GameCard handleChangeGames={setGames} key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
