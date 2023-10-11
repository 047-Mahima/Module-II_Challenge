function whereAmI(lat, lng) {
  // 2. Do reverse geocoding using the geocode.xyz API
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      // 3. Parse the response as JSON
      if (!response.ok) {
        throw new Error(`Failed to fetch location data (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      // 6. Use the received data to render a country
      const countryName = data.country;

      // 7. Render the country and catch any errors
      fetch(`https://restcountries.com/v3/name/${countryName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to fetch country data (${response.status})`
            );
          }
          return response.json();
        })
        .then((countryData) => {
          console.log(`Country: ${countryData[0].name.common}`);
        })
        .catch((countryError) => {
          console.error(`Error fetching country data: ${countryError.message}`);
        });
    })
    .catch((error) => {
      console.error(`Error fetching location data: ${error.message}`);
    });
}

// Test the function with the provided coordinates
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
