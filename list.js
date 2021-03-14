var form = document.getElementById('addForm');
var listItems = document.getElementById('items');
// when ever we press submit eventListener work
form.addEventListener('submit',addItem);

// now for delete element by X button after adding values
listItems.addEventListener('click',removeItem); // it hears the click inside items(id)

function addItem(e) {
    e.preventDefault(); // prevent from erasing in console
    
    // get input value
    var text = document.getElementById('item').value;
 
    //crete li tag to append the text in list
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    //Add text node with input
    li.appendChild(document.createTextNode(text)); // we have to create a text inside li
    
    // now create a delete button
    var delButton = document.createElement('button');
    // Add class name
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    // append text inside button
    delButton.appendChild(document.createTextNode('X'));
    
    // add button create
    var addButton = document.createElement('button');
    addButton.className = 'add';
    addButton.appendChild(document.createTextNode('add'));
    // now we have to append delete button inside the li tag
    li.appendChild(delButton);
    li.appendChild(addButton);
    // append li to the list to show in screen
    listItems.appendChild(li);
}

// creating function remove item

function removeItem(e) {
    // since click inside the list can be made in any place
    // so we have to specificity check wither it comes from delete button or not
    // e.target will get us the area of click
    if(e.target.classList.contains('delete')) { // checking that click area contains delete class or not
        if(confirm('do you want to delete that item permanently?')) {
            var li = e.target.parentElement; // parentElement of X button is the li tag
            listItems.removeChild(li); // actually removing the parent of X button
        }
    }
    else if(e.target.classList.contains('add')) {
        var li = e.target.parentElement;
        var text = document.getElementById('item');
        text.value = li.textContent;
        listItems.removeChild(li);
    }
}
