const defaultProps = {
  hasBorder: false,
  padding: "large",
};

export default function Section(propsIn) {
  const props = {...defaultProps, ...propsIn};

  return (
    <>
      <section
        className={`section
          ${props.hasBorder ? "section--has-border" : ""}
          ${props.padding ? "section--padding-" + props.padding : ""}
          `}
      >{props.children}</section>

      <style jsx>{`
        .section { padding: 0 20px; }
        .section--padding-large { padding: 30px 20px; }
        .section--padding-small { padding: 20px 20px; }

        @media screen and (min-width: 1024px) {
          .section--padding-large { padding: 70px 0; }
          .section--padding-small { padding: 20px 0; }
        }
        .section--has-border { border-top: 1px solid #e2e2e2; }
      `}</style>
    </>
  )
}
