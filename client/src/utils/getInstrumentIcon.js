import { FaDrum, FaMicrophoneAlt } from "react-icons/fa";
import { GiGuitar, GiPianoKeys } from "react-icons/gi";

export function getInstrumentIcon(role) {
  const lower = role.toLowerCase();
  if (lower.includes("drum")) return FaDrum;
  if (lower.includes("vocal")) return FaMicrophoneAlt;
  if (lower.includes("guitar")) return GiGuitar;
  if (lower.includes("keyboard")) return GiPianoKeys;
  return FaMicrophoneAlt; // mặc định
}
