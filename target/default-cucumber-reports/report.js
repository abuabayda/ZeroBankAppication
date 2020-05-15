$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating to specific accounts in Accounts Activity Scenario: Savings account redirect",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Savings account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Savings\" link on the \"Account Summary\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Savings\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.account_drop_down_should_have_Savings_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Savings account redirect");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage account redirect Given the user is logged in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@first"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Brokerage\" link on the \"Account Summary\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Brokerage\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.account_drop_down_should_have_Savings_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Brokerage account redirect Given the user is logged in");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@transaction"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search date range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@transaction"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@search_date"
    }
  ]
});
formatter.step({
  "name": "the user enters date range from “2012-09-01” to “2012-09-06”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_enters_date_range_from_to_And_clicks_search(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between “2012-09-01” to “2012-09-06”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should be sorted by most recent date",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_results_should_be_sorted_by_most_recent_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters date range from “2012-09-02” to “2012-09-06”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_enters_date_range_from_to_And_clicks_search(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between “2012-09-02” to “2012-09-06”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results table should only not contain transactions dated “2012-09-01”",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_results_table_should_only_not_contain_transactions_dated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Search date range");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@transaction"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@search_description"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_enters_description_ONLINE(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_descriptions_containing_OFFICE(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"OFFiCE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_enters_description_ONLINE(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"OFFICE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_descriptions_containing_OFFICE(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027filtered_transactions_for_account\u0027]//tr//td[3]\"}\n  (Session info: chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027aGooz-MacBook-Pro.local\u0027, ip: \u00272600:8806:2200:c600:39cd:5493:7ab3:8560%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: /var/folders/4_/h1fdk0d11sb...}, goog:chromeOptions: {debuggerAddress: localhost:54809}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0e24244124878a852f4cccbfc64cb72a\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027filtered_transactions_for_account\u0027]//tr//td[3]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.zerobank.pages.AccountActivityPage.filterBColumn(AccountActivityPage.java:40)\n\tat com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_descriptions_containing_OFFICE(AccountActivitySteps.java:95)\n\tat ✽.results table should only show descriptions containing \"OFFICE\"(file:///Users/abazarelsheikh/Desktop/Zero-Online-Banking-Application/src/test/resources/features/FindTransactions.feature:27)\n",
  "status": "failed"
});
formatter.step({
  "name": "results table should not show descriptions containing \"OFFICE\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_not_show_descriptions_containing_OFFICE(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Complete scenario: Search description");
formatter.embedding("image/png", "embedded0.png", "Search description");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description case insensitive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@transaction"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@search_case_insensitive"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_enters_description_ONLINE(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_descriptions_containing_OFFICE(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"online\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_enters_description_ONLINE(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_descriptions_containing_OFFICE(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027filtered_transactions_for_account\u0027]//tr//td[3]\"}\n  (Session info: chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027aGooz-MacBook-Pro.local\u0027, ip: \u00272600:8806:2200:c600:39cd:5493:7ab3:8560%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: /var/folders/4_/h1fdk0d11sb...}, goog:chromeOptions: {debuggerAddress: localhost:54957}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c68de874fb295133b576ca42f69e50e1\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027filtered_transactions_for_account\u0027]//tr//td[3]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.zerobank.pages.AccountActivityPage.filterBColumn(AccountActivityPage.java:40)\n\tat com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_only_show_descriptions_containing_OFFICE(AccountActivitySteps.java:95)\n\tat ✽.results table should only show descriptions containing \"ONLINE\"(file:///Users/abazarelsheikh/Desktop/Zero-Online-Banking-Application/src/test/resources/features/FindTransactions.feature:37)\n",
  "status": "failed"
});
formatter.write("Complete scenario: Search description case insensitive");
formatter.embedding("image/png", "embedded1.png", "Search description case insensitive");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Type",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@transaction"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@type"
    }
  ]
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_show_at_least_one_result_under_Withdrawal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_show_at_least_one_result_under_Withdrawal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Deposit\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.user_selects_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under \"Withdrawal\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_show_no_result_under_Withdrawal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Withdrawal\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.user_selects_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_show_at_least_one_result_under_Withdrawal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under \"Deposit\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.results_table_should_show_no_result_under_Withdrawal(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Type");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login to Zero Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login_ZeroApp"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login_ZeroApp"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@authorized_user"
    }
  ]
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Account Summary\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_should_be_in_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Zero - ]Account Summary\u003e but was:\u003c[]Account Summary\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.zerobank.step_definitions.Practice.NavigationSteps.i_should_be_in_page(NavigationSteps.java:34)\n\tat ✽.I should be in \"Account Summary\" page(file:///Users/abazarelsheikh/Desktop/Zero-Online-Banking-Application/src/test/resources/features/Login.feature:10)\n",
  "status": "failed"
});
formatter.write("Complete scenario: Users login with valid credentials");
formatter.embedding("image/png", "embedded2.png", "Users login with valid credentials");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify warning message for invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login_ZeroApp"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "I enter valid \"userName\" and \"passWord\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Login and/or password are wrong.\" warning message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.user_verifies_that_warning_message_is_displayed(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027alert alert-error\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027aGooz-MacBook-Pro.local\u0027, ip: \u00272600:8806:2200:c600:39cd:5493:7ab3:8560%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: /var/folders/4_/h1fdk0d11sb...}, goog:chromeOptions: {debuggerAddress: localhost:54430}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 354ecb82dbb937b7694cce92740b6d2c\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027alert alert-error\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\n\tat com.zerobank.pages.LoginPage.getErrorMessage(LoginPage.java:42)\n\tat com.zerobank.step_definitions.Practice.NavigationSteps.user_verifies_that_warning_message_is_displayed(NavigationSteps.java:41)\n\tat ✽.user verifies that \"Login and/or password are wrong.\" warning message is displayed(file:///Users/abazarelsheikh/Desktop/Zero-Online-Banking-Application/src/test/resources/features/Login.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should be in \"Log in\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_should_be_in_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Complete scenario: Verify warning message for invalid credentials");
formatter.embedding("image/png", "embedded3.png", "Verify warning message for invalid credentials");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Payee.feature");
formatter.feature({
  "name": "Add new payee under pay bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PayeeFeature"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Add a new payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayeeFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@addPayee"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Pay Bills\" Add New \"Add New Payee\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.add_New_Payee_tab(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates new payee using following information:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.creates_new_payee_using_following_information(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"The new payee The Law Offices of Hyde, Price \u0026 Scharks was successfully created.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Add a new payee");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase Foreign Currency",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@foreign_currency"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Available currencies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@foreign_currency"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@currency"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase Foreign Currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following currencies should be available",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.following_currencies_should_be_available(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Available currencies");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not selecting currency",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@foreign_currency"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@error_currency"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase Foreign Currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to calculate cost without selecting a currency",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.user_tries_to_calculate_cost_without_selecting_a_currency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.error_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Error message for not selecting currency");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not entering value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@foreign_currency"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@error_value"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase Foreign Currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to calculate cost without entering a value",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.user_tries_to_calculate_cost_without_entering_a_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.error_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Error message for not entering value");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/StatementsAndDocuments.feature");
formatter.feature({
  "name": "Statements and Documents details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Recent statements per year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statement"
    }
  ]
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.step({
  "name": "the user selects the Recent Statements Year \u003cyear\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "\u003ccount\u003e statements should be displayed for that year",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "year",
        "count"
      ]
    },
    {
      "cells": [
        "2009",
        "2"
      ]
    },
    {
      "cells": [
        "2010",
        "2"
      ]
    },
    {
      "cells": [
        "2011",
        "2"
      ]
    },
    {
      "cells": [
        "2012",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Recent statements per year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@statement"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2009",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2 statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.statements_should_be_displayed_for_that_year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Recent statements per year");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Recent statements per year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@statement"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2010",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2 statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.statements_should_be_displayed_for_that_year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Recent statements per year");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Recent statements per year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@statement"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2011",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2 statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.statements_should_be_displayed_for_that_year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Recent statements per year");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Recent statements per year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@statement"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2012",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1 statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.statements_should_be_displayed_for_that_year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Recent statements per year");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@download_statements"
    }
  ]
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.step({
  "name": "the user selects the Recent Statements Year \u003cyear\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on statement \"\u003cstatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the downloaded file name should contain \"\u003cname\u003e\" And the file type should be pdf",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "year",
        "statement",
        "name"
      ]
    },
    {
      "cells": [
        "2009",
        "Statement 31/11/09(57K)",
        "31/11/09"
      ]
    },
    {
      "cells": [
        "2010",
        "Statement 01/12/10(57K)",
        "01/12/10"
      ]
    },
    {
      "cells": [
        "2011",
        "Statement 05/12/11(57K)",
        "05/12/11"
      ]
    },
    {
      "cells": [
        "2012",
        "Statement 01/10/12(57K)",
        "01/10/12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@download_statements"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2009",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 31/11/09(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"31/11/09\" And the file type should be pdf",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_downloaded_file_name_should_contain_And_the_file_type_should_be_pdf(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Download statements");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@download_statements"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2010",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 01/12/10(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"01/12/10\" And the file type should be pdf",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_downloaded_file_name_should_contain_And_the_file_type_should_be_pdf(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Download statements");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@download_statements"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2011",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 05/12/11(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"05/12/11\" And the file type should be pdf",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_downloaded_file_name_should_contain_And_the_file_type_should_be_pdf(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Download statements");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@download_statements"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Online Statements\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_accesses_the_Statements_Documents_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the Recent Statements Year 2012",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_selects_the_Recent_Statements_Year(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 01/10/12(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"01/10/12\" And the file type should be pdf",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.StatementStepDef.the_downloaded_file_name_should_contain_And_the_file_type_should_be_pdf(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Download statements");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ZeroAccountSummary.feature");
formatter.feature({
  "name": "Zero Account Summary, Account activity, Pay bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Summary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@account_summary"
    }
  ]
});
formatter.step({
  "name": "I click \"Account Summary\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.I_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Zero - Account Summary\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_should_be_in_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Account Summary\" page should have following accounts",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountSummarySTepsDef.page_should_have_following_accounts(java.lang.String,java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Credit Accounts\" table must have the following data",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountSummarySTepsDef.table_must_have_the_following_data(java.lang.String,java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Account Summary");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Activity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@account_activity"
    }
  ]
});
formatter.step({
  "name": "I click \"Account Activity\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.I_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Zero - Account Activity\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_should_be_in_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account \"Savings\" default should be \"Savings\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.account_default_should_be(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account options should have the following data",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.account_should_have_the_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transaction table should have columns data",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.AccountActivitySteps.transaction_table_should_have_columns_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Account Activity");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay Bills",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@pay_bills"
    }
  ]
});
formatter.step({
  "name": "I click \"Pays Bills\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.I_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in \"Zero - Pay Bills\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_should_be_in_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cZero - [Account Activity]\u003e but was:\u003cZero - [Pay Bills]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.zerobank.step_definitions.Practice.NavigationSteps.i_should_be_in_page(NavigationSteps.java:34)\n\tat ✽.I should be in \"Zero - Pay Bills\" page(file:///Users/abazarelsheikh/Desktop/Zero-Online-Banking-Application/src/test/resources/features/ZeroAccountSummary.feature:48)\n",
  "status": "failed"
});
formatter.step({
  "name": "I complete a successful payment transaction by entering \"1\" and \"date\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.i_complete_a_successful_payment_transaction_by_entering_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"The payment was successfully submitted.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.i_should_see(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I try to make a payment without entering nothing to see \"Please fill out this field.\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.PayBillsStepDefs.i_try_to_make_a_payment_without_entering_and(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Complete scenario: Pay Bills");
formatter.embedding("image/png", "embedded4.png", "Pay Bills");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking account redirect Given the user is logged in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@checking_redirect"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Checking\" link on the \"Account Summary\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Checking\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.account_drop_down_should_have_Savings_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Checking account redirect Given the user is logged in");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage account redirect Given the user is logged in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@brokerage"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Brokerage\" link on the \"Account Summary\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Brokerage\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.account_drop_down_should_have_Savings_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Brokerage account redirect Given the user is logged in");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Card account redirect Given the user is logged in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@credit_redirect"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Credit Card\" link on the \"Account Summary\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Credit Card\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.account_drop_down_should_have_Savings_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Credit Card account redirect Given the user is logged in");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in \"login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_am_in_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"username\" and \"password\" in \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.Practice.NavigationSteps.i_enter_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Loan account redirect Given the user is logged in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zero_Banks_Summary"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@loan_redirect"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Loan\" link on the \"Account Summary\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Account Activity\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Loan\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.step_definitions.SavingsAccountStepsDefs.account_drop_down_should_have_Savings_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Loan account redirect Given the user is logged in");
formatter.after({
  "status": "passed"
});
});