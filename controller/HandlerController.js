class HandelerController{};

HandelerController.validateimage = function (req, percent) {	
	console.log(percent);
	if(percent==0 || percent ==null){
		return null;
	}
	else{
		var image = req.headers.host + "/images/progress/"+ percent + ".png";
		console.log(image);
		return image;
	}
};

module.exports=HandelerController;