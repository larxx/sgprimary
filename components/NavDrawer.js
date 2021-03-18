import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai'
import styled, { css } from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import Container from './Container'
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

export default function NavDrawer({ toggled }) {
  const [isOpen, setIsOpen] = useNavDrawer()

  return (
    <StyledNavDrawer toggled={toggled}>
      <div
        css={`
          margin-top: 6rem;
          /* background: coral; */
          width: 100%;
        `}
      >
        <Container>
          {/* <h3
            css={`
              color: var(--white);
            `}
          >
            Menu
          </h3> */}
          <div
            css={`
              display: flex;
              width: 100%;
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              a {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-align: center;
                width: 150px;
                padding: 1rem 0;
                transition: 0.2s opacity ease;
                color: var(--offwhite);
                opacity: 87%;
                &:hover {
                  opacity: 100%;
                }
              }
            `}
          >
            <a href="mailto:hi@sgprimary.com">
              <AiOutlineMail size="2.8rem" />
              <span
                css={`
                  display: inline-block;
                  margin-left: 1rem;
                `}
              >
                Contact Us
              </span>
            </a>
            {/* <div
              css={`
                order: 1;
                display: flex;
                align-items: center;
                a {
                  display: inline-block;
                  :not(:first-child) {
                    margin-left: 1rem;
                  }
                }
              `}
            > */}
            <a
              href="https://www.facebook.com/SGPrimary.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size="2.8rem" />
              <span
                css={`
                  display: inline-block;
                  margin-left: 1rem;
                `}
              >
                Facebook
              </span>
            </a>
            <a
              href="https://www.instagram.com/sgprimary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram size="2.8rem" />
              <span
                css={`
                  display: inline-block;
                  margin-left: 1rem;
                `}
              >
                Instagram
              </span>
            </a>
            <ScrollLink
              activeClass="active"
              to="about"
              smooth={true}
              offset={-100}
            >
              <span
                css={`
                  display: block;
                  width: 100%;
                  cursor: pointer;
                `}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </span>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="plans"
              smooth={true}
              offset={-100}
            >
              <span
                css={`
                  display: block;
                  width: 100%;
                  cursor: pointer;
                `}
                onClick={() => setIsOpen(false)}
              >
                Subscription Plans
              </span>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="reviews"
              smooth={true}
              offset={-100}
            >
              <span
                css={`
                  display: block;
                  width: 100%;
                  cursor: pointer;
                `}
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </span>
            </ScrollLink>
            {/* </div> */}
          </div>
        </Container>
      </div>
    </StyledNavDrawer>
  )
}
