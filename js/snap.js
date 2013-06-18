var snapper = new Snap({
  element: document.getElementById("content")
});

document.getElementById("snap-toggle").addEventListener("click", function(){
	if (snapper.state().state == "left"){
        snapper.close();
    } else {
        snapper.open("left");
    }
}, false);
