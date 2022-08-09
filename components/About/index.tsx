import Image from "next/image"

import styles from "./styles.module.scss"

export function About() {
  return (
    <section className={styles.about}>
      <h3 className={styles.h3}>
        Quem sou eu
      </h3>
      <div className={styles.myPhotoBorder}>
        <div className={styles.myPhotoWrapper}>
          <Image
            loading="lazy"
            src="https://github.com/PeterBarboza.png"
            alt="Pedro Barboza"
            width={200}
            height={200}
            style={{ borderRadius: "100%" }}
          />
        </div>
      </div>
      <div className={styles.textBox}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa iste dignissimos natus
          reprehenderit porro doloribus inventore quisquam numquam recusandae?</p>
      </div>
      <h3 className={styles.h3}>Principais tecnologias</h3>
      <div className={styles.technologiesBox}>
        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML5"

          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS3"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            alt="Javascript"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            alt="Typescript"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
            alt="Node.js"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="React.js"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
            alt="Next.js"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
            alt="Express.js"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="MongoDB"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
            alt="Sass"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
            alt="Tailwind"
          />
        </div>

        <div className={styles.image}>
          <img
            loading="lazy"
            src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
            alt="Jest"
          />
        </div>
      </div>
    </section>
  )
}