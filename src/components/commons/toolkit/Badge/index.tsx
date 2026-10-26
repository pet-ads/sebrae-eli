import type { BadgeProps } from './types';
import { Container } from './styles';

export default function Badge({ children}: BadgeProps) {
    return <Container>{children}</Container>;
}