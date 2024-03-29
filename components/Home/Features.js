import { useState } from 'react'
import styled from 'styled-components'
import Container from '../Container'
import * as mq from 'styles/mediaQueries'

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
`

const FeatureImage = styled.div`
  width: 100px;

  img {
    width: 100%;
    height: auto;
  }
`

const FeatureNumIcon = styled.div`
  width: 36px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq.sm} {
    width: 40px;
    margin-top: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const FeatureTitle = styled.h3`
  text-align: center;
  font-size: 0.875rem;
  ${mq.sm} {
    font-size: 1rem;
  }
`

export const Features = () => {
  const [features, _] = useState([
    {
      id: 1,
      title: 'Download and answer practice materials.',
      image: '/assets/icons/f1.png',
      numIcon: '/assets/icons/num1.png',
    },
    {
      id: 2,
      title: 'Marking of answers on the app.',
      image: '/assets/icons/f2.png',
      numIcon: '/assets/icons/num2.png',
    },
    {
      id: 3,
      title: 'Solutions provided.',
      image: '/assets/icons/f3.png',
      numIcon: '/assets/icons/num3.png',
    },
    {
      id: 4,
      title: 'Video tutorials for additional explanation.',
      image: '/assets/icons/f4.png',
      numIcon: '/assets/icons/num4.png',
    },
    {
      id: 5,
      title: 'Track progress to better identify and close knowledge gaps',
      image: '/assets/icons/f6.png',
      numIcon: '/assets/icons/num5.png',
    },
    // {
    //   id: 6,
    //   title: 'Let kids compete with friends in quiz battles.',
    //   image: '/assets/icons/f6.png',
    //   numIcon: '/assets/icons/num6.png',
    // },
  ])

  return (
    <section
      css={`
        padding: 3rem 0 3rem 0;
        ${mq.sm} {
          padding: 0;
        }
      `}
    >
      <div
        css={`
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--white);
          padding-top: 1.5rem;
          margin-bottom: 1rem;
        `}
      >
        <h2
          css={`
            font-size: 2.2rem;
            font-weight: var(--fw-bold);
            color: var(--text);
            ${mq.sm} {
              text-align: center;
            }
          `}
        >
          How does it work?
        </h2>
      </div>
      <Container>
        <div
          css={`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-gap: 1.5rem;
            ${mq.sm} {
              grid-template-columns: 1fr;
            }
          `}
        >
          {features.map((feature, i) => (
            <FeatureItem key={feature.id}>
              <FeatureImage>
                <img src={feature.image} alt={feature.title} />
              </FeatureImage>
              <FeatureNumIcon>
                <img src={feature.numIcon} alt="num icon" />
              </FeatureNumIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
            </FeatureItem>
          ))}
        </div>
        <div
          css={`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 4rem;
          `}
        ></div>
      </Container>
    </section>
  )
}
