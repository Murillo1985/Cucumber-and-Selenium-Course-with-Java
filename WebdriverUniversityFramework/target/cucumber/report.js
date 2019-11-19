$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The user should be presented with following prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 13,
      "id": "login-into-account;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver",
        "validation failed"
      ],
      "line": 14,
      "id": "login-into-account;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 15,
      "id": "login-into-account;login-to-account-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4167678600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"webdriver\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The user should be presented with following prompt alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 994737200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_on_the_login_portal_button()"
});
formatter.result({
  "duration": 170495700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 1174648600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 71819200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 64345700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 58
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_following_prompt_alert(String)"
});
formatter.result({
  "duration": 15091500,
  "status": "passed"
});
formatter.after({
  "duration": 800855500,
  "status": "passed"
});
formatter.before({
  "duration": 3370219600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"webdriver123\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The user should be presented with following prompt alert \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 908269300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_on_the_login_portal_button()"
});
formatter.result({
  "duration": 197175300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 1157285800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 85443900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 68374300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 58
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_following_prompt_alert(String)"
});
formatter.result({
  "duration": 10371200,
  "status": "passed"
});
formatter.after({
  "duration": 757779700,
  "status": "passed"
});
});