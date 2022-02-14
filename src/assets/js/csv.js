
    function exportData() {
       
        var dataArray = [];
        var data = '';
        for (var i=1;i<=1;i++) {
            var sep = '';
            for (var j=1;j<=1;j++) {
                data +=  sep + document.getElementById(i + '_' + j).value;
				console.log(data);
                sep = ',';
            }

            for (var j=2;j<=6;j++) {
                if (document.getElementById(i + '_' + j).value.includes("don't")||document.getElementById(i + '_' + j).value.includes("do not")
                    ||document.getElementById(i + '_' + j).value.includes("dont")||document.getElementById(i + '_' + j).value.includes("hate")||document.getElementById(i + '_' + j).value.includes("ไม่ชอบ")
                    ||document.getElementById(i + '_' + j).value.includes("ไม่สนุก")||document.getElementById(i + '_' + j).value.includes("ไม่น่าเรียน")) {
                    data +=  sep + '0';
                  } else {
                    data +=  sep + '1';
                  }
                  dataArray.push(data)

				console.log("dataaaa"+data);
                sep = ',';
            }
            data += '\r\n';
        }
		// var blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
        // if (navigator.msSaveBlob) { // IE 10+
        //     navigator.msSaveBlob(blob, + document.getElementById('1_1').value + ".csv");
        // } else {
        //     var link = document.createElement("a");
        //     if (link.download !== undefined) { // feature detection
        //         // Browsers that support HTML5 download attribute
        //         var url = URL.createObjectURL(blob);
        //         link.setAttribute("href", url);
        //         link.setAttribute("download", document.getElementById('1_1').value + ".csv");
        //         link.style.visibility = 'hidden';
        //         document.body.appendChild(link);
        //         link.click();
        //         document.body.removeChild(link);
        //     }
        // }
    }