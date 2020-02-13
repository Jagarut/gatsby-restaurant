import React from "react"
import Product from "./Product"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Title } from "../../utils"
import styled from "styled-components"

const getMenus = graphql`
  {
    allMdx {
      totalCount
      edges {
        node {
          frontmatter {
            name
            price
            ingredients
            slug
            image {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default function Menu() {
  const response = useStaticQuery(getMenus)
  // console.log(response)
  const menus = response.allMdx.edges

  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        {menus.map(item => {
          return <Product key={item.node.id} product={item.node} />
        })}
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
