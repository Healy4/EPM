var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; // Месяца идут с 0, так что добавляем 1.
var yyyy = today.getFullYear();
var minutes = today.getMinutes();
var hour = today.getHours();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
if (hour < 10) {
    hour = '0' + hour
}
if (minutes < 10) {
    minutes = '0' + minutes
}

today = yyyy + '-' + mm + '-' + dd + 'T' + hour + ':' + minutes;
document.getElementById("datetime-local").setAttribute("max", today);