import { CSSProperties, ReactNode } from "react"
import styles from "./styles.module.scss"

type props = {
  sectionStyles?: CSSProperties
  wrapperStyles?: CSSProperties
  children: ReactNode
}
export function DefaultSection({ sectionStyles, wrapperStyles, children }: props) {
  return (
    <section className={styles.defaultSection} style={sectionStyles || {}}>
      <div className={styles.wrapper} style={wrapperStyles || {}}>
        {children}
      </div>
    </section>
  )
}