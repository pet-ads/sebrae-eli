import { useState, useMemo } from "react";
import Tabs from "../../commons/toolkit/Tabs";
import ContactCard from "./subcomponents/ContactCard";
import { CATEGORIES_DATA } from "../../../assets/content/categories";
import { CONTACTS_DATA } from "../../../assets/content/contacts";
import * as S from "./styles";

export default function Directory() {
  const [activeTabId, setActiveTabId] = useState<string>( CATEGORIES_DATA[0]?.id ?? "");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const currentTab = CATEGORIES_DATA.find((tab) => tab.id === activeTabId);

  const filteredContacts = useMemo(() => {
    return CONTACTS_DATA.filter((contact) => {
      const matchesCategory = contact.categoryId === activeTabId;
      const normalizedSearch = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        contact.name.toLowerCase().includes(normalizedSearch) ||
        contact.role.toLowerCase().includes(normalizedSearch) ||
        contact.organization.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeTabId, searchTerm]);

  return (
    <S.Container id="directory">
      <S.TabsContainer>
        <Tabs
          tabs={CATEGORIES_DATA}
          activeTabId={activeTabId}
          onTabChange={(id) => {
            setActiveTabId(id);
            setSearchTerm("")
          }}
        />
      </S.TabsContainer>

      <S.HeaderRow>
        <S.Title>{currentTab?.label}</S.Title>

        <S.SearchWrapper>
          <svg xmlns="http://w3.org" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <S.SearchInput
            type="text"
            placeholder="Pesquisar por nome"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.SearchWrapper>
      </S.HeaderRow>

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
          Nenhum contato encontrado para esta categoria.
        </S.EmptyState>
      )}
    </S.Container>
  );
}