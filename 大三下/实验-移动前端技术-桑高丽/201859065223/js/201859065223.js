var menuButton = document.getElementById("menu-button")
var menu = document.getElementById("menu")
var lc = document.getElementById('left-card')
var img = document.getElementsByClassName('current-img')
var btnBox = document.getElementsByClassName('btn-box')
var bg = document.getElementsByClassName('bg')
var main = document.getElementById('main')
var boxImg = document.getElementById('box-img')
var current = 1
var gou = document.getElementById('gou')
var gouwuche = document.getElementById('gouwuche')
var dian = document.getElementById('dian')
var mendian = document.getElementById('mendian')
var he = document.getElementById('he')
var help = document.getElementById('help')
// window.event? window.event.cancelBubble = true : e.stopPropagation();
var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var text = ['跑步','鞋子','游泳'] 
var color = ['#7EC7E5','#668F60','#CDDEAF','#A6BCDA']
menuButton.onclick = function(){
    if(menu.style.width===""){
        menu.style.width = "600px"
        lc.style.display = "inline"
    }else{
        menu.style.width = ""
        lc.style.display = 'none'
    }
}

var list =  document.getElementsByTagName("li");
            //给每个li绑定事件
for(var i = 0;i<list.length;i++){
    list[i].onclick = function(){
        //弹出对应的li节点里面的内容
        for(var j = 0;j<list.length;j++){
            list[j].classList.remove('active')
        }
        this.classList.add('active')
        console.log(this.id)
        if(this.id==1){
            c1.style.display = 'block'
            c2.style.display = 'none'
            c3.style.display = 'none'
        }else if(this.id==2){
            c2.style.display = 'block'
            c1.style.display = 'none'
            c3.style.display = 'none'
        }else if(this.id==3){
            console.log(155)
            c3.style.display = 'block'
            c2.style.display = 'none'
            c1.style.display = 'none'
        }
        
    }
}
for(var i = 0;i<btnBox.length;i++){
    btnBox[i].onclick = function(){
      
        console.log(boxImg.classList)
        for(var j = 0;j<btnBox.length;j++){
            btnBox[j].classList.remove('button-active')
        }
        this.classList.add('button-active')
        boxImg.style.animation = ''
        bg[0].style.backgroundColor = color[this.id]
        // console.log(this.id)
        main.style.backgroundColor = color[this.id]
        boxImg.src = `images/${parseInt(this.id)+1}.webp`
        boxImg.style.animation = 'mymove 1s 1'
    }
}
// let x = 1
// setInterval(x=>{
//     if(x>4){
//         x = 0
//     }
//     for(var j = 0;j<btnBox.length;j++){
//         btnBox[j].classList.remove('button-active')
//     }
//     btnBox[x].classList.add('button-active')
    
//     bg[0].style.backgroundColor = color[x]
//     // console.log(this.id)
//     main.style.backgroundColor = color[x]
//     boxImg.src = `images/${parseInt(x)+1}.webp`
//     boxImg.classList.add('donghua')
// // },3000)

var a = false
gou.onclick = function(){
    console.log(0)
    if(a){
        gouwuche.style.display = 'none'
        a = false
    }else{
        gouwuche.style.display = 'block'
        a = true
    }
}
var b = false
dian.onclick = function(){
    console.log(1)
    if(b){
        mendian.style.display = 'none'
        b = false
    }else{
        mendian.style.display = 'block'
        b = true
    }
}
var c = false
he.onclick = function(){
    if(c){
        help.style.display = 'none'
        c = false
    }else{
        help.style.display = 'block'
        c = true
    }
}


