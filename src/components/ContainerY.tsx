import type { ReactNode } from "react"

interface IProps {
    children: ReactNode;
}

function ContainerY({ children }: IProps) {
  return (
    <div className="flex flex-col gap-48">{ children }</div>
  )
}

export default ContainerY;