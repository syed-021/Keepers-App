import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); // Array of notes
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function addItem(event) {
    event.preventDefault(); // Prevent page refresh
    if (title.trim() !== "" && content.trim() !== "") {
      setNotes((prevNotes) => [
        ...prevNotes,
        { id: Date.now(), title, content },
      ]);
      setTitle(""); // Clear input fields
      setContent("");
    }
  }

  function deleteItem(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea
        title={title}
        content={content}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
        addItem={addItem}
      />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default App;
