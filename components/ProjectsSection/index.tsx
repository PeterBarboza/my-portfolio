import { ReactNode } from "react";
import { DefaultSection } from "../DefaultSection";

import styles from "./styles.module.scss";

type props = {
  children: ReactNode;
  heading: string;
  hideExceededContent: boolean;
  isContentHidden?: boolean;
  setIsHidden?: () => void;
};

export function ProjectsSection({
  heading,
  children,
  hideExceededContent,
  setIsHidden = () => {},
  isContentHidden = false,
}: props) {
  if (hideExceededContent) {
    return (
      <DefaultSection
        sectionStyles={{
          backgroundImage: "none",
        }}
        wrapperStyles={
          isContentHidden
            ? {
                maxHeight: "70vh",
                overflowY: "hidden",
                position: "relative",
              }
            : {}
        }
      >
        <h2>{heading}</h2>
        {children}
        {isContentHidden ? (
          <div className={styles.seeMoreBox} onClick={() => setIsHidden()}>
            <div className={styles.seeMoreBtn}>
              <p>Ver mais</p>
            </div>
          </div>
        ) : (
          <div className={styles.seeLessBox} onClick={() => setIsHidden()}>
            <div className={styles.seeLessBtn}>
              <p>Ver menos</p>
            </div>
          </div>
        )}
      </DefaultSection>
    );
  }

  return (
    <DefaultSection
      sectionStyles={{
        backgroundImage: "none",
      }}
    >
      <h2>{heading}</h2>
      {children}
    </DefaultSection>
  );
}
