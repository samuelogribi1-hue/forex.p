import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-[#0B0F1A] p-4 border-b border-gray-800">
      
      {/* Search */}
      <div className="flex items-center bg-[#1A1F2E] px-4 py-2 rounded-lg w-1/3">
        <Search className="text-gray-400 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search history"
          className="bg-transparent outline-none text-white w-full placeholder-gray-500"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer text-gray-300 hover:text-white" />

        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;