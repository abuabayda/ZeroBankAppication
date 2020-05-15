package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class PageBase {
  public PageBase() {
    PageFactory.initElements(Driver.getDriver(), this);
  }

  @FindBy(xpath = "(//ul[@class='nav nav-tabs']//a)")
  public List<WebElement> mainOptions;

  public void mainChoice(String option) {
//    option = option.toUpperCase();
    switch (option) {
      case "Account Summary":
        mainOptions.get(0).click();
        System.out.println(BrowserUtils.getCurrentTitle());
        break;
      case "Account Activity":
        mainOptions.get(1).click();
        System.out.println(BrowserUtils.getCurrentTitle());
        break;
      case "Transfer Funds":
        mainOptions.get(2).click();
        System.out.println(BrowserUtils.getCurrentTitle());
        break;
      case "Pay Bills":
        mainOptions.get(3).click();
        System.out.println(BrowserUtils.getCurrentTitle());
        break;
      case "My Money Map":
        mainOptions.get(4).click();
        System.out.println(BrowserUtils.getCurrentTitle());
        break;
      case "Online Statements":
        mainOptions.get(5).click();
        System.out.println(BrowserUtils.getCurrentTitle());
        break;
      default:
        mainOptions.get(1).click();
        System.out.println(BrowserUtils.getCurrentTitle());

    }
    BrowserUtils.wait(1);
  }

  public void secondHeadTabs(String tab) {
    BrowserUtils.wait(1);
    String tab1 = "//a[contains(text(),'" + tab + "')]";
    WebElement headTab = Driver.getDriver().findElement(By.xpath(tab1));
    BrowserUtils.waitForClickability(By.xpath(tab1), 2);
    BrowserUtils.waitForClickability(By.xpath(tab1), 2);

    headTab.click();
  }
}

