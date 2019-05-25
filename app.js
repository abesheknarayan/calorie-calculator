
var n = document.querySelector("#username");
var name;
var bod=document.querySelector("body");
var a = document.querySelector("#age");
var age;
var h = document.querySelector("#height");
var height;
var w = document.querySelector("#weight");
var weight;
var result=document.querySelector("#calo");
var submit=document.querySelector("#submit");
var reset=document.querySelector("#reset");
var reset2=document.querySelector("#reset2");

var gender="male";

var carbg=document.querySelector("#carbg");
var protg=document.querySelector("#protg");
var fatg=document.querySelector("#fatg");
var carbcal=document.querySelector("#carbcal");
var protcal=document.querySelector("#protcal");
var fatcal=document.querySelector("#fatcal");
var fooditem=[];
var calcon=0;
var watercon=0;
var save=document.querySelector("#save");
var submit0=document.querySelector("#submit0");
var submit2=document.querySelector("#submit2");
var item=document.querySelector("#food");
var fluid=document.querySelector("#fluid");
var foodcal=document.querySelector("#foodcal");
var consumedcarb=document.querySelector("#consumedcarb");
var consumedprot=document.querySelector("#consumedprot");
var consumedfat=document.querySelector("#consumedfat");
var consumedfat1=0;
var consumedcarb1=0;
var consumedprot1=0;
var calories;
var male=document.querySelector("#male");
var female=document.querySelector("#female");
var diet=document.querySelector("#diet");
var water=document.querySelector("#water");
var bodycon=document.querySelector("#bodycon");
var need;
var dietplan;
var bmi;
var alertuser=document.querySelector("#alert");
var carbo;
var fat;
var protein;
var carbo2;
var fat2;
var res=document.querySelectorAll(".res");
var tablecal=document.querySelector("#tablecal");
var tablewat=document.querySelector("#tablewat");
var tablecarb=document.querySelector("#tablecarb");
var tableprot=document.querySelector("#tableprot");
var tablefat=document.querySelector("#tablefat");
var calrem=document.querySelector("#calrem");
var watrem=document.querySelector("#watrem");
var carbrem=document.querySelector("#carbrem");
var protrem=document.querySelector("#protrem");
var customcal=document.querySelector("#customcal");
var fatrem=document.querySelector("#fatrem");
var protein2;
male.checked=true;


var display0=document.querySelector("#display0");
var display2=document.querySelector("#display2");

display2.style.display="none";
var display1=document.querySelector("#display1");
display1.style.display="none";
var btn0=document.querySelector("#btn0");
var nav=document.querySelector(".nav");
nav.style.display="none";



btn0.addEventListener("click",function()
{
	display0.style.display="none";
	display1.style.display="";
	nav.style.display="";
	display1.style.background="rgba(0,0,0,0.5)";
    locstorage("calories",calories);
   

});
submit0.addEventListener("click",function()
	{
		if(customcal.value)
		{
			calories=customcal.value;
		}
		fndietplan();
calset();
calo.textContent=(calories.toFixed(2))+" calories";
calcwater();
macro();
table();
	});



 function findgender()
{var g=document.getElementsByName("gender");
 if(g[0].checked)
 {
   gender="male";
 	 }
 else if(g[1].checked)
 {
 	gender="female";
 }
 locstorage("gender",gender);
}




if(!localStorage.getItem("name"))
{
	getinput();
	findgender();
	// fndietplan();
	// calcwater();
	}

else
{ 
n.value=localStorage.getItem("name");
a.value=Number(localStorage.getItem("age"));
age=Number(localStorage.getItem("age"))
h.value=Number(localStorage.getItem("height"));
height=Number(localStorage.getItem("height"));
w.value=Number(localStorage.getItem("weight"));
weight=Number(localStorage.getItem("weight"));
customcal.value=localStorage.getItem("calories");
calories=Number(localStorage.getItem("calories"));

if(localStorage.getItem("gender")==="male")
{   gender="male";
	male.checked=true;

}
else {
	gender="female";
	female.checked=true;
}

}
function getinput(){
a.addEventListener("input", function(){
	age=Number(a.value);
	locstorage("age",age);
});
n.addEventListener("input",function(){
    name=n.value;
    locstorage("name",name);
});
h.addEventListener("input",function(){
	height=Number(h.value);
	locstorage("height",height);

});
w.addEventListener("input",function(){
	weight=Number(w.value);
	locstorage("weight",weight);
});}

submit.addEventListener("click",function()
{
if(formvalid()==false)
{
	alertuser.textContent="*please fill all the details*";
}
else
{

if(gender==="male")
{
	calories=10*weight + 6.25*height - 5*age + 5;
	
}
else if(gender==="female")
{
	calories= 10*weight + 6.25*height - 5*age- 161;
	
 }
 
bod.style.background="url('bg3.jpg')";
bod.style.backgroundSize="cover";
display1.style.display="none";
display2.style.display="";

fndietplan();
calset();
calo.textContent=(calories.toFixed(2))+" calories";
calcwater();
macro();
table();
}

});
function locstorage(locval ,val){
	localStorage.setItem(locval,val);

}

reset.addEventListener("click",function(){
	localStorage.clear();
	a.value="";
	n.value="";
	h.value="";
	w.value="";
	male.checked=true;
	female.checked=false;
	diet.textContent="";
	 water.textContent="";
	bodycon.textContent="";
	calo.textContent="";
	getinput();
	findgender();
	
	carbg.textContent="";
	protg.textContent="";
	fatg.textContent="";
	carbcal.textContent="";
	protcal.textContent="";
	fatcal.textContent="";

})

function fndietplan(){
	 bmi=(weight)/(height*height)*10000;
	if(bmi<18.5)
	{  bodycon.textContent=" underweight";
       diet.textContent=" weight gain-20%addition of normal calorie intake";
       dietplan=1;
       for(i=0;i<res.length;i++)
       {res[i].style.color="blue";
}
	}
	else if(bmi>25&&bmi<29.9)
	{   bodycon.textContent=" overweight";
		diet.textContent=" normal weight loss-10% reduction of normal calorie intake";
		 dietplan=2;
		 for(i=0;i<res.length;i++)
       {res[i].style.color="red";
}
		
	}
	else if(bmi>30)
	{   bodycon.textContent=" obesity";
		diet.textContent=" rigorous weight loss-20% reduction of normal calorie intake";
		 dietplan=3;
		 for(i=0;i<res.length;i++)
       {res[i].style.color="red";
}
		 
	}
	else{ 
		bodycon.textContent=" normal weight";
		diet.textContent="  normal diet";
		 dietplan=4;
		 for(i=0;i<res.length;i++)
       {res[i].style.color="green";
}
		 
	}
}
function calcwater(){
     need=((weight*2.20462*0.5*0.0295735)).toFixed(2);
	water.textContent=need+" litres";
}
function calset(){
	if(dietplan==1)
	{
		calories=1.2*calories;
	}
	if(dietplan==2)
	{
		calories=0.9*calories;
	}
	if(dietplan==3)
	{
		calories=0.8*calories;
	}
	if(dietplan==4)
	{
		calories=1.0*calories;
	}
}
function formvalid(){
if(n.value=="")
{
	return false;

}
if(a.value=="")
{
	return false;

}
if(h.value=="")
{
	return false;

}
if(w.value=="")
{
	return false;

}
}

function macro(){
	if(dietplan==1)
	{
		carbo=Math.floor((calories*0.4)/4);
		carbo2=Math.floor((calories*0.4));
		fat=Math.floor((calories*0.3)/9);
		fat2=Math.floor((calories*0.3));
		protein=Math.floor((calories*0.3)/4);
		protein2=Math.floor((calories*0.3));
	}
	if(dietplan==2)
	{
		carbo=Math.floor((calories*0.6)/4);
		carbo2=Math.floor((calories*0.6));
		fat=Math.floor((calories*0.2)/9);
		fat2=Math.floor((calories*0.2));
		protein=Math.floor((calories*0.2)/4);
		protein2=Math.floor((calories*0.2));
	}
    if(dietplan==3)
	{
		carbo=Math.floor((calories*0.6)/4);
		carbo2=Math.floor((calories*0.6));
		fat=Math.floor((calories*0.1)/9);
		fat2=Math.floor((calories*0.1));
		protein=Math.floor((calories*0.3)/4);
		protein2=Math.floor((calories*0.3));
	}
	if(dietplan==4)
	{
		carbo=Math.floor((calories*0.5)/4);
        carbo2=Math.floor((calories*0.5));
        fat=Math.floor((calories*0.25)/9);
        fat2=Math.floor((calories*0.25));
		protein=Math.floor((calories*0.25)/4);
		protein2=Math.floor((calories*0.25));
	}
}
if(!localStorage.getItem("calories")||(!localStorage.getItem("water")))
{
	tablecal.textContent=0;
    tablewat.textContent=0;
    tablecarb.textContent=0;
    tableprot.textContent=0;
    tablefat.textContent=0;
}
else{
   
	tablecal.textContent=localStorage.getItem("calories");
    tablewat.textContent=localStorage.getItem("water");
    tablecarb.textContent=localStorage.getItem("carbohydrates");
    tableprot.textContent=localStorage.getItem("protein");
    tablefat.textContent=localStorage.getItem("fat");
    watercon=Number(localStorage.getItem("water"));
    calcon=Number(localStorage.getItem("calories"));
    consumedcarb1=Number(localStorage.getItem("carbohydrates"));
    consumedprot1=Number(localStorage.getItem("protein"));
    consumedfat1=Number(localStorage.getItem("fat"));



}
function table(){
protg.textContent=protein;
fatg.textContent=fat;
carbg.textContent=carbo;
carbcal.textContent=carbo2;
fatcal.textContent=fat2;
protcal.textContent=protein2
calrem.textContent=calories-calcon;
    watrem.textContent=need*1000-watercon;
    carbrem.textContent=carbo-consumedcarb1;
    protrem.textContent=protein-consumedprot1;
    fatrem.textContent=fat-consumedfat1;
}
function table2()
{
	tablecal.textContent=calcon;
    tablewat.textContent=Number(watercon);
    tablecarb.textContent=consumedcarb1;
    tableprot.textContent=consumedprot1
    tablefat.textContent=consumedfat1;
    calrem.textContent=calories-calcon;
    watrem.textContent=need*1000-watercon;
    carbrem.textContent=carbo-consumedcarb1;
    protrem.textContent=protein-consumedprot1;
    fatrem.textContent=fat-consumedfat1;

}
function def()
{
	if(fluid.value=="")
	{
		fluid.value=0;
	}
	if(foodcal.value=="")
	{
		foodcal.value=0;
	}
	if(consumedcarb.value=="")
	{
		consumedcarb.value=0;
	}
	if(consumedprot.value=="")
	{
		consumedprot.value=0;
	}
	if(consumedfat.value=="")
	{
		consumedfat.value=0;
	}

}

save.addEventListener("click",function()
{   
	def();
watercon=watercon+(Number(fluid.value));
locstorage("water",watercon);
calcon=calcon+Number(foodcal.value);
locstorage("calories",calcon);
consumedcarb1=consumedcarb1+Number(consumedcarb.value);
locstorage("carbohydrates",consumedcarb1);
consumedprot1=consumedprot1+Number(consumedprot.value);
locstorage("protein",consumedprot1);
consumedfat1=consumedfat1+Number(consumedfat.value);
locstorage("fat",consumedfat1);
table2();


    if(calcon>calories)
	
      {  tablecal.style.color="red";
         calrem.textContent=0;
			}
	
	if(need*1000<watercon)
	{
	    tablewat.style.color="red";	
	    watrem.textContent=0;
	}
	
	if(consumedcarb1>carbo)
	{
		
		 tablecarb.style.color="red";
		 carbrem.textContent=0;
	}
	
	if(consumedprot1>protein)
	{
		
		 tableprot.style.color="red";
		 protrem.textContent=0;
	}
	
	if(consumedfat1>fat)
	{
		
		 tablefat.style.color="red";
		 fatrem.textContent=0;
	}



fluid.value="";
foodcal.value="";
item.value="";
consumedfat.value="";
consumedprot.value="";
consumedcarb.value="";
});
submit2.addEventListener("click",function()
{
	if(calcon<calories)
	{
		alert("your calories intake is short by "+(calories-calcon) +" calories today");

	}
    if(calcon>calories)
	{
		alert("your daily calories has exceeded by "+(calcon-calories)+" calories");
        
			}
	if(need*1000>watercon)
	{
		alert("your water intake is short by "+((need*1000-watercon)/1000).toFixed(3)+" litres today");

	}
	if(need*1000<watercon)
	{
		alert("your daily water intake has exceeded by "+((watercon-need*1000)/1000).toFixed(3)+ " litres today");

	}
	if(consumedcarb1<carbo)
	{
		alert(" your carbohydrate intake is short by "+(carbo-consumedcarb1)+" g today");

	}
	if(consumedcarb1>carbo)
	{
		alert("your daily carbohydrate intake has exceeded short by "+(consumedcarb1-carbo)+" g ");
		
	}
	if(consumedprot1<protein)
	{
		alert("your protein is short by " +(protein-consumedprot1)+" g today");
	}
	if(consumedprot1>protein)
	{
		alert("your daily protein has exceeded by " +(consumedprot1-protein)+" g");
		
	}
	if(consumedfat1<fat)
	{
		alert("your fat intake is short by "+(fat-consumedfat1)+" g today");
	}
	if(consumedfat1>fat)
	{
		alert("your daily fat intake has exceeded by "+(consumedfat1-fat)+" g today");
		 
	}

});
reset2.addEventListener("click",function()
{
	localStorage.removeItem("calories");
	localStorage.removeItem("water");
	localStorage.removeItem("carbohydrates");
	localStorage.removeItem("protein");
	localStorage.removeItem("fat");
	 tablecal.style.color="black";
	  tablewat.style.color="black";
	   tablecarb.style.color="black";
	    tableprot.style.color="black";
	     tablefat.style.color="black";
    calcon=0;
    watercon=0;
    consumedfat1=0;
    consumedprot1=0;
    consumedfat1=0;
	tablecal.textContent=0;
    tablewat.textContent=0;
    tablecarb.textContent=0;
    tableprot.textContent=0;
    tablefat.textContent=0;
    calrem.textContent=calories;
    watrem.textContent=need*1000;
    carbrem.textContent=carbo;
    protrem.textContent=protein;
    fatrem.textContent=fat;
    

});
