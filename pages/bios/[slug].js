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

  return {
    props: {
      bioData,
    },
    revalidate: 60, // regenerate page every 1 min
  }
}

export default function BioPage(response) {
  console.log(response);

  return (
    <>
      <Meta />

      <Bio {...response.bioData} />

      <Script src="https://use.typekit.net/yll6srm.js" />

      <style jsx global>{`
      `}</style>
    </>
  )
}
