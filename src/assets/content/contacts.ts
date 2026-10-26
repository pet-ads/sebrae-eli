export interface ContactItem {
  id: string;
  categoryId: string;
  badge: string;
  name: string;
  role: string;
  bio: string;
  organization: string;
  avatarUrl: string;
  linkedinUrl?: string;
}

export const CONTACTS_DATA: ContactItem[] = [
  {
    id: '1',
    categoryId: 'ambiente-inovacao',
    badge: 'COWORKING',
    name: 'Ana Beatriz Ramos',
    role: 'Gestora de espaço compartilhado',
    bio: 'Cuida da rotina do coworking e apresenta quem chega a quem já está lá dentro',
    organization: 'Sebrae-SP São Carlos',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    id: '2',
    categoryId: 'ambiente-inovacao',
    badge: 'PRÉ-INCUBADORA',
    name: 'Diego Martineli',
    role: 'Coordenador de pré-incubação',
    bio: 'Acompanha as primeiras versões de ideias antes de virarem empresas.',
    organization: 'UFSCar',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    id: '3',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Renata Cardoso',
    role: 'Gerente de incubação',
    bio: 'Orienta negócios nascentes e apoia a estruturação das primeiras vendas.',
    organization: 'ParqTec',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop',
    linkedinUrl: 'https://www.linkedin.com',
  },
];