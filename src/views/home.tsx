import Header from '../components/header';
import {HStack} from "../components/HStack";
import {Label30, Label16, Label48} from "../components/labels";
import InputLabel from "../components/create-offer/input-label";
import {useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";
import OfferDatabase from '../database/offer-database';
import OfferEntity from '../types/offer';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <div style={{paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch', alignItems: 'center'}}>

                <HStack>
                    <Label48 text='Smart Contracts'/>
                </HStack>
                <HStack>
                    <Label48 text="Blockchain services"/>
                </HStack>
                <HStack>
                    <Label48 text="Privacy and reliability"/>
                </HStack>

                <br/>
                <button
                    onClick={() => navigate('../')}
                    style={{
                        backgroundColor: '#1D4ED8',
                        borderWidth: '1px',
                        borderColor: '#1D4ED8',
                        border: '0',
                        width: '462px',
                        height: '46px',
                        borderRadius: '10px',
                        paddingLeft: '8px',
                        marginTop: '3ch',
                        color: 'white',

                    }}>
                    <Label16 text='My offers'/>
                </button>

            </div>

        </div>
    )
}

export default Home;
