import { createBrowserRouter, Outlet, NavLink } from "react-router";
import { Toaster } from "sonner";
import { LandingPage } from "./components/LandingPage";
import { RecipeTool } from "./components/RecipeTool";
import { CommunityFeed } from "./components/CommunityFeed";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./contexts/AuthContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-[#FEFAF0]">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Toaster position="bottom-center" toastOptions={{
          style: {
            background: '#FEFAF0',
            color: '#8C4B3A',
            border: '2px solid #8C4B3A',
            boxShadow: '4px 4px 0px #8C4B3A',
            borderRadius: '16px',
            fontFamily: "'Itim', cursive, sans-serif"
          }
        }} />
      </div>
    </AuthProvider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "tool", Component: RecipeTool },
      { path: "community", Component: CommunityFeed },
      { path: "profile", Component: Profile },
    ],
  },
]);
