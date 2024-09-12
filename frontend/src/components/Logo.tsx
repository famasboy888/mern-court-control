import { Link } from "react-router-dom";
import { cc_logo_round } from "../assets/images";

type LogoProps = {
  path: string;
  hideText?: boolean;
  className?: string;
};

const Logo = ({ path, hideText = true, className }: LogoProps) => {
  return (
    <Link
      to={path}
      className={`flex items-center gap-[0.5rem] min-w-fit ${className}`}
    >
      <img src={cc_logo_round} alt="cc" className="h-full" />
      <span
        hidden={hideText}
        className=" text-[clamp(1rem,2vw,1.5rem)] font-bold"
      >
        Court Control
      </span>
    </Link>
  );
};
export default Logo;
