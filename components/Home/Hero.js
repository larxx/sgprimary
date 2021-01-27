import Image from 'next/image'
import Container from '../Container'
import AppProvidersImages from '../AppProvidersImages'
import * as mq from 'styles/mediaQueries'

export const Hero = () => {
  return (
    <section
      css={`
        padding: 2rem 0 5rem 0;
        background: var(--color-primary);
        ${mq.sm} {
          padding: 2rem 0;
        }
      `}
    >
      <Container>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${mq.sm} {
              flex-wrap: wrap;
            }
          `}
        >
          <div
            css={`
              margin-right: 5rem;
              ${mq.sm} {
                margin-right: 0;
                order: 1;
              }
            `}
          >
            <h1
              css={`
                color: var(--white);
                font-size: 2.2rem;
                font-weight: var(--fw-bold);
                ${mq.sm} {
                  text-align: center;
                }
              `}
            >
              Fun Learning at Your Fingertips
            </h1>
            <p
              css={`
                color: var(--offwhite);
                font-size: 1.2rem;
                margin-bottom: 2rem;
                ${mq.sm} {
                  text-align: center;
                }
              `}
            >
              SG Primary is a free mobile/web app for easy learning & revision.
              You get questions from the top schools’ papers, video lessons,
              automarking, and more.
            </p>
            <div
              css={`
                display: flex;
                ${mq.sm} {
                  justify-content: center;
                }
              `}
            >
              <AppProvidersImages />
            </div>
          </div>
          <div
            css={`
              width: 1200px;
              ${mq.sm} {
                order: 0;
              }
            `}
          >
            <Image
              src="/assets/images/new_hero.png"
              layout="responsive"
              width={600}
              height={350}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
