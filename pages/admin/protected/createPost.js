import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function createPost() {
  const [content, setContent] = useState("<h1>hello</h1>");
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const editor = useRef(null);
  return (
    <div>
      <h1>create post</h1>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          console.log(newContent);
        }}
      />
    </div>
  );
}
