import { Highlight, themes } from "prism-react-renderer";

function CodeBlock({ code, language }) {
  return (
    <Highlight
      language={language}
      theme={themes.vsDark }
      code={code}
      className=""
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className="">
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
              
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default CodeBlock;
