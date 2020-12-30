import React from "react";
import katex from "katex";
import Header from "./Header";
import Help from "./Help";

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
  const [text, setText] = React.useState("\\sum_{n = 1}^{\\infty} \\frac{1}{n}");
  return (
    <div className="flex flex-col items-center space-y-6 mt-8">
      <div className="px-4 py-2 bg-white rounded shadow-md w-11/12 md:w-10/12 lg:w-5/12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold text-gray-800">Math Input</h2>
          <a
            href="https://katex.org/docs/supported.html"
            className="transition-colors duration-300 text-gray-800 hover:text-gray-600 p-1 rounded"
          >
            <Help />
          </a>
        </div>
        <textarea
          className="h-64 sm:h-32 px-2 py-1 md:h-64 font-mono shadow-inner rounded bg-gray-50 w-full"
          spellCheck={false}
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
