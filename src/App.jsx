import CharacterList from "./views/Characters/List";
import { Switch, Route } from "react-router-dom";

export default function App() {

  return (
      <Switch>
        <Route path='/characters'>
          <CharacterList />
        </Route>
      </Switch>
  )
}
