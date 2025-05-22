import CodeMirror from "@uiw/react-codemirror";

const EditorWithLineNumbers = () => {
  return (
    <CodeMirror
      value="// start typing..."
      height="600px"
      theme="light"
      basicSetup={{
        lineNumbers: true,
        bracketMatching: true,
        syntaxHighlighting: true,
        highlightActiveLine: true,
      }}
      className="text-xl rounded-md"
    />
  );
};

export default EditorWithLineNumbers;
