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

    const fetchMembersData = async () => {
      try {
        const membersList = await fetchMembers();

        setMembers(membersList);
        console.log(members.length);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembersData();
  }, []);

  return (
    mounted &&
    !loading && (
      <div>
        <p>Miembros </p>
        {}
      </div>
    )
  );
};

export default MemberListForm;
