package com.zerobank.step_definitions.Practice;

import com.zerobank.pages.TestBase;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class AccountSummarySTepsDef extends TestBase {
  @When("{string} page should have following accounts")
  public void page_should_have_following_accounts(String pageName, List<String> accounts) {
    Assert.assertEquals(pageName, accountSummaryPage.accountSum.getText());

    Assert.assertEquals(accounts, BrowserUtils.getElementsText(accountSummaryPage.creditTypes));
    System.out.println(BrowserUtils.getElementsText(accountSummaryPage.creditTypes));

  }

  @When("{string} table must have the following data")
  public void table_must_have_the_following_data(String creditType, List<String> accountType) {
    System.out.println(BrowserUtils.getElementsText(accountSummaryPage.creditTypes).get(2));
    Assert.assertEquals(creditType.replace(",",""),accountSummaryPage.creditTypes.get(2).getText().replace(",",""));

    System.out.println("Expected: "+creditType+", actual: "+ accountSummaryPage.creditTypes.get(2).getText());

    System.out.println("expected: "+accountType+"\nactual: "+accountSummaryPage.creditAccountsMenu.getText());
//    Assert.assertEquals(accountType,BrowserUtils.getElementsText(accountSummaryPage.creditAccounts));

  }
}
