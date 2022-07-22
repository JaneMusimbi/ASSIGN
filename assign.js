class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmId, name, farmer, phone, address) => {
    this.farms.push({farmId,name,farmer,phone,address})}
    this.removeFarm = (farmId) => {
    let specificItem = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specificItem);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))}
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})}
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))}
    this.printProducts = ()=>{
    console.log(this.product)}
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);}
    }
    }
    let farm1 = new Mkulima();
    farm1.addFarm("101","Jane","Musimbi","0712345678", "OB313");
    farm1.addFarm("235","Nora","Kadi","0123456757", "MC202");
    farm1.addFarm("132","JD","Winnie","073454320199", "BT305");
    console.log(farm1.farms);
    farm1.removeFarm("101");
    console.log()



