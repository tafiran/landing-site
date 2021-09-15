/* for type = "sqareFour" */
function sqareFour(typeContent="sqareFour") {
	var count = 4;
	var menuList = document.querySelectorAll(`div[type="${typeContent}"]`);
  console.log(menuList)
  for (let i=0; i<menuList.lenght; i++) {
  	let elem = menuList[i];
    console.log(elem)
    
  	for (let j=0; i<count; i++) {
    
    	let add = document.createElement("span");
      elem.append(add);
      console.log(j, elem);
    }
  }
}

var blocks = document.querySelectorAll('.block');
console.log(blocks);
for (let i=0; i < blocks.length; i++) {
    let elem = blocks[i];
    let parent = elem.parentNode
    let copy = elem.cloneNode()
    elem.className="wrapper";
    elem.id=""
    let elemCopy = elem.cloneNode(true)
    elem.remove();
    copy.appendChild(elemCopy)
    console.log(copy, 3)
    parent.prepend(copy)
}

