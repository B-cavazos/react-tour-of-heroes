import {Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar'
import DashboardPage from "../pages/Dashboard";
import HeroPage from "../pages/Hero";
import HeroesPage from "../pages/Heroes";

const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                 {/* Switch to designate paths */ }
                <Switch>
                    <Route path="/" exact component={DashboardPage} />
                    <Route path="/heroes"  exact component={HeroesPage} />
                    <Route path="/heroes/:heroId"  component={HeroPage} /> 
                </Switch>
            </div>
        </div>
    );
};

export default AppRouter;

// Route to HeroPage component: path is dynamic to include object :parameter