(()=>{"use strict";function t(t,e){const n=document.documentElement;t.hasAttribute("data-outside")||(t.setAttribute("data-outside",""),n.addEventListener("click",(function o(a){t.contains(a.target)||(t.removeAttribute("data-outside"),n.removeEventListener("click",o,a.stopPropagation()),e())}),event.stopPropagation()))}new class{constructor(t){this.elements=document.querySelectorAll(t),this.activeClass="ativo"}show(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass);const e=t.getAttribute("aria-controls");document.getElementById(e).classList.contains("ativo")?t.setAttribute("aria-expanded",!0):t.setAttribute("aria-expanded",!1)}init(){this.elements.length&&(this.show(this.elements[0]),this.elements.forEach((t=>{t.addEventListener("click",(()=>this.show(t)))})))}}('[data-anime="accordion"] dt').init(),function(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] div');if(t&&e){function n(t){const n=e[t].dataset.anima;e.forEach((t=>{t.classList.remove("ativo",n)})),e[t].classList.add("ativo",n)}n(0),t.forEach(((t,e)=>{t.addEventListener("click",(()=>n(e)))}))}}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]');function e(){t.forEach((t=>{t.getBoundingClientRect().top-.5*window.innerHeight<0&&!t.classList.contains("ativo")&&t.classList.add("ativo")}))}e(),window.addEventListener("scroll",e)}(),function(){const t=document.querySelector('[data-modal="btn-entrar"]'),e=document.querySelector('[data-modal="btn-close"]'),n=document.querySelector('[data-modal="container"');function o(){n.classList.toggle("ativo")}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){this===t.target&&o()})),window.addEventListener("keydown",(function(t){n.classList.contains("ativo")&&"Escape"===t.key&&o()}))}(),function(){function t(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerHTML=n,document.body.appendChild(e),e}(this);e.tooltipBox=t,e.element=this,this.addEventListener("mouseleave",e),n.tooltipBox=t,n.element=this,this.addEventListener("mousemove",n)}document.querySelectorAll("[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",t)}));const e={tooltipBox:"",element:"",handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",e),this.element.removeEventListener("mousemove",n)}},n={tooltipBox:"",element:"",handleEvent(t){this.tooltipBox.style.top=t.pageY+20+"px",this.tooltipBox.style.left=t.pageX+20+"px"}}}(),function(){function e(e){e.preventDefault(),e.stopPropagation(),this.classList.add("menu-active"),t(this,(()=>{this.classList.remove("menu-active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{t.addEventListener("click",e)}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="items"]');e.addEventListener("click",(function(){n.classList.add("active"),e.classList.add("active"),t(this,(()=>{this.classList.remove("active")})),t(n,(()=>{n.classList.remove("active")}))}))}(),function(){const t=document.querySelector("[data-dias]"),e=document.querySelector("[data-horas]"),n=t.dataset.dias.split(",").map(Number),o=e.dataset.horas.split(",").map(Number),a=new Date;var i,s;i=a.getDay(),s=a.getHours(),n.includes(i)&&o[0]<=s&&o[1]>s?t.classList.add("aberto"):t.classList.remove("aberto")}(),function(){const t=document.querySelector(".grid-numeros");!async function(){try{(await(await fetch("../../animaisapi.json")).json()).forEach((e=>{!function(e){const n=document.createElement("li");n.classList.add("card-animal"),n.innerHTML=`<h3>${e.especie}</h3><span data-anime="numeros">${e.total}</span>`,t.appendChild(n)}(e)})),function(){const t=document.querySelectorAll('[data-anime="numeros"]'),e=document.getElementById("numeros"),n=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(n.disconnect,t.forEach((t=>{const e=+t.innerText,n=e/70;let o=0;const a=setInterval((()=>{o=Math.floor(o+n),t.innerText=o,o>e&&(t.innerHTML=e,clearInterval(a))}),20*Math.random())})))}));n.observe(e,{attributes:!0})}()}catch(t){console.log(t)}}()}(),function(){const t=document.querySelector('[data-bitcoin="value"]');!async function(){try{const e=100/(await(await fetch("https://blockchain.info/ticker")).json()).BRL.buy;t.innerText=e.toFixed(6)}catch(t){console.log(t)}}()}()})();