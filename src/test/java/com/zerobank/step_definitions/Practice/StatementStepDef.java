package com.zerobank.step_definitions.Practice;

import com.zerobank.pages.TestBase;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class StatementStepDef extends TestBase {

  @Given("the user accesses the {string} tab")
  public void the_user_accesses_the_Statements_Documents_tab(String expected) {
    loginPage.goToLandingPage();
    loginPage.login();
    mainChoice(expected);
    BrowserUtils.wait(2);
  }

  @When("the user selects the Recent Statements Year {int}")
  public void the_user_selects_the_Recent_Statements_Year(Integer int1) {
    onlineStatementsPage.getYear(int1);
  }

  @Then("{int} statements should be displayed for that year")
  public void statements_should_be_displayed_for_that_year(Integer int1) {
    Assert.assertEquals(onlineStatementsPage.getCount(), int1);
    BrowserUtils.wait(1);
  }

  @When("the user clicks on statement {string}")
  public void the_user_clicks_on_statement(String string) {
    onlineStatementsPage.clickStatement(string);

  }

  @Then("the downloaded file name should contain {string} And the file type should be pdf")
  public void the_downloaded_file_name_should_contain_And_the_file_type_should_be_pdf(String string) {
    Assert.assertTrue(onlineStatementsPage.statementTex.getText().contains(string));
    System.out.println(onlineStatementsPage.typeOfDoc.getText());
    BrowserUtils.wait(2);
  }
}
