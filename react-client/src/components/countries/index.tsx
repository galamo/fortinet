import { useState, useEffect } from "react"
// UI components
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import debounce from "lodash/debounce"
import axios from "axios";
import { SpinnerWrapper } from "../ui-components/SpinnerWrapper";




export function Countries() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    const [isLoadingCountries, setIsLoadingCountries] = useState(false);


    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        async function getCountries() {
            try {
                setIsLoadingCountries(true)
                const { data } = await axios.get(`http://localhost:2200/countries-delay/name/${country}`, {
                    cancelToken: source.token
                })
                const { data: countriesArray } = data;
                setCountries(countriesArray)
            } catch (error: any) {
                if (error.message === "canceled") {
                    console.log("cacneled")
                } else {
                    alert("Something went wrong!")
                }
            } finally {
                setIsLoadingCountries(false)
            }
        }
        if (country) getCountries();

        return () => {
            console.log("cancel prev request", country)
            source.cancel();
        }

    }, [country])

    function handleInputChange(e: any) {
        console.log("what is going on here???")
        const { value } = e.target;
        if (!value) return;
        setCountry(value)
    }

    const debounceInputChange = debounce(handleInputChange, 400)

    return <div>
        <div>
            <Button onClick={() => {
                // @ts-ignore
                setCountries([...shuffle(countries)])
            }}> Shuffle Countries </Button>
        </div>
        <div>
            <InputText onChange={debounceInputChange} />
        </div>
        <div>
            <SpinnerWrapper isLoading={isLoadingCountries}>
                <CountreisCards array={countries} />
            </SpinnerWrapper>
        </div>
    </div>
}



function CountreisCards(props: { array: any[] }) {
    if (!Array.isArray(props.array)) return null;

    return (
        <>
            {props.array.map((c) => {
                return <CountryCard key={c?.flags?.png} {...c} />
            })}
        </>
    )
}

export function CountryCard(props: any) {
    return (
        <Card style={{ display: "inline-block" }} footer={props?.region} header={props?.name?.common}>
            <h2> Population <Badge value={props.population}></Badge></h2>
            <img src={props?.flags?.png} height={200} width={200} />
        </Card>
    )
}
// check shuffle with profilter api 
// reuse bug issue - shuffle 
function shuffle(array: Array<any>) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
