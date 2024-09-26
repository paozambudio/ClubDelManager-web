import React, { useState, useEffect } from "react";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const ConsultasPagos = () => {
  const obtenerMesAnioActual = () => {
    const fecha = new Date();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();
    return { mes, anio };
  };

  // Estado para almacenar el mes y el año
  const [mes, setMes] = useState(obtenerMesAnioActual().mes);
  const [anio, setAnio] = useState(obtenerMesAnioActual().anio);
  const [data, setData] = useState(null); // Para almacenar los datos de la respuesta
  const [error, setError] = useState(null); // Para almacenar cualquier error
  const [filter, setFilter] = useState("all"); // Estado del filtro ('all', 'paid', 'unpaid')

  // Manejar cambios en el combo del mes
  const handleMesChange = (e) => {
    setMes(e.target.value);
  };

  // Manejar cambios en el campo del año
  const handleAnioChange = (e) => {
    setAnio(e.target.value);
  };

  const [membersStatus, setMembersStatus] = useState([]);
  const [paidCount, setPaidCount] = useState(0);
  const [unpaidCount, setUnpaidCount] = useState(0);

  // Función para consultar los pagos
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
      /* const result = await response.json();
      console.log("Resultado: ", result);
      setData(result); */

      const data = await response.json();
      setMembersStatus(data.members_status);
      setPaidCount(data.paid_count);
      setUnpaidCount(data.unpaid_count);
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect para realizar la consulta cuando cambian mes o anio
  useEffect(() => {
    consultarPagos(mes, anio);
  }, [mes, anio]); // Dependencias

  // Filtrar la lista de miembros según el filtro seleccionado
  const filteredMembers = membersStatus.filter((member) => {
    if (filter === "paid") return member.has_paid;
    if (filter === "unpaid") return !member.has_paid;
    return true; // 'all'
  });

  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-xl font-semibold text-sky-800 lg:text-3xl">
        Pago de membresía
      </h1>
      <br />
      <h2 className="  text-gray-600 px-3 py-2">
        Seleccione el período a consultar
      </h2>
      <br />

      <div className="flex items-center gap-4">
        {/* Combo para el mes */}
        <select
          value={mes}
          onChange={handleMesChange}
          className="border bg-gray-100 text-gray-500 px-3 py-2 rounded-lg"
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

        {/* Campo de texto para el año */}
        <input
          type="number"
          value={anio}
          onChange={handleAnioChange}
          className="border bg-gray-100 text-gray-500 px-3 py-2 rounded-lg"
          placeholder="aaaa"
        />
        <div>
          <div>
            <span className="  text-gray-600 px-3 py-2">
              Pagaron cuota: &nbsp;&nbsp;<b>{paidCount}</b>
            </span>
          </div>
          <div>
            <span className="  text-gray-600 px-3 py-2">
              Adeudan cuota: &nbsp;&nbsp;<b>{unpaidCount}</b>
            </span>
          </div>
        </div>
      </div>

      <br />

      {/* Grupo de Radio Buttons para el filtro */}
      <div style={styles.radioFrame}>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="paymentFilter"
            value="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
            style={styles.radioInput}
          />
          Todos
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="paymentFilter"
            value="paid"
            checked={filter === "paid"}
            onChange={() => setFilter("paid")}
            style={styles.radioInput}
          />
          Solo los que cancelaron
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="paymentFilter"
            value="unpaid"
            checked={filter === "unpaid"}
            onChange={() => setFilter("unpaid")}
            style={styles.radioInput}
          />
          Solo los pendientes
        </label>
      </div>
      <br />
      <div>
        <br />
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-100">
            <tr>
              <th
                scope="col"
                class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
              >
                Nombre
              </th>

              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
              >
                Apellido
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
              >
                Estado
              </th>
            </tr>
          </thead>
          <tbody class="bg-silver-800 text-gray-600 divide-y divide-gray-200">
            {filteredMembers.map(
              ({ first_name, last_name, has_paid }, index) => (
                <tr>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {first_name}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {last_name}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {has_paid ? (
                      <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        Cancelado
                      </div>
                    ) : (
                      <div class="inline px-3 py-1 text-sm font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 dark:bg-gray-800">
                        Pendiente
                      </div>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {/* Mostrar datos o error */}
      {/*  {data && <div>{JSON.stringify(data)}</div>} */}

      {/*no pagaron*/}
      {/*{data.unpaid_members.map(({ first_name, last_name }, index) => ())}*/}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ConsultasPagos;

const styles = {
  radioFrame: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #f9f9f9",

    display: "inline-block",
    marginBottom: "20px",
  },
  radioLabel: {
    marginRight: "20px",
    fontSize: "16px",
  },
  radioInput: {
    marginRight: "8px",
  },
};
