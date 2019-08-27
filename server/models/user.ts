import * as mongoose from "mongoose";
import * as bcrypt from "bcryptjs";

interface IUser extends mongoose.Document {
  userName: string;
  name: string;
  password: string;
  isValidPassword: (password: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre<IUser>("save", async function(next) {
  try {
    const user = this;
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(password: string) {
  try {
    const user = this;
    return await bcrypt.compare(password, user.password);
  } catch (error) {
    throw new Error(error);
  }
};

export const User = mongoose.model<IUser>("user", userSchema);
