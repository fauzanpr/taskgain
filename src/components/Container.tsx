import type { ReactNode } from "react"

interface IProps {
    children: ReactNode;
}

function Container({ children }: IProps) {
  return (
    <div className="xl:w-4/5 mx-auto">{ children }</div>
  )
}

export default Container