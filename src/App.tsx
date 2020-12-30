import React from "react";
import katex from "katex";
import Header from "./Header";
import Logo from "./Logo";

interface KatexProps {
  text: string;
}

function Katex({ text }: KatexProps) {
  const ref = React.useRef<HTMLParagraphElement | null>(null);
  React.useEffect(() => {
    if (ref.current) {
      katex.render(text, ref.current, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [ref, text]);

  return <p ref={ref}></p>;
}

function Editor() {
  const [text, setText] = React.useState("\\sum_{i = 1}^{\\infty}");
  return (
    <div className="flex flex-col items-center space-y-6 mt-8">
      <div className="px-4 py-2 bg-white rounded shadow-md w-11/12 md:w-10/12 lg:w-5/12">
        <h2 className="mb-4 font-bold text-gray-600">
          Math Input
        </h2>
        <textarea
          className="h-64 sm:h-32 px-2 py-1 md:h-64 font-mono shadow-inner rounded bg-gray-50 w-full"
          style={{ resize: "none" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <div className="text-center w-11/12 md:w-10/12 lg:w-5/12 p-4 bg-white rounded shadow-md">
        <Katex text={text} />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Editor />;
    </>
  );
}

export default App;
