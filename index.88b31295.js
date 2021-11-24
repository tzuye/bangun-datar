const e=document.querySelector(".explaination-circle"),n=document.querySelector('input[name = "number-circle"]'),a=document.querySelector(".explaination-square"),l=document.querySelector('input[name = "number-square"]'),r=document.querySelector(".explaination-rectangle"),s=document.querySelector('input[name = "number-width"]'),t=document.querySelector('input[name = "number-height"]'),i=document.querySelector(".explaination-triangle"),c=[...document.querySelectorAll(".form-group.triangle input")],p=document.querySelector(".explaination-trapezoid"),u=[...document.querySelectorAll(".form-group.trapezoid input")],o=document.querySelector(".explaination-parallelogram"),m=[...document.querySelectorAll(".form-group.parallelogram input")];[...document.querySelectorAll("button")].forEach((g=>{g.addEventListener("click",(function(g){if([...document.querySelectorAll("input")].forEach((e=>{e.value<0&&(e.value*=-1)})),g.target.classList.contains("circle")){""===n.value&&(n.value=0),e.innerHTML='\n<ul class="list-group list-group-flush animate__animated animate__fadeIn">\n    <li class="list-group-item">\n        Luas = <span class="phi"></span> x <span class="input-circle"></span><sup>2</sup>\n    </li>\n    <li class="list-group-item">\n        Luas = <span class="phi"></span> x <span class="input-circle"></span> x <span class="input-circle"></span> = <span\n            class="total-circle"></span>\n    </li>\n    <li class="list-group-item">\n        Keliling = 2 x <span class="phi"></span> x <span class="input-circle"></span> =\n        <span class="total-circle-k"></span>\n    </li>\n</ul>\n';const a=[...document.querySelectorAll(".phi")],l=[...document.querySelectorAll(".input-circle")],r=document.querySelector(".total-circle"),s=document.querySelector(".total-circle-k");a.forEach((e=>{parseInt(n.value)%7==0?e.innerHTML="22/7":e.innerHTML="3.14"})),l.forEach((e=>{e.innerHTML=parseInt(n.value)})),n.value%7==0?(r.innerHTML=parseInt(a[1].innerHTML)/7*Math.pow(l[1].innerHTML,2),s.innerHTML=2*parseInt(a[2].innerHTML)/7*l[3].innerHTML):(r.innerHTML=a[1].innerHTML*Math.pow(l[1].innerHTML,2),s.innerHTML=(2*a[2].innerHTML*l[3].innerHTML).toFixed(2))}if(g.target.classList.contains("square")){""===l.value&&(l.value=0),a.innerHTML='\n<ul class="list-group list-group-flush animate__animated animate__fadeIn">\n    <li class="list-group-item">\n        Luas = <span class="lateral"></span> x <span class="lateral"></span> = <span class="square-area"></span>\n    </li>\n    <li class="list-group-item">\n        Keliling = <span class="lateral"></span> x 4 = <span class="perimeter-of-square"></span>\n    </li>\n</ul>\n';const e=[...document.querySelectorAll(".lateral")],n=document.querySelector(".square-area"),r=document.querySelector(".perimeter-of-square");e.forEach((e=>{e.innerHTML=l.value})),n.innerHTML=Math.pow(parseInt(l.value),2),r.innerHTML=4*parseInt(l.value)}if(g.target.classList.contains("rectangle")){""===s.value&&(s.value=0),""===t.value&&(t.value=0),r.innerHTML='\n<ul class="list-group list-group-flush animate__animated animate__fadeIn">\n    <li class="list-group-item">\n        Luas = <span class="rectangle-width"></span> x <span class="rectangle-height"></span> = <span class="rectangle-area"></span>\n    </li>\n    <li class="list-group-item">\n        Keliling = ( 2 x <span class="rectangle-width"></span> ) + ( 2 x <span class="rectangle-height"></span> )\n    </li>\n    <li class="list-group-item">\n        Keliling = <span class="sum-rectangle-width"></span> + <span class="sum-rectangle-height"></span> = <span class="perimeter-of-rectangle"></span>\n    </li>\n</ul>\n';const e=document.querySelectorAll(".rectangle-width"),n=document.querySelectorAll(".rectangle-height"),a=document.querySelector(".rectangle-area"),l=document.querySelector(".sum-rectangle-width"),i=document.querySelector(".sum-rectangle-height"),c=document.querySelector(".perimeter-of-rectangle");e.forEach((e=>{e.innerHTML=s.value})),n.forEach((e=>{e.innerHTML=t.value})),a.innerHTML=e[0].innerHTML*n[0].innerHTML,l.innerHTML=2*s.value,i.innerHTML=2*t.value,c.innerHTML=parseInt(l.innerHTML)+parseInt(i.innerHTML)}if(g.target.classList.contains("triangle")){c.forEach((e=>{""===e.value&&(e.value=0)})),i.innerHTML='\n<ul class="list-group list-group-flush animate__animated animate__fadeIn">\n    <li class="list-group-item">\n        Luas = 1/2 x <span class="triangle-base"></span> x <span class="triangle-height"></span>\n    </li>\n    <li class="list-group-item">\n        Luas = 1/2 x <span class="triangle-sum-at"></span> = <span class="triangle-area"></span>\n    </li>\n    <li class="list-group-item">\n        Keliling = <span class="triangle-base"></span> + <span class="triangle-b"></span> + <span class="triangle-c"></span>\n    </li>\n    <li class="list-group-item">\n        Keliling = <span class="perimeter-of-triangle"></span>\n    </li>\n</ul>\n';const e=[...document.querySelectorAll("span.triangle-base")],n=document.querySelector("span.triangle-height"),a=document.querySelector("span.triangle-sum-at"),l=document.querySelector("span.triangle-area"),r=document.querySelector("span.triangle-b"),s=document.querySelector("span.triangle-c"),t=document.querySelector("span.perimeter-of-triangle");e.forEach((e=>{e.innerHTML=c[0].value})),n.innerHTML=c[1].value,a.innerHTML=parseInt(e[0].innerHTML)*parseInt(n.innerHTML),l.innerHTML=1*parseInt(a.innerHTML)/2,r.innerHTML=c[2].value,s.innerHTML=c[3].value,t.innerHTML=parseInt(e[1].innerHTML)+parseInt(r.innerHTML)+parseInt(s.innerHTML)}if(g.target.classList.contains("trapezoid")){u.forEach((e=>{""===e.value&&(e.value=0)})),p.innerHTML='\n<ul class="list-group list-group-flush animate__animated animate__fadeIn">\n    <li class="list-group-item">\n        Luas = ( <span class="trapezoid-side-a"></span> + <span class="trapezoid-side-b"></span> ) x <span class="trapezoid-height"></span> ÷ 2\n    </li>\n    <li class="list-group-item">\n        Luas = <span class="calculate-trapezoid-a"></span> ÷ 2 =  <span class="trapezoid-area"></span>\n    </li>\n    <li class="list-group-item">\n        Keliling = <span class="trapezoid-side-a"></span> + <span class="trapezoid-side-b"></span> + <span class="trapezoid-side-c"></span> + <span class="trapezoid-height"></span>\n    </li>\n    <li class="list-group-item">\n        Keliling = <span class="perimeter-of-trapezoid"></span>\n    </li>\n</ul>\n';const e=[...document.querySelectorAll(".trapezoid-side-a")],n=[...document.querySelectorAll(".trapezoid-side-b")],a=document.querySelector(".trapezoid-side-c"),l=[...document.querySelectorAll(".trapezoid-height")],r=document.querySelector(".calculate-trapezoid-a"),s=document.querySelector(".trapezoid-area"),t=document.querySelector(".perimeter-of-trapezoid");e.forEach((e=>{e.innerHTML=u[0].value})),n.forEach((e=>{e.innerHTML=u[2].value})),a.innerHTML=u[3].value,l.forEach((e=>{e.innerHTML=u[1].value})),r.innerHTML=(parseInt(e[0].innerHTML)+parseInt(n[0].innerHTML))*parseInt(l[0].innerHTML),s.innerHTML=parseInt(r.innerHTML)/2,t.innerHTML=parseInt(e[0].innerHTML)+parseInt(n[0].innerHTML)+parseInt(a.innerHTML)+parseInt(l[0].innerHTML)}if(g.target.classList.contains("parallelogram")){m.forEach((e=>{""===e.value&&(e.value=0)})),o.innerHTML='\n<ul class="list-group list-group-flush animate__animated animate__fadeIn">\n    <li class="list-group-item">\n        Luas = <span class="parallelogram-side-a"></span> x <span class="parallelogram-height"></span> = <span class="parallelogram-area"></span>\n    </li>\n    \n    <li class="list-group-item">\n        Keliling = <span class="parallelogram-side-a"></span> + <span class="parallelogram-side-b"></span> + <span class="parallelogram-side-a"></span> + <span class="parallelogram-side-b"></span>\n    </li>\n\n    <li class="list-group-item">\n        Keliling = <span class="perimeter-of-parallelogram"></span>\n    </li>\n</ul>\n';const e=[...document.querySelectorAll(".parallelogram-side-a")];e.forEach((e=>{e.innerHTML=m[0].value}));[...document.querySelectorAll(".parallelogram-side-b")].forEach((e=>{e.innerHTML=m[2].value}));const n=document.querySelector(".parallelogram-height"),a=document.querySelector(".parallelogram-area");n.innerHTML=m[1].value,a.innerHTML=parseInt(e[0].innerHTML)*parseInt(n.innerHTML);document.querySelector(".perimeter-of-parallelogram").innerHTML=2*m[0].value+2*m[2].value}}))}));const g=document.querySelector(".copy-right"),d=(new Date).getFullYear();g.innerText=d;
//# sourceMappingURL=index.88b31295.js.map
