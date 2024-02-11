import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Appearances from "./pages/Appearances";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
      {
        path: "/appearances",
        element: <Appearances />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
