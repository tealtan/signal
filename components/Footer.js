import Container from './Container'

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <span>{new Date().getFullYear()} Ensemble Signal</span>
        </Container>
      </footer>

      <style jsx>{`
        footer {
          padding: 20px 15px;
        }

        @media screen and (min-width: 1024px) {
          footer {
            padding: 20px 0;
          }
        }

        footer span {
          font-size: 12px;
          color: #999;
        }
      `}</style>
    </>
  )
}
