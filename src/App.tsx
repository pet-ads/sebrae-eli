import ContactCard from './components/sections/Directory/subcomponents/ContactCard';
import { CONTACTS_DATA } from './assets/content/contacts';

export function App() {
  return (
    <>
      {CONTACTS_DATA.map((item) => (
        <ContactCard
          key={item.id}
          badge={item.badge}
          name={item.name}
          role={item.role}
          bio={item.bio}
          organization={item.organization}
          avatarUrl={item.avatarUrl}
          linkedinUrl={item.linkedinUrl}
        />
      ))}
    </>
  );
}

export default App;