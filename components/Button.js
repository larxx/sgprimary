import { css } from 'styled-components'

export default function Button({ children, css: otherCSS = {}, ...props }) {
  return (
    <button
      css={`
        cursor: pointer;
        border: none;
        outline: none;
        padding: 1rem 1.8rem;
        font-size: 0.875rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        background: var(--white);
        color: var(--color-primary);
        font-weight: var(--fw-semibold);
        border-radius: 4px;
        transition: 0.25s all ease;

        ${({ variant }) =>
          variant === 'secondary' &&
          css`
            background: var(--color-primary);
            color: var(--white);

            &:hover {
              background: var(--color-primary-darker);
            }
          `}

        ${({ variant }) =>
          variant === 'inverse' &&
          css`
            background: #000000;
            color: var(--white);

            a {
              color: var(--white);
            }

            &:hover {
              background: #000000;
            }
          `}

        {...otherCSS}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
