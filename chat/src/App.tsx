import {
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { router } from "./router/browserRouter";

const queryClient = new QueryClient()

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
