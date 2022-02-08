API="https://randomuser.me/api/?results=10";

let content;
async function getData(){
    let response= await fetch(API);
    let data= await response.json();
    // console.log(data); 
  
    return data;
}

async function RenderonPage(){
    let results= await getData();
    content=results.results;
    // console.log(content);
    let body=document.querySelector("body");
    let table=document.createElement("table");
    let tr1=document.createElement("tr");
    let name=document.createElement("th");
    let email=document.createElement("th");
    let city=document.createElement("th");
    let state=document.createElement("th");
    let phone=document.createElement("th");
    name.textContent="NAME";
    email.textContent="E-Mail";
    city.textContent="CITY";
    state.textContent="STATE";
    phone.textContent="PHONE";
    
    tr1.append(name);
    tr1.append(email);
    tr1.append(city);
    tr1.append(state);
    tr1.append(phone);
    table.appendChild(tr1);

    content.forEach((item)=>{
        let tr=document.createElement("tr");
        let name=document.createElement("td");
        let email=document.createElement("td");
        let city=document.createElement("td");
        let state=document.createElement("td");
        let phone=document.createElement("td");
        name.textContent=item.name.title+" "+item.name.first+" "+item.name.last;
        email.textContent=item.email;
        city.textContent=item.location.city;
        state.textContent=item.location.state;
        phone.textContent=item.cell;

        tr.append(name);
        tr.append(email);
        tr.append(city);
        tr.append(state);
        tr.append(phone);
        table.appendChild(tr);

    })

    body.append(table);

    

}





