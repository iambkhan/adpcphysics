function displayDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.toLocaleString('en-US', { month: 'long' });
    var year = currentDate.getFullYear();

    var dateString = day + ' ' + month + ', ' + year;

    document.getElementById('date-container').innerHTML =dateString;
}
window.onload = displayDate;