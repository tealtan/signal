export default (props) => (
  <>
    <div className="container">{props.children}</div>

    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1030px;
        margin: 0 auto;
        padding: 30px 15px;
        padding: 0px 15px;
      }
    `}</style>
  </>
)
