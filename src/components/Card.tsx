import type { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

function Card({ children }: IProps) {
  return (
    <div className="bg-blue-700 px-8 py-4 w-fit">
        { children }
    </div>
  )
}

export default Card