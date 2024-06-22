import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/header';
import { HStack } from '../components/HStack';
import { Label14, Label16Bold, Label24, Label30 } from '../components/labels';
import { Stack } from '@mui/material';
import OfferHeader from '../components/offer/offer-header';
import { useEffect, useState } from 'react';
import OfferEntity from '../types/offer';
import Service from '../types/service';
import { ButtonSmall } from '../components/buttons';
import ServicesList from '../components/offer/services-list';

enum ServiceOption {
    All,
    Active,
    Inactive,
}

const Offer = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const [offer, setOffer] = useState<OfferEntity | undefined>(undefined);
    const [services, setServices] = useState<Service[]>([]);
    const [servicesTitle, setServicesTitle] = useState<string>('');
    const [serviceOption, setServiceOption] = useState<ServiceOption>(ServiceOption.All);

    useEffect(() => {
        // Fetch the items from the API
        const fetchOffer = async () => {
            setOffer(
                {
                    id: "1",
                    companyName: "ФОП Буданов",
                    identificationCode: "Code 1",
                    currency: "UAH",
                    amount: 100,
                    phoneNumber: "0501234567",
                    serviceType: "Послуги розвідки",
                }
            );
        };

        const fetchServices = async () => {
            setServices([
                {
                    id: '1',
                    title: 'Детективні послуги',
                    description: 'Маю великий досвід в розвідці',
                    address: '0x1234567890abcdef1234567890abcdef12345678',
                    term: 3,
                    currency: '$',
                    isActive: true
                },
                {
                    id: '2',
                    title: 'Детективні послуги',
                    description: 'Маю великий досвід в розвідці',
                    address: '0x1234567890abcdef1234567890abcdef12345678',
                    term: 3,
                    currency: '$',
                    isActive: true
                },
                {
                    id: '3',
                    title: 'Детективні послуги',
                    description: 'Маю великий досвід в розвідці',
                    address: '0x1234567890abcdef1234567890abcdef12345678',
                    term: 3,
                    currency: '$',
                    isActive: false
                },
                {
                    id: '4',
                    title: 'Детективні послуги',
                    description: 'Маю великий досвід в розвідці',
                    address: '0x1234567890abcdef1234567890abcdef12345678',
                    term: 3,
                    currency: '$',
                    isActive: false
                },
                {
                    id: '5',
                    title: 'Детективні послуги',
                    description: 'Маю великий досвід в розвідці',
                    address: '0x1234567890abcdef1234567890abcdef12345678',
                    term: 3,
                    currency: '$',
                    isActive: false
                },
                {
                    id: '6',
                    title: 'Детективні послуги',
                    description: 'Маю великий досвід в розвідці',
                    address: '0x1234567890abcdef1234567890abcdef12345678',
                    term: 3,
                    currency: '$',
                    isActive: false
                }
            ]);
            setServicesTitle('Список послуг (2/4)');
        };

        fetchOffer();
        fetchServices();
    }, []);

    return (
        <div style={{ background: '#F9FAFB' }}>
            <Header />
            <div style={{ marginTop: '3ch', marginLeft: '15ch', marginRight: '15ch', marginBottom: '3ch' }}>
                <Stack gap={3}>
                    <HStack>
                        <img src="../arrow-left.svg" alt="arrow-left" style={{ marginRight: '1ch' }} />
                        <Label30 text="Оферта" />
                    </HStack>
                    <div style={{ background: 'white', padding: '2ch', borderRadius: '2ch' }}>
                        <Stack gap={3}>
                            <OfferHeader offer={offer} />
                            <div style={{ background: '#D1D5DB', height: '1px' }}></div>
                            <Stack gap={2}>
                                <HStack>
                                    <Label24 text={servicesTitle} />
                                    <div style={{ marginLeft: 'auto' }}>
                                        <ButtonSmall>
                                            <div onClick={ () => navigate('../create-service') } style={{ color: 'white' }}>
                                                <Label16Bold text="Створити послугу" />
                                            </div>
                                        </ButtonSmall>
                                    </div>
                                </HStack>
                                <HStack>
                                    {
                                        serviceOption === ServiceOption.All ?
                                            <div style={{ background: '#E0E7FF', borderRadius: '1ch', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text="Всі (6)" />
                                            </div>
                                            :
                                            <button onClick={() => setServiceOption(ServiceOption.All) } style={{ background: 'white', borderWidth: '0', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text="Всі (6)" />
                                            </button>
                                    }
                                    {
                                        serviceOption === ServiceOption.Active ?
                                            <div style={{ background: '#E0E7FF', borderRadius: '1ch', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text="Активні (6)" />
                                            </div>
                                            :
                                            <button onClick={() => setServiceOption(ServiceOption.Active) } style={{ background: 'white', borderWidth: '0', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text="Активні (6)" />
                                            </button>
                                    }
                                    {
                                        serviceOption === ServiceOption.Inactive ?
                                            <div style={{ background: '#E0E7FF', borderRadius: '1ch', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text="Неактивні (6)" />
                                            </div>
                                            :
                                            <button onClick={() => setServiceOption(ServiceOption.Inactive) } style={{ background: 'white', borderWidth: '0', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text="Неактивні (6)" />
                                            </button>
                                    }
                                </HStack>
                                <ServicesList services={services} />
                            </Stack>
                        </Stack>
                    </div>
                </Stack>
            </div>
        </div>
    )
}

export default Offer;