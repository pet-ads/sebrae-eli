import { useState } from "react";
import Tabs from "../../commons/toolkit/Tabs";
import { ContactCard } from "./subcomponents/ContactCard";
import { CATEGORIES_DATA } from "../../../assets/content/categories";
import { CONTACTS_DATA } from "../../../assets/content/contacts";
import * as S from "./styles";

export default function Directory() {
  const [activeTabId, setActiveTabId] = useState<string>(CATEGORIES_DATA[0]?.id ?? "");

  const currentTab = CATEGORIES_DATA.find((tab) => tab.id === activeTabId);

  const filteredContacts = CONTACTS_DATA.filter(
    (contact) => contact.categoryId === activeTabId
  );

  return (
    <S.Container>
      <Tabs
        tabs={CATEGORIES_DATA}
        activeTabId={activeTabId}
        onTabChange={(id) => setActiveTabId(id)}
      />

      <S.Title>{currentTab?.label}</S.Title>

      {filteredContacts.length > 0 ? (
        <S.CardsGrid>
          {filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              badge={contact.badge}
              name={contact.name}
              role={contact.role}
              bio={contact.bio}
              organization={contact.organization}
              avatarUrl={contact.avatarUrl}
              linkedinUrl={contact.linkedinUrl}
            />
          ))}
        </S.CardsGrid>
      ) : (
        <S.EmptyState>
          Nenhum contato cadastrado para esta categoria ainda.
        </S.EmptyState>
      )}
    </S.Container>
  );
}