import { LayoutDashboard, Wallet } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-5">

      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">

        <div className="bg-violet-600 text-white p-2 rounded-xl">
          <Wallet size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-900">
            HisabBook
          </h1>

          <p className="text-xs text-gray-400">
            Smart Expense Manager
          </p>
        </div>

      </div>

      {/* Navigation */}
      <p className="text-xs font-semibold text-gray-400 uppercase mb-4">
        Menu
      </p>

      <nav>

        <div className="flex items-center gap-3 bg-violet-600 text-white p-3 rounded-xl">

          <LayoutDashboard size={20} />

          <span className="text-sm font-medium">
            Dashboard
          </span>

        </div>

      </nav>

    </div>
  );
}

export default Sidebar;