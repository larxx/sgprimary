import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Container from '../Container'
import * as mq from 'styles/mediaQueries'

const StyledSupportedBy = styled.section`
  padding: 5rem 0;
  background: var(--color-primary);
  ${mq.sm} {
    padding: 3rem 0;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0;
  margin-top: 0;
  color: var(--white);
  text-align: center;
  ${mq.sm} {
    text-align: center;
  }
`

const SupportItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 2rem;
  ${mq.sm} {
    grid-template-columns: 1fr;
  }
`

const SupportItem = styled.div`
  background: var(--white);
  color: var(--text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  .support-item-title {
    font-weight: var(--fw-semibold);
  }

  .support-item-quote {
    font-style: italic;
    font-size: 0.9rem;
    text-align: center;
  }
`

export const SupportedBy = () => {
  return (
    <StyledSupportedBy>
      <Container>
        <SectionHeading>Supported By</SectionHeading>
        <SupportItemsContainer>
          <SupportItem>
            <Image src="/assets/images/sgfund.jpg" width={300} height={80} />
            <p className="support-item-title">
              Our Singapore Fund for Digital Readiness
            </p>
            <p className="support-item-quote">
              Preparing Singaporeans seize the benefits of the digital
            </p>
          </SupportItem>
          <SupportItem>
            <Image src="/assets/images/eduspaze.jpg" width={300} height={80} />
            <p className="support-item-title">EduSpaze</p>
            <p className="support-item-quote">
              Singapore’s first edtech accelerator enabling edtech startups to
              go-to-market, accelerate their growth, and co-innovate with other
              stakeholders.
            </p>
          </SupportItem>
        </SupportItemsContainer>
      </Container>
    </StyledSupportedBy>
  )
}
