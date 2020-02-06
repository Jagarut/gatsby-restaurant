import React, { Component } from "react"
import { styles, Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="our mission" message="let us tell you"></Title>
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            saepe atque pariatur nesciunt aperiam dicta a. Hic eos enim sed
            voluptatibus libero veritatis, sequi, magni impedit ullam blanditiis
            velit consequuntur, exercitationem labore doloremque ducimus dolorum
            doloribus totam dolores tempore repudiandae cupiditate debitis
            reprehenderit? Corporis reprehenderit nobis nesciunt deserunt veniam
            hic?
          </p>
        </QuickInfoWrapper>
        <Link to="/about/" style={{ textDecoration: "none" }}>
          <SectionButton>about</SectionButton>
        </Link>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
