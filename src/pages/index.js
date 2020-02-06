import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HomeHeader img={img}>
      <Banner
        title="eatery"
        subtitle="C/Portugal nº11 - Las Palmas de Gran Canaria -"
      >
        <Link to={/menu/}>
          <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
