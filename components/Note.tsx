import React from "react";
import { INote } from "../interfaces/INote";
import { fonts, dimensions, colors } from "../common/theme";

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
          <button onClick={handleEditFinish} className="button">
            Finish Edit
          </button>
        ) : (
          <>
            <button
              onClick={handleEnterEditMode}
              className="button button__primary"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteNote}
              className="button button__danger"
            >
              Delete
            </button>
          </>
        )}
      </div>
      <style jsx>{`
        .Note {
          display: flex;
          flex-direction: column;
          border: 1px solid ${colors.textSecondary};
        }

        .header {
          padding: ${dimensions.gutter};

          background-color: ${colors.light};

          font-size: ${fonts.size.large};
          font-weight: ${fonts.weight.bold};
        }

        .body {
          padding: ${dimensions.gutter};

          flex: 1;

          border-width: 1px 0;
          border-style: solid;
          border-color: ${colors.textSecondary};
        }
        .footer {
          padding: ${dimensions.gutterSmall};

          background-color: ${colors.light};
        }

        input,
        textarea {
          width: 100%;
          height: 100%;
          font: inherit;
          background: none;
          border: 1px dashed ${colors.textSecondary};
          outline: none;
          resize: none;
        }

        input:hover,
        textarea:hover {
          border-color: ${colors.primary};
        }

        .button {
          cursor: pointer;
          border: none;
          background: none;
          outline: none;
        }

        .button__primary {
          color: ${colors.primary};
        }

        .button__danger {
          color: ${colors.danger};
        }
      `}</style>
    </div>
  );
}
