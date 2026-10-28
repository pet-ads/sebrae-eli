import ContactCard from './components/sections/Directory/subcomponents/ContactCard';
import { CONTACTS_DATA } from './assets/content/contacts';
import './App.css';

export function App() {
  return (
    <div className="app-container">
      <div className="cards-grid">
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
      </div>
    </div>
  );
}

export default App;