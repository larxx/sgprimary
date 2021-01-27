import 'normalize.css'
import { NavDrawerProvider } from 'context/NavDrawerContext'
import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <NavDrawerProvider>
        <Component {...pageProps} />
      </NavDrawerProvider>
    </>
  )
}

export default MyApp
