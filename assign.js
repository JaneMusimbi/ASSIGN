class Mkulima{
    constructor(){
    this.farms = [];
    this.order = [];
    this.products = [];
    this.addFarm = (farmId, name, farmer, phone, address) => {
    this.farms.push({farmId,name,farmer,phone,address})}
    this.removeFarm = (farmId) => {
    var specItem = this.farms.find(item => item.farmId ===farmId);
    var farmIndex = this.farms.indexOf(specItem);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    var getFarm = this.farms.find(item => item.farmId ===farmId)
    getFarm.farmId =newFarmId;
    getFarm.farmName =newFarmName;
    getFarm.farmer =newFarmerName;
    getFarm.phone =newPhone;
    getFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))}
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})}
    this.removeProduct = (productId) => {
    var get= this.product.find(item => item.productId ===productId);
    var productIndex = this.product.indexOf(get);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    var getProduct = this.product.find(item => item.productId ===productId)
    getProduct.productId =newProductId;
    getProduct.productName = newProductName;
    getProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))}
    this.printProducts = ()=>{
    console.log(this.product)}
    this.calculateOrderCost = (productId,quantity)=>{
    Var specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);}
    }
    }
    var farm1 = new Mkulima();
    farm1.addFarm("101","Jane","Musimbi","0712345678", "OB313");
    farm1.addFarm("235","Nora","Kadi","0123456757", "MC202");
    farm1.addFarm("132","JD","Winnie","073454320199", "BT305");
    console.log(farm1.farms);
    farm1.removeFarm("101");
    console.log()



