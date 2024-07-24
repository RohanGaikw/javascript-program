const URL= "https://cat-fact.herokuapp.com/facts"
const para=document.querySelector("#fact");
const fact2= document.querySelector("#fact2");

// let promise=fetch(URL)
// console.log(promise);
const getfacts= async() =>
{
    console.log("getting data....");
    let response=await fetch(URL);
    console.log(response);
    let data =await response.json();
    para.innerText = data[2].text;
    // fact2.innerText=data[3].text;
  
};

fact2.addEventListener("click",getfacts);