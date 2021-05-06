var big_ph=document.getElementById("big_ph");
var li_gh=[li_ph_1=document.getElementById("detail_0"),
		li_ph_2=document.getElementById("detail_2"),
		li_ph_3=document.getElementById("detail_3"),
		li_ph_4=document.getElementById("detail_4")];
var prev1=document.getElementById("prev1"),
	next1=document.getElementById("next1"),
	count_1=document.getElementById("count_1");
	
// 全局变量用来计数，控制数量的加减
var index=0;

function img_onmouseover(btn,big_ph){
	for(var i=0;i<li_gh.length;i++){
		if(btn==li_gh[0]){
			big_ph.innerHTML='<img src="./img/detail/1.jpg" style="width:480px;height:480px;">';
		}
		if(btn==li_gh[1]){
			big_ph.innerHTML='<img src="./img/detail/2.jpg" style="width:480px;height:480px">';
		}
		if(btn==li_gh[2]){
			big_ph.innerHTML='<img src="./img/detail/3.jpg" style="width:480px;height:480px">';
		}
		if(btn==li_gh[3]){
			big_ph.innerHTML='<img src="./img/detail/4.jpg" style="width:480px;height:480px">';
		}
	}
	btn.style.border="1px crimson solid";
}

function img_onmouseout(btn){
	btn.style.border="none";
}

function onclick_add(){
	index++;
	count_1.innerText=index;
}

function onclick_lose(){
	index--;
	count_1.innerText=index;
}

