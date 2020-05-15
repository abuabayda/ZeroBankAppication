package com.zerobank.step_definitions.Practice;

import com.zerobank.pages.PayBillsPage;
import com.zerobank.pages.TestBase;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class PayBillsStepDefs extends TestBase {
  @When("I complete a successful payment transaction by entering {string} and {string}")
  public void i_complete_a_successful_payment_transaction_by_entering_and(String expectedAmount, String string) {
    payBillsPage.amount$.sendKeys(expectedAmount);
    payBillsPage.inputDate.sendKeys("2020-05-19");
    payBillsPage.payBttn.click();

  }

  @Then("I should see {string}")
  public void i_should_see(String string) {
    System.out.println(payBillsPage.alertMsg.getText());
    assertEquals(payBillsPage.alertMsg.getText(), string);
    BrowserUtils.wait(2);
  }

  @Then("I try to make a payment without entering nothing to see {string}")
  public void i_try_to_make_a_payment_without_entering_and(String expected) {
    BrowserUtils.wait(2);
    payBillsPage.payBttn.click();
    System.out.println(payBillsPage.amount$.getAttribute("validationMessage"));
    Assert.assertEquals(payBillsPage.amount$.getAttribute("validationMessage"), expected);
    BrowserUtils.wait(2);
  }

  @Given("I should be in {string} Add New {string} tab")
  public void add_New_Payee_tab(String mainHeader, String tab) {
    loginPage.goToLandingPage();
    loginPage.login();
    secondHeadTabs(mainHeader);
    secondHeadTabs(tab);
  }


  @Given("creates new payee using following information:")
  public void creates_new_payee_using_following_information(DataTable fields) {
    List<String> details = fields.asList();
    payBillsPage.payeeName.sendKeys(details.get(1));
    payBillsPage.payeeAddress.sendKeys(details.get(2));
    payBillsPage.payeeAccount.sendKeys(details.get(3));
    payBillsPage.payeeDetails.sendKeys(details.get(4));
    payBillsPage.clickSaveAndClose();

  }

  @Then("message {string} should be displayed")
  public void message_should_be_displayed(String string) {
    BrowserUtils.waitForVisibility(payBillsPage.generalInfo, 2);
    Assert.assertEquals(payBillsPage.generalInfo.getText(), string);
  }

  @Given("the user accesses the Purchase Foreign Currency cash tab")
  public void the_user_accesses_the_Purchase_foreign_currency_cash_tab() {
    loginPage.goToLandingPage();
    loginPage.login();
    payBillsPage.getPayBttn.click();
    payBillsPage.getCurrencyTab.click();
    BrowserUtils.wait(2);
  }


  @Then("following currencies should be available")
  public void following_currencies_should_be_available(List<String> dataTable) {
    System.out.println(dataTable);
    System.out.println(BrowserUtils.getElementsText(PayBillsPage.currencyType()));

  }

  @When("user tries to calculate cost without selecting a currency")
  public void user_tries_to_calculate_cost_without_selecting_a_currency() {

    payBillsPage.calcBttn.click();
    BrowserUtils.wait(1);
  }

  @When("user tries to calculate cost without entering a value")
  public void user_tries_to_calculate_cost_without_entering_a_value() {
    payBillsPage.currencySelect("CAD");
    payBillsPage.calcBttn.click();
    BrowserUtils.wait(1);
  }

  @Then("error message should be displayed")
  public void error_message_should_be_displayed() {

    payBillsPage.setAlertMsg("text");
    BrowserUtils.wait(2);
  }
}
