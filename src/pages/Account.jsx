export default function Account() {
  return (
    <div>
      <h2 className="text-gray-600 font-semibold mb-6">Account Settings</h2>

      <div className="flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-16 h-16 rounded-full"
        />

        <div>
          <h3 className="font-semibold">Marry Doe</h3>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-6 border-b pb-6">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
        Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}