import { ReactNode } from "react"
import { DefaultSection } from "../DefaultSection"

import styles from "./styles.module.scss"

type props = {
  children: ReactNode
  heading: string
}

export function ProjectsSection({ heading, children }: props) {
  return (
    <DefaultSection
      sectionStyles={{
        backgroundImage: "none"
      }}>
      <h2>{heading}</h2>
      {children}
    </DefaultSection>
  )
}