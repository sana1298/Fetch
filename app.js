

let api= 'https://pokeapi.co/api/v2/ability'
     fetch(api)
   .then((response) =>response.json())
   .then((data) =>{console.log(data)
    data.results.forEach((val)=>
    {
        // console.log(name)
        let section=document.getElementById("section");
        let option=document.createElement("option");
        // console.log(option)
        let name1=val.name;
         option.innerHTML=name1;
        section.appendChild(option) 
        // console.log(val)  
    })
    section.addEventListener("change", async()=>{
        para.innerHTML=section.value;

        const selectedAbilityName = section.value;
                    const selectedAbility =data.results.find(ability => ability.name === selectedAbilityName);

                    if (selectedAbility) {
                        const abilityData = await fetchAbilityData(selectedAbility.url);
                        console.log(selectedAbility.url)
                        const urlValue = document.createElement("p");
                        urlValue.innerText = abilityData.effect_entries[0].short_effect;
                        para.appendChild(urlValue);
                    }
    })
    })
    .catch(error=>{
        
        let error_msg=document.getElementById("error");
        let para=document.createElement("p");
        para.innerHTML="Data Not Found";
        error_msg.appendChild(para);
         console.log(error);
         let heading=document.getElementById("heading");
         heading.style.display="none";
        let section=document.getElementById("section");
          section.style.display="none";
    
    } )
    async function fetchAbilityData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API returned status code ${response.status}`);
            }
            return response.json();
        } catch (error) {
            throw new Error(error);
        }
    }