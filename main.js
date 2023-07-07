var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//Add item
function addItem(e){
     e.preventDefault();
     //console.log(1);
     var newItem=document.getElementById('item').value;
     //create new li element
     var li=document.createElement('li');
     li.className="list-group-item";
     //console.log(li);
     //Add text node with input value
     li.appendChild(document.createTextNode(newItem));
     itemList.appendChild(li);
     //create delete Button
     var deleteBtn=document.createElement('button');
     //Add classes todel button
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
    // Append text Node
     deleteBtn.appendChild(document.createTextNode('x'));

     li.appendChild(deleteBtn);
     itemList.ariaHasPopup(li);

}
//Delete Event
itemList.addEventListener('click',removeItem);
//Remove item
function removeItem(e){
    //console.log(1);
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}