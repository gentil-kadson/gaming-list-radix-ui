"use client";

import Game from "@/types/GameType";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, Tooltip } from "radix-ui";
import { useState } from "react";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const [open, setOpen] = useState<boolean>(false);

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
    <div className="grid grid-cols-2 gap-5 shadow-2xl p-5 border border-purple-600 rounded">
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
    </div>
  );
}
