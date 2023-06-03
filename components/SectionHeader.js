export default function SectionHeader(props) {
  return (
    <>
      <h2 id={props.id}>{props.text}</h2>

      <style jsx>{`
        h2 {
          font-size: 3.375rem;
          line-height: 1;
          margin: 0 0 30px 0;
          text-transform: uppercase;
          color: ${props.color};
        }

        @media screen and (min-width: 1024px) {
          h2 {
            font-size: 12.5rem;
            line-height: 0.875;
            margin: 0 0 125px 0;
          }
        }
      `}</style>
    </>
  )
}
