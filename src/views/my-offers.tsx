import { HStack } from '../components/HStack';
import Header from '../components/header';
import { Label16Bold, Label30 } from '../components/labels';

const MyOffers = () => {
    return (
        <div>
            <Header />
            <div style={{paddingTop: '3ch', paddingLeft: '15ch', paddingRight: '15ch', paddingBottom: '3ch'}}>
            <HStack>
                <Label30 text='Мої оферти'/>
                <div></div>
                <button>
                <Label16Bold text='Створити оферту'/>
                </button>
                <button>
                <Label16Bold text='Додати оферту'/>
                </button>
            </HStack>
            </div>
        </div>
    )
}

export default MyOffers;