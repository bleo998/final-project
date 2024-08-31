const cityAPI = "https://66c3da32d057009ee9c15c17.mockapi.io/cities";

async function cityLoad() {
  const cityContainer = document.getElementById("city-container");

  const citiesAPI = await fetch(cityAPI).then((response) =>
    response.json().then((data) => data)
  );
  citiesAPI.forEach((city) => {
    console.log(city.cityName);

    cityContainer.innerHTML += `
            <div class="card m-2" style="width: 300px; height: fit-content">
                 <img src="${city.image}" class="p-0" />
                    <h5 class="card-title justify-content-center  text-center pt-2">${city.countryName}</h5>
                    <div class="card-body bgCard">
                      <div class="d-flex aling-items-center justify-content-between px-4">
                          <p class="cityName">${city.cityName}</p>
                          <p class="zipCard">${city.zipCode}</p>
                      </div>
                  </div>
            </div>                 
          `;
  });
}

cityLoad();

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {
  console.log("REG");
});
