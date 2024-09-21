import cl from "./styles/App.module.scss";
import { AppRouter } from "./routers";

function App() {
   return (
      <div className={cl.App}>
         <AppRouter />
      </div>
   );
}

export default App;
