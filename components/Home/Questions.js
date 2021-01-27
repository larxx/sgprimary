import Image from 'next/image'
import styled from 'styled-components'
import Container from '../Container'
import * as mq from 'styles/mediaQueries'

const StyledQuestions = styled.section`
  padding: 5rem 0;
  background: var(--color-primary);
  ${mq.sm} {
    padding: 3rem 0 0 0;
  }
`

const QuestionDetails = styled.div`
  ${mq.sm} {
    order: 1;
    padding-bottom: 2rem;
  }
`

const InnerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mq.sm} {
    flex-wrap: wrap;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0;
  color: var(--white);
  ${mq.sm} {
    text-align: center;
  }
`

const SectionPara = styled.p`
  color: var(--offwhite);
  max-width: 70%;
  font-size: 1.2rem;
  ${mq.sm} {
    max-width: 100%;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  width: 400px;
  ${mq.sm} {
    order: 0;
  }
`

export const Questions = () => {
  return (
    <StyledQuestions>
      <Container>
        <InnerSection>
          <QuestionDetails>
            <SectionHeading>Have Questions?</SectionHeading>
            <SectionPara>
              Want to find out how you can get started with our SG Primary
              resources?
            </SectionPara>
            <SectionPara>Drop us an email at EMAILADDRESS today.</SectionPara>
          </QuestionDetails>
          <ImageContainer>
            <Image
              src="/assets/images/questions.png"
              width={370}
              height={250}
            />
          </ImageContainer>
        </InnerSection>
      </Container>
    </StyledQuestions>
  )
}
