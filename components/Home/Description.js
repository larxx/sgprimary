import React from 'react'
import Container from '../Container'

export const Description = () => {
  return (
    <section
      css={`
        padding: 5rem 0;
      `}
    >
      <Container>
        <div
          css={`
            max-width: 60%;
            margin: 0 auto;
            @media (max-width: 600px) {
              max-width: 100%;
            }
          `}
        >
          <h2
            css={`
              font-size: 2.2rem;
              text-align: center;
            `}
          >
            The Key Supplementary Learning Resource Your Child Needs
          </h2>
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
            `}
          >
            <span
              css={`
                display: block;
                width: 100px;
                height: 5px;
                background: var(--color-pale-yellow);
                border-radius: 4px;
              `}
            ></span>
          </div>
          <p
            css={`
              text-align: center;
              font-size: 1.2rem;
            `}
          >
            SG Primary offers a wealth of downloadable learning materials. These
            include everything from worksheets to papers taken from the top
            primary schools in Singapore - so your kids can test their knowledge
            thoroughly.{' '}
          </p>
        </div>
      </Container>
    </section>
  )
}
