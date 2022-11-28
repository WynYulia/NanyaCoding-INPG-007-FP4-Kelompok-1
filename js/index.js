var dataInfo = document.querySelector("#data_info");
var form_data = document.querySelector(".formData");
const btnData = document.querySelector("#btn_data")
const btnLoading = document.querySelector(".btn-loading");
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e25790942fmsh5a90fa478b06971p1a8edajsn16d168c9a8a3",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
    form_data.addEventListener("submit", function (event) {
    event.preventDefault();
    btnLoading.classList.toggle("d-none");
    btnData.classList.toggle("d-none");
    var input_Element = document.querySelector("#inputElement").value;
    var input_Date= document.querySelector("#inputDate").value;
    if (input_Element == "" || input_Date == "") {
      warningPop()
      btnLoading.classList.toggle("d-none");
      btnData.classList.toggle("d-none");
      return false;
    } else {  
      fetch(
        `https://weatherapi-com.p.rapidapi.com/history.json?q=${input_Element}&dt=${input_Date}`,options)
        .then((res) => res.json())
        .then((response) => {
            btnLoading.classList.toggle("d-none");
            btnData.classList.toggle("d-none");
            document.querySelector("#location").innerHTML = '<i class="fa-solid fa-location-dot"></i>' + response.location.name;
            document.querySelector("#date").innerHTML = '<i class="fa-regular fa-calendar-days"></i>' +
              response.forecast.forecastday[0].date;
            document.querySelector("#condition").innerHTML = '<i class="fa-solid fa-cloud"></i>' +
              response.forecast.forecastday[0].hour[23].condition.text;
            document.querySelector("#temp").innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>' +
              response.forecast.forecastday[0].hour[23].temp_c + "°C";
            dataInfo.classList.remove("d-none");;
        })
        .catch((err) => {
            errorPop();
        });
    }
  });
  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        btnData.click()
    }
  });
  function warningPop() {
    swal({
        icon: "warning",
        title: "Warning",
        text: "Please Enter Location and Date"
      });
  }
  function errorPop() {
    swal({
        icon: "error",
        title: "Opppppsss",
        text: "Location Not Found"
      });
  }

  