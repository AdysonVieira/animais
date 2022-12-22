(()=>{"use strict";function t(t,e){const s=document.documentElement;t.hasAttribute("data-outside")||(t.setAttribute("data-outside",""),s.addEventListener("click",(function i(n){t.contains(n.target)||(t.removeAttribute("data-outside"),s.removeEventListener("click",i,n.stopPropagation()),e())}),event.stopPropagation()))}class e{constructor(t,e,s){this.numbers=document.querySelectorAll(t),this.container=document.querySelector(e),this.classAddContainer=s,this.handleObserver=this.handleObserver.bind(this)}static animaNumber(t){const e=+t.innerText,s=e/70;let i=0;const n=setInterval((()=>{i=Math.floor(i+s),t.innerText=i,i>e&&(t.innerHTML=e,clearInterval(n))}),20*Math.random())}handleNumbers(){this.numbers.forEach((t=>this.constructor.animaNumber(t)))}handleObserver(t){t[0].target.classList.contains(this.classAddContainer)&&(this.observ.disconnect,this.handleNumbers())}observer(){this.observ=new MutationObserver(this.handleObserver),this.observ.observe(this.container,{attributes:!0})}init(){return this.numbers.length&&this.container&&this.observer(),this}}new class{constructor(t){this.elements=document.querySelectorAll(t),this.activeClass="ativo"}show(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass);const e=t.getAttribute("aria-controls");document.getElementById(e).classList.contains("ativo")?t.setAttribute("aria-expanded",!0):t.setAttribute("aria-expanded",!1)}init(){return this.elements.length&&(this.show(this.elements[0]),this.elements.forEach((t=>{t.addEventListener("click",(()=>this.show(t)))}))),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e)}activeTab(t){const e=this.tabContent[t].dataset.anima;this.tabContent.forEach((t=>{t.classList.remove("ativo",e)})),this.tabContent[t].classList.add("ativo",e)}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))),this}}('[data-tab="menu"] li','[data-tab="content"] div').init(),new class{constructor(t,e,s){this.btnOpenModal=document.querySelector(t),this.btnCloseModal=document.querySelector(e),this.container=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.closeClickModal=this.closeClickModal.bind(this),this.closeKeyModal=this.closeKeyModal.bind(this)}toggleModal(){this.container.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}addModalEvents(){this.btnOpenModal.addEventListener("click",this.eventToggleModal),this.btnCloseModal.addEventListener("click",this.eventToggleModal),this.container.addEventListener("click",this.closeClickModal),window.addEventListener("keydown",this.closeKeyModal)}closeClickModal(t){this.container===t.target&&this.toggleModal()}closeKeyModal(t){this.container.classList.contains("ativo")&&"Escape"===t.key&&this.toggleModal()}init(){return this.btnOpenModal&&this.btnCloseModal&&this.container&&this.addModalEvents(),this}}('[data-modal="btn-entrar"]','[data-modal="btn-close"]','[data-modal="container"]').init(),new class{constructor(t){this.elements=document.querySelectorAll(t),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}addTooltipEvents(){this.elements.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}createTooltipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerHTML=s,document.body.appendChild(e),this.tooltip=e}onMouseOver({currentTarget:t}){this.createTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}onMouseMove({pageX:t,pageY:e}){t+this.tooltip.getBoundingClientRect().width>window.innerWidth?this.tooltip.style.left=t-this.tooltip.getBoundingClientRect().width+"px":this.tooltip.style.left=t+20+"px",this.tooltip.style.top=e+20+"px"}onMouseLeave({currentTarget:t}){this.tooltip.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}init(){return this.elements.length&&this.addTooltipEvents(),this}}("[data-tooltip]").init(),new class{constructor(t,e){this.elements=document.querySelectorAll(t),this.className=e,this.getElementDistance=this.getElementDistance.bind(this),this.checkDistance=this.checkDistance.bind(this)}getElementDistance(){this.distance=[...this.elements].map((t=>({element:t,offset:t.offsetTop})))}checkDistance(){const t=.5*innerHeight;this.distance.forEach((({element:e,offset:s})=>{s-window.pageYOffset-t<0&&!e.classList.contains(this.className)&&e.classList.add(this.className)}))}addScrollEvent(){window.addEventListener("scroll",this.checkDistance)}init(){return this.elements.length&&(this.addScrollEvent(),this.getElementDistance(),this.checkDistance()),this}}('[data-anime="scroll"]',"ativo").init(),new class{constructor(t){this.dataDropdown=document.querySelectorAll(t),this.addActiveClick=this.addActiveClick.bind(this)}addDropdownEvent(){this.dataDropdown.forEach((t=>{t.addEventListener("click",this.addActiveClick)}))}addActiveClick(e){e.preventDefault(),e.stopPropagation(),e.target.classList.add("menu-active"),t(e.target,(()=>{e.target.classList.remove("menu-active")}))}init(){this.dataDropdown.length&&this.addDropdownEvent()}}("[data-dropdown]").init(),new class{constructor(t,e,s){this.btnMenu=document.querySelector(t),this.menu=document.querySelector(e),this.className=s,this.addMobile=this.addMobile.bind(this)}addMenuEvent(){this.btnMenu.addEventListener("click",this.addMobile)}addMobile(){this.menu.classList.add(this.className),this.btnMenu.classList.add(this.className),t(this.menu,(()=>{this.btnMenu.classList.remove(this.className),this.menu.classList.remove(this.className)}))}init(){this.btnMenu&&this.menu&&this.addMenuEvent()}}('[data-menu="button"]','[data-menu="items"]',"active").init(),new class{constructor(t,e){this.dias=document.querySelector(t),this.horario=document.querySelector(e),this.presenteDia=new Date}dataFuncionamento(){this.diasSemana=this.dias.dataset.dias.split(",").map(Number),this.horasDia=this.horario.dataset.horas.split(",").map(Number)}checkDia(t,e){this.diasSemana.includes(t)&&this.horasDia[0]<=e&&this.horasDia[1]>e?this.dias.classList.add("aberto"):this.dias.classList.remove("aberto")}init(){return this.dias&&this.horario&&(this.dataFuncionamento(),this.checkDia(this.presenteDia.getDay(),this.presenteDia.getUTCHours()-3)),this}}("[data-dias]","[data-horas]").init(),function(){const t=document.querySelector(".grid-numeros");!async function(){try{(await(await fetch("../../animaisapi.json")).json()).forEach((e=>{!function({especie:e,total:s}){const i=document.createElement("li");i.classList.add("card-animal"),i.innerHTML=`<h3>${e}</h3><span data-anime="numeros">${s}</span>`,t.appendChild(i)}(e)})),new e('[data-anime="numeros"]',"#numeros","ativo").init()}catch(t){console.log(t)}}()}(),function(){const t=document.querySelector('[data-bitcoin="value"]');!async function(){try{const e=100/(await(await fetch("https://blockchain.info/ticker")).json()).BRL.buy;t.innerText=e.toFixed(6)}catch(t){console.log(t)}}()}()})();