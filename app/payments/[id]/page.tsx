"use client";

import PaymentSummary from "../../../components/homeMiembros/PaymentSummary";

const ConsultaPagos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Resumen de Pagos</h1>

      <PaymentSummary />
    </div>
  );
};

export default ConsultaPagos;
