import OfferEntity from "../types/offer";

class OfferDatabase {

    offers: OfferEntity[] = [];

    static shared = new OfferDatabase();

    save(offers: OfferEntity[]) {
        localStorage.setItem("offers", JSON.stringify(offers));
    }

    load(): OfferEntity[] {
        const offers = localStorage.getItem("offers");
        return offers ? JSON.parse(offers) : [];
    }
}

export default OfferDatabase;