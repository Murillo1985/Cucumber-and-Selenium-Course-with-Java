Feature: Login into account 

Scenario Outline: Login to account with credentials
 
	Given User navigates to "<url>"
	When User clicks on the on the login portal button
	And User enters the "<username>" username
	And User enters the "<password>" password
	When User clicks on the login button
	Then The user should be presented with following prompt alert "<message>"
	
	Examples:
	|			url					   |		username		|		password		| 		message			 |
	|http://www.webdriveruniversity.com| 		webdriver		|		webdriver		|	validation failed	 |
	|http://www.webdriveruniversity.com| 		webdriver		|		webdriver123	|	validation succeeded |