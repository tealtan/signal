export default function SectionHeader(props) {
  return (
    <>
      <h2>{props.text}</h2>

      <style jsx>{`
        h2 {
          max-width: none;
          font-size: 54px;
          line-height: 54px;
          margin: 0 0 30px 0;
          text-transform: uppercase;
          color: ${props.color};
        }

        @media screen and (min-width: 1024px) {
          h2 {
            font-size: 200px;
            line-height: 175px;
            margin: 0 0 125px 0;
          }
        }
      `}</style>
    </>
  )
}
