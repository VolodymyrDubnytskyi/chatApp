import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { getUser } from './utilities/supabaseMethods';
import { Toaster } from "@/components/ui/sonner"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const user = await getUser();
      if (!user) {
        return redirect('/auth');
      }
      return null;
    },
  },
  {
    path: "auth",
    element: <Auth />,
  },
]);

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>

  )
}

export default App
