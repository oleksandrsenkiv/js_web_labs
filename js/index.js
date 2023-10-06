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

const itemTamplate = ({title, price, type}) =>
`
<li class="printer-contanier">
  <h3>${title}</h3>
  <p>Price: ${price}</p>
  <p>Type: ${type}</p>
</li>`;

const addItemToPage = ({title, price, type}) =>{
    itemsContanier.insertAdjacentHTML(
        "afterbegin",
        itemTamplate({title, price, type})
    );
};

const getInputValues = () =>{
    return {
        title: NameInput.value,
        price: PriceInput.value,
        type: TypeInput.value
    }
};

const addItem = ({title, price, type}) =>{
    const newItem = {
        title,
        price,
        type,
    };

    printers.push(newItem);
    addItemToPage(newItem);
    totalAmount += parseFloat(price);
  
};

const clearInputs = () => {
    NameInput.value = "";
    PriceInput.value = "";
    TypeInput.value = "";
};

const renderItemsList = (items) =>{
    itemsContanier.innerHTML = "";
    currentAmout = totalAmount;
    totalAmount = 0;
    for (const item of items){
        addItemToPage(item);
        totalAmount += parseFloat(item.price);
    }
   
};

SubmitButton.addEventListener('click', (event)=>{
    event.preventDefault();

    const {title, price, type} = getInputValues();

    clearInputs();
    addItem({
        title: title,
        price: price,
        type: type,
    });

});

FindButton.addEventListener('click', () => {
    const findPrinters = printers.filter(printer => printer.title.includes(SearchInput.value));
    filteredPrinters = findPrinters;
    renderItemsList(findPrinters);
});

restoreButton.addEventListener('click', ()=>{
    totalAmount = currentAmout;
    renderItemsList(printers);
    SearchInput.value = "";
})

countButton.addEventListener('click', () => {
    TotalPrice.textContent = `Total Price: ${totalAmount}`;
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
    }
});
