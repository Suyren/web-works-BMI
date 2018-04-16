var cm = document.querySelector('.cm');
var kg = document.querySelector('.kg');
var result = document.querySelector('.resultbtn');
var refreshresult = document.querySelector('.bmi-result');
var content = document.querySelector('.content-result');
var data = JSON.parse(localStorage.getItem('bmidata')) || [];
var cmdata = JSON.parse(localStorage.getItem('cm')) || [];
var kgdata = JSON.parse(localStorage.getItem('kg')) || [];
var Today = new Date();
if(data != []){
updata();
}
result.addEventListener('click',count,false);
// result.addEventListener('click',change,false);

function count(e){
	e.preventDefault();
	if(cm.value =="")
	{
		alert("你沒有輸入身高");
	}
	else if(kg.value =="")
	{
		alert("你沒有輸入體重");
	}
	else{
	var m = cm.value / 100;
	var bmi = kg.value / (m*m);
	var bmidata={
		result:bmi.toFixed(2),
		cm:cm.value,
		kg:kg.value
	};
	data.push(bmidata.result);
	cmdata.push(bmidata.cm);
	kgdata.push(bmidata.kg);
	updata();
	change(bmi);
	localStorage.setItem('bmidata',JSON.stringify(data));
	localStorage.setItem('cm',JSON.stringify(cmdata));
	localStorage.setItem('kg',JSON.stringify(kgdata));
	}
}
function updata(){
	var str='';
	
	for(var i=0;i<data.length;i++){
		if(data[i]<18.5){
			str += '<div class="record blue"><ul class="record-data"><li>過輕</li><li><span>BMI</span>'+data[i]+'</li><li><span>Height</span>'+cmdata[i]+'</li><li><span>Weight</span>'+kgdata[i]+'</li><li><span>'+Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'</span></li></ul><div class="clearfix"></div></div>';
			}
			else if(data[i]>=18.5&&data[i]<24){
				str += '<div class="record green"><ul class="record-data"><li>理想</li><li><span>BMI</span>'+data[i]+'</li><li><span>Height</span>'+cmdata[i]+'</li><li><span>Weight</span>'+kgdata[i]+'</li><li><span>'+Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'</span></li></ul><div class="clearfix"></div></div>';
			}
			else if(data[i]>=24&&data[i]<27){
				str += '<div class="record yellow"><ul class="record-data"><li>過重</li><li><span>BMI</span>'+data[i]+'</li><li><span>Height</span>'+cmdata[i]+'</li><li><span>Weight</span>'+kgdata[i]+'</li><li><span>'+Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'</span></li></ul><div class="clearfix"></div></div>';
			}
			else if(data[i]>=27&&data[i]<30){
				str += '<div class="record orange"><ul class="record-data"><li>輕度肥胖</li><li><span>BMI</span>'+data[i]+'</li><li><span>Height</span>'+cmdata[i]+'</li><li><span>Weight</span>'+kgdata[i]+'</li><li><span>'+Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'</span></li></ul><div class="clearfix"></div></div>';
			}
			else if(data[i]>=30&&data[i]<35){
				str += '<div class="record orange"><ul class="record-data"><li>中度肥胖</li><li><span>BMI</span>'+data[i]+'</li><li><span>Height</span>'+cmdata[i]+'</li><li><span>Weight</span>'+kgdata[i]+'</li><li><span>'+Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'</span></li></ul><div class="clearfix"></div></div>';
			}
			else{
				str += '<div class="record red"><ul class="record-data"><li>重度肥胖</li><li><span>BMI</span>'+data[i]+'</li><li><span>Height</span>'+cmdata[i]+'</li><li><span>Weight</span>'+kgdata[i]+'</li><li><span>'+Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'</span></li></ul><div class="clearfix"></div></div>';
			}
		}
	content.innerHTML = str;
	}






function change(bmi){
	result.style.display = "none";
	refreshresult.style.display = "block";
	refreshresult.innerHTML = '<p class="number">'+bmi.toFixed(2)+'<br><span>BMI</span></p><a href="#" class="refresh"></a>';
	var refreshbtn = document.querySelector('.refresh');
	var number = document.querySelector('.number');
	var evaluation = document.querySelector('.evaluation');
	refreshbtn.addEventListener('click',refresh,false);
	if(bmi<18.5){
		number.style.color = "#31baf9";
		evaluation.textContent = "過輕";
		evaluation.style.color = "#31baf9";
		refreshresult.style.borderColor = "#31baf9";
		refreshbtn.style.backgroundColor = "#31baf9";
	}
	else if(bmi>=18.5&&bmi<24){
		number.style.color = "#86d73f";
		evaluation.textContent = "理想";
		evaluation.style.color = "#86d73f";
		refreshresult.style.borderColor = "#86d73f";
		refreshbtn.style.backgroundColor = "#86d73f";
	}
	else if(bmi>=24&&bmi<27){
		number.style.color = "#ff982d";
		evaluation.textContent = "過重";
		evaluation.style.color = "#ff982d";
		refreshresult.style.borderColor = "#ff982d";
		refreshbtn.style.backgroundColor = "#ff982d";
	}
	else if(bmi>=27&&bmi<30){
		number.style.color = "#ff6c03";
		evaluation.textContent = "輕度肥胖";
		evaluation.style.color = "#ff6c03";
		refreshresult.style.borderColor = "#ff6c03";
		refreshbtn.style.backgroundColor = "#ff6c03";
	}
	else if(bmi>=30&&bmi<35){
		number.style.color = "#ff6c03";
		evaluation.textContent = "中度肥胖";
		evaluation.style.color = "#ff6c03";
		refreshresult.style.borderColor = "#ff6c03";
		refreshbtn.style.backgroundColor = "#ff6c03";
	}
	else{
		number.style.color = "#ff1200";
		evaluation.style.color = "#ff1200";
		evaluation.textContent = "重度肥胖";
		refreshresult.style.borderColor = "#ff1200";
		refreshbtn.style.backgroundColor = "#ff1200";
	}

}
function refresh(){
	window.location.reload();
}


