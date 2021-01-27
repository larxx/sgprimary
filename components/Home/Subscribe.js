import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../Button'
import Container from '../Container'
import * as mq from '../../styles/mediaQueries'

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  ${mq.sm} {
    flex-wrap: wrap;
  }
`

const FormField = styled.div`
  width: 100%;
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ml;
    `}

  &:last-of-type {
    margin-left: 1rem;
  }

  ${mq.sm} {
    margin-top: 1rem;
    &:last-of-type {
      margin-left: 0;
    }
  }
`

const Label = styled.label`
  color: var(--white);
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
  font-weight: var(--fw-semibold);
`

const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 8px 12px;
  @media (max-width: 600px) {
    padding: 12px;
    width: 100%;
  }
`

const Select = styled.select`
  outline: none;
  border: none;
  display: block;
  width: 100%;
  padding: 8px 12px;
`

const TextArea = styled.textarea`
  outline: none;
  border: none;
  resize: none;
  width: 100%;
`

export const Subscribe = () => {
  return (
    <section
      css={`
        padding: 5rem 0;
        background: var(--color-primary);
      `}
    >
      <Container>
        <div
          css={`
            display: flex;
            align-items: center;
            ${mq.md} {
              flex-wrap: wrap;
            }
            ${mq.sm} {
              flex-wrap: wrap;
            }
          `}
        >
          {/* section heading */}
          <div
            css={`
              margin-right: 8rem;
              ${mq.md} {
                margin-right: 0;
              }
              ${mq.sm} {
                margin-right: 0;
              }
            `}
          >
            <h2
              css={`
                font-size: 2.2rem;
                color: var(--white);
              `}
            >
              Download the SG Primary App and Register Now
            </h2>
            <p
              css={`
                font-size: 1.2rem;
                color: var(--offwhite);
              `}
            >
              With SG Primary, your child will discover a new way to revise
              using resources from the top schools in the country, paving the
              way for a brighter academic future.{' '}
            </p>
            <p
              css={`
                font-size: 1.2rem;
                color: var(--offwhite);
              `}
            >
              Subscribe now and you’ll be able to see the difference for
              yourself. You have nothing to lose because it’s free — whereas
              your child has everything to gain!
            </p>
          </div>
          {/* form */}
          <div
            css={`
              ${mq.sm} {
                margin-top: 2rem;
              }
            `}
          >
            <form>
              {/* row */}
              <FormRow>
                <FormField>
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" name="firstname" />
                </FormField>
                <FormField>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" name="lastname" />
                </FormField>
              </FormRow>
              <FormRow>
                <FormField>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" />
                </FormField>
                <FormField>
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input type="text" id="mobile" name="mobile" />
                </FormField>
              </FormRow>
              {/* row */}
              <FormRow>
                <FormField ml={0}>
                  <Label htmlFor="interest">I'm interested in:</Label>
                  <Select name="interest" id="interest">
                    <option value="english">English</option>
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                  </Select>
                </FormField>
              </FormRow>
              {/* row */}
              <FormRow>
                <FormField ml={0}>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></TextArea>
                </FormField>
              </FormRow>
              <FormRow>
                <Button type="submit">Submit</Button>
              </FormRow>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
