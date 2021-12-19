import { getCoins } from "../services/coins"
import { useState, useEffect } from "react";
export const useCoins = () => {
    const [coins, setCoins] = useState()
    useEffect(() => {
        getCoins().then(data => setCoins(data))
    }, [])
    return {
        coins
    }
}