import * as React from "react";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-lg p-6"
      {...props}
    />
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="text-sm text-gray-700 dark:text-gray-200"
      {...props}
    />
  );
}
