package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
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
      case "Pays Bills":
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
      default:
        mainOptions.get(1).click();
        System.out.println(BrowserUtils.getCurrentTitle());

    }
  }


}

