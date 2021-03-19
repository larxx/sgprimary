import styled, { css } from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { useNavDrawer } from 'context/NavDrawerContext'

const StyledNavDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  transform: translateX(100vw);
  transition: 0.2s all ease;
  background: var(--color-primary-darker);

  ${({ toggled }) =>
    toggled &&
    css`
      transform: translateX(0);
    `}
`

const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Quicksand';
    font-size: 1.2rem;
    font-weight: var(--fw-bold);
    cursor: pointer;
    width: 180px;
    padding: 1rem 0;
    transition: 0.2s opacity ease;
    color: var(--offwhite);
    opacity: 87%;
    &:hover {
      opacity: 100%;
    }
  }
`

export default function NavDrawer({ toggled }) {
  const [isOpen, setIsOpen] = useNavDrawer()

  return (
    <StyledNavDrawer toggled={toggled}>
      <div
        css={`
          margin-top: 10rem;
          width: 100%;
        `}
      >
        {/* <Container> */}
        <LinksContainer>
          <ScrollLink
            activeClass="active"
            to="about"
            smooth={true}
            offset={-100}
          >
            <span onClick={() => setIsOpen(false)}>About Us</span>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="plans"
            smooth={true}
            offset={-100}
          >
            <span onClick={() => setIsOpen(false)}>Subscription Plans</span>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="reviews"
            smooth={true}
            offset={-100}
          >
            <span onClick={() => setIsOpen(false)}>Reviews</span>
          </ScrollLink>
          <a href="mailto:hi@sgprimary.com">Contact Us</a>
          <a
            href="https://www.facebook.com/SGPrimary.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/sgprimary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </LinksContainer>
        {/* </Container> */}
      </div>
    </StyledNavDrawer>
  )
}
