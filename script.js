//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function(){
	let para = document.createElement('p');
	para.textContent = "DOM load success";
	document.body.appendChild(para);
})