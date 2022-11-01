function submittag(){
var rawtag=document.getElementById("tagarea").value;
if(rawtag==""){}else{
    var formData = rawtag;
    $.ajax({
    	type: "POST",
    	url: "./note.php",
    	data: formData,
    	processData: false,// 不加会报错
    	contentType: false,// 不加会报错
    	success: function (res) {
    		console.log(res);
    	}
    });
    
    play();
    }
}