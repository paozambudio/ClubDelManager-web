"use client";
import { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
const TABLE_HEAD = ["#", "Nombre", "Apellido"];

const PaymentsPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentYear, setCurrentYear] = useState(0);
  const [previousMonth, setPreviousMonth] = useState(0);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await fetch(
          `${apiDomain}/members/payment-status/?payment_period=08-2024`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(
          "URL: ",
          `${apiDomain}/members/payment-status/?payment_period=08-2024`
        );
        const result = await response.json();
        console.log("Resultado: ", result);

        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth(); // getMonth() returns 0-11, where 0 is January and 11 is December
    if (month === 0) {
      month = 12; // If current month is January (0), set month to December (12) and reduce the year by 1
      setCurrentYear(year - 1);
    } else {
      setCurrentYear(year);
    }
    setPreviousMonth(month.toString().padStart(2, "0"));

    fetchPaymentStatus();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const handleChangePeriod = () => {};

  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-sky-800 dark:text-white">
          Pago de membresía
        </h1>
        <br />
        <h2 className="text-lg text-gray-700 dark:text-gray-300">
          Ingrese el período a consultar
        </h2>

        <div className="mt-4 flex items-center space-x-4">
          <select
            value={previousMonth}
            onChange={handleChangePeriod}
            className="block w-30 max-w-xs p-2.5 text-gray-500 bg-slate-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <option value={"00"}>(Mes)</option>
            <option value={"01"}>Enero</option>
            <option value={"02"}>Febrero</option>
            <option value={"03"}>Marzo</option>
            <option value={"04"}>Abril</option>
            <option value={"05"}>Mayo</option>
            <option value={"06"}>Junio</option>
            <option value={"07"}>Julio</option>
            <option value={"08"}>Agosto</option>
            <option value={"09"}>Setiembre</option>
            <option value={"10"}>Octubre</option>
            <option value={"11"}>Noviembre</option>
            <option value={"12"}>Diciembre</option>
          </select>

          <input
            type="text"
            placeholder="aaaa"
            className="block w-20 max-w-xs p-2.5 text-gray-500 bg-slate-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            value={currentYear}
          />
        </div>
      </div>

      <div className="flex h-full w-full overflow-auto ">
        <div className="flex-1 overflow-hidden border border-gray-200 dark:border-gray-200 md:rounded-lg max-w-2xl px-8 py-4 bg-slate-300 rounded-lg shadow-md dark:bg-slate-300">
          <h2 className="font-bold text-sky-500">
            Miembros con la cuota abonada
          </h2>
          <br />
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-slate-300 dark:bg-slate-300 font-bold">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="medium"
                      color="blue-gray"
                      className="font-bold leading-none opacity-70 text-left"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.paid_members.map(({ first_name, last_name }, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-gray-600"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-norma text-gray-600"
                    >
                      {first_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-gray-600"
                    >
                      {last_name}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1 overflow-hidden border border-gray-200 dark:border-gray-200 md:rounded-lg max-w-2xl px-8 py-4 bg-slate-300 rounded-lg shadow-md dark:bg-slate-300">
          <h2 className="font-bold text-red-500">
            Miembros que adeudan la cuota
          </h2>
          <br />
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-slate-300 dark:bg-slate-300 font-bold">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="medium"
                      color="blue-gray"
                      className="font-bold leading-none opacity-70 text-left"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.unpaid_members.map(({ first_name, last_name }, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-gray-600"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-gray-600"
                    >
                      {first_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-gray-600"
                    >
                      {last_name}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentsPage;
