import React from "react";
import { INote } from "../interfaces/INote";

interface IProps {
  note: INote;
  onEdit: (note: INote) => void;
  onDelete: (note: INote) => void;
}

export function Note(props: IProps) {
  const { note, onEdit, onDelete } = props;
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [editableTitle, setEditableTitle] = React.useState(note.title);
  const [editableBody, setEditableBody] = React.useState(note.title);

  function handleDeleteNote() {
    onDelete(note);
  }

  function handleEnterEditMode() {
    setEditableTitle(note.title);
    setEditableBody(note.body);
    setIsEditMode(true);
  }

  function handleEditFinish() {
    setIsEditMode(false);
    onEdit({ id: note.id, title: editableTitle, body: editableBody });
  }

  function handleChangeEditableTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setEditableTitle(e.target.value);
  }

  function handleChangeEditableBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setEditableBody(e.target.value);
  }

  return (
    <div className="Note">
      <div className="header">
        {isEditMode ? (
          <input
            type="text"
            value={editableTitle}
            onChange={handleChangeEditableTitle}
          />
        ) : (
          note.title
        )}
      </div>
      <div className="body">
        {isEditMode ? (
          <textarea value={editableBody} onChange={handleChangeEditableBody} />
        ) : (
          note.body
        )}
      </div>
      <div className="footer">
        {isEditMode ? (
          <button onClick={handleEditFinish}>Finish Edit</button>
        ) : (
          <>
            <button onClick={handleEnterEditMode}>Edit</button>
            <button onClick={handleDeleteNote}>Delete</button>
          </>
        )}
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
