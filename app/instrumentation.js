import { dbConnect } from "../config/database";

export async function register() {
  await dbConnect();
}
