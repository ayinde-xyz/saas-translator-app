import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
  name?: string | null;
  picture?: string | null;
  className?: string;
}

const UserAvatar = ({ name, picture, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn(`bg-white  text-black`, className)}>
      {picture && (
        <Image
          alt={name || "User avatar"}
          className="rounded-full"
          height={40}
          width={40}
          src={picture}
        />
      )}

      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg">
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
