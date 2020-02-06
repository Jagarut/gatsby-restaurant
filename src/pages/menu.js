import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle="enjoy our delicatessen"></Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
