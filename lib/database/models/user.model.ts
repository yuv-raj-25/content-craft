import { Schema, model, models, Document } from "mongoose";

export interface User extends Document {
    clerkId: string; // Unique identifier for the user from Clerk
    email: string;   // Email address of the user
    username: string; // Unique username for the user
    photo: string;   // URL to the user's photo
    firstName?: string; // Optional first name of the user
    lastName?: string;  // Optional last name of the user
    planId?: number;    // Plan ID, defaults to 1 if not provided
    creditBalance?: number; // Credit balance, defaults to 10 if not provided
  }

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email: string) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email),
      message: (props: { value: string }) =>
        `${props.value} is not a valid email!`,
    },
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
