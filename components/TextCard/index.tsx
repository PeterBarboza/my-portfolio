import { ReactNode } from "react"

import styles from "./styles.module.scss"

type props = {
  heading: string
  projects: string[]
}

export function TextCard({ heading, projects }: props) {
  return (
    <div className={styles.textCard}>
      <h3>{heading}</h3>
      <div className={styles.list}>
        {
          projects.map((item, index) => {
            return (
              <div key={index}>- {item}</div>
            )
          })
        }
      </div>
    </div>
  )
}