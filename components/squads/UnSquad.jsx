const UnSquad = ({ lead, title, description, type }) => {
  return (
    <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
      <div class="flex items-center justify-between">
        <span class="text-sm font-light text-gray-800 dark:text-gray-400">
          {lead}
        </span>
        <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-teal-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {type}
        </span>
      </div>

      <div>
        <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};
export default UnSquad;
