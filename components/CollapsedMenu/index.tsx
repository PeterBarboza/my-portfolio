import { CSSProperties, useEffect } from "react"
import styles from "./styles.module.scss"

type props = {
  isOpen: boolean
  handleMenu: () => void
}

export function CollapsedMenu({ isOpen, handleMenu }: props) {
  return (
    <div
      className={`${styles.collapsedMenu} ${isOpen ? styles.isActive : styles.isNotActive}`}
    >
      <div className={styles.closeButtonBox} onClick={handleMenu}>
        <div className={styles.closeButton} />
      </div>
      <div className={styles.contactsbox}>

        <a href="">
          <div className={styles.contact}>
          </div>
        </a>

        <a href="">
          <div className={styles.contact}>
          </div>
        </a>

        <a href="">
          <div className={styles.contact}>
          </div>
        </a>
        <a href="">
          <div className={styles.contact}>
          </div>
        </a>

      </div>
    </div>
  )
}