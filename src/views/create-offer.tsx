import Header from '../components/header';
import {HStack} from "../components/HStack";
import {Label16Bold, Label30} from "../components/labels";
import InputLabel from "../components/create-offer/input-label";
import {Stack} from "@mui/material";

const CreateOffer = () => {
    return (
        <div>
            <Header/>
            <div style={{paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch'}}>
                <HStack>
                    <div style={{marginRight: 'auto'}}>
                        <Label30 text='Створити оферту'/>
                    </div>
                </HStack>
                <div style={{marginTop: '3ch'}}>
                    <InputLabel upperText={'Назва компанії'} labelText={'Назва компанії'}/>

                </div>
            </div>
        </div>
    )
}

export default CreateOffer;
