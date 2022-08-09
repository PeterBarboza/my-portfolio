import { ReactNode } from "react"

import styles from "./styles.module.scss"

type props = {
  children: ReactNode
}
export function Layout({ children }: props) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}