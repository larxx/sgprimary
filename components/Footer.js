import React from 'react'
import Container from './Container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <p
          css={`
            text-align: center;
            font-size: 13px;
            color: var(--text);
            opacity: 80%;
          `}
        >
          SG Primary
        </p>
      </Container>
    </footer>
  )
}
