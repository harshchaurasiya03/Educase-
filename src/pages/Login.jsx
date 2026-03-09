import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="pt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Signin to your PopX account
      </h1>

      <p className="text-gray-400 mb-6">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="space-y-4">
        <div>
          <label className="text-purple-600 text-sm">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border rounded-md p-2 mt-1 outline-none"
          />
        </div>

        <div>
          <label className="text-purple-600 text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border rounded-md p-2 mt-1 outline-none"
          />
        </div>

        <button
          onClick={() => navigate("/account")}
          className="w-full py-3 rounded-md bg-gray-300 text-gray-600 font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
}