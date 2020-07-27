import Meta from '../components/meta'
import SectionTop from '../components/sections/SectionTop'
import SectionAbout from '../components/sections/SectionAbout'
import SectionProjects from '../components/sections/SectionProjects'
import SectionEvents from '../components/sections/SectionEvents'
import SectionPeople from '../components/sections/SectionPeople'
import SectionListen from '../components/sections/SectionListen'
import SectionSupport from '../components/sections/SectionSupport'
import SectionGallery from '../components/sections/SectionGallery'
import Footer from '../components/Footer'

export default () => (
  <>
    <Meta />

    <SectionTop />
    <SectionAbout />
    <SectionProjects />
    <SectionEvents />
    <SectionPeople />
    <SectionListen />
    <SectionSupport />
    <SectionGallery />

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
