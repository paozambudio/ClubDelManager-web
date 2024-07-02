const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
import dbConnect from "@/config/database";

const buscarMiembros = async () => {
  try {
    const res = await fetch(`${apiDomain}/members/members/`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    console.log("Resultado", res);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

async function fetchMembers() {
  try {
    //handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }
    //const res = await fetch(`${apiDomain}/members`);
    const res = await fetch("http://127.0.0.1:8000/api/members/members/");
    //const res = await GET();
    //console.log("URL API", `${apiDomain}/members`);
    //const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// fetch single member
async function fetchMember(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/members/members/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

// fetch single member
async function fetchMemberbyEmail(email) {
  try {
    //handle the case where the domain is not available yet
    console.log("Desde request", email);
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/members/filter/?email=${email}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    //console.log("desde request, el member es:", res.json());
    console.log("no dio error desde request");
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

const saveUser = async (request) => {
  try {
    await dbConnect();

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
  } catch (error) {
    console.log(error);
    return new Response("Someghing went wrong", { status: 500 });
  }
};

export {
  buscarMiembros,
  fetchMembers,
  fetchMember,
  fetchMemberbyEmail,
  saveUser,
};
