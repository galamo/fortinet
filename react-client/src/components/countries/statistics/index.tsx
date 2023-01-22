
import { Badge } from 'primereact/badge';
import { useMemo } from "react"
export default function CountriesStats(props: { countries: Array<any> }) {

    const { countries } = props

    // component logic
    const statsCalc = useMemo(() => {
        // console.log("Memo running ")
        const regions = calcRegionsCalc(countries)
        const population = calcTotalPopulation(countries)
        return { regions, population }
    }, [JSON.stringify(countries)])
    return <div>
        <h2> Total Population <Badge value={statsCalc.population}></Badge></h2>
    </div>
}

export function calcTotalPopulation(countries: Array<Partial<{ population: number }>>) {
    if (!Array.isArray(countries)) return 0;
    return countries.reduce((totalPopulation, currentCountry) => {
        if (typeof currentCountry.population !== 'number') return totalPopulation;
        return totalPopulation + Number(currentCountry.population)
    }, 0)
}

function calcRegionsCalc(countries: Array<any>) {
    if (!Array.isArray(countries)) return 0;
    return countries.reduce((regionsStats, currentCountry) => {
        if (typeof currentCountry.region !== 'string') return regionsStats;
        const currentRegion = regionsStats[currentCountry.region]
        return {
            ...regionsStats, [currentCountry.region]: !!currentRegion ? currentRegion + 1 : 1
        }
    }, {})

}

// Typescript Partial explained - simple
// type Car = {
//     model: string,
//     subModel: string
// }

// const myCar: Partial<Car> = {
//     model: "skoda"
// }