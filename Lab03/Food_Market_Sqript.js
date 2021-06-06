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
  closeNav();
}

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 1.90,
		picture: "Broccoli.jpg",
		department: "produce"
	},
	{
		name: "Brocoli (Organic)",
		nutFree: true,
		lactoseFree: true,
		organic: true,
		price: 2.50,
		picture: "Broccoli.jpg",
		department: "produce"
	},
	{
		name: "Nut Bread",
		nutFree: false,
		lactoseFree: false,
		organic: false,
		price: 4.00,
		picture: "NutBread.jpg",
		department: "bakery"
	},
	{
		name: "Lean Ground Beef (6.59 kg)",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 20.65,
		picture: "GroundBeef.jpg",
		department: "butcher"
	},
	{
		name: "Fresh Atlantic Salmon (22.02 kg) (Organic) ",
		nutFree: true,
		lactoseFree: true,
		organic: true,
		price: 30.85,
		picture: "altlantic-salmon-fillets.jpg",
		department: "seaFood"
	},
	{
		name: "Liberte Greek Yogurt (750 g)",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 4.50,
		picture: "GreekYogurt.jpg",
		department: "dairy"
	},
	{
		name: "Nestle Drumstick",
		nutFree: false,
		lactoseFree: false,
		organic: false,
		price: 4.00,
		picture: "Drumstick.jpg",
		department: "dairy"
	},
	{
		name: "White Chedder (250 g)",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 8.50,
		picture: "WhiteCheddar.jpg",
		department: "dairy"
	},
	{
		name: "Bananas",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 3.00,
		picture: "Banana.jpg",
		department: "produce"
	},
	{
		name: "Romaine Hearts (Organic)",
		nutFree: true,
		lactoseFree: true,
		organic: true,
		price: 3.80,
		picture: "RomaineHearts.jpg",
		department: "produce"
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
		var productPicture = optionArray[i].picture;
		var productPrice = optionArray[i].price.toFixed(2);
		// create the checkbox and add in HTML DOM
		var div = document.createElement("div");
		div.className = "productcontainer";
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.id = productName;
		s2.appendChild(div);
		div.appendChild(checkbox);
		
		
		
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = checkbox.id;
		label.appendChild(document.createTextNode(productName));
		label.appendChild(document.createElement('br'));
		label.appendChild(document.createTextNode("  Price: $" + productPrice));
		label.appendChild(document.createElement('br'));
		div.appendChild(label);
		
		var img = document.createElement('img');
		img.src = productPicture;
		img.alt = productName;
		div.appendChild(img);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
	openInfo(event, 'Products')
}

function populateListProductChoicesDepartment(slct1, slct2) {
	
	var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	var productsFillters = document.getElementsByName("category");
	var chosenFillters = [];
	
	
		for (i = 0; i < productsFillters.length; i++) { 
			if (productsFillters[i].checked) {
				chosenFillters.push(productsFillters[i].value);
			}
		}
	
	var sortedProducts = products.sort(sortByPrice);
	 var optionArray = departmentListProducts(products, chosenFillters);
	
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
 

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPicture = optionArray[i].picture;
		var productPrice = optionArray[i].price.toFixed(2);
		// create the checkbox and add in HTML DOM
		var div = document.createElement("div");
		div.className = "productcontainer";
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.id = productName;
		s2.appendChild(div);
		div.appendChild(checkbox);
		
		
		
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = checkbox.id;
		label.appendChild(document.createTextNode(productName));
		label.appendChild(document.createElement('br'));
		label.appendChild(document.createTextNode("  Price: $" + productPrice));
		label.appendChild(document.createElement('br'));
		div.appendChild(label);
		
		var img = document.createElement('img');
		img.src = productPicture;
		img.alt = productName;
		div.appendChild(img);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
	openInfo(event, 'Products')
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

function departmentListProducts(prods, restrictions) {
	var bakery = false;
	var butcher = false;
	var dairy = false;
	var seaFood = false;
	var produce = false;
	if (restrictions.length > 0){
		for (i = 0; i < restrictions.length; i++) { 
			if (restrictions[i] == "bakery"){
				bakery = true;
			}
			else if (restrictions[i] == "butcher"){
				butcher = true;
			}
			else if (restrictions[i] == "dairy"){
				dairy = true;
			}
			else if (restrictions[i] == "seaFood"){
				seaFood = true;
			}
			else if (restrictions[i] == "produce"){
				produce = true;
			}
		}
	}
	
	let product_names = [];
	
	for (let i=0; i<prods.length; i+=1) {
		if ((bakery == true) && (prods[i].department == "bakery")){
			product_names.push(prods[i]);
		}
		else if ((bakery == true) && (prods[i].department == "bakery")){
			product_names.push(prods[i]);
		}
		else if ((butcher == true) && (prods[i].department == "butcher")){
			product_names.push(prods[i]);
		}
		else if ((dairy == true) && (prods[i].department == "dairy")){
			product_names.push(prods[i]);
		}
		else if ((seaFood == true) && (prods[i].department == "seaFood")){
			product_names.push(prods[i]);
		}
		else if ((produce == true) && (prods[i].department == "produce")){
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

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}