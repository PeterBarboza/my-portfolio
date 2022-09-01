import { CSSProperties } from "react";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import styles from "./styles.module.scss";

type props = {
  heading: string;
  text: string[];
  textCardStyle?: CSSProperties
  githubLink?: string;
  deployLink?: string;
};

export function TextCard({
  heading,
  text,
  githubLink,
  deployLink,
  textCardStyle = {}
}: props) {
  return (
    <div className={styles.textCard} style={textCardStyle}>
      <h3>{heading}</h3>
      {
        text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })
      }
      <div className={styles.attachmentsBox}>
        {githubLink ? (
          <a href={githubLink} rel="noreferrer" target="_blank">
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "80%" }}>
                <AiFillGithub color="#000000" />
              </IconContext.Provider>
            </div>
            <p>Repositório</p>
          </a>
        ) : null}
        {deployLink ? (
          <a href={deployLink} rel="noreferrer" target="_blank">
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "70%" }}>
                <GrAttachment color="#000000" />
              </IconContext.Provider>
            </div>
            <p>Deploy</p>
          </a>
        ) : null}
      </div>
    </div>
  );
}
