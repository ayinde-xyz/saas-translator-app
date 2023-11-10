import { DarkModeToggle } from "@/components/DarkModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import { authOptions } from "@/auth";
import UpgradeBanner from "./UpgradeBanner";

const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <Logo />

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Language select */}

          {/* Session */}
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessageSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href={"/pricing"} prefetch={false}>
              {" "}
              Pricing
            </Link>
          )}

          {/* DarkModeToggle */}
          <DarkModeToggle />

          {/* UserButton */}
          <UserButton session={session} />
        </div>
      </nav>

      {/* Upgrade Banner */}
      <UpgradeBanner />
    </header>
  );
};

export default Header;
