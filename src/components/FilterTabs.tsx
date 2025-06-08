import { cn } from "@/lib/utils";

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "upcoming", label: "Upcoming" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
];

const FilterTabs = ({ activeTab, onTabChange }: FilterTabsProps) => {
  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === tab.id
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
