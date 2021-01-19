import { Route, Switch } from "react-router-dom";
import TopLayout from "./layout/TopLayout";
import FooterLayout from "./layout/FooterLayout";
import Event from "./pages/Event/Event";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Analytics from "./pages/Analytics/Analytics";

const App = () => {
  return (
    <>
      <Switch>
        <TopLayout>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/detail" component={Detail} />
            <Route path="/home" component={Home} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/account" component={Account} />
            <Route path="/" component={Event} />
          </Switch>
        </TopLayout>
      </Switch>
      <FooterLayout />
    </>
  );
};

export default App;
