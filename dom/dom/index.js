// access element by id
const demoId=document.getElementById('demo');

// adding click event to an Id

demoId.addEventListener('click',function(){
    demoId.classList.toggle('colored-in');
}
);

// Access  an element by class
const demoClass=document.getElementsByClassName('demo');
for (i=0; i<demoClass.length; i++){

demoClass[i].addEventListener('click', function() {
    this.classList.toggle('colored-in');
}
);
}

// access an element by tag
const demoTag=document.getElementsByTagName('article');
for (i =0; i<demoTag.length; i++){
    demoTag[i].addEventListener('click',function (){
        this.classList.toggle('colored-in');
    }
    );
};

// Access an element by query
const demoQuery = document.querySelector('.query');

// Add click event to all queries
demoQuery.addEventListener('click', function () {
  this.classList.toggle('colored-in');
});

const demoQueries = document.querySelectorAll('[role="demo"]');

// Add click event to all queries
demoQueries.forEach(q => {
    q.addEventListener('click',function(){
        this.classList.toggle('colored-in');
    });
});

// // create button
// const createButton=document.getElementById('createButton');
// // Append buttom to DOm
// createButton.addEventListener('click',function(){
//     const button =document.createElement('button');
//     button.textContent='Button';
//     const buttonCreationArea =document.getElementById('buttonGoesHere');
//     buttonCreationArea.appendchild(button);
// });

// Create button
const createButton = document.getElementById('createButton');

// Append button to DOM
createButton.addEventListener('click', function () {
  const button = document.createElement('button');
  button.textContent = 'Button';
  const buttonCreationArea = document.getElementById('buttonGoesHere');
  buttonCreationArea.appendChild(button);
});


// const createTextNode = document.getElementById('createTextNode');

// createTextNode.addEventListener('click', function () {
//   const textNode = document.createTextNode('hello');
//   const textNodeCreationArea = document.getElementById('textNodeGoesHere');
//   textNodeCreationArea.appendChild(textNode);
// });

const createTextNode =document.getElementById('createTextNode');
createTextNode.addEventListener('click',function () {
    const textNode = document.createTextNode('helo  ');
    const textNodeCreationArea = document.getElementById('textNodeGoesHere');
    textNodeCreationArea.appendChild(textNode);

});

// change InnerHtml
const changeAInnerHTML = document.getElementById('changeInnerHTML');

changeAInnerHTML.addEventListener('click', function (){
    changeAInnerHTML.innerHTML = 'i changed it and added a <div>div</div> element.';

});

//  change attribute
const changeAttribute = document.getElementById('changeAttribute');

changeAttribute.addEventListener('click', function (){
    changeAttribute.setAttribute('src','https://i.pinimg.com/originals/d9/12/fe/d912fe4416733b64cafa6a90252aa4cd.jpg')
});

const changeStyle = document.getElementById('changeStyle');

changeStyle.addEventListener('click', function () {
  changeStyle.style.backgroundColor = '#808080';
});


// Append child
const appendListItem = document.getElementById('appendListItem');
const ulAppend = document.getElementById('ulAppend');

appendListItem.addEventListener('click', function (){
    const li = document.createElement('li');
    li.textContent= 'Added new list item';
    ulAppend.appendChild(li);
});

// Remove child

const removeListItem = document.getElementById('removeListItem');
const ulRemove = document.getElementById('ulRemove');
for (i=0; i<3; i++){
    const li = document.createElement('li');
    li.textContent = 'Remove the list items';
    ulRemove.appendChild(li);
}

removeListItem.addEventListener('click', function () {
    ulRemove.removeChild(ulRemove.firstChild)
});

// Replace child
const ReplaceListItem = document.getElementById('replaceListItem');
const  ulReplace = document.getElementById('ulReplace');

for (i=0; i <1; i++) {
    const li =document.createElement('li');
    li.textContent = 'replace the list item';
    ulReplace.appendChild(li);
}
const newELement = document.createElement('li');
newELement.textContent='new element';

replaceListItem.addEventListener('click',function (){
    ulReplace.replaceChild(newELement,ulReplace.firstChild);

});

const outer = document.getElementById('traversing');

for (i = 0; i < 4; i++) {
  const div = document.createElement('div');
  outer.appendChild(div);
}


outer.addEventListener('click', function (event) {
    const elementClicked = event.target;
  
    if (!elementClicked.firstChild.textContent) {
  
      for (i = 0; i < elementClicked.children.length; i++) {
        elementClicked.childNodes[i].textContent = 'childNodes ';
      };
  
      elementClicked.firstChild.textContent += 'firstChild';
      elementClicked.lastChild.textContent += 'lastChild';
      elementClicked.nextSibling.textContent += 'nextSibling';
      elementClicked.previousSibling.textContent += 'previousSibling';
    }
  });