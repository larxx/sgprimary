import React from 'react'
import * as mq from '../styles/mediaQueries'

export default function Container({ children, css = {}, ...props }) {
  return (
    <div
      css={`
        max-width: 1100px;
        margin: 0 auto;
        ${mq.md} {
          padding: 0 1.25rem;
        }
        ${mq.sm} {
          padding: 0 1.25rem;
        }
        {...css}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
