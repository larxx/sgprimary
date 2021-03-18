import React, { useState } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Button from 'components/Button'
import Container from 'components/Container'
import * as mq from 'styles/mediaQueries'
import { BonusPlans } from './BonusPlans'

// const Container = dynamic(() => import('../Container'))
// const Button = dynamic(() => import('../Button'))

const StyledPlans = styled.section`
  padding: 5rem 0;
  background: var(--offwhite);
  ${mq.sm} {
    padding: 3rem 0;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  margin-top: 0;
  color: var(--text);
  text-align: center;
  ${mq.sm} {
    text-align: center;
  }
`

const PlansHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    max-width: 60%;
    margin: 0 auto;
    ${mq.sm} {
      max-width: 100%;
    }
  }

  ${mq.sm} {
    padding: 0 1rem;
  }
`

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 2.5rem;
  ${mq.sm} {
    grid-template-columns: 1fr;
  }
`

const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: var(--fw-bold);
  }

  .feature-item-tag {
    width: 150px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: auto;
    }
  }
`

const PriceContainer = styled.div`
  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: var(--fw-semibold);
  }

  p:first-of-type {
    text-decoration: line-through;
  }
`

export const StyledPlanFeatures = styled.div`
  margin-top: 1rem;

  .feature-item {
    display: flex;
    align-items: center;

    .feature-item-text {
      font-size: 0.9rem;
    }

    .feature-item-img {
      width: 24px;
      margin-right: 8px;
      margin-top: 6px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`

export const BonusGridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ mobile }) => (mobile ? `20px` : `-18px`)};

  h2 {
    font-weight: var(--fw-bold);
  }

  .bonus-item-tag {
    width: 120px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: auto;
    }
  }
`

const PlanFeatures = ({ features }) => {
  return (
    <StyledPlanFeatures>
      {features.map(feature => {
        return feature.type === 'check' ? (
          <div className="feature-item" key={feature.id}>
            <div className="feature-item-img">
              <img src="/assets/icons/check-icon.png" alt="check" />
            </div>
            <span className="feature-item-text">{feature.text}</span>
          </div>
        ) : (
          <div className="feature-item" key={feature.id}>
            <div className="feature-item-img">
              <img src="/assets/icons/x-icon.png" alt="x" />
            </div>
            <span className="feature-item-text">{feature.text}</span>
          </div>
        )
      })}
    </StyledPlanFeatures>
  )
}

export const Plans = () => {
  const [basicFeatures] = useState([
    {
      id: 1,
      text: 'Automark Multiple Choice Questions',
      type: 'check',
    },
    {
      id: 2,
      text: '4000+ English MCQ explanations',
      type: 'x',
    },
    {
      id: 3,
      text: '2000+ Math MCQ explanations',
      type: 'x',
    },
    {
      id: 4,
      text: '2000+ Math Problem Sums Solutions',
      type: 'x',
    },
    {
      id: 5,
      text: 'Daily Activity Report',
      type: 'x',
    },
    {
      id: 6,
      text: 'Performance Tracked by Subject',
      type: 'x',
    },
  ])
  const [plusFeatures] = useState([
    {
      id: 1,
      text: 'Automark Multiple Choice Questions',
      type: 'check',
    },
    {
      id: 2,
      text: '4000+ English MCQ explanations',
      type: 'check',
    },
    {
      id: 3,
      text: '2000+ Math MCQ explanations',
      type: 'check',
    },
    {
      id: 4,
      text: '2000+ Math Problem Sums Solutions',
      type: 'check',
    },
    {
      id: 5,
      text: 'Daily Activity Report',
      type: 'x',
    },
    {
      id: 6,
      text: 'Performance Tracked by Subject',
      type: 'x',
    },
  ])
  const [proFeatures] = useState([
    {
      id: 1,
      text: 'Automark Multiple Choice Questions',
      type: 'check',
    },
    {
      id: 2,
      text: '4000+ English MCQ explanations',
      type: 'check',
    },
    {
      id: 3,
      text: '2000+ Math MCQ explanations',
      type: 'check',
    },
    {
      id: 4,
      text: '2000+ Math Problem Sums Solutions',
      type: 'check',
    },
    {
      id: 5,
      text: 'Daily Activity Report',
      type: 'check',
    },
    {
      id: 6,
      text: 'Performance Tracked by Subject',
      type: 'check',
    },
  ])

  const isMobile = useMediaQuery({ maxWidth: 600 })

  return (
    <>
      <StyledPlans name="plans">
        <Container
          css={`
            ${mq.sm} {
              max-width: 100%;
              width: 100%;
              padding: 0;
            }
          `}
        >
          <PlansHeader>
            <SectionHeading>Want More?</SectionHeading>
            <p>
              Choose from our range of subscription plans to unlock key
              functions as well as let your child access more resources from
              Singapore’s top primary schools and educators.
            </p>
          </PlansHeader>
          <PlansGrid>
            <PlanItem>
              <Image
                src="/assets/icons/basic-plan.png"
                width={90}
                height={80}
              />
              <h2>Basic Plan</h2>
              <div className="feature-item-tag">
                <img
                  src="/assets/icons/early-bird-price.png"
                  alt="early bird"
                />
              </div>
              <PriceContainer>
                <p>$4.99/month or $59.88/year</p>
                <p>$2.99/month or $29.99/year</p>
              </PriceContainer>
              <PlanFeatures features={basicFeatures} />
              {isMobile ? (
                <div
                  css={`
                    width: 100%;
                    padding: 0.5rem 0 2rem 0;
                    background: var(--color-primary);
                    margin-top: 1.5rem;
                  `}
                >
                  <BonusGridItem mobile>
                    <div className="bonus-item-tag">
                      <img
                        src="/assets/icons/free-bonus-badge.png"
                        alt="free bonus"
                      />
                    </div>
                    <StyledPlanFeatures>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          Automark Cloze Passages
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          Automark Math Problem Sums
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/x-icon.png" alt="x" />
                        </div>
                        <span className="feature-item-text">
                          2000+ Math Explainer Videos
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/x-icon.png" alt="x" />
                        </div>
                        <span className="feature-item-text">
                          Topic Strength & Weakness Analysis
                        </span>
                      </div>
                    </StyledPlanFeatures>
                    <Button
                      variant="inverse"
                      css={`
                        margin-top: 1.5rem;
                        padding: 10px 20px;
                        border-radius: 10px;
                      `}
                    >
                      <a
                        href=" http://sgprimary.org/app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SUBSCRIBE NOW
                      </a>
                    </Button>
                  </BonusGridItem>
                </div>
              ) : null}
            </PlanItem>
            <PlanItem>
              <Image src="/assets/icons/plus-plan.png" width={90} height={80} />
              <h2>Plus Plan</h2>
              <div className="feature-item-tag">
                <img
                  src="/assets/icons/early-bird-price.png"
                  alt="early bird"
                />
              </div>
              <PriceContainer>
                <p>$19.99/month or $238.88/year</p>
                <p>$4.99/month or $49.99/year</p>
              </PriceContainer>
              <PlanFeatures features={plusFeatures} />
              {isMobile ? (
                <div
                  css={`
                    width: 100%;
                    padding: 0.5rem 0 2rem 0;
                    background: var(--color-primary);
                    margin-top: 1.5rem;
                  `}
                >
                  <BonusGridItem mobile>
                    <div className="bonus-item-tag">
                      <img
                        src="/assets/icons/free-bonus-badge.png"
                        alt="free bonus"
                      />
                    </div>
                    <StyledPlanFeatures>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          Automark Cloze Passages
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          Automark Math Problem Sums
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          2000+ Math Explainer Videos
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/x-icon.png" alt="x" />
                        </div>
                        <span className="feature-item-text">
                          Topic Strength & Weakness Analysis
                        </span>
                      </div>
                    </StyledPlanFeatures>
                    <Button
                      variant="inverse"
                      css={`
                        margin-top: 1.5rem;
                        padding: 10px 20px;
                        border-radius: 10px;
                      `}
                    >
                      <a
                        href=" http://sgprimary.org/app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SUBSCRIBE NOW
                      </a>
                    </Button>
                  </BonusGridItem>
                </div>
              ) : null}
            </PlanItem>
            <PlanItem>
              <Image src="/assets/icons/pro-plan.png" width={90} height={80} />
              <h2>Pro Plan</h2>
              <div className="feature-item-tag">
                <img src="/assets/icons/pre-order-price.png" alt="pre order" />
              </div>
              <PriceContainer>
                <p>$??.??/month or $????.??/year</p>
                <p>$8.99/month or $89.99/year</p>
              </PriceContainer>
              <PlanFeatures features={proFeatures} />
              {isMobile ? (
                <div
                  css={`
                    width: 100%;
                    padding: 0.5rem 0 2rem 0;
                    background: var(--color-primary);
                    margin-top: 1.5rem;
                  `}
                >
                  <BonusGridItem mobile>
                    <div className="bonus-item-tag">
                      <img
                        src="/assets/icons/free-bonus-badge.png"
                        alt="free bonus"
                      />
                    </div>
                    <StyledPlanFeatures>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          Automark Cloze Passages
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          Automark Math Problem Sums
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          2000+ Math Explainer Videos
                        </span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-item-img">
                          <img src="/assets/icons/check-icon.png" alt="check" />
                        </div>
                        <span className="feature-item-text">
                          Topic Strength & Weakness Analysis
                        </span>
                      </div>
                    </StyledPlanFeatures>
                    <Button
                      variant="inverse"
                      css={`
                        margin-top: 1.5rem;
                        padding: 10px 20px;
                        border-radius: 10px;
                      `}
                    >
                      <a
                        href=" http://sgprimary.org/app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SUBSCRIBE NOW
                      </a>
                    </Button>
                  </BonusGridItem>
                </div>
              ) : null}
            </PlanItem>
          </PlansGrid>
        </Container>
      </StyledPlans>
      <BonusPlans />
    </>
  )
}
