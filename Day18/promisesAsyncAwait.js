// EXERCISE: LEVEL 1

// Reading countries API and fetching values using async and await
const url = 'https://restcountries.eu/rest/v2/all'

const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
  }
  console.log('===== async and await =====')
  fetchData()