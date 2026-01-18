import { cva } from "class-variance-authority";

export const buttonVariants = cva("rounded-lg items-center justify-center font-medium", {
  variants: {
    variant: {
      default: "bg-blue-500 border-none hover:bg-blue-600 active:bg-blue-600 disabled:bg-gray-300 disabled:hover:cursor-not-allowed disabled:active:cursor-not-allowed disabled:hover:bg-gray-300 disabled:active:bg-gray-300",
      outline: "bg-transparent border border-blue-500 hover:bg-blue-500 active:bg-blue-500 disabled:bg-gray-300 disabled:border-gray-300 disabled:hover:cursor-not-allowed disabled:active:cursor-not-allowed",
    },
    size: {
      default: "px-2 min-h-10",
      sm: "px-2 min-h-8",
      lg: "px-2 min-h-12",
      icon: "h-10 w-10 rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
