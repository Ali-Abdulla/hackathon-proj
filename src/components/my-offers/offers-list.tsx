import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OfferEntity from '../../types/offer';
import { HStack } from '../HStack';
import { Label16, Label16Bold, Label20 } from '../labels';
import { Stack } from '@mui/material';
import { ButtonSmall } from '../buttons';
import { useNavigate } from 'react-router-dom';
import OfferDatabase from '../../database/offer-database';

const OffersList: React.FC = () => {
    const navigate = useNavigate();

    const [offers, setOffers] = useState<OfferEntity[]>([]);

    useEffect(() => {
        // Fetch the items from the API
        const fetchOffers = async () => {
            setOffers(OfferDatabase.shared.load());
        };

        fetchOffers();
    }, []);

    const handleOuterClick = (offerId: string) => {
        navigate('offer/' + offerId);
    };

    const handleInnerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        navigate('create-service')
    };

    return (
        <div>
            {offers.map(offer => (
                <div onClick={() => handleOuterClick(offer.id)} style={{ background: 'white', padding: '2ch', marginBottom: '2ch', borderRadius: '1ch' }}>
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
                                    <Label16 text="2" />
                                </HStack>
                                <HStack>
                                    <div style={{ marginRight: '1ch', color: '#4B5563' }}>
                                        <Label16 text="Неактивні послуги:" />
                                    </div>
                                    <Label16 text="4" />
                                </HStack>
                            </Stack>
                            <div onClick={handleInnerClick} style={{ marginTop: 'auto', marginLeft: 'auto' }}>
                                <ButtonSmall>
                                    <div style={{ color: 'white' }}>
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