import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'font-heading font-black text-base uppercase px-6 py-[6px] rounded-full transition-colors duration-300 tracking-normal italic',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-gray-900 hover:bg-[#C79B12]',
        secondary:
          'bg-transparent border border-primary text-text-secondary hover:border-[#FFE8AB]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, className })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
