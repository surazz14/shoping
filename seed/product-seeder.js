var Product=require('../Models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping',{
	  useMongoClient: true,

}
	  );

var products=[new Product({
	imagePath:"https://buyersguide.caranddriver.com/media/assets/submodel/7651.jpg",
	title:'Tesla',
	description:'It is the good car made by tesla',
	price:6900
}),
new Product({
	imagePath:"https://buyersguide.caranddriver.com/media/assets/submodel/7651.jpg",
	title:'Hp',
	description:'It is the good laptop made by Hp',
	price:2000
}),
new Product({
	imagePath:"https://buyersguide.caranddriver.com/media/assets/submodel/7651.jpg",
	title:'Iphone',
	description:'It is the good phone made by Apple',
	price:10000
}),
];
var done=0;
for(var i=0; i<products.length;i++){
	products[i].save(function(err,result){
		done++;
		if (done===products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}