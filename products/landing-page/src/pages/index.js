import React from "react"
import styled from "styled-components"

import "@fontsource/mulish"
import logo from "../assets/images/logo.svg"
import stopwatch from "../assets/images/Group.svg"

const ComingSoonContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentContainer = styled.div`
  width: 100%;
  height: 80%;
  border: 2px solid blue;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

const HeadingContainer = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const MainLogo = styled.img`
  width: 10%;
  height: 60px;
  margin-top: 40px;
`

const MainTitle = styled.h1`
  font-family: "mulish";
  font-size: 3.2em;
  margin-left: 15px;
  color: #9903ff;
  text-transform: uppercase;
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const StopwatchImage = styled.img`
  width: 50%;
  height: 300px;
`

export default function ComingSoon() {
  return (
    <ComingSoonContainer>
      <ContentContainer>
        <HeadingContainer>
          <MainLogo src={logo} />
          <MainTitle>Expunge Assist</MainTitle>
        </HeadingContainer>
        <ImageContainer>
          <StopwatchImage src={stopwatch} />
        </ImageContainer>
      </ContentContainer>
    </ComingSoonContainer>
  )
}
