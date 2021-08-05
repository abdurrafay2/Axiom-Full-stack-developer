// Get DOM elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie'); 

populateUI();

let ticketprice= +movieSelect.value;

function updateselectedcount()
{
if(movieSelect.value!=='')
{


    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    const selectedseatcount = selectedSeats.length;
    count.innerText = selectedseatcount;
    total.innerText = ticketprice * selectedseatcount;
    localStorage.setItem('selectedseat', JSON.stringify(seatsIndex));

}
}
//save movie data to local
function setMovieData(movieIndex, moviePrice)
{
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);

}
//get data from local
function populateUI() {
    
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    };
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// event listener for container


container.addEventListener('click', (e) =>{
if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied'))
{
    e.target.classList.toggle('selected')
    updateselectedcount();

}


})
//event listener for movie

movieSelect.addEventListener('change', (e) =>{
    ticketprice=+e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);

    updateselectedcount();



} )
updateselectedcount();
