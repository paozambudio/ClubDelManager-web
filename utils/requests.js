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

async function fetchBeneficios() {
  try {
    if (!apiDomain) {
      return null;
    }
    console.log("url en requests:", `${apiDomain}/members/beneficios/}`);
    const res = await fetch(`${apiDomain}/members/beneficios/`);

    if (!res.ok) {
      throw new Error(res.json);
    }
    console.log("beneficios en request:", res);
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { buscarMiembros, fetchMember, fetchMemberbyEmail, fetchBeneficios };
