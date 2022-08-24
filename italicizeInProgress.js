/**
 * @OnlyCurrentDoc
 */
function italicizeInProgress() {

   //keywords in column that will trigger the function
  var keyWords = [
    "In progress",
    "In progress ",
    "in progress",
    "in progress ",
    "in queue",
    "in queue ",
    "In queue",
    "In queue ",
    "Printing",
    "Printing ",
    "printing",
    "printing ",
  ]

  //select which sheet in the spreadsheet to apply function to
  var sheet = SpreadsheetApp.getActive().getSheetByName("Form Responses 1"); 

  //stores values of entire sheet to variable; I read on forum that reading just a column is not more optimized than reading the entire sheet
  var values = SpreadsheetApp.getActive().getSheetByName("Form Responses 1").getDataRange().getValues(); 

  //column to read the keywords in; index starts at 0
  var col = 0; 

  //boolean array to store the columns that need to be italicized
  var italicizeRows = new Array(values.length); 

  //iterates through values and stores boolean value in grayRows
  for(i=1;i<values.length;++i){
    var cell = values[i][col] ;
    for(n=0;n<keyWords.length;n++){
      if(cell == keyWords[n]){
        italicizeRows[i] = true;
      }
    }
    if(italicizeRows[i] != true){
      italicizeRows[i] = false;
    }
  }

  //iterates through grayRows and sets font color for corresponding rows
  for (i=0;i<italicizeRows.length;++i){
    if (italicizeRows[i]){
      for(c=1;c<values[0].length;++c){
        sheet.getRange(i+1,c).setFontStyle('italic'); //getRange starts at 1,1 upper left cell; var values & var italicizeRows start at 0; i+1 to account for difference
      }
    }
  }
  
}