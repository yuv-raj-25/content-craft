import { Schema, models, model , ObjectId, Document} from "mongoose";

export interface Image extends Document {
    title: string;
    publicId: string;
    transactionType: string;
    secureUrl: string; // Using `string` since URL is typically stored as a string
    width?: number;
    height?: number;
    config?: object; // Represents a generic object
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
      _id: string;
      firstName: string;
      lastName: string; 
    }
    createdAt?: Date;
    updatedAt?: Date;
  }
  

const ImageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: URL,
    required: true,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: URL
  },
  aspectRatio: {
    type: String
  },
  color: {
    type: String
  },
  prompt: {
    type: String
  },
  auther: {
    type: Schema.Types.ObjectId, 
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }


});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
