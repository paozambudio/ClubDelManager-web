//import { GET } from "@api/members";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

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

export { fetchMembers, fetchMember, fetchMemberbyEmail };
