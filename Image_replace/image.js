console.log('Atul Nayak is the G.O.A.T. !'); 

let filenames=[
    "atul_1.jpeg",
    "atul_2.jpeg",
    "atul_3.jpeg",
    "atul_4.jpeg"
];
let imgs = document.getElementsByTagName('img');

for(imgElmts in imgs){
    let r=Math.floor(Math.random()*filenames.length);
    let file= 'atul/'+ filenames[r];
    let x=chrome.extension.getURL(file);
    imgs[imgElmts].src= x;
    console.log(imgs[imgElmts]);
}