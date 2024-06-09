import Image from "next/image";

export default function FotoMember({ foto }) {
  return <Image src={`/${foto}`} width={40} height={40} alt="foto" />;
}
