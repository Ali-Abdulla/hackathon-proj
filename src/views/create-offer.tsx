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
                        <HStack>
                            <InputLabel upperText={'Назва компанії'} labelText={'Назва компанії'}/>
                        </HStack>
                    </div>
                </HStack>
            </div>
        </div>
    )
}

export default CreateOffer;