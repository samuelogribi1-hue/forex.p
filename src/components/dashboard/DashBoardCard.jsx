import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

const cards = [
  {
    title: "Total Balance",
    value: "$12,450.00",
    icon: Wallet,
    color: "bg-blue-600",
  },
  {
    title: "Income",
    value: "$3,200.00",
    icon: TrendingUp,
    color: "bg-green-600",
  },
  {
    title: "Expenses",
    value: "$1,850.00",
    icon: TrendingDown,
    color: "bg-red-600",
  },
  {
    title: "Savings",
    value: "$5,600.00",
    icon: PiggyBank,
    color: "bg-purple-600",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
          className="bg-[#1A1F2E] p-5 rounded-xl shadow-lg hover:scale-105 transition border border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{card.title}</p>
                <h2 className="text-2xl font-bold mt-2">{card.value}</h2>
              </div>

              <div className={`p-3 rounded-full ${card.color}`}>
                <Icon className="text-white" size={22} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;