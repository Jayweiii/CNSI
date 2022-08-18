/**
 * @OnlyCurrentDoc
 */
function sortResponses() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Form Responses 1"); //choose which sheet to edit
  sheet.sort(2,false); //sort column 2 in reverse
}
