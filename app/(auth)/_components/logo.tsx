import Image from "next/image"

export const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-white rounded-full p-1">
                <Image 
                    src="/spooky.svg"
                    alt="Twitch"
                    height="80"
                    width="80"
                />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-xl font-semibold">
                    Twitch
                </p>
                <p className="text-sm text-muted-foreground">
                    Lets play
                </p>
            </div>
        </div>
    )
}