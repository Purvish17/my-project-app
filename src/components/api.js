export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;
  
// export const HistoricalChart1= (id, days = 365) =>
// `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
// export const chartDays = [
//   {
//     label: "24 Hours",
//     value: 1,
//   },
//   {
//     label: "30 Days",
//     value: 30,
//   },
//   {
//     label: "3 Months",
//     value: 90,
//   },
//   {
//     label: "1 Year",
//     value: 365,
//   },
// ];
// `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`
export const HistoricalChart=(id)=>
`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`;
// export const chartDays =[

//   {
//          label: "24 Hours",
//          value: 1,
//        },
//      {
//         label: "30 Days",
//       value: 30,
//      }
// ];