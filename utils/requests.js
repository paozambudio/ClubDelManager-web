//import { GET } from "@api/members";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const buscarMiembros = async () => {
  try {
    //const res = await fetch(`http://127.0.0.1:8000/api/members/${filtro}/`);
    //const res = await fetch("http://127.0.0.1:8000/api/members/members/");
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

    const res = await fetch(`${apiDomain}/members/filtro/${email}`);

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

export { buscarMiembros, fetchMembers, fetchMember, fetchMemberbyEmail };
