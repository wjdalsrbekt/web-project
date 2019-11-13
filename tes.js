	//js for html behavior
	var services = ["0", "Service of briquet", "Serving organic dogs", "Serving the elderly living alone ", "Blood donation service ", "Orphanage service", "Day off", "Educational Service ", "Educational Service ", "Service of briquet ", "Serving rice",
	    "Day off", "Serving organic dogs", "Blood donation service", "Day off", "House Building Service", "Picking up trash", "Service of briquet", "Day off", "Service of briquet", "Day off", "Educational Service", "Serving food", "Laundry service", "Day off", "Educational Service", "Day off", "Serving the elderly living alone", "Orphanage service", "Educational Service", "Educational Service"
	];
	var hour = [0, 9, 5, 2, 4, 4, 0, 3, 2, 9, 5, 0, 4, 4, 0, 9, 3, 8, 0, 9, 0, 3, 2, 2, 0, 2, 0, 3, 4, 3, 3];
	var stuff = new Array();
	for (var i = 0; i < 5; i++) {
	    stuff[i] = new Array();
	    for (var j = 0; j < 6; j++) {
	        stuff[i][j] = 0;
	    }
	}

	function printpicture() { //Functions for indicating the type of service
	    document.write("<table style=\"border-style:none\">");

	    for (var i = 0; i < 5; i++) {
	        document.write("<tr>");
	        for (var j = 0; j < 6; j++) {
	            var x = i * 6 + j + 1;
	            var y = "num" + x;
	            document.write("<td onclick=\"select(" + i + "," + j + ");\">");
	            document.write("<p><h1>" + x + "</h1></p>");
	            if (stuff[i][j] == 0) {
	                document.write("<img id=\"num" + x + "\" src=\"images/service" + x + ".jpg\" width=200px height=200px;>");
	                document.write("<p>" + services[x] + "</p>");
	                document.write("<p>" + hour[x] + "H</p>");
	            } else if (stuff[i][j] == 1) {
	                document.write("<img id=\"num" + x + "\" src=\"images/selected.png\">");
	                document.write("<p>" + services[x] + "</p>");
	                document.write("<p>" + hour[x] + "H</p>");
	            }
	            document.write("</td>");
	        }
	    }
	    document.write("</table>");
	}

	function select(i, j) { //Functions for selecting a living
	    var x = i * 6 + j + 1;
	    var y = "num" + x;
	    if (stuff[i][j] == 0) {
	        stuff[i][j] = 1;
	        document.getElementById(y).src = "images/selected.png";
	    } else if (stuff[i][j] == 1) {
	        stuff[i][j] = 0;
	        document.getElementById(y).src = "images/service" + x + ".jpg";
	    }
	}


	function decision() { //Functions for Calculation
	    var name = "";
	    var money = 0;
	    var arr = new Array();
	    var count = 0;
	    for (var i = 0; i < 5; i++) {
	        for (var j = 0; j < 6; j++) {
	            if (stuff[i][j] == 1) {
	                var x = i * 6 + j + 1;
	                var y = "num" + x;
	                arr[count++] = x;
	                name = name + " " + services[x];
	                money = money + hour[x];
	            }
	        }
	    }
	    if (arr.length == 0) {
	        alert("please select service!");
	    } else {
	        alert(name + " is(are) selected!\n  Total : " + money + "hour");
	        location.href = 'tewelve.html';
	    }
	}