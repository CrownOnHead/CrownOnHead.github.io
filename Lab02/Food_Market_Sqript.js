// JavaScript
//Adapted sidebar from https://www.w3schools.com/css/css_templates.asp
//Adapted JavaScript from https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery/scripts

function openInfo(evt, sidenavLinkName){
	
	//Get all elements with class="sideNavContent" and hide them
	sideNavContent = document.getElementsByClassName("sideNavContent");
	for (i=0; i < sideNavContent.length; i++){
		sideNavContent[i].style.display = "none";
	}
	
	// Get all elements with class="sidenavLink" and remove the class "active"
	sidenavLink = document.getElementsByClassName("sidenavLink");
	for (i = 0; i < sidenavLink.length; i++) {
    sidenavLink[i].className = sidenavLink[i].className.replace(" active", "");
  }

// Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(sidenavLinkName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 1.90
	},
	{
		name: "Brocoli (Organic)",
		nutFree: true,
		lactoseFree: true,
		organic: true,
		price: 2.50
	},
	{
		name: "Nut Bread",
		nutFree: false,
		lactoseFree: false,
		organic: false,
		price: 4.00
	},
	{
		name: "Lean Ground Beef (6.59 kg)",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 20.65
	},
	{
		name: "Fresh Atlantic Salmon (22.02 kg) (Organic) ",
		nutFree: true,
		lactoseFree: true,
		organic: true,
		price: 30.85
	},
	{
		name: "Liberte Greek Yogurt (750 g)",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 4.50
	},
	{
		name: "Nestle Drumstick",
		nutFree: false,
		lactoseFree: false,
		organic: false,
		price: 4.00
	},
	{
		name: "White Chedder (250 g)",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 8.50
	},
	{
		name: "Bananas",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 3.00
	},
	{
		name: "Romaine Hearts (Organic)",
		nutFree: true,
		lactoseFree: true,
		organic: true,
		price: 3.80
	}
];

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
	
	var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	var productsFillters = document.getElementsByName("restriction");
	var chosenFillters = [];
	
	
		for (i = 0; i < productsFillters.length; i++) { 
			if (productsFillters[i].checked) {
				chosenFillters.push(productsFillters[i].value);
			}
		}
	
	var sortedProducts = products.sort(sortByPrice);
	 var optionArray = restrictListProducts(products, chosenFillters);
	
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
 

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price.toFixed(2);
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName.name;
		label.appendChild(document.createTextNode(productName));
		label.appendChild(document.createElement('br'));
		label.appendChild(document.createTextNode("  Price: $" + productPrice));
		label.appendChild(document.createElement('br'));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected: ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price: $" + getTotalPrice(chosenProducts).toFixed(2)));
		
}


	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	var lactoseFree = false;
	var nutFree = false;
	var organic = false;
	if (restrictions.length > 0){
		for (i = 0; i < restrictions.length; i++) { 
			if (restrictions[i] == "organic"){
				organic = true;
			}
			else if (restrictions[i] == "nutFree"){
				nutFree = true;
			}
			else if (restrictions[i] == "lactoseFree"){
				lactoseFree = true;
			}
		}
	}
	
	let product_names = [];
	
	for (let i=0; i<prods.length; i+=1) {
		if ((lactoseFree == true) && (nutFree == true)&& (organic == true) && (prods[i].lactoseFree == true) && (prods[i].organic == true) && (prods[i].nutFree == true)){
			product_names.push(prods[i]);
		}
		else if ((lactoseFree == true) && (nutFree == true) && (organic == false) && (prods[i].lactoseFree == true) && (prods[i].nutFree == true)){
			product_names.push(prods[i]);
		}
		else if ((lactoseFree == true) && (organic == true) && (nutFree == false) && (prods[i].lactoseFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((nutFree == true) && (organic == true) && (lactoseFree == false) && (prods[i].organic == true) && (prods[i].nutFree == true)){
			product_names.push(prods[i]);
		}
		else if ((lactoseFree == false) && (nutFree == true)&& (organic == false) && (prods[i].nutFree == true)){
			product_names.push(prods[i]);
		}
		else if ((lactoseFree == true) && (nutFree == false)&& (organic == false) && (prods[i].lactoseFree == true)){
			product_names.push(prods[i]);
		}
		else if ((lactoseFree == false) && (nutFree == false)&& (organic == false)){
			product_names.push(prods[i]);
		}
		else if ((lactoseFree == false) && (nutFree == false)&& (organic == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function sortByPrice (price1, price2){
	
	return price1.price - price2.price;
}