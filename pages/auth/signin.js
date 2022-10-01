import { getProviders, signIn } from 'next-auth/react';

const TWITTER_MOBILE_UI_URL = `https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png`;

const TWITTER_LOGO_URL = `https://help.twitter.com/content/dam/help-twitter/brand/logo.png`;

export default function SignIn({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-10">
      <img
        src={TWITTER_MOBILE_UI_URL}
        alt="mobile-img"
        className="hidden object-cover rotate-6 md:w-44 md:h-80 md:inline-flex"
      />
      <div className="">
        {Object.values(providers).map((provider, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="w-36 object-cover"
              src={TWITTER_LOGO_URL}
              alt="twitter-logo"
            />
            <p className="text-center text-sm italic my-10">
              Made With Love In India
            </p>
            <button
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign In with {provider?.name || ''}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
