import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> { }
function Header({ className, children, ...otherProps }: HeaderProps) {
    const baseClass = "text-header font-bricolage-grotesque font-bold capitalize tracking-wide"
    return (
        <h1 {...otherProps} className={cn(baseClass, className)}>
            {children}
        </h1>
    )
}

export default Header