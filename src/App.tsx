import React from "react";

function Editor() {
  const [text, setText] = React.useState("\\sum_{i = 1}^{infty}");
  return (
    <div className="w-full h-screen">
      <textarea
        className="p-2 w-full h-64 font-mono bg-gray-100"
        style={{ resize: "none" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="p-2 h-full text-lg">{text}</div>
    </div>
  );
}

function App() {
  return <Editor />;
}

export default App;
