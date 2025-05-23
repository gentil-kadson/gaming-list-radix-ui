import Game from "@/types/GameType";
import { Tooltip } from "radix-ui";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="grid grid-cols-2 gap-5 shadow-2xl p-5">
      <div className="border-2 border-red-500">
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
        <ul>
          {game.platforms.map((platform, idx) => {
            return <li key={idx}>{platform}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
