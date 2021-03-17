import Image from 'next/image'
import styled from 'styled-components'
import Container from '../Container'
import * as mq from 'styles/mediaQueries'

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-top: 0;
  span {
    color: var(--color-primary);
  }
  ${mq.sm} {
    font-size: 2rem;
  }
`

const IconContainer = styled.div`
  width: 100px;
  ${mq.sm} {
    width: 80px;
  }
`

export const SocialMediaCTA = () => {
  return (
    <section
      css={`
        padding: 3rem 0 3rem 0;
        background: var(--offwhite);
        ${mq.sm} {
          padding: 2rem 0;
        }
      `}
    >
      <Container>
        <div>
          <SectionHeading>
            <span>Follow Us</span> to Receive the Latest Updates
          </SectionHeading>
          <p
            css={`
              max-width: 45%;
              text-align: center;
              margin: 0 auto;
              font-size: 1.2rem;
              ${mq.sm} {
                max-width: 100%;
              }
            `}
          >
            Want to stay informed about our latest content uploads?
          </p>
          <p
            css={`
              max-width: 45%;
              text-align: center;
              margin: 0 auto;
              font-size: 1.2rem;
              ${mq.sm} {
                max-width: 100%;
              }
            `}
          >
            Follow us on social media to get real-time updates on educational
            content from the team!
          </p>
        </div>
        <div
          css={`
            display: flex;
            justify-content: center;
            margin-top: 2rem;
          `}
        >
          <IconContainer>
            <a
              href="https://www.facebook.com/SGPrimary.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icons/fb.png"
                layout="responsive"
                width={100}
                height={90}
              />
            </a>
          </IconContainer>
          <IconContainer>
            <a
              href="https://www.instagram.com/sgprimary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icons/ig.png"
                layout="responsive"
                width={100}
                height={90}
              />
            </a>
          </IconContainer>
        </div>
      </Container>
    </section>
  )
}
