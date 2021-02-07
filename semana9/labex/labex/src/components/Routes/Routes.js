import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'

import Inscrevase from '../Inscrevase/Inscrevase'
import Rotas from '../Rotas/Rotas'


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path = '/'/>
        {/* <Route exact component={Login} path = "/LOGIN" /> */}
        <Route exact component={Inscrevase} path = "/INSCREVA-SE" />
        <Route exact component={Rotas} path = "/ROTAS" />        
      </Switch>
    </Router>
  )
}

export default Routes