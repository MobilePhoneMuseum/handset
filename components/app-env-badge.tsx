import env from "@/lib/env";
import {Badge} from "@/components/ui/badge";
import {HugeiconsIcon} from "@hugeicons/react"
import {Leaf01Icon} from "@hugeicons/core-free-icons";
import {cn} from "@/lib/utils";

const sizes = {
    default: "gap-2 px-3 py-1.5 has-data-[icon=inline-start]:pl-3 text-lg",
    sm: "gap-1 px-1.5 py-0.5 has-data-[icon=inline-start]:pl-1.5 text-[10px]",
}

export function AppEnvBadge({size = "default", className}: { size?: keyof typeof sizes, className?: string }) {
    if (env.isProduction) return null;

    return (
        <Badge
            className={cn(
                "h-auto rounded-sm bg-amber-500/15 [&>svg]:size-[1em]! font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400",
                sizes[size],
                className,
            )}>
            <HugeiconsIcon icon={Leaf01Icon} data-icon="inline-start"/>
            {env.appEnv}
        </Badge>
    );
}
