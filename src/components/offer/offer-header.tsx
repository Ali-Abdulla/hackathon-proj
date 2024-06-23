import OfferEntity from '../../types/offer';
import Service from '../../types/service';
import { HStack } from '../HStack';
import { Label16,  } from '../labels';
import { Stack } from '@mui/material';

interface OfferHeaderProps {
    offer: OfferEntity | undefined;
    services: Service[];
}

export function OfferHeader({ offer, services }: OfferHeaderProps) {
    if (offer) {
        const activeServices = String(services.filter(service => service.isActive).length)
        const inactiveServices = String(services.filter(service => !service.isActive).length)
        return (
            <Stack gap={2}>
                <HStack>
                    <div style={{ marginRight: '2ch', color: '#4B5563' }}>
                        <Label16 text="Company name:" />
                    </div>
                    <div style={{ color: '#111827' }}>
                        <Label16 text={offer.companyName} />
                    </div>
                </HStack>
                <HStack>
                    <div style={{ marginRight: '2ch', color: '#4B5563' }}>
                        <Label16 text="Service type:" />
                    </div>
                    <div style={{ color: '#111827' }}>
                        <Label16 text={offer.serviceType} />
                    </div>
                </HStack>
                <HStack>
                    <div style={{ marginRight: '1ch', color: '#4B5563' }}>
                        <Label16 text="Active services:" />
                    </div>
                    <Label16 text={activeServices} />
                </HStack>
                <HStack>
                    <div style={{ marginRight: '1ch', color: '#4B5563' }}>
                        <Label16 text="Inactive services:" />
                    </div>
                    <Label16 text={inactiveServices} />
                </HStack>
            </Stack>
        );
    } else {
        return <div></div>
    }
};

export default OfferHeader;