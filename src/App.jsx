import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import './App.scss'

import Search from './Components/search'

function App() {
  const client = new QueryClient;
  return (
    <QueryClientProvider client={client}>
    <div className="App">
      
      <Search/>
      </div>
      </QueryClientProvider>
  )
}

export default App
