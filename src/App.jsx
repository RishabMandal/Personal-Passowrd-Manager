import "./App.css";
import Header from "./components/Header";
import 'regenerator-runtime/runtime'
// For API query fetch
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const client = new QueryClient();
  return (
    <div className="App">
      {/* <QueryClientProvider client={client}> */}
        <Header />
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
