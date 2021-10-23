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
    <Footer />

    <style jsx global>{`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
        font-family: 'seravek-web', 'Georgia', sans-serif;
      }

      /* Content */

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

      figcaption {
        color: #cccccc;
        font-size: 12px;
        text-align: right;
        margin: 5px 5px 0 0;
      }

      .bigText,
      .quoteText p {
        font-size: 22px;
        line-height: 28px;
        font-style: italic;
        font-weight: 700;
        max-width: 750px;
        margin: 0 0 30px 0;
      }

      @media screen and (min-width: 720px) {
        .bigText,
        .quoteText p {
          font-size: 28px;
          line-height: 40px;
        }
      }

      .quoteSource {
        margin-left: 15px;
        text-transform: uppercase;
        font-size: 13px;
        line-height: 16px;
        font-weight: 400;
        font-style: normal;
        display: inline-block;
        color: #999;
      }

      .quote p {
        max-width: 750px;
      }
    `}</style>
  </>
)
