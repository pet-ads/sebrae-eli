import type { TabsProps } from "./types";
import {TabsContainer, TabButton} from "./styles";

export default function Tabs({ tabs, activeTabId, onTabChange }: TabsProps) {
  return (
    <TabsContainer role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;

        return (
          <TabButton
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            $isActive={isActive}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </TabButton>
        );
      })}
    </TabsContainer>
  );
}