import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Button from 'components/Button'
import { BonusGridItem, StyledPlanFeatures } from './Plans'
import * as mq from 'styles/mediaQueries'

const StyledBonusPlans = styled.section`
  background: var(--color-primary);
  padding-bottom: 5rem;
  ${mq.sm} {
    display: none;
  }
`

const BonusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 0;
  ${mq.sm} {
    grid-template-columns: 1fr;
  }
`

export const BonusPlans = () => {
  return (
    <StyledBonusPlans>
      <Container>
        <BonusGrid>
          <BonusGridItem>
            <div className="bonus-item-tag">
              <img src="/assets/icons/free-bonus-badge.png" alt="free bonus" />
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
          <BonusGridItem>
            <div className="bonus-item-tag">
              <img src="/assets/icons/free-bonus-badge.png" alt="free bonus" />
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

          <BonusGridItem>
            <div className="bonus-item-tag">
              <img src="/assets/icons/free-bonus-badge.png" alt="free bonus" />
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
        </BonusGrid>
      </Container>
    </StyledBonusPlans>
  )
}
