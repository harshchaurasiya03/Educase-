import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="pt-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create your PopX account
      </h1>

      <div className="space-y-4">
        {[
          "Full Name*",
          "Phone number*",
          "Email address*",
          "Password*",
          "Company name",
        ].map((label, i) => (
          <div key={i}>
            <label className="text-purple-600 text-sm">{label}</label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border rounded-md p-2 mt-1 outline-none"
            />
          </div>
        ))}

        <div>
          <p className="text-sm mb-2">Are you an Agency?*</p>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>

        <button
          onClick={() => navigate("/account")}
          className="w-full py-3 mt-10 text-white rounded-md font-medium bg-linear-to-r from-purple-600 to-purple-500"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}