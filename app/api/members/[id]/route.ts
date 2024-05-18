import dbConnect from "../../../../config/database";
import Member from "../../../../models/member";

//GET /api/members/:id
//export const GET = async (request, { params }) => {
export const GET = async () => {
  try {
    await dbConnect();

    //const member = await Member.findById(params.id);
    const member = await Member.find();
    if (!member) return new Response("Miembro no existente", { status: 404 });

    return new Response(JSON.stringify(member), {
      status: 200,
    });
    //return new Response("Hello World", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
