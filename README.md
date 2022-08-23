# To Access or Edit Scripts
1. Open a Google Sheets
2. Select 'Extensions' drop-down menu
3. Select 'Apps Script'

Scripts are on the left hand side under files

# Scripts
* sortResponses.s sorts the job submittal sheet from most to least recent submittal time
* grayOutDone.gs changes a row's text color if the status of the job matches a keyword such as "done".
* italicizeInProgress.gs italicizes a row if the status of the job matches a keyword such as "in progress".
 * note that the top left cell of a sheet start at index [0,0] everywhere except the Range class (starts at [1,1])

# Triggers
Triggers automatically run the above mentioned scripts after events or a set timeframe.
* sortResponses.gs is set to run after every form submission
* grayOutDone.gs is set to run after every edit

