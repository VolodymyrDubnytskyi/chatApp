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
} from '@tanstack/react-query';
import { ThemeProvider } from '@/components/ui/theme-provider';

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
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>

  )
}

export default App
