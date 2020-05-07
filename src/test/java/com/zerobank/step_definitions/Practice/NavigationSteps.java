package com.zerobank.step_definitions.Practice;

import com.zerobank.pages.TestBase;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class NavigationSteps extends TestBase {

  @Given("I am in {string} page")
  public void i_am_in_login_page(String expected) {
    System.out.println("Page Name: " + expected);
    loginPage.goToLandingPage();
  }
  @When("I enter valid {string} and {string} in {string} page")
  public void i_enter_valid_and(String expectedUsername, String expectedPassword, String pageName) {
    System.out.println(pageName);
    loginPage.login();

  }

  @When("I click {string}")
  public void I_click(String expected){
    BrowserUtils.wait(1);
    mainChoice(expected);
  }

  @Then("I should be in {string} page")
  public void i_should_be_in_page(String expected) {

    BrowserUtils.wait(1);
    Assert.assertEquals(BrowserUtils.getCurrentTitle(),(expected));
    BrowserUtils.wait(1);
  }

  @When("user verifies that {string} warning message is displayed")
  public void user_verifies_that_warning_message_is_displayed(String string) {

    Assert.assertEquals(loginPage.getErrorMessage(), string);
    System.out.println(loginPage.accessDenied.getText());
  }
}
