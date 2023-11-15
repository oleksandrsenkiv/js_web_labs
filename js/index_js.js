const NameInput = document.getElementById("title_input");
const PriceInput = document.getElementById("price_input");
const TypeInput = document.getElementById("type_input");
const SubmitButton = document.getElementById("submit_button");
const SearchInput = document.getElementById("search_field");
const FindButton = document.getElementById("find_button");
const TotalPrice = document.getElementById("total_price");
const itemsContanier = document.getElementById("items_contanier");
const restoreButton = document.getElementById("restore_button");
const countButton = document.getElementById("count_button");
const sortButton = document.getElementById("sort_button");



let printers = [];
let filteredPrinters = [];
let totalAmount = 0;
let currentAmout = 0;

const getItemId = (id) => `${id}`;

const itemTamplate = ({id, title, price, type}) =>
`
<li id="${id}" class="printer-contanier">
  <h3>${title}</h3>
  <p>Price: ${price}</p>
  <p>Type: ${type}</p>
  <button id="edit_button" type="submit" class="submit-button" >Edit</button>
  <button type="button" class="submit-button" onclick="deletePrinters(${id})">Delete</button>
  <div id="edit-form-container"></div>
</li>`;

itemsContanier.addEventListener("click", (event) => {
    if (event.target.id === "edit_button") {
      const itemId = event.target.parentElement.id;
      let itemIndex = printers.findIndex((item) => getItemId(item.id) === itemId);
      const selectedItem = printers[itemIndex];
      showEditForm(selectedItem, itemIndex, event.target.parentElement);
      
    }
  });
  
  function showEditForm(selectedItem, itemIndex, itemElement) {
    const editForm = document.createElement("form");
    editForm.id = "edit-form";
    editForm.innerHTML = `
    <label for="title_input" class="label-field">Name</label>
      <input type="text" id="edit_title_input" value="${selectedItem.title}" required>
      <label for="price_input" class="label-field">Price</label>
      <input type="number" id="edit_price_input" value="${selectedItem.price}" required min="0">
      <label for="type_input" class="label-field">Type</label>
      <input type="text" id="edit_type_input" value="${selectedItem.type}" required>
      <button id="submit_edit_button" type="submit" class="submit-button">Submit Edit</button>
    `;
    
    editForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const editTitleInput = editForm.querySelector("#edit_title_input");
      const editPriceInput = editForm.querySelector("#edit_price_input");
      const editTypeInput = editForm.querySelector("#edit_type_input");
      
      const editedPrice = parseFloat(editPriceInput.value);
      if (!isNaN(editedPrice) && editedPrice >= 0) {
        const editedItem = {
            ...selectedItem,
            title: editTitleInput.value,
            price: editedPrice,
            type: editTypeInput.value,
        };

        updatePrinter( {
            ...selectedItem,
            title: editTitleInput.value,
            price: editedPrice,
            type: editTypeInput.value,
        });
        
        printers[itemIndex] = editedItem;
    
        itemElement.querySelector("h3").textContent = editedItem.title;
        itemElement.querySelector("p:nth-child(2)").textContent = `Price: ${editedItem.price}`;
        itemElement.querySelector("p:nth-child(3)").textContent = `Type: ${editedItem.type}`;
        totalAmount = printers.reduce((total, item) => total + parseFloat(item.price), 0);
    
        editForm.remove();
        refetchAllPrinters();
        }
        else{
            alert("Ціна має бути більше нуля");
        }
        
    });

    itemElement.appendChild(editForm);
    
  }
 

const addItemToPage = ({id, title, price, type}) =>{
    itemsContanier.insertAdjacentHTML(
        "afterbegin",
        itemTamplate({id, title, price, type})
    );
};

const isItemAlreadyExists = (newItem) => {
    if (!newItem.title || !newItem.price || !newItem.type) {
        alert("Цей елемент вже існує або ви не коректно заповнили усі поля.");
        return true; 
    }

    return printers.some((item) => {
        return (
            item.title === newItem.title &&
            item.price === newItem.price &&
            item.type === newItem.type
        );
    });
};

const getInputValues = () =>{
    return {
        title: NameInput.value,
        price: PriceInput.value,
        type: TypeInput.value
    }
};

//const addItem = ({title, price, type}) =>{
   
    //const newItem = {
      //  id: generatedId,
        //title,
        //price: parseFloat(price),
        //type,
    //};

    //if (!isItemAlreadyExists(newItem) && newItem.price >= 0) {
      //  printers.push(newItem);
        //addItemToPage(newItem);
        //totalAmount += newItem.price;
      //}
      //else{
       // alert("Ціна має бути більше нуля");
      //}
//};

const clearInputs = () => {
    NameInput.value = "";
    PriceInput.value = "";
    TypeInput.value = "";
};

const renderItemsList = (items, onEditItem, deletePrinters) =>{
    itemsContanier.innerHTML = "";
  for (const item of items) {
    addItemToPage(item, onEditItem, deletePrinters);
  }
   
};

const refetchAllPrinters = async () =>{
    const allPrinters = await getAllPrinter();
    printers = allPrinters;
    renderItemsList(printers);
}

function deletePrinters(id) {
    deletePrinter(id).then(refetchAllPrinters);
}

SubmitButton.addEventListener('click', (event)=>{
    event.preventDefault();

    const {title, price, type} = getInputValues();

    clearInputs();
    
    postPrinter({
        title: title,
        price: price,
        type: type,
    }).then(async(allPrinters)=>{
        printers = await allPrinters.json();
        console.log(printers);
        renderItemsList(printers);
    });
   
    
});

FindButton.addEventListener('click', () => {
    const findPrinters = printers.filter(printer => printer.title.includes(SearchInput.value));
    filteredPrinters = findPrinters;
    renderItemsList(findPrinters);
});

restoreButton.addEventListener('click', ()=>{
    filteredPrinters = []
    renderItemsList(printers);
    SearchInput.value = "";
    
})

countButton.addEventListener('click', () => {
    if (filteredPrinters.length > 0) {
        // If there are items in filteredPrinters, calculate the currentAmount
        currentAmount = filteredPrinters.reduce((total, item) => total + parseFloat(item.price), 0);
        TotalPrice.textContent = `Total Price: ${currentAmount}`;
    } else {
        const totalAmount = printers.reduce((total, item) => total + parseFloat(item.price), 0);
        TotalPrice.textContent = `Total Price: ${totalAmount}`;
    }
});


sortButton.addEventListener('click', () => {

    if (filteredPrinters.length > 0) {
        const sortedPrinters = [...filteredPrinters];
        sortedPrinters.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        renderItemsList(sortedPrinters);
        filteredPrinters = []
    } else {
        const sortedPrinters = [...printers];
        sortedPrinters.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        renderItemsList(sortedPrinters);
        filteredPrinters = []
    }
});


refetchAllPrinters(printers);