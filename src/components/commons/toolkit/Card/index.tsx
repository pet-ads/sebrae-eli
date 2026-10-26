import type { CardProps } from "./types";
import { Container } from "./styles";

export default function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}