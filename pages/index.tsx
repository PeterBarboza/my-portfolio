import type { NextPage } from "next"
import Head from "next/head"

import { Layout } from "../components/Layout"
import { About } from "../components/About"
import { Header } from "../components/Header"
import { ProjectsSection } from "../components/ProjectsSection"
import { TextCard } from "../components/TextCard"
import { Footer } from "../components/Footer"
import { StudiesSection } from "../components/StudiesSection"
import { useEffect, useState } from "react"

type githubrepository = {
  name: string
  html_url: string
  description?: string
  created_at: string
  homepage?: string
  owner: {
    login: string
  }
}

const Home: NextPage = () => {
  const [repos, setRepos] = useState<githubrepository[]>([])
  const [isHidden, setIsHidden] = useState<boolean>(true)
  const githubUrl = "https://api.github.com/users/peterbarboza/repos"

  useEffect(() => {
    function sortMethod(repoA: githubrepository, repoB: githubrepository) {
      const dateA = Date.parse(repoA.created_at)
      const dateB = Date.parse(repoB.created_at)

      return dateB - dateA
    }

    function filterMethod(repo: githubrepository) {
      if (repo.name === repo.owner.login) return false
      return true
    }

    ;(async () => {
      try {
        const result: githubrepository[] = await (
          await fetch(githubUrl!)
        ).json()

        setRepos(result.filter(filterMethod).sort(sortMethod))
      } catch (error) {}
    })()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Pedro Barboza - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <ProjectsSection
        heading="Experiência profissional"
        hideExceededContent={false}
      >
        <TextCard
          heading="Irbano"
          text={["Projeto desenvolvido para a área de turísmo."]}
        />
      </ProjectsSection>
      {!repos || repos.length < 1 ? null : (
        <ProjectsSection
          heading="Projetos pessoais"
          isContentHidden={isHidden}
          hideExceededContent={true}
          setIsHidden={() => setIsHidden((prevState) => !prevState)}
        >
          {repos.map((item, index) => {
            const { name, description = "", homepage, html_url } = item

            return (
              <TextCard
                heading={name}
                text={[description]}
                githubLink={html_url}
                deployLink={homepage}
                key={index}
              />
            )
          })}
        </ProjectsSection>
      )}
      <StudiesSection />
      <Footer />
    </Layout>
  )
}

export default Home
