import CrestHeader from "./ornaments/crest-header.svg";
import DecorativeDivider from "./ornaments/decorative-divider.svg";
import ImageFrame from "./ornaments/image-frame.svg";
import LargeCorner from "./ornaments/large-corner.svg";
import SmallCorner from "./ornaments/small-corner.svg";
import Medallion from "./ornaments/medallion.svg";
import MedallionCircle from "./ornaments/medallion-circle.svg";

import styles from "./Ornament.module.css";

const ORNAMENTS = {
  "crest-header": CrestHeader,
  "decorative-divider": DecorativeDivider,
  "image-frame": ImageFrame,
  "large-corner": LargeCorner,
  "small-corner": SmallCorner,
  medallion: Medallion,
  "medallion-circle": MedallionCircle,
} as const;

export type OrnamentName = keyof typeof ORNAMENTS;

export default function Ornament({
  name,
  className,
}: {
  name: OrnamentName;
  className?: string;
}) {
  const Svg = ORNAMENTS[name];
  return (
    <span className={`${styles.ornament} ${className ?? ""}`} aria-hidden="true">
      <Svg />
    </span>
  );
}