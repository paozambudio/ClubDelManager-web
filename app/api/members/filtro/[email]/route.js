import dbConnect from "@/config/database";
import Member from "@/models/Member";

//GET /api/members/filtro/:email
export const GET = async (request, { params }) => {
  try {
    await dbConnect();

    const email = params.email;
    console.log("Desde la api, email: ", email);

    if (!email) {
      return new Response("Email se requiere", { status: 400 });
    }

    const members = await Member.find({ email: email });
    console.log("desde api", members);

    return new Response(JSON.stringify(members), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Someghing went wrong", { status: 500 });
  }
};
