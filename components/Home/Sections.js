import Image from 'next/image'
import styled from 'styled-components'
import Container from '../Container'
import AppProvidersImages from '../AppProvidersImages'
import * as mq from 'styles/mediaQueries'

const InnerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mq.sm} {
    flex-wrap: wrap;
  }
`

export const Sections = () => {
  return (
    <>
      {/* <section
        css={`
          padding: 3rem 0;
        `}
      >
        <Container>
          <InnerSection>
            <div
              css={`
                width: 600px;
                margin-right: 3rem;
                ${mq.sm} {
                  margin: 0;
                }
              `}
            >
              <Image
                src="/assets/images/laptop.png"
                layout="responsive"
                width={500}
                height={350}
                alt="laptop"
              />
            </div>
            <div
              css={`
                max-width: 500px;
              `}
            >
              <h2
                css={`
                  font-size: 2.2rem;
                  margin-bottom: 0;
                  ${mq.sm} {
                    text-align: center;
                  }
                `}
              >
                Here’s a taste of
                <span
                  css={`
                    color: var(--color-primary);
                  `}
                >
                  {''} what you’ll get on SG Primary
                </span>
              </h2>
              <p
                css={`
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  ${mq.sm} {
                    text-align: center;
                  }
                `}
              >
                Here’s a small sample of what’s available on the app the moment
                you subscribe.
              </p>
              <div
                css={`
                  ${mq.sm} {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                `}
              >
                <AppProvidersImages />
              </div>
            </div>
          </InnerSection>
        </Container>
      </section> */}
      <section
        css={`
          padding: 2rem 0 1rem 0;
          background: var(--offwhite);
        `}
        name="about"
      >
        <Container>
          <InnerSection>
            <div
              css={`
                max-width: 500px;
                ${mq.sm} {
                  order: 1;
                }
              `}
            >
              <h2
                css={`
                  font-size: 2.2rem;
                  margin-bottom: 0;
                  ${mq.sm} {
                    text-align: center;
                  }
                `}
              >
                Our Story
              </h2>
              <p
                css={`
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  max-width: 80%;
                  ${mq.sm} {
                    text-align: center;
                    max-width: 100%;
                  }
                `}
              >
                SG Primary is a community initiative made possible with the
                support of Our SG Fund & IMDA’s Digital Readiness programme.
              </p>
              <p
                css={`
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  max-width: 80%;
                  ${mq.sm} {
                    text-align: center;
                    max-width: 100%;
                  }
                `}
              >
                Our platform came about when a group of parents and educators
                wanted to help families and children gain convenient access to
                resources that could help them progress in their studies at
                their own pace.
              </p>
              <p
                css={`
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  max-width: 80%;
                  ${mq.sm} {
                    text-align: center;
                    max-width: 100%;
                  }
                `}
              >
                Today, we’ve formed a community of teachers, parents, and
                students alike who continue to power this resource.
              </p>
            </div>
            <div
              css={`
                width: 600px;
                ${mq.sm} {
                  order: 0;
                }
              `}
            >
              <Image
                src="/assets/images/story.png"
                layout="responsive"
                width={600}
                height={350}
                alt="book"
              />
            </div>
          </InnerSection>
        </Container>
      </section>
      <section
        css={`
          padding: 5rem 0 5rem 0;
          background: var(--offwhite);
        `}
      >
        <Container>
          <InnerSection>
            <div
              css={`
                width: 600px;
              `}
            >
              <Image
                src="/assets/images/vision.png"
                layout="responsive"
                width={500}
                height={370}
                alt="book"
              />
            </div>
            <div
              css={`
                max-width: 500px;
                margin-left: 2rem;
                ${mq.sm} {
                  margin-left: 0;
                }
              `}
            >
              <h2
                css={`
                  font-size: 2.2rem;
                  margin-bottom: 0;
                  ${mq.sm} {
                    text-align: center;
                  }
                `}
              >
                Our Vision
              </h2>
              <p
                css={`
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  max-width: 80%;
                  ${mq.sm} {
                    text-align: center;
                    max-width: 100%;
                  }
                `}
              >
                Our goal has always been to form an active community of impact
                makers who will help each other on their learning journey,
                maximising every individual’s potential.
              </p>
              <p
                css={`
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  max-width: 80%;
                  ${mq.sm} {
                    text-align: center;
                    max-width: 100%;
                  }
                `}
              >
                That’s why we do our best to make learning resources available
                to anyone, anywhere.
              </p>
            </div>
          </InnerSection>
        </Container>
      </section>
    </>
  )
}
