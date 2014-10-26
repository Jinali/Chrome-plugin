window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');
        var res; 
        var s; 
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;
            var j,d,e,i;
			if (file.type.match(textType)) {
				var reader = new FileReader();
                 
				reader.onload = function(e) {
					j=reader.result.replace(/"/g,"");
					j=j.replace('[','');
					j=j.replace(']','');
					j=j.replace(/name/g,"");
					j=j.replace(/age/g,"");
					j=j.replace(/:/g,"");
					j=j.replace(/{/g,"");
					j=j.replace(/}/g,"");
					//console.log(j);
				    res = j.split(",");
				    console.log(res);
				    for (i=1;i<=res.length;i=i+2)
				    {
				    	for(j=i+2;j<=res.length;j=j+2)
				    	{if(parseInt(res[i])>parseInt(res[j]))
                         {
                         	//console.log("start");
                         	d=res[i];
                         	//console.log(d);
                         	res[i]=res[j];
                         	//console.log(res[i]);
                            res[j]=d;
                            //console.log(res[j]);
                            //console.log(3);
                            e=res[i-1];
                           // console.log(e);
                            res[i-1]=res[j-1];
                           // console.log(res[i-1]);
                            res[j-1]=e;
                            //console.log(res[j-1])
                            //console.log("end");
                         }} 
				    }
                   console.log(res);
					fileDisplayArea.innerText =res;
				}	
				//console.log(reader.res);
                 
				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!";
			}
		});
}