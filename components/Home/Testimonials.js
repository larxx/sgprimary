import { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import Image from 'next/image'
import styled from 'styled-components'
import Container from '../Container'
import * as mq from 'styles/mediaQueries'

const StyledTestimonials = styled.section`
  padding: 5rem 0;
  background: var(--color-primary);

  ${mq.sm} {
    padding: 2rem 0;
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
  }

  .embla__button--next {
    right: 27px;
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

export const Testimonials = () => {
  const [persons] = useState([
    {
      id: 1,
      name: 'Ezekiel Chen',
      avatar: 'avatar0.png',
      feedback:
        'SG Primary is great revision for primary school students! All the 10 years series MCQ questions can be found inside! Simply amazing app to help students become better learners and score better in their tests and exams. This is a great educational tool!',
    },
    {
      id: 2,
      name: 'Taehyung Kim',
      avatar: 'avatar2.png',
      feedback:
        "After searching for so long, I've finally found an app that is user friendly and beneficial for my students. With SG Primary MCQ educational app, my pupils can spend less money on 1-on-1 tuition. Kudos to the developers!",
    },
    {
      id: 3,
      name: 'Joshua Foo',
      avatar: 'avatar6.png',
      feedback:
        'SG Primary is an Appsolutely fantastic app for primary school children to learn with just MCQ that provides both formative and summative assessment! Thanks for leveling the field for all Singapore students and I look forward to the quiz benefitting Asia and the world soon! The kids at my home were having fun playing the Maths which will definitely help them study for exams. The English and Chinese modules are what international and local students need.',
    },
    {
      id: 4,
      name: 'Reshna',
      avatar: 'avatar5.png',
      feedback:
        'Teacher recommended. I have gotten better! Please do other languages as well! And also Science. :)',
    },
    {
      id: 5,
      name: 'Rainbow iunicorn',
      avatar: 'avatar3.png',
      feedback:
        'I love this app so much it is a very great initiative to make this app as if students with financial issues want to revise their studies, they could use this app. I really hope there will be a malay MT language . Please note that the app is NOT laggy. It very easy to use this app and also to login.',
    },
    {
      id: 6,
      name: 'Dark Pain',
      avatar: 'avatar8.png',
      feedback:
        'Wonderful app. Helps me to Revise anywhere, Anytime. My PSLE is coming up, So even when I am out, I will be able to get my daily Revision Done! I know that there are some issues here and there, But All in all, This is 1 of my favourite apps to use. To the creators, I want to say a huge thank you for your hard work. Nothing express my gratitude for you.',
    },
    {
      id: 7,
      name: 'Daryl Ng',
      avatar: 'avatar1.png',
      feedback: `This app is a gem. Can let my boys do it on their phone. Plus provide video explaination of answers. Where's the donation button???`,
    },
    {
      id: 8,
      name: 'Hunley Law',
      avatar: 'avatar9.png',
      feedback: `SG Primary provide an excellent fun way for Primary School kids in learning English, Maths and Mandarin through its quiz, MCQ, past exams. It's not only a great Apps for SG Primary School Kids, believe this Apps will also enhance other Asian Countries Primary School Kids in developing higher standard of education in English, Maths and Mandarin.`,
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
    <StyledTestimonials>
      <Container>
        <div>
          <h2
            css={`
              text-align: center;
              font-size: 2.2rem;
              color: var(--white);
              max-width: 60%;
              margin: 0 auto;
              ${mq.sm} {
                max-width: 100%;
                font-size: 2rem;
              }
            `}
          >
            More than 6,000 (and growing) active users on SG Primary every month
          </h2>
        </div>
      </Container>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {persons.map(person => (
              <div
                key={person.id}
                className="embla__slide"
                css={`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  background: var(--white);
                  padding: 2rem 1.5rem;
                `}
              >
                <Image
                  src={`/assets/images/${person.avatar}`}
                  width={100}
                  height={100}
                  alt="avatar"
                />
                <div>
                  <h4
                    css={`
                      text-align: center;
                    `}
                  >
                    {person.name}
                  </h4>
                  <p
                    css={`
                      text-align: center;
                      max-width: 80%;
                      margin: 0 auto;
                      ${mq.sm} {
                        max-width: 100%;
                      }
                    `}
                  >
                    {person.feedback}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </StyledTestimonials>
  )
}
