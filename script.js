function myfirstapp(name, age) {

alert("Привет, меня зовут " + name + " и это моя первая программа!");

function showskills(){
	let skills = ['html','css','google chrome','snapseed'];

	for (let i = 0; i < skills.length; i++){
		document.write("Я владею " + skills[i] + "<br>");

	}
}
showskills();



function checkage(){
	if(age >= 18) {
		alert("Отлично! Самое время изучать JS");
	}
	else{
		alert("Не спеши, еще есть время");
	}
}
checkage();

function calcpow(num){
console.log(num**2);
}

calcpow(4);

}


myfirstapp("kairat", 18);