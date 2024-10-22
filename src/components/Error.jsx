import { useRouteError } from "react-router-dom";
import Header from "./Header"; // Ensure correct default import

const Error = () => {
  const errors = useRouteError();
  console.log(errors);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <Header />
      <div className="text-center mt-10">
        <h1 className="text-6xl font-bold text-orange-500">
          {errors.status || "Oops!"}
        </h1>
        <p className="text-xl text-gray-700 mt-4">
          {errors.statusText || "Something went wrong."}
        </p>
        <img
          className="mt-8 w-full max-w-sm mx-auto"
          src="https://i.pinimg.com/564x/94/4a/f9/944af92b1498751b005c6754aeac5f75.jpg"
          alt="Error illustration"
        />
        <button
          className="mt-10 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default Error;
