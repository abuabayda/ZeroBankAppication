package com.zerobank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PayBillsPage extends PageBase{

  @FindBy(xpath = "//input[@id='sp_amount']")
  public WebElement amount$;
  @FindBy(id = "sp_date")
  public WebElement inputDate;
  @FindBy(id = "alert_content")
  public WebElement alertMsg;
  @FindBy(id = "pay_saved_payees")
  public WebElement payBttn;

}
