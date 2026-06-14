import { logoIconsList } from "../constants";

// Assigning the type to the props
interface LogoIconType {
  name: string;
  imgPath: string;
}

interface LogoIconProps {
  icon: LogoIconType;
}

function LogoIcon({ icon }: { icon: LogoIconType }) {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
}

const LogoSection = () => {
  return (
    <div className="md: my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      {/* The Visible area on the screen */}
      <div className="marquee h-50">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
