import Header from '../components/header';

interface OfferProps {
    id: string;
}

const Offer = (props: OfferProps) => {
    return (
        <div>
            <Header />
            <p>Offer</p>
        </div>
    )
}

export default Offer;