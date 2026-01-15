export default function Signin() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-xs w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          Sign in
        </h1>

        <div className="mt-4">
          <LabelledInput
            label="Username"
            placeholder="harkirat@gmail.com"
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="123456"
          />

          <button
            type="button"
            className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type = "text" }: LabelledInputType) {
  return (
    <div className="pt-4">
      <label className="block mb-2 text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
}
