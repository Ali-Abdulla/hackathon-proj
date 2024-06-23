import Service from "../types/service";
import fs from 'fs';

class ServiceDatabase {
    static save(services: Service[]) {
        const json = JSON.stringify(services, null, 2);
        fs.writeFileSync('services.json', json, 'utf8');
    }

    static load(): Service[] {
        const json = fs.readFileSync('services.json', 'utf8');
        return JSON.parse(json);
    }
}

export default ServiceDatabase;