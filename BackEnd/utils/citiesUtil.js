

const citiesAndCitizens = ( citizens, cities ) => {
  let result = [];

  citizens.map( citizen => {
    const cityName = citizen.groups.find( gr => gr.type === "city" ).name.split( " " )[ 0 ]
    const cityInfo = cities.find(city => city.name === cityName)
    let item = {id: citizen._id, name: citizen.name, cityInfo: cityInfo}
    result.push(item)
  } )
  return result
}

export default citiesAndCitizens