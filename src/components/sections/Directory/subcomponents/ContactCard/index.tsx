import Card from "../../../../commons/toolkit/Card";
import Avatar from "../../../../commons/toolkit/Avatar";
import Badge from "../../../../commons/toolkit/Badge";
import type { ContactItem } from "../../../../../assets/content/contacts";
import {Header, HeaderInfo, Footer, Name, Role, Bio, Organization, SocialLink} from "./styles";
import LinkedInIcon from "../../../../../assets/icon/contact/linkedin.svg";

type ContactCardProps = Omit<ContactItem, "id" | "categoryId">;

export default function ContactCard({
  badge,
  avatarUrl,
  name,
  role,
  bio,
  organization,
  linkedinUrl,
}: ContactCardProps) {
  return (
    <Card>
      <Badge>{badge}</Badge>

      <Header>
        <Avatar src={avatarUrl} alt={`Foto de perfil de ${name}`} />
        <HeaderInfo>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </HeaderInfo>
      </Header>

      <Bio>{bio}</Bio>

      <Footer>
        <Organization>{organization}</Organization>

        {linkedinUrl && (
          <SocialLink
            href={linkedinUrl}
            aria-label={`Perfil no LinkedIn de ${name}`}
          >
            <img src={LinkedInIcon} alt="LinkedIn" width={20} height={20} />
          </SocialLink>
        )}
      </Footer>
    </Card>
  );
}