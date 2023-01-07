let visitors = [800,320,190,250,400,600];
let hired=[502,203,70,200,350,400];
let years=[2015,2016,2017,2018,2019,2020];
// charts
var options_1 = {
    chart: {
      type: 'area',
      height:'100%',
      width:'100%'
    },
    series: [{
        type: 'area',
        name:"visitors",
        data: visitors
      }, {
        type: 'area',
        name:"hired",
        data: hired
    }],
    xaxis: {
      categories: years
    },
    colors:['#43a047','#e65245','#e43a15']
}

var chart = new ApexCharts(document.querySelector("#chart"), options_1);
chart.render();
var options_2={ 
    chart: {
        type: 'line',
        height:'94%',
        width:'100%'
    },
    series: [
        {
        name: 'visitors',
        data: visitors
        },
        {
        name: 'hired',
        data: hired
        },
    ],
    yaxis: [
        {
        seriesName: 'visitors'
        },
        {
        seriesName: 'hired'
        }
    ],
    // colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
    // xaxis: {
    //     categories: years
    //   },
    colors:['#43a047','#e65245','#e43a15']
}
var chart = new ApexCharts(document.querySelector("#chart_1"), options_2);
chart.render();
var options_3 = {
    chart: {
      type: 'donut',
      height:'94%',
      width:'100%'
    },
    series: visitors,
    labels:years
  }
var chart = new ApexCharts(document.querySelector("#chart_2"), options_3);
chart.render();
let chech;
let side=document.querySelector('.navbar .container_custum .brand i');
side.addEventListener('click',()=>{
    chech=side.getAttribute('state');
    if(chech=='open'){
        side.setAttribute('class','bi bi-x');
        document.querySelector('.section .screen').style.left="5%";
        document.querySelector('.section .screen').style.width="95%";
        side.setAttribute('state','close');
    }
    else{
        side.setAttribute('class','bi bi-list');
        document.querySelector('.section .screen').style.left="17%";
        document.querySelector('.section .screen').style.width="83%";
        side.setAttribute('state','open');
    }
});
let darkmode=document.querySelector('.navbar .container_custum .toggels i:first-of-type');
darkmode.addEventListener('click',()=>{
    if(darkmode.getAttribute('class')=='bi bi-moon-fill'){
        document.documentElement.style.setProperty('--main_color','white');
        document.documentElement.style.setProperty('--main-background','#23242d');
        document.documentElement.style.setProperty('--main-hover','#181818');
        darkmode.setAttribute('class','bi bi-sun-fill');
    }
    else if(darkmode.getAttribute('class')=='bi bi-sun-fill'){
        document.documentElement.style.setProperty('--main_color','#727475');
        document.documentElement.style.setProperty('--main-background','#ffffff');
        document.documentElement.style.setProperty('--main-hover','#f1f1f1');
        darkmode.setAttribute('class','bi bi-moon-fill');
    }
});