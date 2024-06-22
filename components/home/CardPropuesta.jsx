const CardPropuesta = ({ icono, titulo, descripcion }) => {
  return (
    <div class="p-8 space-y-3 border-2 border-teal-600 dark:border-blue-300 rounded-xl hover:bg-teal-500 ">
      <span class="inline-block text-teal-600 dark:text-blue-400">{icono}</span>

      <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-gray-700">
        {titulo}
      </h1>

      <p class="text-gray-500 dark:text-gray-500">{descripcion}</p>
    </div>
  );
};

export default CardPropuesta;
