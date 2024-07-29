const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
import dbConnect from "@/config/database";

const buscarMiembros = async () => {
  try {
    const res = await fetch(`${apiDomain}/members/members/`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Resultado en request", data);
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
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/members/filter/?email=${email}`);

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
async function fetchMemberbyDoc(document_id) {
  try {
    //handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(
      `${apiDomain}/members/filter/?document_id=${document_id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
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

async function fetchEvents(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/members/members/${id}/events`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function puntajeTotal(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/members/members/${id}/total_score`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    console.log("puntaje desde request: ", res);
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function ultimaParticipacion(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(
      `${apiDomain}/members/members/${id}/ultima_participacion`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    console.log("puntaje desde request: ", res);
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export {
  buscarMiembros,
  fetchMember,
  fetchMemberbyEmail,
  fetchBeneficios,
  fetchEvents,
  puntajeTotal,
  ultimaParticipacion,
  fetchMemberbyDoc,
};
