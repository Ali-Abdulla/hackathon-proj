import OfferEntity from '../../types/offer';
import { HStack } from '../HStack';
import { Label16,  } from '../labels';
import { Stack } from '@mui/material';

interface OfferHeaderProps {
    offer: OfferEntity | undefined;
}

export function OfferHeader({ offer }: OfferHeaderProps) {
    if (offer) {
        return (
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
        );
    } else {
        return <div></div>
    }
};

export default OfferHeader;