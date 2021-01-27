import Head from 'next/head'
import {
  Features,
  Hero,
  HelloGuest,
  PromotionalVideo,
  Questions,
  Sections,
  SocialMediaCTA,
  Support,
  Testimonials,
} from 'components/Home'
import Layout from 'components/Layout'

import logoImg from 'public/logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>SG Primary</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="SG Primary is a free mobile/web app for easy learning & revision. You get questions from the top schools’ papers, video lessons,automarking, and more."
        />
        <meta property="og:image" content={logoImg} />
        <meta property="og:title" content="SG Primary" key="ogtitle" />
        <meta property="og:site_name" content="SG Primary" key="ogsitename" />
        <meta
          property="og:description"
          content="SG Primary is a free mobile/web app for easy learning & revision. You get questions from the top schools’ papers, video lessons,automarking, and more."
          key="ogdesc"
        />
      </Head>

      <Layout>
        <Hero />
        <Features />
        <HelloGuest />
        <PromotionalVideo />
        <Testimonials />
        <Sections />
        <SocialMediaCTA />
        <Support />
        <Questions />
      </Layout>
    </>
  )
}
