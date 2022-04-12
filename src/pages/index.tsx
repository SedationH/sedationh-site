import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="SedationH's Website Index page"
      wrapperClassName={styles.layout}
    >
      <div className={styles.container}>
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </Layout>
  )
}
