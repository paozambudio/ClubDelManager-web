import React, { useState, useEffect } from "react";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const ConsultasPagos = () => {
  const obtenerMesAnioActual = () => {
    const fecha = new Date();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();
    return { mes, anio };
  };

  const [mes, setMes] = useState(obtenerMesAnioActual().mes);
  const [anio, setAnio] = useState(obtenerMesAnioActual().anio);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleMesChange = (e) => setMes(e.target.value);
  const handleAnioChange = (e) => setAnio(e.target.value);

  const [membersStatus, setMembersStatus] = useState([]);
  const [paidCount, setPaidCount] = useState(0);
  const [unpaidCount, setUnpaidCount] = useState(0);

  const consultarPagos = async (mes, anio) => {
    const periodo = `${mes}-${anio}`;
    console.log("Consultando pagos para el período:", periodo);

    try {
      const response = await fetch(
        `${apiDomain}/members/payment-status-full/?payment_period=${periodo}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMembersStatus(data.members_status);
      setPaidCount(data.paid_count);
      setUnpaidCount(data.unpaid_count);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    consultarPagos(mes, anio);
  }, [mes, anio]);

  const filteredMembers = membersStatus.filter((member) => {
    if (filter === "paid") return member.has_paid;
    if (filter === "unpaid") return !member.has_paid;
    return true;
  });

  return (
    <div className="container px-4 py-6 mx-auto">
      <h1 className="text-lg font-semibold text-sky-800 lg:text-3xl">
        Pago de membresía
      </h1>
      <br />
      <h2 className="text-gray-600">Seleccione el período a consultar</h2>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <select
          value={mes}
          onChange={handleMesChange}
          className="border bg-gray-100 text-gray-500 px-3 py-2 rounded-lg w-full md:w-auto"
        >
          <option value="01">Enero</option>
          <option value="02">Febrero</option>
          <option value="03">Marzo</option>
          <option value="04">Abril</option>
          <option value="05">Mayo</option>
          <option value="06">Junio</option>
          <option value="07">Julio</option>
          <option value="08">Agosto</option>
          <option value="09">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>

        <input
          type="number"
          value={anio}
          onChange={handleAnioChange}
          className="border bg-gray-100 text-gray-500 px-3 py-2 rounded-lg w-full md:w-auto"
          placeholder="aaaa"
        />

        <div className="text-gray-600">
          <div>
            Pagaron cuota: <b>{paidCount}</b>
          </div>
          <div>
            Adeudan cuota: <b>{unpaidCount}</b>
          </div>
        </div>
      </div>

      {/* Grupo de Radio Buttons */}
      <div className="p-4 border rounded-lg bg-gray-100 mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="paymentFilter"
            value="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
            className="mr-2"
          />
          Todos
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="paymentFilter"
            value="paid"
            checked={filter === "paid"}
            onChange={() => setFilter("paid")}
            className="mr-2"
          />
          Solo los que pagaron
        </label>
        <label>
          <input
            type="radio"
            name="paymentFilter"
            value="unpaid"
            checked={filter === "unpaid"}
            onChange={() => setFilter("unpaid")}
            className="mr-2"
          />
          Solo los pendientes
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-500">Nombre</th>
              <th className="px-4 py-2 text-left text-gray-500">Apellido</th>
              <th className="px-4 py-2 text-left text-gray-500">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-600">
            {filteredMembers.map(
              ({ first_name, last_name, has_paid }, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{first_name}</td>
                  <td className="px-4 py-2">{last_name}</td>
                  <td className="px-4 py-2">
                    {has_paid ? (
                      <span className="px-2 py-1 text-sm text-emerald-600 bg-emerald-100 rounded-full">
                        Cancelado
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-sm text-red-600 bg-red-100 rounded-full">
                        Pendiente
                      </span>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ConsultasPagos;
