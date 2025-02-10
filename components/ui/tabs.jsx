import React from "react";

const TabsContext = React.createContext({
  selectedTab: "",
  setSelectedTab: () => {},
});

export const Tabs = ({ value, onValueChange, children, className = "" }) => {
  return (
    <TabsContext.Provider
      value={{ selectedTab: value, setSelectedTab: onValueChange }}
    >
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ className = "", children }) => {
  return (
    <div
      role="tablist"
      className={`inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1 ${className}`}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, className = "" }) => {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext);
  const isSelected = selectedTab === value;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      onClick={() => setSelectedTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 
        ${
          isSelected
            ? "bg-white text-blue-700 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        } 
        ${className}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className = "" }) => {
  const { selectedTab } = React.useContext(TabsContext);

  if (value !== selectedTab) return null;

  return (
    <div
      role="tabpanel"
      className={`mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  );
};
