var snapper = new Snap({
  element: document.getElementById("content")
});

var toggleSnapper = function(){
	if (snapper.state().state == "left"){
        snapper.close();
    } else {
        snapper.open("left");
    }
};

document.getElementById("toggle-snapper").addEventListener("click", toggleSnapper, false);

var lawnchair = new Lawnchair({}, function(){
	console.log(this);
    this.save({ msg: "hooray!" })
})