import Container from './Container'

export default () => (
  <>
    <footer>
      <Container>
        <span>{new Date().getFullYear()} Ensemble Signal</span>
      </Container>
    </footer>

    <style jsx>{`
      footer {
        padding: 20px 0;
      }
      footer span {
        font-size: 12px;
        color: #999;
      }
    `}</style>
  </>
)
