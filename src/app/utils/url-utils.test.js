import { buildQuerystring } from "./url-utils";

describe("buildQuerystring", () => {
    it("returns a string with the given parameters", () => {
        expect(
            buildQuerystring({ search: "iphone", sort: "priceASC", page: 3 })
        ).toEqual("?search=iphone&sort=priceASC&page=3");
    });
});
