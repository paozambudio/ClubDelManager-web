import { toast } from "react-toastify";

const notify = (mensaje, error) => {
  if (error) toast.error(mensaje);
  else toast(mensaje);
};
