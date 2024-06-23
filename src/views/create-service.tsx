import Header from '../components/header';
import {HStack} from "../components/HStack";
import {Label30, Label16} from "../components/labels";
import InputLabel from "../components/create-offer/input-label";
import {useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";

const CreateService = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <div style={{paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch'}}>
                <HStack>
                    <button onClick={() => navigate('../')} style={{backgroundColor: 'white', border: '0'}}>
                        <img src="arrow-left.svg" alt="buttonpng"/>
                    </button>
                    <Label30 text='Create service'/>
                </HStack>
                <Stack gap="1ch">
                    <div style={{marginTop: '3ch'}}>
                        <InputLabel upperText={'Service name'} labelText={'Detective services'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Description'} labelText={'Detective services'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Currency'} labelText={'USDT'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Amount'} labelText={'Enter amount of tokens'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Duration (after token is minted)'}
                                    labelText={'Select Duration'}/>
                    </div>
                    <div style={{marginTop: '2ch'}}>
                        <InputLabel upperText={'Add photo'} labelText={'Add photo'}/>
                    </div>
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
                        <Label16 text='Create service'/>
                    </button>
                </Stack>
            </div>
        </div>
    )
}

export default CreateService;