import styled from 'styled-components'
import * as mq from 'styles/mediaQueries'

const StyledAppProvidersImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  ${mq.sm} {
    margin-bottom: 1.5rem;
  }
`

const StoreImage = styled.a`
  display: block;
  width: 150px;
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    padding: 0;
  }

  :first-of-type {
    margin-bottom: 10px;
  }

  ${mq.sm} {
    width: 120px;
  }
`

const QRImage = styled.div`
  width: 120px;
  margin-left: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ${mq.sm} {
    width: 120px;
  }
`

export default function AppProvidersImages() {
  return (
    <StyledAppProvidersImages>
      <div>
        <StoreImage
          href="https://play.google.com/store/apps/details?id=sg.primary.mcq&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/googleplay.png" alt="Google Playstore" />
        </StoreImage>
        <StoreImage
          href="https://apps.apple.com/sg/app/sg-primary/id1486555960"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/appstore.png" alt="Apple Appstore" />
        </StoreImage>
      </div>
      <QRImage>
        <img src="/assets/icons/new_qr.jpeg" alt="QR Code" />
      </QRImage>
    </StyledAppProvidersImages>
  )
}
