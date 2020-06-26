
const api_kay = '22bd16636ba4d4686e09938d2ba348f0'
// let city_id = ['702550','703446', '5344994']
let city_name = ['Lviv', 'Kyiv', 'Moscow', 'Amsterdam', 'Los Angeles', 'Dubai', 'Chicago', 'Madrid', 'Rio de Janeiro', 'Riga', 'San Francisco']

function NextCity() {
    
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city_name[RandomCityName()] + '&appid='+ api_kay )
    .then(resp => {return resp.json() })
    .then(data => {
        console.log(data);
        document.querySelector('.pacage-name').textContent = data.name
        document.querySelector('.price').innerHTML = Math.floor((data.main.temp - 273)) + '&deg;' 
        document.querySelector('.disclaimer').textContent = data.weather[0].description
        document.querySelector('.features').textContent = data.dt
    })



 function RandomCityName(){
   let random = Math.floor(Math.random() * city_name.length)
   return random
}


}































// const api_kay = '22bd16636ba4d4686e09938d2ba348f0'
// // let city_id = ['702550','703446', '5344994']
// let city_name = ['Lviv', 'Kyiv', 'Moscow', 'Amsterdam', 'Los Angeles']

// function NextCity() {
    
   


//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city_name[RandomCityName()] + '&appid='+ api_kay )
//     .then(function (resp) {return resp.json() })
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.pacage-name').textContent = data.name
//         document.querySelector('.price').innerHTML = Math.floor((data.main.temp - 273)) + '&deg;' 
//         document.querySelector('.disclaimer').textContent = data.weather[0].description
//         document.querySelector('.features').textContent = data.dt
        
        
//     })



//  function RandomCityName(){
//    let random = Math.floor(Math.random() * city_name.length)
//    return random
   


// }
// }



   
    















// fetch('https://api.openweathermap.org/data/2.5/weather?q=Lviv,ua&appid=22bd16636ba4d4686e09938d2ba348f0')
//     .then(function (resp) {return resp.json() })
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.pacage-name').textContent = data.name
//         document.querySelector('.price').innerHTML = Math.floor((data.main.temp - 273)) + '&deg;' 
//         document.querySelector('.disclaimer').textContent = data.weather[0].description
//     })