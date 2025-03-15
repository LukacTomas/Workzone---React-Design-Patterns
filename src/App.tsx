import './App.css';
import { Search } from './components';
import { Layout } from './Layout/Layout.tsx';

function App() {
  const onMovieSearch = (query: string) => {
    console.log(query);
  };

  return (
    <Layout>
      <Search placeholder="Search movie" label="Search" onSearch={onMovieSearch} />
    </Layout>
  );
}

export default App;
