"use client";

import Game from "@/types/GameType";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Collapsible, Tooltip, AlertDialog } from "radix-ui";
import { useState } from "react";

interface GameCardProps {
  game: Game;
  handleChangeGames: (games: Game[]) => void;
}

export default function GameCard({ game, handleChangeGames }: GameCardProps) {
  const [open, setOpen] = useState<boolean>(false);

  async function handleGameDeletion(gameId: number) {
    let response = await fetch(`http://localhost:3001/games/${gameId}`, {
      method: "DELETE",
    });
    response = await fetch("http://localhost:3001/games");
    const games: Game[] = await response.json();
    handleChangeGames(games);
  }

  function renderPlatformsListItems(platforms: string[]) {
    return platforms.map((platform, idx) => <li key={idx}>{platform}</li>);
  }

  function renderGamePlatforms() {
    if (game.platforms.length > 3) {
      return (
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          {renderPlatformsListItems(game.platforms.slice(0, 3))}
          <Collapsible.Content>
            {renderPlatformsListItems(game.platforms.slice(3))}
          </Collapsible.Content>
          <Collapsible.Trigger asChild>
            <button>{open ? <ChevronUp /> : <ChevronDown />}</button>
          </Collapsible.Trigger>
        </Collapsible.Root>
      );
    }

    return renderPlatformsListItems(game.platforms);
  }

  return (
    <div className="grid grid-cols-3 gap-5 shadow-2xl p-5 border border-purple-600 rounded">
      <div>
        <h2 className="text-xl font-bold">{game.title}</h2>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <p className="line-clamp-2">{game.plot}</p>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="break-words max-w-[50ch] bg-zinc-800 p-4 rounded"
              >
                {game.plot}
                <Tooltip.Arrow className="fill-white" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <div>
        <h2 className="text-xl font-bold">Available On:</h2>
        <ul>{renderGamePlatforms()}</ul>
      </div>
      <div className="justify-items-end">
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Trash2 color="#dc2626" cursor="pointer" />
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay />
            <AlertDialog.Content className="w-96 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-zinc-800 flex flex-col items-center justify-center">
              <AlertDialog.Title className="font-bold">
                Are you absolutely sure?
              </AlertDialog.Title>
              <AlertDialog.Description className="mt-5">
                This cannot be undone.
              </AlertDialog.Description>
              <div className="flex justify-center gap-4 mt-10">
                <AlertDialog.Cancel asChild>
                  <button className="bg-red-500 p-3 rounded">Cancel</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button
                    onClick={() => handleGameDeletion(game.id)}
                    className="bg-purple-600 p-3 rounded"
                  >
                    Yes, delete game
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </div>
  );
}
