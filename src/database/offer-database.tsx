import OfferEntity from "../types/offer";

class OfferDatabase {

    offers: OfferEntity[] = [];

    static shared = new OfferDatabase();

    save(offers: OfferEntity[]) {
        this.offers = offers;
    }

    load(): OfferEntity[] {
        return this.offers
    }
}

export default OfferDatabase;