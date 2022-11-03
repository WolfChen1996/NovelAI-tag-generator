function submittag(){
var formData = document.getElementById("tagarea").value;
if(formData==""){}
else{
    if(document.domain=="wolfchen.top" || document.domain=="wjingnan.com" )
    {
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
    }
    else
    {
        $.ajax({
        	type: "POST",
        	url: "https://wolfchen.top/tag/othernote.php",
        	data: formData,
        	processData: false,// 不加会报错
        	contentType: false,// 不加会报错
        	success: function (res) {
        		console.log(res);
        	}
        });
    }
    
    }
}