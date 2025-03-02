import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "font-medium",
    "custom-transition",
    "custom-ease",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-custom-primary",
          "text-custom",
          "hover:bg-custom-primary-effects",
        ],
        destructive: [
          "bg-custom-critical",
          "text-custom-dark",
          "hover:bg-custom-critical-effects",
        ],
        outline: [
          "border",
          "border-custom-accent",
          "bg-transparent",
          "text-custom",
          "hover:bg-custom-accent",
          "hover:text-custom-dark",
        ],
        secondary: [
          "bg-custom-secondary",
          "text-custom",
          "hover:bg-custom-secondary-effects",
        ],
        ghost: [
          "bg-transparent",
          "text-custom-dark",
          "hover:bg-custom-background",
          "hover:text-custom-effects",
        ],
        link: [
          "text-custom-accent",
          "underline-offset-4",
          "hover:text-custom-accent-effects",
          "hover:underline",
        ],
      },
      size: {
        default: ["h-10", "px-4", "py-2"],
        sm: ["h-9", "rounded-md", "px-3"],
        lg: ["h-11", "rounded-md", "px-8"],
        icon: ["h-10", "w-10"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
