import React, { useState } from "react";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  function handleClick() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            onChange={props.handleTitleChange}
            type="text"
            value={props.title}
          />
        ) : null}

        <textarea
          name="content"
          onClick={handleClick}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={props.handleContentChange}
          value={props.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={props.addItem}>
            <LibraryAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
