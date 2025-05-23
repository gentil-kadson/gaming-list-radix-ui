import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { Checkbox } from "radix-ui";

interface CheckboxInputProps extends CheckboxProps {
  labelText: string;
}

export default function CheckboxInput({
  labelText,
  ...props
}: CheckboxInputProps) {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox.Root
        {...props}
        className="flex size-[25px] p-3 bg-white hover:bg-purple-950 appearance-none items-center justify-center rounded"
      >
        <Checkbox.Indicator className="text-purple-400">
          <CheckIcon size={15} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label>{labelText}</label>
    </div>
  );
}
