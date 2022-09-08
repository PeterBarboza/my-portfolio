import Image from "next/image";
import { useEffect, useRef } from "react";
import { DefaultSection } from "../DefaultSection";

import styles from "./styles.module.scss";

export function About() {
  const headLineRef = useRef(null);

  useEffect(() => {
    function typewrite(element: any) {
      const text: string[] = element.innerText.split("");
      element.innerText = " ";

      text.forEach((letter, index) => {
        setTimeout(() => {
          element.innerHTML += letter;
        }, 75 * index);
      });
    }

    typewrite(headLineRef.current);
  }, []);

  return (
    <DefaultSection wrapperStyles={{ color: "#ffffff" }}>
      <div className={styles.myPhotoBorder}>
        <div className={styles.myPhotoWrapper}>
          <Image
            loading="lazy"
            src="https://github.com/PeterBarboza.png"
            alt="Pedro Barboza"
            width={9999}
            height={9999}
            style={{ width: "100%", height: "100%", borderRadius: "100%" }}
          />
        </div>
      </div>
      <h1 className={styles.headline} ref={headLineRef}>
        Olá! Sou Pedro Barboza
        <br />
        Desenvolvedor web fullstack
      </h1>
      <div className={styles.textBox}>
        <p>
          Estudo desenvolvimento web a pouco mais de 2 anos, sempre me
          interessei por tecnologia desde a infância, então quando comecei a
          estudar programação foi amor a primeira vista. E agora depois de já
          ter atuado tanto no frontend como no backend em alguns projetos reais,
          hoje procuro minha primeira oportunidade de trabalho como
          desenvolvedor.
        </p>
      </div>
      <div className={styles.divisionLine}></div>
      <h2 className={styles.h2}>Principais tecnologias</h2>
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
            loading="lazy"
            src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
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
    </DefaultSection>
  );
}
