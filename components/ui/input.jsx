import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ type, className, ...props }, ref) => {
    return (
        (<input
            ref={ref}
            type={type}
            className={cn(
                "flex h-[40px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
                className
            )}
            {...props}
        />)
    );
});

Input.displayName = 'Input';

export { Input };