import { useState } from 'react'
import Image from 'next/image'
import Container from '../Container'
import * as mq from 'styles/mediaQueries'

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
      title: 'The app marks your answers.',
      image: '/assets/icons/f2.png',
      numIcon: '/assets/icons/num2.png',
    },
    {
      id: 3,
      title: 'Solutions provided where needed.',
      image: '/assets/icons/f3.png',
      numIcon: '/assets/icons/num3.png',
    },
    {
      id: 4,
      title: 'Bookmark questions for revision/reference.',
      image: '/assets/icons/f4.png',
      numIcon: '/assets/icons/num4.png',
    },
    {
      id: 5,
      title: 'Video tutorials offer extra explanations.',
      image: '/assets/icons/f5.png',
      numIcon: '/assets/icons/num5.png',
    },
    {
      id: 6,
      title: 'Let kids compete with friends in quiz battles.',
      image: '/assets/icons/f6.png',
      numIcon: '/assets/icons/num6.png',
    },
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
          HOW DOES IT WORK?
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
            <div
              key={feature.id}
              css={`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <div
                css={`
                  width: 120px;
                `}
              >
                <Image
                  src={feature.image}
                  layout="responsive"
                  width={50}
                  height={50}
                  alt={feature.title}
                />
              </div>
              <div
                css={`
                  width: 36px;
                  margin-top: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  ${mq.sm} {
                    width: 40px;
                    margin-top: 0;
                  }
                `}
              >
                <img
                  src={feature.numIcon}
                  alt="num icon"
                  css={`
                    width: 100%;
                    height: auto;
                  `}
                />
              </div>
              <h3
                css={`
                  text-align: center;
                  font-size: 0.875rem;
                  /* margin-top: -20px; */
                `}
              >
                {feature.title}
              </h3>
            </div>
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
