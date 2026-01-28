import { cva } from "class-variance-authority";

export const markerOuterVariants = cva("rounded-full items-center justify-center", {
  variants: {
    type: {
      fire: "bg-red-500/20",
      smoke: "bg-gray-500/20",
      risk: "bg-orange-500/20",
    },
    size: {
      default: "h-20 w-20",
      sm: "h-16 w-16",
      lg: "h-24 w-24",
    },
  },
  defaultVariants: {
    type: "fire",
    size: "default",
  },
});

export const markerMiddleVariants = cva(
  "rounded-full items-center justify-center border-2 border-dashed",
  {
    variants: {
      type: {
        fire: "border-red-400/60",
        smoke: "border-gray-400/60",
        risk: "border-orange-400/60",
      },
      size: {
        default: "h-16 w-16",
        sm: "h-12 w-12",
        lg: "h-20 w-20",
      },
    },
    defaultVariants: {
      type: "fire",
      size: "default",
    },
  }
);

export const markerInnerVariants = cva("rounded-full items-center justify-center", {
  variants: {
    type: {
      fire: "bg-red-500",
      smoke: "bg-gray-500",
      risk: "bg-orange-500",
    },
    size: {
      default: "h-10 w-10",
      sm: "h-8 w-8",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    type: "fire",
    size: "default",
  },
});
