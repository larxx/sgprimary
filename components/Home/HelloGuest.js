import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useEmblaCarousel } from 'embla-carousel/react'
import Container from '../Container'
import Button from 'components/Button'
import * as mq from 'styles/mediaQueries'

const StyledHelloGuest = styled.section`
  background: var(--color-primary);
  color: var(--white);
  padding: 5rem 0;
  ${mq.sm} {
    padding: 5rem 0;
  }

  .embla {
    position: relative;
    padding: 0;
    max-width: 100%;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -160px;
    ${mq.sm} {
      margin-left: -95px;
    }
  }

  .embla__slide {
    position: relative;
    min-width: 500px;
    margin: 0 2rem;
    ${mq.sm} {
      min-width: 250px;
      margin: 0 1rem;
    }
  }

  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: var(--color-pale-yellow);
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: #fff;
    padding: 10px;
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }

  .embla__button--prev {
    left: 27px;
    top: 150px;
  }

  .embla__button--next {
    right: -345px;
    top: 150px;
  }

  .embla.hello-guest-carousel {
    display: none;
    ${mq.sm} {
      display: initial;
    }
  }
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 1.5rem;
`

const Heading = styled.h2`
  color: var(--white);
  font-size: 2.2rem;
  margin-bottom: 0;
  margin-top: 0;

  ${mq.sm} {
    font-size: 2rem;
    text-align: center;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding-bottom: 1rem;
  ${mq.sm} {
    display: none;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const GridItem = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  h3 {
    text-align: center;
  }

  ${mq.sm} {
    margin: 0 20px;
  }
`

const ImageContainer = styled.div`
  width: 80%;
  padding: 0 1rem;
  margin-bottom: 1rem;
  ${mq.sm} {
    width: 150px;
  }
`

export const HelloGuest = () => {
  const [items] = useState([
    {
      id: 1,
      title: 'Play MCQ Quiz',
      image: 'mcq_quiz.png',
    },
    {
      id: 2,
      title: 'Fill in the Blanks',
      image: 'fill_in.png',
    },
    {
      id: 3,
      title: 'Free Video & Live Lessons',
      image: 'free_lessons.png',
    },
    {
      id: 4,
      title: 'Find a Question',
      image: 'find_a_question.png',
    },
  ])

  const [emblaRef, embla] = useEmblaCarousel({ align: 'center' })

  const onSelect = useCallback(() => {
    if (!embla) return
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <StyledHelloGuest>
      <Container>
        <HeadingContainer>
          <Heading>Hello Guest!</Heading>
          <p
            css={`
              color: var(--white);
            `}
          >
            What would you like to do today?
          </p>
        </HeadingContainer>
        <Grid>
          {items.map(item => (
            <GridItem key={item.id}>
              <ImageContainer>
                <img
                  src={`/assets/images/${item.image}`}
                  alt={item.title}
                  css={`
                    width: 100%;
                    height: auto;
                  `}
                />
              </ImageContainer>
              <h3>{item.title}</h3>
              <Button variant="secondary">
                <a
                  href="https://sgprimary.org/app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEE MORE
                </a>
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <div className="embla hello-guest-carousel">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {items.map(item => (
              <GridItem key={item.id}>
                <ImageContainer>
                  <img
                    src={`/assets/images/${item.image}`}
                    alt={item.title}
                    css={`
                      width: 100%;
                      height: auto;
                    `}
                  />
                </ImageContainer>
                <h3>{item.title}</h3>
                <Button variant="secondary">
                  <a
                    href="https://sgprimary.org/app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SEE MORE
                  </a>
                </Button>
              </GridItem>
            ))}
          </div>
        </div>
      </div>
    </StyledHelloGuest>
  )
}
