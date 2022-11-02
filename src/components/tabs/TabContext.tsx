import { useState, useEffect, createContext } from 'react';

interface TabContextInterface {
  children: Node;
  defaultActivePanel: string;
  isUseLocalStorage: boolean;
}

type TabContextType = {
  switchPanel: (newPanel: any) => void;
  activePanel: string | null;
};

const TabContext = createContext<TabContextType | any>('');

const STORAGE_TITLE = 'activeReactTabsPanel';

const TabContextProvider = ({ children, defaultActivePanel, isUseLocalStorage }) => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  let tabValues = {
    activePanel,
    switchPanel: (newPanel) => {
      setActivePanel(newPanel);
      if (isUseLocalStorage) {
        localStorage.setItem(STORAGE_TITLE, newPanel);
      }
    },
  };

  function clearStorage() {
    localStorage.removeItem(STORAGE_TITLE);
  }

  useEffect(() => {
    if (!isUseLocalStorage) {
      clearStorage();
      setActivePanel(defaultActivePanel);
    } else {
      const storagedActivePanel = localStorage.getItem(STORAGE_TITLE);

      setActivePanel(storagedActivePanel);
    }
  }, []);

  return <TabContext.Provider value={tabValues}>{children}</TabContext.Provider>;
};

export { TabContext as default, TabContextProvider };
