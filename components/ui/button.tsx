import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  className = "",
  ...props
}) => {
  const baseClasses = "transition-all px-4 py-2 rounded-md font-medium";

  const variantClasses =
    variant === "outline"
      ? "border border-current bg-transparent"
      : "bg-current text-black";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
};
