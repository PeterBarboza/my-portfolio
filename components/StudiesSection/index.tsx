import { CSSProperties } from "react"
import { DefaultSection } from "../DefaultSection"

export function StudiesSection() {
  const cardStyle: CSSProperties = {
    boxShadow: "0px 1px 2px #d4d4d4",
    backgroundColor: "#0000006c"
  }

  return (
    <DefaultSection
      wrapperStyles={{ color: "#ffffff" }}
    >
      <h2>Oque estou estudando / aplicando atualmente?</h2>

      <h3>Backend</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat dolorem quas quia doloribus. Eligendi ut voluptatum consectetur recusandae deserunt eos, perspiciatis sit exercitationem ipsam animi! Corporis, soluta. Impedit, expedita?</p>

      <h3>Frontend</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, omnis! Reprehenderit soluta doloribus quasi! Voluptates maiores sunt maxime dolor distinctio.</p>

      <h3>Cloud</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, obcaecati recusandae laudantium aut animi magni quis sint? Ipsa!</p>
    </DefaultSection>
  )
}