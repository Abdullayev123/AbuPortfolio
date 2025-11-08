import * as LucideIcons from "lucide-react";
import * as SimpleIcons from "react-icons/si";
import * as simpleIconsData from "simple-icons"; // provides brand colors

interface DynamicIconProps {
  iconName: string;
  size?: number;
  color?: string; // optional override
}

const DynamicIcon = ({ iconName, size = 48, color }: DynamicIconProps) => {
  // Try Lucide icons first
  const LucideIcon = (LucideIcons as any)[iconName];
  if (LucideIcon) {
    return <LucideIcon size={size} color={color || "currentColor"} />;
  }

  // Then try Simple Icons (brand icons)
  const SimpleIcon = (SimpleIcons as any)[`Si${iconName}`];
  if (SimpleIcon) {
    // Get brand color from simple-icons package
    const brandKey = Object.keys(simpleIconsData).find(
      (key) => key.toLowerCase() === iconName.toLowerCase()
    );
    const brand = brandKey ? (simpleIconsData as any)[brandKey] : null;
    const brandColor = brand?.hex ? `#${brand.hex}` : color || "currentColor";

    return <SimpleIcon size={size} color={color || brandColor} />;
  }

  // Fallback if nothing matches
  const Fallback = (LucideIcons as any)["HelpCircle"];
  return <Fallback size={size} color="gray" />;
};

export default DynamicIcon;
