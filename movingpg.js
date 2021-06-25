

var listOfImageLinks=["https://cdn.pixabay.com/photo/2021/05/27/20/53/field-6289253_960_720.jpg",
"https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg",
"https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_960_720.jpg",
"https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg",
"https://media.istockphoto.com/photos/inspiration-quote-message-sign-saying-you-are-who-you-decide-to-life-picture-id1225291460?s=612x612",
"https://cdn.pixabay.com/photo/2018/05/15/18/54/mug-3403963_960_720.jpg",
"https://cdn.pixabay.com/photo/2017/08/22/07/21/mug-2667959_960_720.jpg",
"https://cdn.pixabay.com/photo/2020/07/09/13/30/quotes-5387335_960_720.jpg",
"https://cdn.pixabay.com/photo/2016/01/12/22/37/accomplish-1136863_960_720.jpg",
"https://cdn.pixabay.com/photo/2016/06/11/20/41/graffiti-1450798_960_720.jpg",
"https://cdn.pixabay.com/photo/2019/01/02/11/24/idea-3908619__340.jpg"];



// to know current img displaying on img holder
var currentImage=0

// working on circles

const circles =document.getElementById("circles").children[0];
console.log(circles.children[0])

//step 1) creating circle which is equal to no of images

const NoOfCircles=listOfImageLinks.length;
console.log(NoOfCircles)

for(let i=0;i<NoOfCircles;i++){
    let li=document.createElement('li');
    circles.append(li)
 
}

//step 2) darkening the circle according to the current img 

circles.children[0].style.listStyle="disc"


const rightbtn=document.getElementById("rightbtn");

const imgholder=document.getElementById("imgholder");
imgholder.children[0].src=listOfImageLinks[currentImage];
console.log(imgholder.children[0]);

// changing img by clicking on left side arrow
if (currentImage==0){
    leftbtn.style.color = "rgb(211, 173, 116)";
}


leftbtn.addEventListener("click",()=>{
    console.log("clicked on left btn",currentImage)
    if (currentImage > 0) {
        if (currentImage >= 0 && currentImage < listOfImageLinks.length ) {
            circles.children[currentImage].style.listStyle="circle";
            currentImage -= 1
            circles.children[currentImage].style.listStyle="disc"
        console.log("current image", currentImage)
        rightbtn.style.color = "rgb(155, 115, 54)";
        leftbtn.style.color = "rgb(155, 115, 54)";
        imgholder.children[0].src = listOfImageLinks[currentImage];
        
    }
    if (currentImage == 0) {
        leftbtn.style.color = "rgb(211, 173, 116)";

    }
    else {
        leftbtn.style.color = "rgb(155, 115, 54)";
    }
    
    
}
else {
    console.log("left =0")
    currentImage = 0
    leftbtn.style.color = "rgb(211, 173, 116)";
}


});
// else{
//         console.log("left =0")
//         currentImage=0
// }





// changing img by clicking on right side arrow



rightbtn.addEventListener("click",(e)=>{
    console.log("length of list",listOfImageLinks.length,currentImage)
    if (currentImage <= listOfImageLinks.length-2) {
        console.log("<8")
        if (currentImage >= 0 && currentImage <= listOfImageLinks.length -1) {
            circles.children[currentImage].style.listStyle="circle"
            currentImage += 1
            circles.children[currentImage].style.listStyle="disc"
            console.log("current right image", currentImage)
            rightbtn.style.color = "rgb(155, 115, 54)";
            leftbtn.style.color = "rgb(155, 115, 54)";
            imgholder.children[0].src = listOfImageLinks[currentImage];
            
        }
        if (currentImage == listOfImageLinks.length - 1) {
            rightbtn.style.color = "rgb(211, 173, 116)";
        }

    }
    else {
        console.log("left =len-2")
        currentImage = listOfImageLinks.length - 1;
        console.log("elseee")
        // imgholder.children[0].src = listOfImageLinks[currentImage];
    }

});


