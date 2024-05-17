import Image from "next/image";

export default function MemberDetail({ image }) {
  return (
    <div>
      <p>hola</p>
      <Image src={`/${image}`} alt="" />
    </div>
  );
}
