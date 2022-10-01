import { CSSProperties } from "react"
import { DefaultSection } from "../DefaultSection"

export function StudiesSection() {
  const cardStyle: CSSProperties = {
    boxShadow: "0px 1px 2px #d4d4d4",
    backgroundColor: "#0000006c",
  }

  return (
    <DefaultSection wrapperStyles={{ color: "#ffffff" }}>
      <h2>Oque estou estudando / aplicando atualmente?</h2>

      <h3>Backend</h3>
      <p>
        Estudo e desenvolvo APIs com NodeJS e bancos de dados SQL e NoSQL a um
        bom tempo. Estou bem adaptado ao uso de libs e frameworks como Express,
        TypeORM, MongooseODM, PrismaORM, além de testes unitários com o Jest
        mais específicamente, também uso e venho aprimorando o meu conhecimento
        com Typescript continuamente. Atualmente venho estudando mais sobre
        arquitetura de software, Docker, Kubernets e os serviços da AWS. Sobre a
        AWS em específico estou fazendo o curso{" "}
        <i>Aplicações Serverless na AWS com Node.js</i> do Erick Wendel.
      </p>

      <h3>Frontend</h3>
      <p>
        Comecei meus estudos em desenvolvimento web pela tríade base do frontend
        HTML, CSS e Javascript. Após adquirir um bom conhecimento sobre essa
        base, como a semântica do HTML, o objeto DOM, o uso correto dos diversos
        seletores e propriedades CSS, além de um bom uso do Javascript puro,
        comecei a estudar sobre ReactJS. Estou habituado aos conceitos de
        componentização, propriedade e estado do React, além do uso de hooks e
        responsividade. Também já uso NextJS a um tempo. Atualmente estou
        estudando a trilha de ReactJS do curso <i>Ignite</i> da Rocketseat.
      </p>

      <h3>Cloud</h3>
      <p>
        Comecei a me interessar por cloud a pouco tempo quando estava
        pesquisando sobre como fazer armazenamento de imagens e então me deparei
        com o serviço S3 da AWS. Desde então passei a pesquisar mais sobre os
        serviços dela e até me aventurei a testar alguns outros serviços como as
        maquinas EC2 e os bancos RDS. Como disse no texto acima, atualmente
        estou aprendendo sobre desenvolvimento em cloud com o curso do Erick
        Wendel, e estou tendo a oportunidade de aplicar parte disso no projeto
        em que estou trabalhando pela empresa Irbano com o auxílio e instrução
        de outros devs mais experientes de lá.
      </p>
    </DefaultSection>
  )
}
