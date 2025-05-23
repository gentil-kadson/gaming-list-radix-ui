"use client";

import { PlusIcon } from "lucide-react";
import { Dialog } from "radix-ui";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  title: string;
  plot: string;
  platforms: {
    ps4: boolean;
    ps5: boolean;
    xboxOne: boolean;
    xboxSeries: boolean;
    pc: boolean;
    switch: boolean;
  };
}

const platformOptions = [
  { label: "PS4", key: "ps4" },
  { label: "PS5", key: "ps5" },
  { label: "Xbox One", key: "xboxOne" },
  { label: "Xbox Series X|S", key: "xboxSeries" },
  { label: "PC", key: "pc" },
  { label: "Nintendo Switch", key: "switch" },
] as const;

export default function AddGameModal() {
  const { register, handleSubmit, control } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const selectedPlatforms = Object.entries(data.platforms)
      .filter(([_, checked]) => checked)
      .map(([key]) => {
        switch (key) {
          case "ps4":
            return "PS4";
          case "ps5":
            return "PS5";
          case "xboxOne":
            return "Xbox One";
          case "xboxSeries":
            return "Xbox Series X|S";
          case "switch":
            return "Nintendo Switch";
          case "pc":
            return "PC";
          default:
            return key;
        }
      });

    const payload = {
      ...data,
      platforms: selectedPlatforms,
    };

    const response = await fetch("http://localhost:3001/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.log("aaaaaaaaa");
    }
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="bg-neutral-800 shadow-md mx-auto flex flex-col p-8 w-full max-w-[500px] rounded-md items-center">
        <div className="flex flex-col justify-center items-center">
          <Dialog.Title className="text-2xl font-bold text-purple-600">
            Add Game
          </Dialog.Title>
          <Dialog.Description>
            Register a game to your library.
          </Dialog.Description>
        </div>
        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="flex flex-col">
            <TextInput
              labelText="Title"
              placeholder="Dark Souls III"
              {...register("title")}
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <TextInput
              isTextarea
              labelText="Plot"
              placeholder="A long time ago, in a galaxy far, far away..."
              {...register("plot")}
            />
          </fieldset>
          <fieldset className="flex flex-wrap gap-y-3 gap-x-2">
            <legend className="text-purple-600 font-semibold">Platform</legend>
            {platformOptions.map((option) => (
              <Controller
                name={`platforms.${option.key}` as const}
                key={option.label}
                control={control}
                render={({ field }) => (
                  <CheckboxInput
                    labelText={option.label}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            ))}
          </fieldset>
          <button className="flex justify-center items-center gap-1 p-2 rounded bg-purple-600 hover:bg-purple-800 hover:cursor-pointer">
            <PlusIcon size={15} color="white" />
            Register Game
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
