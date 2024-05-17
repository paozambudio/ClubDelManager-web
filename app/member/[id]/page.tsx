"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchMember } from "../../../utils/requests";
import MemberDetail from "../../../components/member/memberDetail";
import member from "../../../models/member";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const MemberPage = () => {
  const { id } = useParams();

  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemberData = async () => {
      if (!id) return;
      try {
        const member: {
          id: Key | null | undefined;
          nombre:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          apellido:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        } = await fetchMember(id);

        setMember(member);
      } catch (error) {
        console.error("Error fetching member: ", error);
      } finally {
        //setLoading(false);
      }
    };
    if (member === null) {
      //fetchMemberData();
    }
  }, [id, member]);

  /*if (!member && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-19">
        No se encontro el miembro
      </h1>
    );
  }*/

  return (
    <>
      <div>
        <p>Estoy dentro del id</p>
      </div>
    </>
  );
};

export default MemberPage;
