import { useNavigate } from 'react-router-dom';
import { HStack } from '../components/HStack';
import { ButtonSmall, ButtonSmallSecondary } from '../components/buttons';
import Header from '../components/header';
import { Label16Bold, Label30 } from '../components/labels';
import OffersList from '../components/my-offers/offers-list';

const MyOffers = () => {
    const navigate = useNavigate();

    const handleDeploy = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Deploy
    };

    return (
        <div style={{background: '#F9FAFB'}}>
            <Header />
            <div style={{ paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch' }}>
                <HStack>
                    <div style={{ marginRight: 'auto' }}>
                        <Label30 text='My offers' />
                    </div>
                    <div onClick={handleDeploy} style={{marginRight: '1ch'}}>
                    <ButtonSmall>
                        <div style={{color: 'white'}}>
                        <Label16Bold text='Deploy smart contract' />
                        </div>
                    </ButtonSmall>
                    </div>
                    <div onClick={ () => navigate('create-offer') } style={{marginRight: '1ch'}}>
                    <ButtonSmall>
                        <div style={{color: 'white'}}>
                        <Label16Bold text='Create service' />
                        </div>
                    </ButtonSmall>
                    </div>
                    <ButtonSmallSecondary>
                    <div style={{color: '#0C4A6E'}}>
                    <Label16Bold text='Add offer' />
                    </div>
                    </ButtonSmallSecondary>
                </HStack>
                <div style={{marginTop: '3ch'}}>
                <OffersList></OffersList>
                </div>
            </div>
        </div>
    )

}

export default MyOffers;