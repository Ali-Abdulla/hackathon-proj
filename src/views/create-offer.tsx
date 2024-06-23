import Header from '../components/header';
import {HStack} from "../components/HStack";
import {Label30, Label16} from "../components/labels";
import InputLabel from "../components/create-offer/input-label";
import {useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";
import OfferDatabase from '../database/offer-database';
import OfferEntity from '../types/offer';

const CreateOffer = () => {
    const navigate = useNavigate();

    const createOfferMethod = async () => {
        let offers = OfferDatabase.shared.load();
        const newOffer: OfferEntity = {
            id: "12345",
            companyName: "Tech Solutions Inc.",
            identificationCode: "TSI987654321",
            currency: "USD",
            amount: 5000,
            phoneNumber: "+1-800-555-1234",
            serviceType: "Consulting"
        };
        offers.push(newOffer);
        OfferDatabase.shared.save(offers);
        navigate('../')
    }

    return (
        <div>
            <Header/>
            <div style={{paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch'}}>
                <HStack>
                    <button onClick={() => navigate('../')} style={{backgroundColor: 'white', border: '0'}}>
                        <img src="arrow-left.svg" alt="buttonpng"/>
                    </button>
                    <Label30 text='Create offer'/>
                </HStack>
                <Stack gap="1ch">
                    <div style={{marginTop: '3ch'}}>
                        <InputLabel upperText={'Company name'} labelText={'Company name'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Identification code'} labelText={'1111111111'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Currency'} labelText={'USDT'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Amount'} labelText={'Enter amount of tokens'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Phone number'} labelText={'+380 (999) 999-99-99'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Service type'} labelText={'Barbershop services'}/>
                    </div>
                    <button
                        onClick={() => createOfferMethod() }
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
                        <Label16 text='Create offer'/>
                    </button>
                </Stack>
            </div>
        </div>
    )
}

export default CreateOffer;
