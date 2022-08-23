import { IconContext } from "react-icons";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

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

        <a
          href="https://api.whatsapp.com/send?phone=5512996548767&text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio."
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.contact}>
            <div className={styles.icon}>
              <IconContext.Provider value={{ size: "50%" }}>
                <AiOutlineWhatsApp color="#ffffff" />
              </IconContext.Provider>
            </div>
            <p>+55 12 99654-8767</p>
          </div>
        </a>
      </div>
    </div>
  );
}
