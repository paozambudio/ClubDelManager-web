import { getServerSession } from "next-auth/next";
import { authOptions, AuthOptions } from "./authOptions";

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return null;
    }

    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
  // Para llamarlo desde donde lo necesito
  //import {getSessionUser} from "@/utils/getSessionUSer";

  //en el cuerpo donde lo necesito
  /* const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    return new Response("User is required", {status:401});
  }
  */
  //DESTRUCTURAR EL USERID
  /* const {userId} = sessionUser; */
};
