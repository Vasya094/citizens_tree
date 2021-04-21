const citiesOfCitizen = ( citizen, cities ) => {
  let cityName = citizen.groups.find( gr => gr.type === "city" ).name.split( " " )[ 0 ]
  let result = cities.find(city => city.name === cityName)
  return result
}

export default citiesOfCitizen