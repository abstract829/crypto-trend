import axios from 'axios'

const fetchCoins = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
})

export const getCoins = async() => {
    const response = await fetchCoins.get('/search/trending')
    const coins = response.data.coins
    coins.pop()
    return coins
}

export const getCoinsDataChart = async(coinid) => {
    const response = await fetchCoins.get(`/coins/${coinid}/market_chart?vs_currency=usd&days=30&interval=daily`)
    const dataChart = response.data.prices
    return dataChart
}

export const parseDataChart = (dataChart) => {
    let prices = [];
    let days = [];
    dataChart.forEach((day) => {
      prices.push(day[1]);
      days.push(new Date(day[0]).toLocaleDateString("en-US"));
    });
    return {prices, days}
}

