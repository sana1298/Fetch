

let api= 'https://pokeapi.co/api/v2/ability'
        fetch(api)
      
   .then((response) =>response.json())
   .then((data) =>{console.log(data)
    data.results.forEach((val)=>
    {
        // console.log(name)
        let section=document.getElementById("section");
        let option=document.createElement("option");
        let name=val.name;
         option.innerHTML=name;
        section.appendChild(option) 
        console.log(val)
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