
document.getElementsByTagName(`head`)[0].innerHTML += `<link rel="stylesheet" href="../Home/navigation.css">`
document.getElementsByTagName(`head`)[0].innerHTML += `<link rel="stylesheet" href="../Shared/shared.css">`

const body = document.getElementsByTagName("body")[0].innerHTML ;

const navBar =  `
<div class="Navigation-div">
<button class="menu-toggle">☰</button> 
<ul>
   <li><a class="menuItem" href="#Home">Home Page</a></li>
   <li><a class="menuItem" href="Company/company.html">Company</a></li>
   <li><a class="menuItem" href="Product/product.html">Products</a></li>
   <li><a class="menuItem" href="#Blog">Blog</a></li>
   <li><a class="menuItem" href="#Contact">Contact</a></li>
   <li class="language">
       <a href="javascript:void(0)">SV <span class="flag-icon flag-icon-se"></span></a>
       <ul class="submenu">
           <li><a href="javascript:void(0)">EN <span class="flag-icon flag-icon-us"></span></a></li>
           <li><a href="javascript:void(0)">DE <span class="flag-icon flag-icon-de"></span></a></li>
       </ul>
   </li>
</ul>
</div>
  `

document.getElementsByTagName(`body`)[0].innerHTML = navBar + body;

