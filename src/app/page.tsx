import { Dialog } from "radix-ui";
import AddGameModal from "@/components/AddGameModal";

export default function Home() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Clica em mim</button>
      </Dialog.Trigger>
      <AddGameModal />
    </Dialog.Root>
  );
}
