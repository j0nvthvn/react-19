import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { MyRoutes } from "./routers/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
const queryClient = new QueryClient();
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <MyRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
