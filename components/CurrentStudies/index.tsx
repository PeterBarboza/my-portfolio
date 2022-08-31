import { CSSProperties } from "react"
import { DefaultSection } from "../DefaultSection"
import { TextCard } from "../TextCard"

export function CurrentStudies() {
  const cardStyle: CSSProperties = {
    boxShadow: "0px 1px 2px #d4d4d4",
    backgroundColor: "#0000006c"
  }

  return (
    <DefaultSection
      wrapperStyles={{ color: "#ffffff" }}
    >
      <h2>Estudando/Aplicando atualmente</h2>
      <TextCard
        heading="Node"
        textCardStyle={cardStyle}
        text={[
          "- NodeJS Streams",
          "- Clean Architecture"
        ]}
      />
      <TextCard
        heading="React"
        textCardStyle={cardStyle}
        text={[
          "- React hooks",
          "- Atomic desing"
        ]}
      />
      <TextCard
        heading="Cloud"
        textCardStyle={cardStyle}
        text={[
          "- AWS S3",
          "- AWS RDS"
        ]}
      />
    </DefaultSection>
  )
}