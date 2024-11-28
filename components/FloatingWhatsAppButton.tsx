import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "5492613001864"; // Número con código de país
  const message =
    "Hola, me gustaría saber mas sobre el propósito del Club ! ¿Me contás?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-40 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={48} />
    </Link>
  );
};

export default FloatingWhatsAppButton;
