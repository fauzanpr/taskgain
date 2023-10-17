import type { ReactNode } from "react"

interface IProps {
    children: ReactNode;
    columnGap?: string;
}

function Container({ children, columnGap }: IProps) {
  return (
    <div className={`xl:w-4/5 mx-auto flex flex-col gap-16`}>{ children }</div>
  )
}

export default Container