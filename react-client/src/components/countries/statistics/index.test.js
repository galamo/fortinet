// tsx => redner dom
// js => logic testing
import { calcTotalPopulation } from ".";

describe("Test CalcTotalPopulation", () => {
    test("Calc population success", () => {
        const dummyCountries = [{ population: 100 }, { population: 200 }, { population: 300 }]
        const result = calcTotalPopulation(dummyCountries);
        expect(result).toBe(600)
    })
    test("Calc population result is number", () => {
        const dummyCountries = [{ population: 100 }, { population: 200 }, { population: 300 }]
        const result = calcTotalPopulation(dummyCountries);
        expect(typeof result).toBe('number')
    })
    test("Calc population is null", () => {
        const dummyCountries = [{ population: null }, { population: 200 }, { population: 300 }]
        const result = calcTotalPopulation(dummyCountries);
        expect(result).toBe(500)
    })
    test("Calc population is cannot be string", () => {
        const dummyCountries = [{ population: null }, { population: "200" }, { population: 300 }]
        const result = calcTotalPopulation(dummyCountries);
        expect(result).toBe(300)
    })


})