import Head from "next/head"
import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import ScrollUp from "../utils/ScrollUp"

interface PageTemplateProps {
  children: React.ReactElement
  title: string
}

const PageTemplate = ({ children, title }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Corporate Site Sample"}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      <ScrollUp />
      <footer>
        <Footer />
      </footer>
      <style jsx global>
        {`
          html,
          body {
            background: #F5F5F5;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  )
}

export default PageTemplate
