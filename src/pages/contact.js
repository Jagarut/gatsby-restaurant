import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={contactImg}>
      <Banner
        title="contact us"
        subtitle="to ask for ours well known recepies"
      ></Banner>
    </PageHeader>
  </Layout>
)

export default ContactPage
