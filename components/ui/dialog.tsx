import React from "react";

export function Dialog({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function DialogTrigger({ children, ...props }: any) {
  return <button {...props}>{children}</button>;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4 bg-black border border-gray-700 rounded">{children}</div>;
}
