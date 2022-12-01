var dataInfo = document.querySelector("#data_info");
var form_data = document.querySelector(".formData");
const btnData = document.querySelector("#btn_data");
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
  var input_Date = document.querySelector("#inputDate").value;
  if (input_Element == "" || input_Date == "") {
    warningPop();
    btnLoading.classList.toggle("d-none");
    btnData.classList.toggle("d-none");
    return false;
  } else {
    fetch(`https://weatherapi-com.p.rapidapi.com/history.json?q=${input_Element}&dt=${input_Date}`, options)
      .then((res) => res.json())
      .then((response) => {
        btnLoading.classList.toggle("d-none");
        btnData.classList.toggle("d-none");
        document.querySelector("#location").innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + response.location.name;
        document.querySelector("#date").innerHTML = '<i class="fa-regular fa-calendar-days"></i> ' + response.forecast.forecastday[0].date;
        document.querySelector("#condition").innerHTML = '<i class="fa-solid fa-cloud"></i> ' + response.forecast.forecastday[0].hour[23].condition.text;
        document.querySelector("#temp").innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i> ' + response.forecast.forecastday[0].hour[23].temp_c + "°C";
        dataInfo.classList.remove("d-none");
        
      })
      .catch((err) => {
        errorPop();
      });
  }
});
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    btnData.click();
  }
});
function warningPop() {
  swal({
    icon: "warning",
    title: "Something Wrong",
    text: "Please Enter Location and Date",
  });
}
function errorPop() {
  swal({
    icon: "error",
    title: "Opppppsss",
    text: "Location Not Found",
  });
}

const ctx = document.getElementById("celcius");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", 
  "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
  "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM",
  "9 PM", "10 PM", "11 PM"],
    datasets: [
      {
        label: "Suhu (C)",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const cxt = document.getElementById("persen");

new Chart(cxt, {
  type: "line",
  data: {
    labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", 
  "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
  "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM",
  "9 PM", "10 PM", "11 PM"],
    datasets: [
      {
        label: "Kelembapan (%)",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const xct = document.getElementById("km");

new Chart(xct, {
  type: "line",
  data: {
    labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", 
  "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
  "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM",
  "9 PM", "10 PM", "11 PM"],
    datasets: [
      {
        label: "Kecepatan Angin (km/h)",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const xtc = document.getElementById("milibar");

new Chart(xtc, {
  type: "line",
  data: {
    labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", 
  "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
  "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM",
  "9 PM", "10 PM", "11 PM"],
    datasets: [
      {
        label: "Tekanan (milibar)",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
