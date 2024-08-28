import { Link } from "react-router-dom";
import { cc_logo_round } from "../assets/images";

type LogoProps = {
  path: string;
  hideText?: boolean;
};

const Logo = ({ path, hideText = true }: LogoProps) => {
  return (
    <Link to={path} className="flex items-center gap-[0.5rem] h-full min-w-fit">
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
