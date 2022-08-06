import { ReactNode } from "react"

type props = {
  children: ReactNode
}
export function Layout({ children }: props) {
  return (
    <div className="w-full h-fit min-h-screen flex flex-col justify-start items-start scroll-smooth">
      {children}
    </div>
  )
}