$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/StatementsAndDocuments.feature");
formatter.feature({
  "name": "Statements and Documents details",
  "description": "",
  "keyword": "Feature"
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
});