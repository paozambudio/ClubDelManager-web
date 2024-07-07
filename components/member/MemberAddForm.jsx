"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { saveUser } from "@/utils/requests";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const MemberAddForm = () => {
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [fields, setFields] = useState({
    document_id: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    photo: "",
    address_street: "",
    address_number: "",
    address_region: "",
    address_state: "Mendoza",
    address_country: "Argentina",
    linkedin_url: "",
    instagram_url: "",
    profession: "",
    company: "",
    position: "",
    added_value: "",
    membership_reason: "",
    board_member: false,
    board_position: "",
    birthdate: "1990-01-01",
    startdate: "1900-01-01",
    status_active: true,
    photo: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    //si hay objetos dentro
    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");
      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFields((prev) => ({
          ...prev,
          photo: reader.result, // Guarda la imagen como base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const notify = (mensaje, error) => {
    if (error) toast.error(mensaje);
    else toast(mensaje);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //const formData = new FormData(e.target);
      const formData = {
        first_name: fields.first_name,
        last_name: fields.last_name,
        email: fields.email,
        profession: fields.profession,
        position: fields.position,
        phone: fields.phone,
        document_id: fields.document_id,
        address_street: fields.address_street,
        address_number: fields.address_number,
        address_region: fields.address_region,
        address_state: fields.address_state,
        address_country: fields.address_country,
        linkedin_url: fields.linkedin_url,
        instagram_url: fields.instagram_url,
        company: fields.company,
        added_value: fields.added_value,
        membership_reason: fields.membership_reason,
        board_member: fields.board_member,
        board_position: fields.board_position,
        birthdate: fields.birthdate,
        startdate: fields.startdate,
        status_active: fields.status_active,
        photo: fields.photo,
        // Agrega otros campos según sea necesario
      };

      console.log("Voy a cargar uno nuevo ", formData);

      /*const res = await fetch(`/api/members/${id}`, {
        method: "PUT",
        body: formData,
      });*/

      //guardar usuario
      console.log("Voy a guardar el usaurio");
      //saveUser(formData);

      const res = await fetch(`${apiDomain}/members/members/`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        encType: "multipart/form-data",
        body: JSON.stringify(formData),
      });

      if (res.status === 200 || res.status === 201) {
        notify("Registro actualizado", false);
        window.location.replace("/members");
        //router.push("/members"); // Redirige a la página de miembros
      } else if (res.status === 401 || res.status === 403) {
        notify("Error: " + res.mensaje, true);
      } else {
        console.log(res.status);
        notify("Error: " + res.mensaje, true);
      }
    } catch (error) {
      console.log(error);
      notify("Error: " + error.mensaje, true);
    }
  };

  return (
    mounted && (
      <section className="w-full  px-8 self- py-4 mt-16 bg-gray-400 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="">
          <div className="bg-gray-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h3 className="text-md text-justify font-semibold text-sky-600  mb-6">
                Completá tus datos, por favor
              </h3>
              <div className="mb-4 bg-gray-200 border-4 border-gray-300 p-4">
                <h3 className="font-semibold">Datos Personales</h3>
                <br />

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      maxLength="30"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu nombre"
                      value={fields.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      maxLength="30"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu apellido"
                      value={fields.last_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Fecha de Nacimiento
                    </label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder=""
                      value={fields.birthdate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Número de Documento
                    </label>
                    <input
                      type="number"
                      id="document_id"
                      name="document_id"
                      maxLength="20"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá sólo números"
                      value={fields.document_id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300 p-4">
                <h3 className="font-semibold">Datos de usuario</h3>
                <br />

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu email"
                      value={profileEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Número de Celular
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      maxLength="15"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu número de celular"
                      value={fields.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4 bg-gray-200 border-4 border-gray-300 p-4">
                <h3 className="font-semibold">Domicilio</h3>
                <br />

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Calle
                    </label>
                    <input
                      type="text"
                      id="address_street"
                      name="address_street"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu calle"
                      value={fields.address_street}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Número
                    </label>
                    <input
                      type="text"
                      id="address_number"
                      name="address_number"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu número"
                      value={fields.address_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Localidad
                    </label>
                    <input
                      type="text"
                      id="address_region"
                      name="address_region"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu localidad"
                      value={fields.address_region}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Provincia
                    </label>
                    <select
                      type="text"
                      id="address_state"
                      name="address_state"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      value={fields.address_state}
                      onChange={handleChange}
                    >
                      <option value="Otra">Otra</option>
                      <option value="Mendoza">Mendoza</option>
                      <option value="Cordoba">Cordoba</option>
                      <option value="Buenos Aires">Buenos Aires</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Neuquen">Neuquen</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Pais
                    </label>
                    <select
                      type="text"
                      id="address_country"
                      name="address_country"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      value={fields.address_country}
                      onChange={handleChange}
                    >
                      <option value="Otro">Otro</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Chile">Chile</option>
                      <option value="España">España</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Uruguay">Uruguay</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300 p-4">
                <h3 className="font-semibold">Redes Sociales</h3>
                <br />

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Linkedin
                    </label>
                    <input
                      type="text"
                      id="Linkedin_url"
                      name="Linkedin_url"
                      maxLength="100"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu Linkedin"
                      value={fields.Linkedin_url}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Instagram
                    </label>
                    <input
                      type="text"
                      id="instagram_url"
                      name="instagram_url"
                      maxLength="100"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu Instagram"
                      value={fields.instagram_url}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300 p-4">
                <h3 className="font-semibold">
                  Datos Profesionales / Laborales
                </h3>
                <br />
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Profesión
                    </label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      maxLength="50"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu profesión"
                      value={fields.profession}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      maxLength="50"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu empresa"
                      value={fields.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Rol/Cargo
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      maxLength="50"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu cargo actual"
                      value={fields.position}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300 p-4">
                <h3 className="font-semibold">Tu membresía en Club</h3>
                <br />

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Fecha de Ingreso
                    </label>
                    <input
                      type="date"
                      id="startdate"
                      name="startdate"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu fecha al club"
                      value={fields.startdate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Cual es tu área de mayor aporte para el propósito del club
                    </label>
                    <textarea
                      type="text"
                      id="added_value"
                      name="added_value"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu aporte al club"
                      value={fields.added_value}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Tu mayor motivación para entrar el club
                    </label>
                    <textarea
                      type="text"
                      id="membership_reason"
                      name="membership_reason"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá tu principal motivación"
                      value={fields.membership_reason}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="board_member"
                        name="board_member"
                        type="checkbox"
                        value={fields.board_member}
                        checked={fields.board_member}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label for="offers" className="font-medium text-gray-900">
                        ¿Tenés Cargo Directivo?
                      </label>
                      <p className="text-gray-500">
                        Es decir, si sos parte de la comisión directiva del CDM.
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Cargo Directivo
                    </label>
                    <input
                      type="text"
                      id="board_position"
                      name="board_position"
                      maxLength="30"
                      className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                      placeholder="Ingresá si tenes cargo en el club"
                      value={fields.board_position}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300">
                <div>
                  <label
                    for="image"
                    class="block text-gray-700 font-semibold mb-2"
                  >
                    Foto
                  </label>

                  <input
                    type="file"
                    class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-gray-200 border border-gray-200 rounded-lg file:bg-gray-400 file:text-white file:text-sm file:px-4 file:py-1 file:border-none file:rounded-md file:font-bold  placeholder-gray-400/70  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="flex">
                <div className="w-1/3"></div>
                <div className="w-2/3">
                  <Link href="/onBoarding">
                    <button
                      className="bg-sky-600  hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Volver
                    </button>
                  </Link>
                  &nbsp;&nbsp;
                  <button
                    className="bg-sky-600  hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  );
};

export default MemberAddForm;
