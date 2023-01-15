import Head from 'next/head'

export default function Meta() {
  return (
    <>
      <Head>
        <title>Ensemble Signal</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Ensemble Signal, described by the New York Times as “one of the most vital groups of its kind,” is a NY-based ensemble dedicated to offering the broadest possible audience access to a diverse range of contemporary works through performance, commissioning, recording, and education."
        />
        <script async src="https://use.typekit.net/yll6srm.js"></script>
      </Head>
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
      `}</style>
    </>
  )
}
