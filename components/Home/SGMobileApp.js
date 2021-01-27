import styled from 'styled-components'
import Container from '../Container'
import * as mq from 'styles/mediaQueries'

export const SGMobileApp = () => {
  return (
    <section
      css={`
        height: 500px;
        background: url('/assets/images/phone.png');
        background-repeat: no-repeat;
        background-size: cover;
        ${mq.sm} {
          height: 450px;
          background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
            url('/assets/images/phone-portrait.jpg') no-repeat;
          background-size: cover;
        }
      `}
    >
      <Container>
        <div
          css={`
            display: flex;
            align-items: center;
            height: 500px;
            padding-left: 8rem;
            ${mq.sm} {
              height: 450px;
              align-items: flex-start;
              justify-content: center;
              padding-left: 0;
            }
          `}
        >
          <h2
            css={`
              color: var(--white);
              font-size: 3.5rem;
              ${mq.sm} {
                font-size: 2.2rem;
                text-align: center;
              }
            `}
          >
            Launch
            <br />
            SG Primary
            <br />
            App
          </h2>
        </div>
      </Container>
    </section>
  )
}
