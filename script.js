//   function  loops(){
//     let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//     array.foo= "Hello";
//     console.log("Even");
//     for (let i in array){
//         if(array[i]%2==0){

//             console.log(array[i]);
//         }
//     }
//     console.log("Odd");
//     for (let i of array){
//         if(array[i]%2!==0){
//             console.log(array[i]);
//         }
//     }
//     for (let i in array){
//         console.log(array[i]);
//     }
//   }

function input(){
    let input1 = document.getElementById('initialInvestment');
    input1.value =  toComma(Number(input1.value));
    
}



let showbtn=0;
function tableshow(){

    let showBtnValue = document.getElementById('tabelShow').value;

    if (showbtn == 0) {
        document.getElementById('table').classList.remove('d-none');
        showbtn++;
        showBtnValue.innerHTML = "Hide Table";
        $('html, body').animate({scrollTop: $('#table').show().offset().top}, 1400);
    }
    else {
        document.getElementById('table').classList.add('d-none');
        showbtn--;
        showBtnValue.innerHTML = "Show Table";
    }
}

function Calculate() {
   
    document.getElementById('Results').classList.remove('d-none');
    document.getElementById('gap').classList.remove('d-none');
    document.getElementById('btn').classList.remove('d-none');

    let initialInvestment = parseFloat(document.getElementById("initialInvestment").value).replace('$','').replace(',',''); //=P
    let monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value); //=PMT
    let estimatedInterestRate = parseFloat(document.getElementById("estimatedInterestRate").value); //=r
    let lengthTimeYears = parseFloat(document.getElementById("lengthTimeYears").value); //=t
    let compundFrequency = parseFloat(document.getElementById("compundFrequency").value); //=n

    


    let estimatedInterestRateInPersentage = estimatedInterestRate / 100; //=r
    // alert(estimatedInterestRateInPersentage);
    let compundinterest = initialInvestment * (1 + (estimatedInterestRateInPersentage / compundFrequency)) ** (compundFrequency * lengthTimeYears);
    // alert(compundinterest + '=compundinterest');
    //    futurevalue     =    PMT              *   (1 + (r                                / n              ))^(        n           *   t            )- 1 ) / (r / n)
    let futurevalue = monthlyContribution * (((1 + (estimatedInterestRateInPersentage / compundFrequency)) ** (compundFrequency * lengthTimeYears)) - 1) / (estimatedInterestRateInPersentage / compundFrequency);    
    // alert(futurevalue + ' = Future value of a series');

 
    let toatalFutureValue = compundinterest + futurevalue;
  
 
    document.getElementById("year").innerHTML = '10';
    document.getElementById("totalResult").innerHTML = toComma(toatalFutureValue);
    document.getElementById("persent").innerHTML =estimatedInterestRate;

   
   
    let table = document.getElementById("tableData");

    for(let i=1; i<=10; i++){

        let row = document.createElement("tr");
        let year = document.createElement("td");
        let futureValue = document.createElement("td");
        let totalContributions = document.createElement("td");

        let compundinterest1 = initialInvestment * (1 + (estimatedInterestRateInPersentage / compundFrequency)) ** (compundFrequency * i);
    // alert(compundinterest + '=compundinterest');
    //    futurevalue     =    PMT              *   (1 + (r                                / n              ))^(        n           *   t            )- 1 ) / (r / n)
        let futurevalue1 = monthlyContribution * (((1 + (estimatedInterestRateInPersentage / compundFrequency)) ** (compundFrequency * i)) - 1) / (estimatedInterestRateInPersentage / compundFrequency);    
    // alert(futurevalue + ' = Future value of a series');
        let toatalFutureValue1 = compundinterest + futurevalue1;
   

         console.log(compundinterest1,'compundinterest1');
        // console.log(futurevalue1,'futurevalue1');
        // console.log(toatalFutureValue1,'toatalFutureValue1');

        year.innerHTML = 'Year'+i;
        futureValue.innerHTML = toComma(toatalFutureValue1);
        totalContributions.innerHTML = toComma(futurevalue1);
       
    

        row.appendChild(year);
        row.appendChild(futureValue);
        row.appendChild(totalContributions);
        table.appendChild(row);
    }






     
        // smoothScrollTo result

    $('html, body').animate({scrollTop: $('#gap').show().offset().top}, 1400);

    // let chartarray=[
    //     { y: 450 },
    //     { y: 414 },
    //     { y: 520, indexLabel: "\u2191 highest", markerColor: "red", markerType: "triangle" },
    //     { y: 460 },
    //     { y: 450 },
    //     { y: 500 },
    //     { y: 480 },
    //     { y: 480 },
    //     { y: 410, indexLabel: "\u2193 lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
    //     { y: 500 },
    //     { y: 480 },
    //     { y: 510 }
    // ];

    // let chart = new CanvasJS.Chart("chartContainer", {
    //     animationEnabled: true,
    //     theme: "light2",
    //     title: {
    //         text: "Total Savings"
    //     },
    //     data: [{
    //         type: "line",
    //         indexLabelFontSize: 16,
    //         dataPoints: chartarray
    //     }]
    // });
    // chart.render();




}





let toComma = (x) => "$" + x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function format(input) {
    var nStr = input.value + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    input.value = x1 + x2;
}