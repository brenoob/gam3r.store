import { Icon } from "@iconify/react/dist/iconify.js"
import type { IconifyIcon } from "@iconify/types"

export interface TagProps {
    icone: string | IconifyIcon
    label: string
    outlined?: boolean
}

export default function Tag(props: TagProps) {
    return (
        <div
            className={`flex items-center gap-2 self-start py-1 px-4 rounded-full text-xs uppercase ${
                props.outlined
                    ? 'border border-violet-500 text-white'
                    : 'bg-gradient-to-r from-violet-700 to-violet-700'
            }`}
        >
        <Icon icon={props.icone} width={20} strokeWidth={1} />
            <span>{props.label}</span>
        </div>
    )
}
