import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-screen pb-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to PopX
        </h1>

        <p className="text-gray-400 mb-6">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 mb-3 rounded-md text-white font-medium bg-linear-to-r from-purple-600 to-purple-500"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full py-3 rounded-md font-medium text-purple-700 bg-purple-200"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}