import React from 'react'

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

    <style jsx global>{`
      hr {
        height: 0;
        border-top: 1px solid #e2e2e2;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      h2 {
        max-width: 750px;
        margin: 0 0 30px 0;
        font-size: 28px;
        line-height: 40px;
      }

      h3 {
        margin-top: 28px;
        margin-bottom: 3px;
      }

      p {
        color: #333;
        font-size: 16px;
        line-height: 24px;
        max-width: 660px;
      }

      p {
        margin-bottom: 18px;
      }

      @media screen and (min-width: 1024px) {
        p {
          color: #333;
          font-size: 18px;
          line-height: 28px;
          max-width: 660px;
        }

        p {
          margin-bottom: 28px;
        }
      }

      a,
      a:visited {
        color: #000;
        text-decoration: none;
      }
    `}</style>
  </>
)
