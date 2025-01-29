import { ReactNode } from 'react'

type BoardProps = {
    children: ReactNode;
}

export const Board = ({ children }: BoardProps) => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-[#A6CDC6] p-4">
            {children}
        </div>
    )
}