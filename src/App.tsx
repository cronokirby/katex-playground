import React from "react";
import katex from "katex";

interface KatexProps {
  text: string;
}

function Katex({ text }: KatexProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (ref.current) {
      katex.render(text, ref.current, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [ref, text]);

  return <div ref={ref}></div>;
}

function Editor() {
  const [text, setText] = React.useState("\\sum_{i = 1}^{\\infty}");
  return (
    <div className="w-full h-screen">
      <textarea
        className="p-2 w-full h-64 font-mono bg-gray-100"
        style={{ resize: "none" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <Katex text={text} />
    </div>
  );
}

function App() {
  return <Editor />;
}

export default App;
