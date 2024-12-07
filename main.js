const slider=[
    {
        name: "X-user",
        photo: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt provident incidunt minima unde, expedita amet voluptatum, itaque magnam repudiandae officiis eum a laboriosam maxime dicta ea earum accusantium vel.",
    },
    {
        name: "Y-user",
        photo: "https://images.unsplash.com/photo-1648884266836-517ad583e720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt provident incidunt minima unde, expedita amet voluptatum, itaque magnam repudiandae officiis eum a laboriosam maxime dicta ea earum accusantium vel.",
    },
    {
        name: "Z-user",
        photo: "https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt provident incidunt minima unde, expedita amet voluptatum, itaque magnam repudiandae officiis eum a laboriosam maxime dicta ea earum accusantium vel.",
    },
];

const nam=document.querySelector("h4");
const chobi = document.querySelector("img");
const lekha = document.querySelector("p");

 let x=0;

 updateslider();

 function updateslider(){
    const{name,photo,text} =slider[x];
    nam.innerText=name;
    chobi.src=photo;
    lekha.innerText=text;
    x++;
    if(x===slider.length){
        x=0;
    }
    setTimeout(()=>{
        updateslider();},5000);
 }