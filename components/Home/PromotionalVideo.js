import styled from 'styled-components'
import Container from '../Container'
import AppProvidersImages from '../AppProvidersImages'
import * as mq from 'styles/mediaQueries'

const SectionHeading = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0;
  span {
    color: var(--color-accent);
  }

  ${mq.sm} {
    font-size: 1.8rem;
  }
`

const SectionPara = styled.p`
  text-align: center;
  max-width: 55%;
  margin: 0 auto;
  font-size: 1.15rem;
  ${mq.sm} {
    font-size: 1rem;
    max-width: 100%;
  }
`

const Vid = styled.video`
  width: 500px;
  height: 350px;
  ${mq.sm} {
    width: 100%;
    height: 240px;
  }
`

export const PromotionalVideo = () => {
  return (
    <section
      css={`
        padding: 5rem 0;
        ${mq.sm} {
          padding: 1rem 0;
        }
      `}
    >
      <Container>
        <div>
          <SectionHeading>
            How Your Child Can Use <br />
            <span>our App</span>
          </SectionHeading>
        </div>
        <div
          css={`
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 0 2rem 0;
          `}
        >
          <Vid controls poster="https://i.postimg.cc/Z54hdjgG/image.png">
            <source src="/assets/videos/demo2.mp4" />
          </Vid>
        </div>
        <div>
          <SectionPara>
            Simple, straightforward design paired with clear visual cues makes
            navigation an easy task! Children can search for, open, and use
            resources on their own and as needed.
          </SectionPara>
        </div>
        <div
          css={`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3em;
          `}
        >
          <AppProvidersImages />
        </div>
      </Container>
    </section>
  )
}
