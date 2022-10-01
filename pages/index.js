import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

export default function Home({ newsResult, randomUsersResults }) {
  return (
    <main className="flex min-h-screen mx-auto">
      {/* Sidebar */}
      <Sidebar />
      <Feed />
      <Widgets
        newsResults={newsResult.articles}
        randomUsersResults={randomUsersResults.results}
      />
      {/* Modal */}
    </main>
  );
}

export async function getServerSideProps() {
  const newsResult = await fetch(
    `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
  ).then((res) => res.json());

  const randomUsersResults = await fetch(
    'https://randomuser.me/api/?results=30&inc=name,login,picture'
  ).then((res) => res.json());

  return {
    props: {
      newsResult,
      randomUsersResults,
    },
  };
}
