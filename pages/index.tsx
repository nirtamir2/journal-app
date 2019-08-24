import React from "react";
import Header from "../components/Header";
import { Layout } from "../components/Layout";
import { CreateNote } from "../components/CreateNote";
import { Note } from "../components/Note";
import { INote } from "../interfaces/INote";

function getNotesFromServer(): ReadonlyArray<INote> {
  return [
    {
      id: "1",
      title: "title",
      body: "body"
    },
    {
      id: "2",
      title: "title 2",
      body: "body 2"
    }
  ];
}

function Index() {
  const [notes, setNotes] = React.useState<ReadonlyArray<INote>>(() => {
    return getNotesFromServer();
  });
  function handleCreateNote(note: { title: string; body: string }) {
    const newNote = { id: `id_${Math.random()}`, ...note };
    setNotes(notes => {
      return [...notes, newNote];
    });
  }
  function handleEditNote(note: INote) {
    setNotes(notes => {
      return notes.map(n => {
        return n.id === note.id ? note : n;
      });
    });
  }
  function handleDeleteNote(note: INote) {
    setNotes(notes => {
      return notes.filter(n => {
        return n.id !== note.id;
      });
    });
  }
  return (
    <Layout>
      <div>
        <Header />
        <CreateNote onCreateNote={handleCreateNote} />
        {notes.map(note => {
          return (
            <Note
              key={note.id}
              note={note}
              onEdit={handleEditNote}
              onDelete={handleDeleteNote}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default Index;
