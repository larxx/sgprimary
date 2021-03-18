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

const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
)

const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
)

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
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
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
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </StyledHelloGuest>
  )
}
