import { useState } from "react"
import { CollapsedMenu } from "../CollapsedMenu"
import styles from "./styles.module.scss"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <header className={styles.header}>
      <div className={styles.hamburguerBox} onClick={handleMenu}>
        <div className={styles.hamburguer}>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </div>
        <p>Contatos</p>
      </div>
      <CollapsedMenu isOpen={isMenuOpen} handleMenu={handleMenu} />
    </header>
  )
}