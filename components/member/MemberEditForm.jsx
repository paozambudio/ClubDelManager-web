"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { fetchMember } from "@/utils/requests";
import { toast } from "react-toastify";

const MemberEditForm = () => {
  const { id } = useParams();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [fields, setFields] = useState({
    nombre: "",
    apellido: "",
    username: "",
    foto: "",
    provincia: "",
    profesion: "",
    empresa: "",
    rol: "",
    telefono: "",
    email: "",
    linkedin: "",
    otroaporte: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const fetchMemberData = async () => {
      try {
        if (!id) return <h1>No se encontro información</h1>;
        const memberData = await fetchMember(id);

        setFields(memberData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMemberData();
  }, []);

  const notify = (mensaje, error) => {
    if (error) toast.error(mensaje);
    else toast(mensaje);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      console.log("Voy a actualizar: ", id);
      const res = await fetch(`/api/members/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (res.status === 200) {
        //router.push(`/members/${id}`);
        //toast.info("Actualizado");
        notify("Registro actualizado", false);
      } else if (res.status === 401 || res.status === 403) {
        notify("Permission denied", true);
      } else {
        notify("Something went wrong", true);
      }
    } catch (error) {
      console.log(error);
      notify("Something went wrong", true);
    }
  };

  return (
    mounted &&
    !loading && (
      <section className="w-full  px-8 self- py-4 mt-16 bg-gray-400 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="">
          <div className="bg-gray-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl text-justify text-sky-600 font-semibold mb-6">
                Editar datos de {fields.nombre + " " + fields.apellido}
              </h3>

              <div className="mb-4 grid grid-cols-2">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                    placeholder="Ingresá tu nombre"
                    value={fields.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                    placeholder="Ingresá tu apellido"
                    value={fields.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                  placeholder="Ingresá tu email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="otroaporte"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Ingresá el motivo por el que elegiste el club
                </label>
                <textarea
                  id="otroaporte"
                  name="otroaporte"
                  className="border rounded w-full py-2 px-3 bg-gray-100"
                  rows="4"
                  placeholder="Agregá una referencia por lo que accediste ingresar al club"
                  value={fields.otroaporte}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300 p-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Domicilio
                </label>
                <select
                  type="text"
                  id="provincia"
                  name="provincia"
                  className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                  value={fields.provincia}
                  onChange={handleChange}
                >
                  <option value="Otra">Otra</option>
                  <option value="Mendoza">Mendoza</option>
                  <option value="Cordoba">Cordoba</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Santa Fe">Santa Fe</option>
                  <option value="Neuquen">Neuquen</option>
                </select>
                <input
                  type="text"
                  id="profesion"
                  name="profesion"
                  className="border rounded w-full py-2 px-3 mb-2 bg-gray-100"
                  placeholder="Pais"
                  value={fields.profesion}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  ¿Que es lo que te más te interesa del club? (Podés elegir más
                  de una opción)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div>
                    <input
                      type="checkbox"
                      id="intereses_wifi"
                      name="intereses"
                      value="Wifi"
                      className="mr-2"
                    />
                    <label htmlFor="amenity_wifi">Networking</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_kitchen"
                      name="amenities"
                      value="Full Kitchen"
                      className="mr-2"
                    />
                    <label htmlFor="amenity_kitchen">Capacitaciones</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_washer_dryer"
                      name="amenities"
                      value="Washer & Dryer"
                      className="mr-2"
                    />
                    <label htmlFor="amenity_washer_dryer">
                      Encontrarnos presencial
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_free_parking"
                      name="amenities"
                      value="Free Parking"
                      className="mr-2"
                    />
                    <label htmlFor="amenity_free_parking">
                      Conocer de otras industrias
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_pool"
                      name="amenities"
                      value="Swimming Pool"
                      className="mr-2"
                    />
                    <label htmlFor="amenity_pool">Por lo social</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_hot_tub"
                      name="amenities"
                      value="Hot Tub"
                      className="mr-2"
                    />
                    <label htmlFor="amenity_hot_tub">
                      Para hacer contactos
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300  p-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Cuanto estás dispuesto a pagar y frecuencia
                </label>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <label htmlFor="weekly_rate" className="mr-2">
                      Mensual
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="border rounded w-full py-2 px-3 bg-gray-100"
                      value={fields.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="monthly_rate" className="mr-2">
                      Anual
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      className="border rounded w-full py-2 px-3 bg-gray-100"
                      value={fields.linkedin}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="seller_name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="border rounded w-full py-2 px-3 bg-gray-100"
                  placeholder="Empresa actual"
                  value={fields.empresa}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="seller_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Cargo
                </label>
                <input
                  type="text"
                  id="rol"
                  name="rol"
                  className="border rounded w-full py-2 px-3 bg-gray-100"
                  placeholder="Cargo actual"
                  value={fields.rol}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="seller_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="border rounded w-full py-2 px-3 bg-gray-100"
                  placeholder="Teléfono"
                  value={fields.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 bg-gray-200 border-4 border-gray-300 ">
                <label
                  htmlFor="images"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Images (Select up to 4 images)
                </label>
                <input
                  type="file"
                  id="foto"
                  name="foto"
                  className="border rounded w-full py-2 px-3"
                  accept="image/*"
                  multiple
                />
              </div>

              <div className="flex">
                <div className="w-1/3"></div>
                <div className="w-2/3">
                  <Link href="/members" className="">
                    <button
                      className="bg-sky-600  hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Cancelar
                    </button>
                  </Link>

                  <button
                    className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Continuar
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

export default MemberEditForm;
