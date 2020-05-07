package com.zerobank.step_definitions.Practice;

import com.zerobank.pages.AccountActivityPage;
import com.zerobank.pages.TestBase;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import java.util.List;
import static com.zerobank.utilities.BrowserUtils.*;
import static org.junit.Assert.assertEquals;

public class AccountActivitySteps extends TestBase {

  @When("Account {string} default should be {string}")
  public void account_default_should_be(String string, String string2) {
    BrowserUtils.wait(1);
    System.out.println(getElementsText(AccountActivityPage.select()));
    assertEquals("Savings did not selected as default", accountActivityPage.setAccountDrop(string2)
         .toUpperCase(), string.toUpperCase());
  }

  @When("Account options should have the following data")
  public void account_should_have_the_following_data(List<String> expectedData) {

    System.out.println(getElementsText(AccountActivityPage.select()));
    Assert.assertEquals("Account Select options did not matched", expectedData,
         getElementsText(AccountActivityPage.select()));
  }

  @When("Transaction table should have columns data")
  public void transaction_table_should_have_columns_data(List<String> expectedData) {
    System.out.println(getElementsText(accountActivityPage.tableHeaderName));
    Assert.assertEquals("Transaction table options did not matched", expectedData,
         getElementsText(accountActivityPage.tableHeaderName));

  }

  @Given("the user accesses the Find Transactions tab")
  public void the_user_accesses_the_Find_Transactions_tab() {
    loginPage.goToLandingPage();
    loginPage.login();
    accountSummaryPage.mainChoice("Account Activity");
    BrowserUtils.wait(1);
  }

  @When("the user enters date range from “{word}” to “{word}”")
  public void the_user_enters_date_range_from_to_And_clicks_search(String first, String second) {
    accountActivityPage.findTrans.click();
    accountActivityPage.start_date.clear();
    accountActivityPage.end_date.clear();
    accountActivityPage.start_date.sendKeys(first + Keys.TAB);
    accountActivityPage.end_date.sendKeys(second + Keys.TAB);

    BrowserUtils.wait(2);
  }

  @When("clicks search")
  public void clicks_search() {
    accountActivityPage.find_bttn.click();
    BrowserUtils.wait(1);
  }

  @Then("results table should only show transactions dates between “{word}” to “{word}”")
  public void results_table_should_only_show_transactions_dates_between_to(String first, String second) {
    BrowserUtils.wait(1);
    System.out.println(getElementsText(accountActivityPage.filter_Res));
    BrowserUtils.wait(3);
  }

  @Then("the results should be sorted by most recent date")
  public void the_results_should_be_sorted_by_most_recent_date() {
    System.out.println(getElementsText(accountActivityPage.search_Res).get(1));
  }

  @Then("the results table should only not contain transactions dated “{word}”")
  public void the_results_table_should_only_not_contain_transactions_dated(String date) {
    Assert.assertFalse("Result table showed specific date included",
         getElementsText(accountActivityPage.filter_Res).contains(date));

  }

  @When("the user enters description {string}")
  public void the_user_enters_description_ONLINE(String expected) {
    accountActivityPage.findTrans.click();
    accountActivityPage.desc_input.clear();
    accountActivityPage.desc_input.sendKeys(expected);
  }


  @Then("results table should only show descriptions containing {string}")
  public void results_table_should_only_show_descriptions_containing_OFFICE(String expected) {
    System.out.println(BrowserUtils.getElementsText(accountActivityPage.desc_col));
  }

  @Then("results table should not show descriptions containing {string}")
  public void results_table_should_not_show_descriptions_containing_OFFICE(String expected) {
    System.out.println(
         getElementsText(accountActivityPage.desc_col).contains(expected));
  }
  @Then("results table should show at least one result under {string}")
  public void results_table_should_show_at_least_one_result_under_Withdrawal(String expected){
    accountActivityPage.setAccountDrop(expected);
    accountActivityPage.find_bttn.click();
    System.out.println(BrowserUtils.getElementsText(accountActivityPage.filter_Res(expected)));
  }
}
