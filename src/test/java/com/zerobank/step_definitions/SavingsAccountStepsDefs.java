package com.zerobank.step_definitions;

import com.zerobank.pages.TestBase;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class SavingsAccountStepsDefs extends TestBase {

  @Given("the user is logged in")
  public void the_user_is_logged_in() {
    loginPage.goToLandingPage();
    loginPage.login();
  }

  @Then("the {string} page should be displayed")
  public void the_page_should_be_displayed(String string) {
    assertTrue(BrowserUtils.getCurrentTitle().contains(string));
    System.out.println(BrowserUtils.getCurrentTitle());
    BrowserUtils.wait(1);
  }

  @When("the user clicks on {string} link on the {string} page")
  public void  the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page(String expected, String pageName){
    BrowserUtils.wait(1);
    assertTrue(BrowserUtils.getCurrentTitle().contains(pageName));
    accountSummaryPage.getAccount(expected);
    BrowserUtils.wait(1);
  }
  @Then("Account drop down should have {string} selected")
  public void account_drop_down_should_have_Savings_selected(String expected) {
    assertEquals(expected,accountActivityPage.setAccountDrop(expected));
    System.out.println(accountActivityPage.setAccountDrop(expected));
    BrowserUtils.wait(2);
  }
}
