import dbConnect from "@/config/database";
import Member from "@/models/Member";
import { getSessionUser } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

//GET /api/members/4
const GET = async (request, { params }) => {
  try {
    console.log(params.id);
    await dbConnect();
    console.log("ID en route", params.id);
    const member = await Member.findById(params.id);

    if (!member) return new Response("Member not found", { status: 404 });

    return new Response(JSON.stringify(member), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Someghing went wrong", { status: 500 });
  }
};

// PUT api/members/:id
const PUT = async (request, { params }) => {
  try {
    await dbConnect();

    /*const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }*/

    const { id } = params;
    const formData = await request.formData();
    console.log(formData.get("nombre"));
    //Get member to update
    const existingMember = await Member.findById(id);

    console.log("API/PUT: ", formData);

    if (!existingMember) {
      return new Response("Member does not exist", { status: 404 });
    }

    //Verify si pertenece al logueado
    /*if (existingMember.email.toString() !== sessionUser.email) {
      return new Response("Unauthorized", { status: 401 });
    }*/

    const memberData = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      username: formData.get("username"),
      foto: "",
      provincia: formData.get("provincia"),
      profesion: formData.get("profesion"),
      empresa: formData.get("empresa"),
      rol: formData.get("rol"),
      telefono: formData.get("telefono"),
      email: formData.get("email"),
      linkedin: formData.get("linkedin"),
      otroaporte: formData.get("otroaporte"),
    };

    //Update member in DB
    const updatedMember = await Member.findByIdAndUpdate(id, memberData);

    /*return Response.redirect(
      `${process.env.NEXT_PUBLIC_DOMAIN}/members/${newMember.id}`
    );*/
    return new Response(JSON.stringify(updatedMember), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add member", { status: 500 });
  }
};

export { GET, PUT };
