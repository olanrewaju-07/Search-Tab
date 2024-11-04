import { useState } from "react";

export default function SearchTab() {
  const [activeTab, setActiveTab] = useState("Tabs 1");
  const [searchTerm, setSearchTerm] = useState("");

  const Tabs = ["Tabs 1", "Tabs 2", "Tabs 3"];
  const items = {
    "Tabs 1": ["apple", "banana", "orange", "grape", "kiwi"],
    "Tabs 2": ["carrot", "broccoli", "spinach", "tomato", "cucumber"],
    "Tabs 3": ["dog", "cat", "bird", "fish", "rabbit"],
  };

  const filteredItems = items[activeTab].filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-7 bg-gray-100 rounded-md shadow-lg">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {Tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display Filtered Data */}
      <div className="mt-4 space-y-2">
        {filteredItems.map((item, index) => (
          <div key={index} className="p-2 bg-white rounded-md shadow">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
