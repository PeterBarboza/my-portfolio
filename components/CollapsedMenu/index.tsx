import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import styles from "./styles.module.scss";

type props = {
  isOpen: boolean;
  handleMenu: () => void;
};

export function CollapsedMenu({ isOpen, handleMenu }: props) {
  return (
    <div
      className={`${styles.collapsedMenu} ${
        isOpen ? styles.isActive : styles.isNotActive
      }`}
    >
      <div className={styles.closeButtonBox} onClick={handleMenu}>
        <p>Voltar</p>
        <div className={styles.closeButton} />
      </div>
      <div className={styles.contactsbox}>
        <a
          href="https://github.com/PeterBarboza"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.contact}>
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "50%" }}>
                <AiFillGithub color="#d4d4d4" />
              </IconContext.Provider>
            </div>
            <p>PeterBarboza</p>
          </div>
        </a>

        <a
          href="https://br.linkedin.com/in/pedro-barboza-webdev"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.contact}>
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "50%" }}>
                <AiFillLinkedin color="#ffffff" />
              </IconContext.Provider>
            </div>
            <p>Pedro Barboza</p>
          </div>
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <div className={styles.contact}>
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "50%" }}>
                <AiOutlineMail color="#ffffff" />
              </IconContext.Provider>
            </div>
            <p>pedro.barboza.dev@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
}
