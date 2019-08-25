import React from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { CreateNote } from "../components/CreateNote";
import { Note } from "../components/Note";
import { INote } from "../interfaces/INote";
import { dimensions } from "../common/theme";

function getNotesFromServer(): ReadonlyArray<INote> {
  return [
    {
      id: "1",
      title: "title",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "11",
      title: "title",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the induing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "1",
      title: "title",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dummnged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "11",
      title: "title",
      body: "Lorem Ipsum is  Ipsum."
    },

    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dumm, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "11",
      title: "title",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },

    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has y with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has y with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has y with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has y with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "2",
      title: "title 2",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has y with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 2"
    },
    {
      id: "11",
      title: "title",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sincnot only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },

    {
      id: "21",
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
      <div className="app">
        <Header />
        <CreateNote onCreateNote={handleCreateNote} />
        <div className="notes">
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
      </div>
      <style jsx>{`
        .app {
          padding: ${dimensions.gutter};

          display: grid;
          grid-auto-flow: row;
          grid-gap: ${dimensions.gutter};
        }

        .notes {
          display: grid;
          grid-auto-rows: minmax(200px, auto);
          grid-auto-flow: dense;

          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: ${dimensions.gutter};
        }

        .notes > :global(*:nth-child(15n + 2)),
        .notes > :global(*:nth-child(15n + 4)),
        .notes > :global(*:nth-child(15n + 7)),
        .notes > :global(*:nth-child(15n + 10)),
        .notes > :global(*:nth-child(15n + 14)) {
          grid-row-end: span 3;
        }

        .notes > :global(*:nth-child(15n + 3)),
        .notes > :global(*:nth-child(15n + 6)),
        .notes > :global(*:nth-child(15n + 9)),
        .notes > :global(*:nth-child(15n + 12)),
        .notes > :global(*:nth-child(15n + 13)) {
          grid-column-end: span 2;
        }

        .notes > :global(*:nth-child(15n + 5)) {
          grid-column-end: auto;
          grid-column: 1/-1;
          grid-row-end: span 2;
        }
      `}</style>
    </Layout>
  );
}

export default Index;
