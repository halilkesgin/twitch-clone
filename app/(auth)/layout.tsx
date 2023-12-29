import { ReactNode } from "react"

import { Logo } from "./_components/logo"

const AuthLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
            <Logo />
            {children}
        </div>
    )
}

export default AuthLayout