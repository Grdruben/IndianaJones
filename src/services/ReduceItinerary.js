
const departure_routes=[
  {
      HD: "09:20",
      V1: "Paris",
      V2: "Amsterdam",
      D: "03:20",
  },
  {
      HD: "08:30",
      V1: "Paris",
      V2: "Bruxelles",
      D: "01:20",
  }
];

const data =[
    {
        HD: "09:20",
        V1: "Paris",
        V2: "Amsterdam",
        D: "03:20",
    },
    {
        HD: "08:30",
        V1: "Paris",
        V2: "Bruxelles",
        D: "01:20",
    },
      {
          HD: "10:00",
          V1: "Bruxelles",
          V2: "Amsterdam",
          D: "02:10",
      },
      {
          HD: "12:30",
          V1: "Amsterdam",
          V2: "Berlin",
          D: "06:10",
      }
  ];


function ReduceItinerary (data,departure_routes){
  let Itinerary = data.reduce(
    (acc, elem) =>
      !acc.includes(elem.V1) ? acc.concat(elem) :elem ===null ,
    [departure_routes[0]]
  )
return(Itinerary);
}
