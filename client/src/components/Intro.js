import React from 'react'
import styled from 'styled-components'
import { FlexBox, Box } from './sharedComponents/CommonStyles'

const InstructionsBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-size: 20px;
  }
`

const Logo = () => (
  <FlexBox>
    <img src="/logo.svg" alt='logo' />
    <h1>SalesLoft Developer Interview Kit</h1>
  </FlexBox>
)

const Instructions = () => (
  <InstructionsBox>
    <h3 style={{ textAlign: 'center' }}>
      Thank you for your interest in joining the SalesLoft Engineering team!
    </h3>
    <p>
      This app is built with a Rails backend and a React frontend,
      use whatever you'd like out of this repo,
      or any other framework/langauge. Refer to the
      <a href="https://docs.google.com/document/d/1SbhRTd6ewr0w1rgE-nB8yk7LR1exy8rL0JJCMAwgfns/edit?ts=5a57d0ac"> instructions</a>.
    </p>
    <p style={{ textAlign: 'center' }}>
      API Documentation can be found at <a href="https://developers.salesloft.com">https://developers.salesloft.com</a>
    </p>
    <h3 style={{ textAlign: 'center' }}>
      Questions? Email us at engineeringjobs@salesloft.com
    </h3>
  </InstructionsBox>
)

export const Intro = () => (
  <Box>
    <Logo />
    <Instructions />
  </Box>
);
