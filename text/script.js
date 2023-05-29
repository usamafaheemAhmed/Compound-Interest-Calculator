 let salary=0;
 function commas(){

  let input1 = document.getElementById('salary');
  input1.value =  toComma(Number(input1.value));
  salary= parseFloat(document.getElementById('salary').value.replace('$','').replace(/,/g,'')); 
 

  let url="https://jsonplaceholder.typicode.com/users";
  fetch(url).then((response)=>{
      return response.json();
  }).then((data)=>{
    
  //  console.log(data)
    showData(data)
  })

  const showData=(employe)=>{
  let lengthOfArray=employe.length;
      console.log(lengthOfArray);

  console.log(salary);

  let table = document.getElementById("table");


  for(let i=0; i<lengthOfArray; i++){

      let obj=employe[i];
      let row = document.createElement("tr");
      let id = document.createElement("td");
      let name = document.createElement("td");
      let email = document.createElement("td");
      let phone = document.createElement("td");
      let website = document.createElement("td");
      let address = document.createElement("td");
      let company = document.createElement("td");
      let salary1 = document.createElement("td");
      // let img = document.createElement("td");
      // img.innerHTML = `<img src="https://picsum.photos/200/300?random=${i}" alt="image">`;

      id.innerHTML = obj.id;
      name.innerHTML = obj.name;
      email.innerHTML = obj.email;
      phone.innerHTML = obj.phone;
      website.innerHTML = obj.website;
      address.innerHTML = obj.address.street+","+obj.address.suite+","+obj.address.city+","+obj.address.zipcode;
      company.innerHTML = obj.company.name+","+obj.company.catchPhrase+","+obj.company.bs;
      salary1.innerHTML = toComma(salary/lengthOfArray);
  

      row.appendChild(id);
      row.appendChild(name);
      row.appendChild(email);
      row.appendChild(phone);
      row.appendChild(website);
      row.appendChild(address);
      row.appendChild(company);
      row.appendChild(salary1);
      table.appendChild(row);
  }

  }
  


 }
 
 
 

        
        let toComma = (x) => "$" + x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // function format(input) {
        //     var nStr = input.value + '';
        //     nStr = nStr.replace(/\,/g, "");
        //     x = nStr.split('.');
        //     x1 = x[0];
        //     x2 = x.length > 1 ? '.' + x[1] : '';
        //     var rgx = /(\d+)(\d{3})/;
        //     while (rgx.test(x1)) {
        //         x1 = x1.replace(rgx, '$1' + ',' + '$2');
        //     }
        //     input.value = x1 + x2;
        // }