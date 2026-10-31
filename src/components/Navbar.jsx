import { Search, Bell, Plus } from "lucide-react";

function Navbar() {

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">

      {/* Search Bar */}
      <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 w-80">

        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search expenses, groups..."
          className="bg-transparent outline-none ml-3 text-sm w-full"
        />

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Add Expense Button */}
        <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium">

          <Plus size={18} />

          Add Expense

        </button>

        {/* Notification */}
        <button className="text-gray-500 hover:text-violet-600">
          <Bell size={21} />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center font-bold">
            M
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              Manish
            </p>

            <p className="text-xs text-gray-400">
              Student
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;