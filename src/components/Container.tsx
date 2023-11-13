import type { ReactNode } from "react"

interface IProps {
    children: ReactNode;
    bg?: string;
}

function Container({ children, bg }: IProps) {
  return (
    <div className={`xl:w-4/5 mx-auto flex flex-col gap-48 ${bg}`}>{ children }</div>
  )
}

export default Container