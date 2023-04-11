let xhr = new XMLHttpRequest()

xhr.onreadystatechange = () =>{
    if(xhr.readyState == 4 && xhr.status ==200){
        let data = JSON.parse(xhr.responseText)
        for(let i=0;i<data.length;i++){
            if(data[i].name.common === 'India'){
                console.log(`Country Name : ${data[i].name.common}`)
                console.log(`Currencies Name : ${data[i].currencies.INR.name}`)
                console.log(`Country Capital : ${data[i].capital}`)
                console.log(`Country Region : ${data[i].region}`)
                console.log(`Country Language : ${data[i].languages.eng}`)
                console.log(`Country Language : ${data[i].languages.hin}`)
                console.log(`Country Language : ${data[i].languages.tam}`)
                console.log(`Country Population : ${data[i].population}`)
                console.log(`Country Flag : ${data[i].flags.png}`)
                console.log(`Country Flag : ${data[i].flags.svg}`)
            }
        }
    }
}

xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()