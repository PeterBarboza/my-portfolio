import { useLayoutEffect, useState } from "react"
import { CollapsedMenu } from "../CollapsedMenu"
import styles from "./styles.module.scss"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pageHeight, setPageHeight] = useState<number>(0)

  function handleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  useLayoutEffect(() => {
    console.log(window.screen.availHeight)
    console.log(window.screen.height)

    setPageHeight(document.body.clientHeight)
  }, [pageHeight])

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
      <div
        className={styles.menuShadow}
        onClick={handleMenu}
        style={isMenuOpen ?
          {
            display: "flex"
          }
          :
          {
            display: "none"
          }
        }
      ></div>
    </header>
  )
}