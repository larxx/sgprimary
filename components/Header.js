import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
} from 'react-icons/ai'
import { Link as ScrollLink } from 'react-scroll'
import Container from './Container'
import NavDrawer from './NavDrawer'
import { useNavDrawer } from 'context/NavDrawerContext'
import * as mq from 'styles/mediaQueries'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: var(--white);
  z-index: 9999;
  ${mq.sm} {
    padding: 0.5rem 0;
  }
`

const SocialMediaBar = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--color-accent);
  a {
    font-weight: var(--fw-semibold);
    opacity: 87%;
    transition: 0.2s all ease;
    :not(:last-child) {
      margin-right: 1rem;
    }
    &:hover {
      opacity: 100% !important;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`

const NavLinks = styled.div`
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    display: inline-block;
    font-weight: var(--fw-semibold);
    opacity: 87%;
    transition: 0.2s opacity ease;

    &:not(:last-child) {
      margin-right: 3rem;
    }

    &:hover {
      opacity: 100%;
    }
  }
`

const NavBurger = styled.span`
  cursor: pointer;
  display: inline-block;
`

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const [isOpen, setIsOpen] = useNavDrawer()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <>
      <StyledHeader>
        <Container
          css={`
            background: var(--white);
          `}
        >
          <Nav>
            <div
              css={`
                width: 90px;
                display: flex;
                align-items: center;
                ${mq.sm} {
                  width: 70px;
                }
              `}
            >
              <Link href="/" passHref>
                <a>
                  <img
                    src="/logo2.png"
                    alt="brand logo"
                    css={`
                      width: 100%;
                      height: auto;
                    `}
                  />
                </a>
              </Link>
            </div>
            {isMounted ? (
              <>
                {isMobile ? (
                  <NavBurger onClick={() => setIsOpen(prev => !prev)}>
                    <AiOutlineMenu size="1.5rem" />
                  </NavBurger>
                ) : (
                  <div
                    css={`
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <SocialMediaBar>
                      <a
                        href="https://www.facebook.com/SGPrimary.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillFacebook size="1.5rem" />
                      </a>
                      <a
                        href="https://www.instagram.com/sgprimary/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineInstagram size="1.5rem" />
                      </a>

                      <a href="mailto:hi@sgprimary.com">Contact Us</a>
                    </SocialMediaBar>
                    <NavLinks>
                      <ScrollLink
                        activeClass="active"
                        to="about"
                        smooth={true}
                        offset={-100}
                      >
                        <span
                          css={`
                            cursor: pointer;
                          `}
                        >
                          About Us
                        </span>
                      </ScrollLink>
                      <ScrollLink
                        href="/"
                        activeClass="active"
                        to="plans"
                        smooth={true}
                        offset={-100}
                      >
                        <span
                          css={`
                            cursor: pointer;
                          `}
                        >
                          Subscription Plans
                        </span>
                      </ScrollLink>
                      <ScrollLink
                        href="/"
                        activeClass="active"
                        to="reviews"
                        smooth={true}
                        offset={-100}
                      >
                        <span
                          css={`
                            cursor: pointer;
                          `}
                        >
                          Reviews
                        </span>
                      </ScrollLink>
                    </NavLinks>
                  </div>
                )}
              </>
            ) : null}
          </Nav>
        </Container>
      </StyledHeader>
      <NavDrawer toggled={isOpen} />
    </>
  )
}
