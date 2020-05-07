package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AccountSummaryPage extends PageBase {

  @FindBy(xpath = "//a[contains(text(),'Account Summary')]")
  public WebElement accountSum;
  //
  @FindBy(xpath = "(//ul[@class='nav nav-tabs']//a)")
  public WebElement mainOptions;
  @FindBy(xpath = "//div[@class='offset2 span8']//h2")
  public List<WebElement> creditTypes;
  @FindBy(xpath = "((//div[@class='board-content'])[3]//tr)[1]")
  public WebElement creditAccountsMenu;

  public void getAccount(String expected){

    String actualAccounts = "//a[contains(text(),'"+expected+"')]";
    WebElement accountSelected = Driver.getDriver().findElement(By.xpath(actualAccounts));
    BrowserUtils.waitForClickability(By.xpath(actualAccounts),1);
    accountSelected.click();
  }


}




