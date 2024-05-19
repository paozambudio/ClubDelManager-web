import { GET } from "../app/api/members/route";
//import { GetById } from "../app/api/members/[id]/route";

async function fetchMembers() {
  try {
    //const res = await fetch("http://localhost:3000/api/members");
    const res = await GET();
    if (!res.ok) {
      throw new Error("Falló");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Fetch single property
async function fetchMember(id) {
  try {
    //const res = await fetch("http://localhost:3000/api/members");
    //const res = await GetById(id);
    const res = await GET();
    if (!res.ok) {
      throw new Error("Falló");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { fetchMembers, fetchMember };
