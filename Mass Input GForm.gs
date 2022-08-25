//README
//PASTIKAN HANYA 1 GSHEET YANG TERBUKA, JANGAN LEBIH
//MAKSIMAL 10 BARIS
function mass_auto_input() {

  var wrkBk = SpreadsheetApp.getActiveSpreadsheet(); 
  var wrkSht = wrkBk.getSheetByName('SHEET-NAME'); //Nama GSheet kamu dibawah

  var formURL = ""
  var formData = ""

  var caseid = "";
  var origin = "";

  var noOfRows = 5;

  for (i=1;i<=noOfRows;i++)
  {
    caseid = wrkSht.getRange("A:2" + i).getDisplayValue(); //KOLOM A
    origin = wrkSht.getRange("B:2" + i).getDisplayValue(); //KOLOM B
    

    var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSf59BrMPL7jcmmkrVdmCCrlter2QC8LX3VzZ8JosPXSvrS4SA/formResponse"; //URL G-FORM
    var formData = {"entry.201315809": caseid, "entry.1972737182": origin};

    //var finalURL = formURL + formData

    var options = {
      "method" : "post",
      "payload" : formData
    };
        UrlFetchApp.fetch(formURL, options);
  }
  Browser.msgBox("Sukses Input, Ayo kerja lagi !!!");
}
