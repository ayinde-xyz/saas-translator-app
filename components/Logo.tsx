import LogoImage from "@/images/logos/insta.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const Logo = () => {
  return (
    <Link prefetch={false} className="overflow-hidden" href={"/"}>
      <div className="flex items-center h-14 w-72">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center">
          <Image
            src={LogoImage}
            alt="logo"
            className="rounded-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
