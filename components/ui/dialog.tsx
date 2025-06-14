import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";

export function Dialog(props: React.ComponentProps<typeof RadixDialog.Root>) {
  return <RadixDialog.Root {...props} />;
}

export function DialogTrigger(
  props: React.ComponentProps<typeof RadixDialog.Trigger>
) {
  return <RadixDialog.Trigger {...props} />;
}

export function DialogContent(
  props: React.ComponentProps<typeof RadixDialog.Content> & { className?: string }
) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
      <RadixDialog.Content
        {...props}
        className={`fixed top-1/2 left-1/2 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 rounded-2xl bg-[#0E0E0E] text-white -translate-x-1/2 -translate-y-1/2 focus:outline-none ${
          props.className ?? ""
        }`}
      />
    </RadixDialog.Portal>
  );
}
