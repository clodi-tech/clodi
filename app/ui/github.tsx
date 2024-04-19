"use client"
import { Chip } from "@nextui-org/react"

export default function Github({ url }: { url: string }) {
    return (
        <div onClick={() => window.open(url, '_blank')}>
            <Chip variant='faded' color='primary'>github</Chip>
        </div>
    )
}
