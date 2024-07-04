"use client";
import Link from "next/link";
import { fetchMembers } from "@/utils/requests";
import { useEffect, useState } from "react";

const MemberListForm = async () => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Entre al list de miembros");

    const fetchMembersData = async () => {
      try {
        const membersList = await fetchMembers();

        setMembers(membersList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembersData();
  }, []);

  return (
    mounted && (
      <div>
        <p>Miembros </p>
        {members.map((uno) => (
          <p key={uno.id}>
            {uno.nombre} {uno.apellido}
          </p>
        ))}
      </div>
    )
  );
};

export default MemberListForm;
