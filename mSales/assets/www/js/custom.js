var data;
	var servicePath = 'http://vikalp.webhop.net:8000/sap/bc/zbookorder/';
	$.fn.serializeObject = function()
	{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
	});
	
   return o;
	
   };
 $(document).ready(
	
	function(){
		
		$('form').submit(function(event) {
		
		event.preventDefault();
		data = $('form').serializeObject();
		
		$.ajax({
			 crossDomain: true,
			 type: "POST", 
			 contentType: "application/jsonp; charset=utf-8",
			 url: servicePath,
			 data: data,
			 username: "aviral_s", 
			 password: "test123",
			 dataType: "jsonp",
			 success: function(data, status, xhr){
			 document.getElementById("msg").value = data;
					alert(data);
					},
			error:function(xhr,anobj){
				alert("error");
			}
			 
		});
		})
	}
);