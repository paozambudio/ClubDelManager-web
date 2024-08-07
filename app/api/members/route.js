import dbConnect from "@/config/database";
import Member from "@/models/Member";
import User from "@/models/User";

const GET = async (request) => {
  try {
    await dbConnect();
    const members = await Member.find({});

    return new Response(JSON.stringify(members), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Someghing went wrong", { status: 500 });
  }
};

const POST = async (request) => {
  try {
    await dbConnect();
    //PARA USAR EL USUARIO LOGUEADO
    //const session = await getServerSession(authOptions);
    /*if (!session) {
      return new Response("Unathorized", { status: 401 });
    }
    const userId = session.user.id;
    */
    const formData = await request.formData();

    //1. Guardar usuario
    const userExists = await User.findOne({ email: formData.get("email") });

    console.log("Usuario Existe: ", userExists);

    //3. if not add user to DB
    if (!userExists) {
      //Truncate user name if too long
      const username = formData.get("nombre") + "_" + formData.get("apellido");
      console.log("Usuario: ", formData.get("email"));
      await User.create({
        email: formData.get("email"),
        username,
        //image: profile.picture,
      });
    }

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

    console.log(memberData);
    const newMember = new Member(memberData);
    await newMember.save();

    /* return Response.redirect(
      `${process.env.NEXT_PUBLIC_DOMAIN}/members/${newMember.id}`
    ); */
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add member", { status: 500 });
  }
};

export { GET, POST };
