import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Container from 'components/Container'
import AppProvidersImages from 'components/AppProvidersImages'
import * as mq from 'styles/mediaQueries'

const StyledAdditionalSection = styled.section`
  padding: 5rem 0;
  background: var(--white);
  ${mq.sm} {
    padding: 3rem 0;
  }
`

const InnerAdditionalSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  ${mq.sm} {
    grid-template-columns: 1fr;
  }
`

const BigParagraph = styled.h2`
  font-size: 2.5rem;
  color: var(--text);
  font-weight: var(--fw-bold);
  margin-bottom: 10px;

  span {
    color: var(--color-primary);
  }

  ${mq.sm} {
    text-align: center;
  }
`

export const AdditionalSection = () => {
  return (
    <StyledAdditionalSection>
      <Container>
        <InnerAdditionalSection>
          <div
            css={`
              width: 600px;
              ${mq.sm} {
                width: 100%;
              }
            `}
          >
            <Image
              src="/assets/images/laptop.png"
              layout="responsive"
              width={500}
              height={370}
              alt="book"
            />
          </div>
          <div>
            <BigParagraph>
              Here’s a taste of <span>what you’ll get on SG Primary</span>
            </BigParagraph>
            <p
              css={`
                ${mq.sm} {
                  text-align: center;
                }
              `}
            >
              Here’s a sample of what’s available on the app when you subscribe.
            </p>
            <div
              css={`
                display: flex;
                margin-top: 1.5rem;
                ${mq.sm} {
                  justify-content: center;
                }
              `}
            >
              <AppProvidersImages />
            </div>
          </div>
        </InnerAdditionalSection>
      </Container>
    </StyledAdditionalSection>
  )
}
