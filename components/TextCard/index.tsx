import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import styles from "./styles.module.scss";

type props = {
  heading: string;
  text: string | string[];
  githubLink?: string;
  deployLink?: string;
};

export function TextCard({ heading, text, githubLink, deployLink }: props) {
  return (
    <div className={styles.textCard}>
      <h3>{heading}</h3>
      {Array.isArray(text) ? (
        text.map((item, index) => {
          return <p key={index}>{text}</p>;
        })
      ) : (
        <p>{text}</p>
      )}
      <div className={styles.attachmentsBox}>
        {githubLink ? (
          <a href="" rel="noreferrer">
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "80%" }}>
                <AiFillGithub color="#000000" />
              </IconContext.Provider>
            </div>
            <p>Repositório</p>
          </a>
        ) : null}
        {deployLink ? (
          <a href="" rel="noreferrer">
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
