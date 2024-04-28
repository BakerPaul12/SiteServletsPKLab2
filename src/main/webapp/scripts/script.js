function updateTime() {
    const currentDate = new Date();
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    const displaydata = { year: 'numeric', month: 'long', day: 'numeric'};
    const displaytime = { hour: 'numeric', minute: 'numeric', second: 'numeric'}
    const formattedDate = currentDate.toLocaleDateString('pl-PL', displaydata);
    const formattedTime = currentDate.toLocaleTimeString('pl-PL', displaytime);

    dateElement.innerHTML = `<b>DATE: </b> ${formattedDate}`;
    timeElement.innerHTML = `<b>TIME: </b> ${formattedTime}`;
}


updateTime(); // Aktualizuj czas na początku
setInterval(updateTime, 1000); // Aktualizuj czas co sekundę
