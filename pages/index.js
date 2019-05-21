import Meta from '../components/meta'
import SectionTop from '../components/sections/SectionTop'
import SectionEvents from '../components/sections/SectionEvents'
import Footer from '../components/Footer'

export default () => (
  <>
    <Meta />

    <SectionTop />
    <SectionEvents />

    <hr />

    <Footer />

    {/*
      Sections:
      ---------
      Header
      About
      Projects
      Events
      People
      Listen
      Gallery
    */}

    <style jsx>{`
      hr {
        height: 0;
        border-top: 1px solid #e2e2e2;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }
    `}</style>
  </>
)
