import { FeedsNavbar } from "../../../widgets/navbar/index";
import { Outlet } from "react-router-dom";
import { Footer } from "../../../widgets/footer";
import cl from "./layout.module.scss";
import { ScrollToTop } from "../../routers";
import { MostPopularPosts } from "../../../widgets/mostPopularPosts/MostPopularPosts";

export const Layout = () => {
   ScrollToTop();

   return (
      <div className={cl.layout}>
         <FeedsNavbar />
         <main className={cl.main}>
            <div className={cl.mainContent}>
               <div className={cl.outlet}>
                  <Outlet />
               </div>
               <div className={cl.sideBar}>
                  <MostPopularPosts />
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
};
