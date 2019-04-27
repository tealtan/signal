export default (props) => (
  <>
    <div className="container">
      {props.children}
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }
    `}</style>
  </>
)
