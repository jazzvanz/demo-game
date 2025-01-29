import { ReactNode } from 'react'

type BoardProps = {
    children: ReactNode;
}

export const Board = ({ children }: BoardProps) => {
    console.log(children, 'our children')
    return (
        <div>
            {children}
        </div>
    )
}