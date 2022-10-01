import { SparklesIcon } from '@heroicons/react/24/outline';
import Input from './common/Input';
import Post from './Post';

const Feed = () => {
  const POSTS = [
    {
      id: 1,
      name: 'Neeraj Chavan',
      username: 'neeraj_chavan',
      userImg: 'https://www.w3schools.com/howto/img_avatar.png',
      tweetImg: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      tweetText: 'Happy Days!',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      name: 'Daniel Hardman',
      username: 'd_hardman',
      userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      tweetImg: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      tweetText: 'Good day with nature!',
      timestamp: '1 hours ago',
    },
    {
      id: 3,
      name: 'Michael Scofield',
      username: 'g_mike_scoff',
      userImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      tweetImg: 'https://images.unsplash.com/photo-1593862718882-67f2d0670b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eWVsbG93JTIwZmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      tweetText: 'Yellow flowers',
      timestamp: '30 min ago',
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73x] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-color-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {POSTS.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Feed;
