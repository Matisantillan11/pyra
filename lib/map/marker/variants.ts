import { cva } from 'class-variance-authority';

export const markerOuterVariants = cva('rounded-full items-center justify-center', {
  variants: {
    type: {
      fire: 'bg-red-500/20 dark:bg-red-800/40',
      smoke: 'bg-gray-500/20 dark:bg-gray-800/40',
      risk: 'bg-orange-500/20 dark:bg-orange-800/40',
    },
    size: {
      default: 'h-20 w-20',
      sm: 'h-16 w-16',
      lg: 'h-24 w-24',
    },
  },
  defaultVariants: {
    type: 'fire',
    size: 'default',
  },
});

export const markerMiddleVariants = cva(
  'rounded-full items-center justify-center border-2 border-dashed',
  {
    variants: {
      type: {
        fire: 'border-red-400/60 dark:border-red-700/40',
        smoke: 'border-gray-400/60 dark:border-gray-700/40',
        risk: 'border-orange-400/60 dark:border-orange-700/40',
      },
      size: {
        default: 'h-16 w-16',
        sm: 'h-12 w-12',
        lg: 'h-20 w-20',
      },
    },
    defaultVariants: {
      type: 'fire',
      size: 'default',
    },
  },
);

export const markerInnerVariants = cva('rounded-full items-center justify-center', {
  variants: {
    type: {
      fire: 'bg-red-500 dark:bg-red-700',
      smoke: 'bg-gray-500 dark:bg-gray-700',
      risk: 'bg-orange-500 dark:bg-orange-700',
    },
    size: {
      default: 'h-10 w-10',
      sm: 'h-8 w-8',
      lg: 'h-12 w-12',
    },
  },
  defaultVariants: {
    type: 'fire',
    size: 'default',
  },
});
