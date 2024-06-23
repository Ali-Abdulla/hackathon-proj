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
                    <Label30 text='Створення оферти'/>
                </HStack>
                <Stack gap="1ch">
                    <div style={{marginTop: '3ch'}}>
                        <InputLabel upperText={'Назва компанії'} labelText={'Назва компанії'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Ідентифікаційний код'} labelText={'1111111111'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Валюта'} labelText={'USDT'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Кількість'} labelText={'Введіть кількість токенів'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Телефон'} labelText={'+380 (999) 999-99-99'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Клас послуг'} labelText={'Перукарські послуги'}/>
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
                        <Label16 text='Створити оферту'/>
                    </button>
                </Stack>
            </div>
        </div>
    )
}

export default CreateOffer;
