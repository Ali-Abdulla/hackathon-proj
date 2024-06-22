import { Stack, Switch } from '@mui/material';
import Service from '../../types/service';
import { Label14, Label18 } from '../labels';
import { HStack } from '../HStack';

interface ServicesListProps {
    services: Service[];
}

export function ServicesList({ services }: ServicesListProps) {
    return (
        <div>
            {services.map(service => (
                <div style={{ background: 'white', padding: '2ch', marginBottom: '2ch', borderRadius: '1ch', border: '1px solid #E5E7EB' }}>
                    <Stack gap={2}>
                        <HStack>
                            <img src="../service-image.png" style={{ width: '6ch', height: '6ch', marginRight: '1ch' }}></img>
                            <div style={{ marginRight: 'auto' }}>
                                <Stack gap={1.5}>
                                    <Label18 text={service.title} />
                                    <Label14 text={service.description} />
                                </Stack>
                            </div>
                            <Switch checked={service.isActive} onChange={_ => { }} inputProps={{ 'color': 'black' }} />
                        </HStack>
                        <HStack>
                            <div style={{ color: '#6B7280', marginRight: '0.5ch' }}>
                                <Label14 text="Смарт контракт"></Label14>
                            </div>
                            <img src="../info.svg" alt='info' style={{ marginRight: '1.5ch' }}></img>
                            <a href={service.address} style={{ marginRight: '0.5ch' }}>
                                <Label14 text={service.address} />
                            </a>
                            <img src="../copy.svg" style={{ marginRight: 'auto' }}></img>
                            <div style={{background: '#E0F2FE', borderRadius: '1ch', paddingTop: '0.5ch', paddingLeft: '1ch', paddingRight: '1ch', paddingBottom: '0.5ch', marginRight: '1ch'}}>
                                <HStack>
                                    <div style={{ color: '#6B7280' }}>
                                        <Label14 text="Срок: " />
                                    </div>
                                    <div style={{ color: '#111827' }}>
                                        <Label14 text="3 дні" />
                                    </div>
                                </HStack>
                            </div>
                            <div style={{background: '#E0F2FE', borderRadius: '1ch', paddingTop: '0.5ch', paddingLeft: '1ch', paddingRight: '1ch', paddingBottom: '0.5ch'}}>
                                <HStack>
                                    <div style={{ color: '#6B7280' }}>
                                        <Label14 text="Валюта: " />
                                    </div>
                                    <div style={{ color: '#111827' }}>
                                        <Label14 text={service.currency} />
                                    </div>
                                </HStack>
                            </div>
                        </HStack>
                    </Stack>
                </div>
            ))}
        </div>
    );
};

export default ServicesList;