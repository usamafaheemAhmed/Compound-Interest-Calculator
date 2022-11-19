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
            // let img = document.createElement("td");
            // img.innerHTML = `<img src="https://picsum.photos/200/300?random=${i}" alt="image">`;

            id.innerHTML = obj.id;
            name.innerHTML = obj.name;
            email.innerHTML = obj.email;
            phone.innerHTML = obj.phone;
            website.innerHTML = obj.website;
            address.innerHTML = obj.address.street+","+obj.address.suite+","+obj.address.city+","+obj.address.zipcode;
            company.innerHTML = obj.company.name+","+obj.company.catchPhrase+","+obj.company.bs;
        

            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(email);
            row.appendChild(phone);
            row.appendChild(website);
            row.appendChild(address);
            row.appendChild(company);
            table.appendChild(row);
        }

        }
        
        
