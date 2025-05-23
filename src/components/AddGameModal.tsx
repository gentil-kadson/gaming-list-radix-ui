import { CheckIcon } from "lucide-react";
import { Checkbox, Dialog } from "radix-ui";

export default function AddGameModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="bg-neutral-800 shadow-md mx-auto flex flex-col p-8 w-full max-w-[500px] rounded-md items-center">
        <div className="flex flex-col justify-center items-center">
          <Dialog.Title className="text-2xl font-bold">Add Game</Dialog.Title>
          <Dialog.Description>
            Register a game to your library.
          </Dialog.Description>
        </div>
        <form className="mt-8">
          <fieldset>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              placeholder="Enter your title here..."
            />
          </fieldset>
          <fieldset>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea id="synopsis"></textarea>
          </fieldset>
          <fieldset className="flex flex-wrap gap-y-3 gap-x-2">
            <div className="flex gap-2 items-center">
              <Checkbox.Root className="flex size-[25px] p-3 bg-white hover:bg-purple-950 appearance-none items-center justify-center rounded">
                <Checkbox.Indicator className="text-purple-400">
                  <CheckIcon size={15} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="PS4">PS4</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox.Root className="flex size-[25px] p-3 bg-white hover:bg-purple-950 appearance-none items-center justify-center rounded">
                <Checkbox.Indicator className="text-purple-400">
                  <CheckIcon size={15} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="Xbox One">Xbox One</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox.Root className="flex size-[25px] p-3 bg-white hover:bg-purple-950 appearance-none items-center justify-center rounded">
                <Checkbox.Indicator className="text-purple-400">
                  <CheckIcon size={15} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="Xbox Series S|X">Xbox Series S|X</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox.Root className="flex size-[25px] p-3 bg-white hover:bg-purple-950 appearance-none items-center justify-center rounded">
                <Checkbox.Indicator className="text-purple-400">
                  <CheckIcon size={15} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="PC">PC</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox.Root className="flex size-[25px] p-3 bg-white hover:bg-purple-950 appearance-none items-center justify-center rounded">
                <Checkbox.Indicator className="text-purple-400">
                  <CheckIcon size={15} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="PS5">PS5</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox.Root className="flex size-[25px] p-3 bg-white hover:bg-purple-950 appearance-none items-center justify-center rounded">
                <Checkbox.Indicator className="text-purple-400">
                  <CheckIcon size={15} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="Nintendo Switch">Nintendo Switch</label>
            </div>
          </fieldset>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
