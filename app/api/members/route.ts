import dbConnect from "../../../config/database";
import Member from "../../../models/member";

//GET /api/members
export const GET = async () => {
  try {
    await dbConnect();

    const members = await Member.find({});
    return new Response(JSON.stringify(members), {
      status: 200,
    });
    //return new Response("Hello World", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
