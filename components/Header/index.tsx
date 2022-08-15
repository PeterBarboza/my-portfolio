import { useLayoutEffect, useState } from "react"
import { CollapsedMenu } from "../CollapsedMenu"
import styles from "./styles.module.scss"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pageHeight, setPageHeight] = useState<number>(0)

  function handleMenu() {
    console.log(pageHeight, isMenuOpen)
    setIsMenuOpen(prevState => !prevState)
  }

  useLayoutEffect(() => {
    console.log("Renderizou")

    if(pageHeight != document.body.scrollHeight) {
      setPageHeight(document.body.scrollHeight)
    }
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
        style={isMenuOpen? 
          {
            height: `${pageHeight}px`,
            width: "100%"
          } 
          : 
          {
            height: `${pageHeight}px`,
            width: "0%"
          }
        }
      ></div>
    </header>
  )
}