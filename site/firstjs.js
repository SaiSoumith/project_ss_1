var images=[],x1=0,x2=1,x3=2,x4=3,x5=4,x6=5;


images[0]="images/1.jpg";
images[1]="images/2.jpg";
images[2]="images/3.jpg";
images[3]="images/4.jpg";
images[4]="images/5.jpg";
images[5]="images/6.jpg";


function changeimg()
{
	var img1=document.getElementById("img1");
	img1.src=images[x1];
	x1++;
    


    var img2=document.getElementById("img2");
     img2.src=images[x2];
     x2++;



    var img3=document.getElementById("img3");
      img3.src=images[x3];
     x3++;



    var img4=document.getElementById("img4");
     img4.src=images[x4];
     x4++;


    var img5=document.getElementById("img5");
     img5.src=images[x5];
     x5++;

    var img6=document.getElementById("img6");
     img6.src=images[x6];
     x6++;
    


if(x1>=images.length){
	x1=0;

}
if(x2>=images.length){
	x2=0;

}
if(x3>=images.length){
	x3=0;

}
if(x4>=images.length){
	x4=0;

}
if(x5>=images.length){
	x5=0;

}
if(x6>=images.length){
	x6=0;

}

var timerid = setInterval(changeimg(), 1000);

}