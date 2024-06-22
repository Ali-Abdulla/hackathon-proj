import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Offer from '../../types/offer';
import { HStack } from '../HStack';
import { Label16, Label16Bold, Label20 } from '../labels';
import { Stack } from '@mui/material';
import { ButtonSmall } from '../buttons';

const OffersList: React.FC = () => {
    const [offers, setOffers] = useState<Offer[]>([]);

    useEffect(() => {
        // Fetch the items from the API
        const fetchOffers = async () => {
            setOffers([
                {
                    id: "1",
                    companyName: "ФОП Буданов",
                    identificationCode: "Code 1",
                    currency: "UAH",
                    amount: 100,
                    phoneNumber: "0501234567",
                    serviceType: "Послуги розвідки",
                },
                {
                    id: "2",
                    companyName: "ФОП Буданов",
                    identificationCode: "Code 1",
                    currency: "UAH",
                    amount: 100,
                    phoneNumber: "0501234567",
                    serviceType: "Послуги розвідки",
                },
                {
                    id: "3",
                    companyName: "ФОП Буданов",
                    identificationCode: "Code 1",
                    currency: "UAH",
                    amount: 100,
                    phoneNumber: "0501234567",
                    serviceType: "Послуги розвідки",
                }
            ]);
        };

        fetchOffers();
    }, []);

    return (
        <div>
            {offers.map(offer => (
                <div style={{ background: 'white', padding: '2ch', marginBottom: '2ch', borderRadius: '1ch' }}>
                    <Stack gap={3}>
                    <HStack>
                        <div style={{ marginRight: 'auto' }}>
                            <Label20 text="Оферта" />
                        </div>
                        <Label16Bold text="08.08.2024" />
                    </HStack>
                    <HStack>
                    <Stack gap={2}>
                    <HStack>
                        <div style={{ marginRight: '2ch', color: '#4B5563' }}>
                            <Label16 text="Назва команії:" />
                        </div>
                        <div style={{ color: '#111827' }}>
                        <Label16 text={offer.companyName} />
                        </div>
                    </HStack>
                    <HStack>
                        <div style={{ marginRight: '2ch', color: '#4B5563' }}>
                            <Label16 text="Клас послуг:" />
                        </div>
                        <div style={{ color: '#111827' }}>
                        <Label16 text={offer.serviceType} />
                        </div>
                    </HStack>
                    <HStack>
                        <div style={{ marginRight: '1ch', color: '#4B5563' }}>
                            <Label16 text="Активні послуги:" />
                        </div>
                        <Label16 text="0" />
                    </HStack>
                    <HStack>
                        <div style={{ marginRight: '1ch', color: '#4B5563' }}>
                            <Label16 text="Неактивні послуги:" />
                        </div>
                        <Label16 text="2" />
                    </HStack>
                    </Stack>
                    <div style={{marginTop: 'auto', marginLeft: 'auto'}}>
                    <ButtonSmall>
                        <div style={{color: 'white'}}>
                        <Label16Bold text='Створити послугу' />
                        </div>
                    </ButtonSmall>
                    </div>
                    </HStack>
                    </Stack>
                </div>
            ))}
        </div>
    );
};

export default OffersList;