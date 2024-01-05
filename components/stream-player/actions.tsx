"use client"

import { useAuth } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"
import { useTransition } from "react"
import { toast } from "sonner"

import { Skeleton } from "@/components/ui/skeleton"
import { onFollow, onUnfollow } from "@/actions/follow"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ActionsProps {
    hostIdentity: string
    isFollowing: boolean
    isHost: boolean
}

export const Actions = ({
    hostIdentity,
    isFollowing,
    isHost
}: ActionsProps) => {
    const [isPending, startTransition] = useTransition()
    const { userId } = useAuth()
    const router = useRouter()

    const handleFollow = () => {
        startTransition(() => {
            onFollow(hostIdentity)
                .then((data) => toast.success(`You are now following ${data.following.username}`))
                .catch(() => toast.error("Something went wrong"))
        })
    }

    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(hostIdentity)
                .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
                .catch(() => toast.error("Something went wrong"))
        })
    }

    const toggleFollow = () => {
        if (!userId) {
            return router.push("/sign-in")
        }

        if (isHost) return

        if (isFollowing) {
            handleUnfollow()
        } else {
            handleFollow()
        }
    }

    return (
        <Button
            onClick={toggleFollow}
            disabled={isPending || isHost}
            variant="primary"
            size="sm"
            className="w-full lg:w-auto"
        >
            <Heart 
                className={cn(
                    "h-4 w-4 mr-2",
                    isFollowing ? "fill white" : "fill-none"
                )} 
            />
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
    )
}

export const ActionsSkeleton = () => {
    return (
        <Skeleton className="h-10 w-full lg:w-24" />
    )
}