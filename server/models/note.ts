import * as mongoose from "mongoose";

interface INote extends mongoose.Document {
  title: string;
  body: string;
  userId: string;
}

const noteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  }
});

export const Note = mongoose.model<INote>("note", noteSchema);
