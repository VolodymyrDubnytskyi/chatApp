import { getUser } from "@/api/get/getUser";
import { CurrentUserChat } from "@/components/custom/Chat/components/CurrentUserChat";
import { Auth } from "@/pages/Auth";
import { Home } from "@/pages/Home";
import {
    createBrowserRouter,
    redirect,
  } from "react-router-dom";

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
      children: [
        {
          path: ":userId",
          element: <CurrentUserChat />,
        },
      ],
    },
    {
      path: "auth",
      element: <Auth />,
    },
  ]);