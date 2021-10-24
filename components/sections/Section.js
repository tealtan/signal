export default function Section(props) {
  return (
    <>
      <section className="section">{props.children}</section>

      <style jsx>{`
        .section {
          padding: 30px 15px;
          border-bottom: 1px solid #e2e2e2;
        }
        @media screen and (min-width: 1024px) {
          .section {
            padding: 70px 0;
          }
        }
      `}</style>
    </>
  )
}
