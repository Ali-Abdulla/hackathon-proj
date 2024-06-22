import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import ChooseRole from './views/Choose-role';
import AuthoriseDiia from './views/Authorise-diia';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="choose-role" element={<ChooseRole/>}/>
                <Route path="authorise-diia" element={<AuthoriseDiia/>}/>
            </Routes>
        </Router>
    );
}

export default App;
