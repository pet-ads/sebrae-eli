import type { AvatarProps } from "./types";
import { AvatarImg } from "./styles";

export default function Avatar({ src, alt }: AvatarProps) {
  return <AvatarImg src={src} alt={alt} />;
}