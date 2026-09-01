import * as React from 'react'
import {type PropsWithChildren} from 'react'
import {cn} from "@/lib/utils";

interface HeadbarProps {
    className?: string
    icon: React.ReactElement<{ className?: string }>
    iconClassName?: string
    title?: string
}

export default function pageHeadbar({
                                        className,
                                        icon,
                                        iconClassName,
                                        title,
                                        children,
                                    }: PropsWithChildren<HeadbarProps>) {
    return (
        <div className="lg:flex lg:items-center lg:justify-between mb-2">
            <div className="min-w-0 flex-1">
                <h1 className="text-4xl text-gray-900 font-bold py-2 pl-2 sm:truncate flex items-center">
                    {React.cloneElement(icon, {
                        className: cn('w-10 h-10 mr-2', iconClassName),
                    })}
                    {title}
                </h1>
            </div>
            <div className="mt-2 flex lg:mt-0 lg:ml-4">{children}</div>
        </div>
    )
}
