import React from 'react'

import Meta from '../../components/Meta'

import Bio from '../../components/Bio'

import Script from 'next/script'

import client from '../../sanityClient'

export async function getStaticPaths() {
  const pageData = await client.fetch(
    '*[_type == "bio" && defined(slug.current)][].slug.current'
  );

  return {
    paths: pageData.map((page) => ({
      params: { slug: page },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

  const bioData = await client.fetch(
    '*[_type == "bio" && slug.current == "' + params.slug + '"' +
      '][0]'
  )

  const topData = await client.fetch(
    '*[_type == "sectionTop"]{ ..., "backgroundImage": { "url": backgroundImage.asset->url } }'
  )

  return {
    props: {
      bioData,
      topData,
    },
    revalidate: 60, // regenerate page every 1 min
  }
}

export default function BioPage(response) {
  console.log(response);

  return (
    <>
      <Meta />
      <div className="backdrop">
        <div
          className="coverImage"
          style={{
            backgroundImage:
              "url('" +
              response.topData[0].backgroundImage.url +
              '?w=1400&auto=format&q=75' +
              "')",
          }}
        ></div>
      </div>

      <Bio {...response.bioData} />

      <Script src="https://use.typekit.net/yll6srm.js" />

      <style jsx>{`
        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
        }

        .coverImage {
          background-size: cover;
          background-position: center top;
          width: 100%;
          height: 100vh;
        }
      `}</style>

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

        img {
          max-width: 100%;
          height: auto;
        }

        /* For bio page block content */
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        @media screen and (min-width: 720px) {
          h1 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  )
}
