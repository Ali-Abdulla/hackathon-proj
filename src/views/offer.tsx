import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/header';
import { HStack } from '../components/HStack';
import { Label14, Label16Bold, Label24, Label30 } from '../components/labels';
import { Stack } from '@mui/material';
import OfferHeader from '../components/offer/offer-header';
import { act, useEffect, useState } from 'react';
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
        };

        fetchOffer();
        fetchServices();
    }, []);

    const allServicesCount = services.length;
    const activeServicesCount = services.filter(service => service.isActive).length;
    const inactiveServicesCount = services.filter(service => !service.isActive).length;
    const allServicesText = "Всі (" + String(allServicesCount) + ")";
    const activeServicesText = "Активні (" + String(activeServicesCount) + ")";
    const inactiveServicesText = "Неактивні (" + String(inactiveServicesCount) + ")";
    let visibleServices: Service[] = []
    let title = 'Список послуг ';
    switch (serviceOption) {
        case ServiceOption.All:
            visibleServices = services;
            title += '(' + String(allServicesCount) + "/" + String(allServicesCount) + ")";
            break;

        case ServiceOption.Active:
            visibleServices = services.filter(service => service.isActive);
            title += '(' + String(activeServicesCount) + "/" + String(allServicesCount) + ")";
            break;

        case ServiceOption.Inactive:
            visibleServices = services.filter(service => !service.isActive);
            title += '(' + String(inactiveServicesCount) + "/" + String(allServicesCount) + ")";
            break;
    }

    return (
        <div style={{ background: '#F9FAFB' }}>
            <Header />
            <div style={{ marginTop: '3ch', marginLeft: '15ch', marginRight: '15ch', marginBottom: '3ch' }}>
                <Stack gap={3}>
                    <div onClick={() => navigate("..")}>
                        <HStack>
                            <img src="../arrow-left.svg" alt="arrow-left" style={{ marginRight: '1ch' }} />
                            <Label30 text="Оферта" />
                        </HStack>
                    </div>
                    <div style={{ background: 'white', padding: '2ch', borderRadius: '2ch' }}>
                        <Stack gap={3}>
                            <OfferHeader offer={offer} services={services} />
                            <div style={{ background: '#D1D5DB', height: '1px' }}></div>
                            <Stack gap={2}>
                                <HStack>
                                    <Label24 text={title} />
                                    <div style={{ marginLeft: 'auto' }}>
                                        <ButtonSmall>
                                            <div onClick={() => navigate('../create-service')} style={{ color: 'white' }}>
                                                <Label16Bold text="Створити послугу" />
                                            </div>
                                        </ButtonSmall>
                                    </div>
                                </HStack>
                                <HStack>
                                    {
                                        serviceOption === ServiceOption.All ?
                                            <div style={{ background: '#E0E7FF', borderRadius: '1ch', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text={allServicesText} />
                                            </div>
                                            :
                                            <button onClick={() => setServiceOption(ServiceOption.All)} style={{ background: 'white', borderWidth: '0', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text={allServicesText} />
                                            </button>
                                    }
                                    {
                                        serviceOption === ServiceOption.Active ?
                                            <div style={{ background: '#E0E7FF', borderRadius: '1ch', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text={activeServicesText} />
                                            </div>
                                            :
                                            <button onClick={() => setServiceOption(ServiceOption.Active)} style={{ background: 'white', borderWidth: '0', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text={activeServicesText} />
                                            </button>
                                    }
                                    {
                                        serviceOption === ServiceOption.Inactive ?
                                            <div style={{ background: '#E0E7FF', borderRadius: '1ch', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text={inactiveServicesText} />
                                            </div>
                                            :
                                            <button onClick={() => setServiceOption(ServiceOption.Inactive)} style={{ background: 'white', borderWidth: '0', paddingTop: '1ch', paddingLeft: '1.5ch', paddingRight: '1.5ch', paddingBottom: '1ch' }}>
                                                <Label14 text={inactiveServicesText} />
                                            </button>
                                    }
                                </HStack>
                                <ServicesList services={visibleServices} />
                            </Stack>
                        </Stack>
                    </div>
                </Stack>
            </div>
        </div>
    )
}

export default Offer;