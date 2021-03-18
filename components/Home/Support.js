import Image from 'next/image'
import styled from 'styled-components'
import Container from '../Container'
import Button from '../Button'
import * as mq from 'styles/mediaQueries'

const StyledSupport = styled.section`
  padding: 5rem 0;
  background: var(--off-white);
  ${mq.sm} {
    padding: 3rem 0 0 0;
  }
`

const SupportDetails = styled.div`
  ${mq.sm} {
    order: 1;
    padding-bottom: 2rem;
    text-align: center;
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
  color: var(--text);
  ${mq.sm} {
    text-align: center;
  }
`

const SectionPara = styled.p`
  color: var(--text);
  max-width: 70%;
  font-size: 1.2rem;
  ${mq.sm} {
    max-width: 100%;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  width: 600px;
  ${mq.sm} {
    order: 0;
  }
`

export const Support = () => {
  return (
    <StyledSupport>
      <Container>
        <InnerSection>
          <SupportDetails>
            <SectionHeading>You Can Support SG Primary Too!</SectionHeading>
            <SectionPara>
              Help us make quality education accessible to every child.
            </SectionPara>
            <SectionPara>
              Make a contribution to our platform so we can continue benefiting
              more students and families with our digital content!
            </SectionPara>
            <Button
              variant="secondary"
              css={`
                margin-top: 1rem;
              `}
            >
              <a
                href="https://sgprimary.org/support-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Us
              </a>
            </Button>
          </SupportDetails>
          <ImageContainer>
            <Image src="/assets/images/support.png" width={700} height={500} />
          </ImageContainer>
        </InnerSection>
      </Container>
    </StyledSupport>
  )
}
