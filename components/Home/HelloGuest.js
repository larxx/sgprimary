import { useState } from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Button from 'components/Button'
import * as mq from 'styles/mediaQueries'

const StyledHelloGuest = styled.section`
  background: var(--color-primary);
  color: var(--white);
  padding: 5rem 0;
  ${mq.sm} {
    padding: 1rem 0;
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
    </StyledHelloGuest>
  )
}
