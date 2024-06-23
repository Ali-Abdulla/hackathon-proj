import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MyOffers from './views/my-offers';
import CreateOffer from './views/create-offer';
import CreateService from './views/create-service';
import Offer from './views/offer';
import ChooseRole from './views/choose-role';
import AuthoriseDiia from './views/authorise-diia';
import Mint from './views/mint';
import MyAccounts from './views/my-accounts';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MyOffers/>}/> 
                <Route path="create-offer" element={<CreateOffer/>}/>
                <Route path="create-service" element={<CreateService/>}/>
                <Route path="offer/:id" element={<Offer/>}/>
                <Route path="choose-role" element={<ChooseRole/>}/>
                <Route path="authorise-diia" element={<AuthoriseDiia/>}/>
                <Route path="mint" element={<Mint/>}/>
                <Route path="my-accounts" element={<MyAccounts/>}/>
            </Routes>
        </Router>
    );
}

export default App;
