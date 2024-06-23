import Service from "../types/service";
import fs from 'fs';

class ServiceDatabase {
    offers: Service[] = [];

    static shared = new ServiceDatabase();

    save(services: Service[]) {
        localStorage.setItem("services", JSON.stringify(services));
    }

    load(): Service[] {
        const services = localStorage.getItem("services");
        return services ? JSON.parse(services) : [];
    }
}

export default ServiceDatabase;