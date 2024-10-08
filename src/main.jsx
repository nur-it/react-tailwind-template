import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// internal imports
import CookieProvider from "./contexts/CookieContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { router } from "./routes";
import "./styles/index.css";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <CookieProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </CookieProvider>
  </QueryClientProvider>
);
