import { Route, Switch, Redirect } from "react-router-dom";

import AllQuoutes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuoutes />
        </Route>
        <Route path="/quotes/:quoteId" exact>
          <QuoteDetail />
        </Route>
        <Route path="/new-quote" exact>
          <NewQuote />
        </Route>
        <Route path ="*" >
          <NotFound404/>
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
