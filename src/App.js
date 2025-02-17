import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MovieList from './comp/MovieList';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MovieList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
