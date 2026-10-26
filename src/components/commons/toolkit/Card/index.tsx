import type { CardProps } from "./types";
import { Container } from "./styles";

export function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}