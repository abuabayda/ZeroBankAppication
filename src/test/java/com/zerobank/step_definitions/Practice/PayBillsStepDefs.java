package com.zerobank.step_definitions.Practice;

import com.zerobank.pages.TestBase;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import static org.junit.Assert.assertEquals;

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
    assertEquals(payBillsPage.alertMsg.getText(),string);
    BrowserUtils.wait(2);
  }
  @Then("I try to make a payment without entering nothing to see {string}")
  public void i_try_to_make_a_payment_without_entering_and(String expected) {
    BrowserUtils.wait(2);
    payBillsPage.payBttn.click();
    System.out.println(payBillsPage.amount$.getAttribute("validationMessage"));
    Assert.assertEquals(payBillsPage.amount$.getAttribute("validationMessage"),expected);
    BrowserUtils.wait(5);
  }
}
