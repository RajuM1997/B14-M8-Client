import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(
  "mongodb+srv://mongo_user:yq8CO5is4OfmGDkb@cluster0.lkvgsgl.mongodb.net/",
);
const db = client.db("mongo_user");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [jwt()],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 7 * 24 * 60 * 60, // Cache duration in seconds (5 minutes)
    },
  },
});
