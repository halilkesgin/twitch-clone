import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="bg-white rounded-full p-1 mr-10 lg:mr-0 lg:shrink shrink-0">
                    <Image 
                        src="/spooky.svg"
                        alt="Twitch"
                        height="32"
                        width="32"
                    />
                </div>
                <div className="hidden lg:block">
                    <p className="text-lg font-semibold">
                        Twitch
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Creator dashboard
                    </p>
                </div>
            </div>
        </Link>
    )
}