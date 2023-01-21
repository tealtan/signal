import React from 'react'

import Meta from '../components/Meta'
import SectionTop from '../components/sections/SectionTop'
import SectionAbout from '../components/sections/SectionAbout'
// import SectionEvents from '../components/sections/SectionEvents'
import SectionRecordings from '../components/sections/SectionRecordings'
import SectionVideos from '../components/sections/SectionVideos'
import SectionGallery from '../components/sections/SectionGallery'
import Footer from '../components/Footer'
import Script from 'next/script'

import client from '../sanityClient'

export async function getStaticProps({ params }) {
  const sectionsData = await client.getDocuments([
    '8f96e3ca-1f81-47f8-98c5-21a5666a26ca', // sectionAbout
  //   'sectionEvents',
    'd3f9076d-5a9c-48bf-93dd-857d9bc95275', // 'sectionVideo',
  //   'sectionContact',
  ]);

  // const eventsData = await client.fetch(
  //   '*[_type == "event" && date > "' +
  //     sectionsData[1].startDate +
  //     '"] | order(date)'
  // )

  const sectionTopData = await client.fetch(
    '*[_type == "sectionTop"]{ ..., "backgroundImage": { "url": backgroundImage.asset->url } }'
  );

  const sectionRecordingsData = await client.fetch(
    '*[_type == "sectionRecordings"]{ ..., "recordings": recordings[]{ ..., "cover": cover.asset->url } }'
  )

  const sectionGalleryData = await client.fetch(
    '*[_type == "sectionGallery"]{ ..., "images": images[]{ _key, "url": asset->url } }'
  )

  console.log(sectionGalleryData);

  return {
    props: {
      sectionsData,
      sectionTopData,
      sectionRecordingsData,
      sectionGalleryData,
      // eventsData,
    },
    revalidate: 60, // regenerate page every 1 min
  }
}

export default function Index(response) {
  return (
    <>
      <Meta />

      <SectionTop {...response.sectionTopData[0]} />
      <SectionAbout {...response.sectionsData[0]} />

      <SectionRecordings {...response.sectionRecordingsData[0]} />
      <SectionVideos {...response.sectionsData[1]} />

      <Script src="https://use.typekit.net/yll6srm.js" />

      <SectionGallery {...response.sectionGalleryData[0]} />
      <Footer />

      <style jsx global>{`
        @font-face {
          font-family: tk-seravek-web-n4;
          src: url(https://use.typekit.net/af/064c42/00000000000000003b9ace31/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/064c42/00000000000000003b9ace31/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format('woff'),
            url(https://use.typekit.net/af/064c42/00000000000000003b9ace31/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format('opentype');
          font-weight: 400;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: tk-seravek-web-i4;
          src: url(https://use.typekit.net/af/5a14d0/00000000000000003b9ace32/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/5a14d0/00000000000000003b9ace32/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
              format('woff'),
            url(https://use.typekit.net/af/5a14d0/00000000000000003b9ace32/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
              format('opentype');
          font-weight: 400;
          font-style: italic;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: tk-seravek-web-n7;
          src: url(https://use.typekit.net/af/41bb90/00000000000000003b9ace44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/41bb90/00000000000000003b9ace44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
              format('woff'),
            url(https://use.typekit.net/af/41bb90/00000000000000003b9ace44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
              format('opentype');
          font-weight: 700;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: tk-seravek-web-i7;
          src: url(https://use.typekit.net/af/73b32b/00000000000000003b9ace35/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/73b32b/00000000000000003b9ace35/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
              format('woff'),
            url(https://use.typekit.net/af/73b32b/00000000000000003b9ace35/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
              format('opentype');
          font-weight: 700;
          font-style: italic;
          font-stretch: normal;
          font-display: auto;
        }

        @font-face {
          font-family: seravek-web;
          src: url(https://use.typekit.net/af/064c42/00000000000000003b9ace31/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/064c42/00000000000000003b9ace31/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format('woff'),
            url(https://use.typekit.net/af/064c42/00000000000000003b9ace31/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format('opentype');
          font-weight: 400;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: seravek-web;
          src: url(https://use.typekit.net/af/5a14d0/00000000000000003b9ace32/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/5a14d0/00000000000000003b9ace32/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
              format('woff'),
            url(https://use.typekit.net/af/5a14d0/00000000000000003b9ace32/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
              format('opentype');
          font-weight: 400;
          font-style: italic;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: seravek-web;
          src: url(https://use.typekit.net/af/41bb90/00000000000000003b9ace44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/41bb90/00000000000000003b9ace44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
              format('woff'),
            url(https://use.typekit.net/af/41bb90/00000000000000003b9ace44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
              format('opentype');
          font-weight: 700;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: seravek-web;
          src: url(https://use.typekit.net/af/73b32b/00000000000000003b9ace35/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
              format('woff2'),
            url(https://use.typekit.net/af/73b32b/00000000000000003b9ace35/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
              format('woff'),
            url(https://use.typekit.net/af/73b32b/00000000000000003b9ace35/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3)
              format('opentype');
          font-weight: 700;
          font-style: italic;
          font-stretch: normal;
          font-display: auto;
        }

        *,
        *:before,
        *:after {
          margin: 0;
          box-sizing: border-box;
          padding: 0;
          border: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          font-family: 'seravek-web', 'Georgia', sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        h1,
        h2,
        h3,
        #mainNav li {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h3 {
          font-size: 24px;
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
          // text-align: right;
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

        /* Sidebar */

        .flex {
          display: flex;
          flex-direction: column;
        }

        @media screen and (min-width: 1024px) {
          .flex {
            flex-direction: row;
            justify-content: space-between;
          }
          .sidebar {
            width: 240px;
          }
        }

        .sidebar span {
          display: block;
          font-size: 13px;
          line-height: 20px;
          color: #666;
          margin-bottom: 20px;
        }

        .sidebar a {
          text-decoration: underline;
          color: #666;
        }

        /* Social Buttons */

        .socialButtons {
          display: flex;
          flex-direction: row;
          gap: 10px;
          margin-bottom: 20px;
        }

        .socialButtons img {
          max-width: 100%;
          max-height: 100%;
        }

        .socialButtons a {
          display: block;
          width: 50px;
          height: 50px;
          background-color: #000;
          border-radius: 25px;
        }

        .socialButtons a {
          transition: opacity 0.2s;
        }

        .socialButtons a:hover {
          opacity: 0.8;
        }

        /* Drawer Utilities */

        .drawer {
          cursor: pointer;
        }

        .drawerContents {
          cursor: default;
          width: 100%;
          height: auto;
          overflow: hidden;
          transition: height 0.5s;
        }

        .drawerClosed .drawerContents {
          height: 0;
        }

        .drawerClosed .drawerToggle {
          transform: rotate(0deg);
        }

        .drawerToggle {
          float: right;
          width: 50px;
          height: 50px;
          margin: -15px -15px 0 0;
          background: url('/images/icon-plus-yellow@2x.png');
          background-size: 100%;
          transform: rotate(45deg);
          transition: transform 0.1s ease-out;
        }

        @media screen and (min-width: 1024px) {
          .drawerToggle {
            width: 50px;
            height: 50px;
            margin: -15px -15px 0 0;
          }
        }

        .drawerToggle:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

/*

      // <Meta />

      // <SectionTop {...response.sectionTopData[0]} />
      // <SectionAbout {...response.sectionsData[0]} />
      <SectionEvents
        eventsList={response.eventsData}
        {...response.sectionsData[1]}
      />
      <SectionRecordings {...response.sectionRecordingsData[0]} />
      <SectionVideos {...response.sectionsData[2]} />
      // <SectionGallery {...response.sectionGalleryData[0]} />
      // <Footer {...response.sectionsData[3]} />

*/
