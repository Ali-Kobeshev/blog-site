import {
   Navigate,
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../layout";
import { ErrorPage } from "../errors/ErrorPage";
import { MyFeed } from "../../pages/my feed/MyFeed";
import { FullPost } from "../../pages/full post/FullPost";
import { WritePost } from "../../pages/write post/WritePost";
import { ProfilePage } from "../../pages/profile/ProfilePage";
import { AllCategories } from "../../pages/all categoties/AllCategories";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
         <Route path="/" element={<Navigate to="/my feed" />} />
         <Route path="/posts/:id" element={<FullPost />} />
         <Route path="/my feed" element={<MyFeed />} />
         <Route path="/all categories" element={<AllCategories />} />
         <Route path="/write new post" element={<WritePost />} />
         <Route path="/profile room" element={<ProfilePage />} />
      </Route>
   )
);

export const AppRouter = () => {
   return (
      <div style={{ height: "100%" }}>
         <RouterProvider router={router} />
      </div>
   );
};
