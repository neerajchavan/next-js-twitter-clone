import Image from 'next/image';
import React from 'react';
import SideBarMenuItem from './SidebarMenuItem';
import { HomeIcon } from '@heroicons/react/24/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';

const TWITTER_LOGO_URL = `https://help.twitter.com/content/dam/help-twitter/brand/logo.png`;

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover-bg-blue-200">
        <Image src={TWITTER_LOGO_URL} width="40" height="40" />
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:item-start">
        <SideBarMenuItem text="Home" Icon={HomeIcon} />
        <SideBarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            <SideBarMenuItem text="Notification" Icon={BellIcon} />
            <SideBarMenuItem text="Messages" Icon={InboxIcon} />
            <SideBarMenuItem text="Bookmark" Icon={BookmarkIcon} />
            <SideBarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SideBarMenuItem text="Profile" Icon={UserIcon} />
            <SideBarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
          </>
        )}
      </div>

      {/* Tweet Button */}
      {session && (
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
          Tweet
        </button>
      )}

      {session ? (
        <>
          {/* Mini Profile */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              className="h-10 w-10 rounded-full xl:mr-2"
              src={session?.user?.image}
              alt="user-image"
              referrerPolicy="no-refer"
              onClick={signOut}
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{session?.user?.name}</h4>
              <p className="text-gray-500">@{session?.user?.username}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={signIn}
            className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
