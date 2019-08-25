import React from "react";
import { dimensions, fonts, colors } from "../common/theme";
import { TextField } from "./TextField";
import { Button } from "./Button";

interface IProps {
  onCreateNote: (data: { title: string; body: string }) => void;
}

export function CreateNote(props: IProps) {
  const { onCreateNote } = props;
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const isValidTitle = title.trim().length > 0;
  const isValidBody = body.trim().length;
  const isValidNote = isValidTitle && isValidBody;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isValidNote) {
      setTitle("");
      setBody("");
      onCreateNote({ title, body });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="fields">
      <TextField value={title} label="Title:" required onChange={setTitle} />
      <TextField
        value={body}
        label="Body:"
        textarea
        required
        onChange={setBody}
      />
      <div className="hint">
        Use the form above to create a post. Make sure your full the required
        title and body fields and then press submit
      </div>
      <div className="button">
        <Button submit>Submit</Button>
      </div>
      <style jsx>{`
        .fields {
          display: grid;
          grid-template-rows: auto auto auto auto;
          grid-gap: ${dimensions.gutter};
        }

        .hint {
          font-size: ${fonts.size.verySmall};
          color: ${colors.textSecondary};
        }

        .button {
          align-self: start;
        }
      `}</style>
    </form>
  );
}
