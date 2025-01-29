import { ReactNode } from 'react'

type BoardProps = {
    children: ReactNode;
}

export const Board = ({ children }: BoardProps) => {
    return (
        <div>
            {children}
        </div>
    )
}