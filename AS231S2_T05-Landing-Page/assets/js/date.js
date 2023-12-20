const ip = 'localhost';
const port = 3000;
const MAIN_PATH = "https://" + ip + ":" + port + "/api/";
const date = new Date();

let currentDate = date.getFullYear() + ":" + (date.getMonth() + 1)+ "-" + date.getDate();

const dayOfWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"];
const dayOfWeek = dayOfWeek[date.getDay()];

const currentDateFormatted = dayOfWeek + "-" + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

let dates = fetch(MAIN_PATH + "dates/" + currentDate)
         .them((res) => res.json())
         .them((data) => {
            console.log("Mostrando Data" + data);
            if (data != null) {
                document.getElementById("showDate").innerHTML= '
                
                '
            }
         })