import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import MemberListForm from "@/components/member/MemberListForm";

const MembersPage = async () => {
  return (
    <div>
      <div className="flex items-center gap-x-3 p-20">
        <h2 className="text-lg font-medium text-gray-500 dark:text-white">
          {new Date().toLocaleDateString()} - Somos
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          XXX Miembros
        </span>
        <div className="px-3 py-1 text-xl font-bold text-green-600 bg-green-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          <Link href="/members/add">
            <p>
              <FaPlus />
            </p>
          </Link>
        </div>
      </div>
      <div>
        <MemberListForm />
      </div>
    </div>
  );
};

export default MembersPage;
