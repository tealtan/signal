import Head from 'next/head'
export default () => (
  <>
    <Head>
      <title>Ensemble Signal</title>
      <meta
        name="description"
        content="Ensemble Signal, described by the New York Times as “one of the most vital groups of its kind,” is a NY-based ensemble dedicated to offering the broadest possible audience access to a diverse range of contemporary works through performance, commissioning, recording, and education."
      />
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://use.typekit.net/yll6srm.css" />
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
        font-family: 'seravek-web', 'Georgia', sans-serif;
      }
      a,
      a:visited {
        color: #000;
        text-decoration: none;
      }
      .event .eventDetails p {
        margin-bottom: 18px;
      }

      @media screen and (max-width: 1024px) {
        .event .eventDetails p {
          margin-bottom: 28px;
        }
      }
    `}</style>
  </>
)
