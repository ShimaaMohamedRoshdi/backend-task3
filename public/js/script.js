
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value)
    weatherFun()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const latitudeF = document.getElementById('latitude');
const longitudeF = document.getElementById('longitude');

// async --> function return promise
let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
       
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText = ''
            forecastF.innerText = ''
            latitudeF.innerText = '';
            longitudeF.innerText = '';
        }
        else {
            locationF.innerText = data.location
            forecastF.innerText = data.forecast
            errorF.innerText = ''
            latitudeF.innerText = data.latitude;
            longitudeF.innerText = data.longitude;

        }
    }
    catch(e){
        console.log(e)
    }
}