package com.zerobank.pages;

import com.google.gson.internal.bind.util.ISO8601Utils;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class PayBillsPage extends PageBase {

  @FindBy(xpath = "//input[@id='sp_amount']")
  public WebElement amount$;
  @FindBy(id = "sp_date")
  public WebElement inputDate;
  @FindBy(id = "alert_content")
  public WebElement alertMsg;
  @FindBy(id = "pay_saved_payees")
  public WebElement payBttn;
  @FindBy(id = "np_new_payee_name")
  public WebElement payeeName;
  @FindBy(id = "np_new_payee_address")
  public WebElement payeeAddress;
  @FindBy(id = "np_new_payee_account")
  public WebElement payeeAccount;
  @FindBy(id = "np_new_payee_details")
  public WebElement payeeDetails;
  @FindBy(id = "add_new_payee")
  public WebElement saveAndClose;
  @FindBy(id = "alert_content")
  public WebElement generalInfo;
  @FindBy(css = "[id='ui-tabs-2'] [class='span4']")
  public WebElement info_input;
  @FindBy(xpath = "//select[@id='pc_currency']")
  public WebElement currencyTypeWe;
  @FindBy(xpath = "//a[contains(text(),'Purchase Foreign Currency')]")
  public WebElement getCurrencyTab;
  @FindBy(xpath = "//a[contains(text(),'Pay Bills')]")
  public WebElement getPayBttn;
  @FindBy(id = "pc_calculate_costs")
  public WebElement calcBttn;



  public static List<WebElement> currencyType() {

    Select select = new Select(Driver.getDriver().findElement(By.xpath("//select[@id='pc_currency']")));
    return select.getOptions();
  }


  public void clickSaveAndClose() {
    BrowserUtils.wait(1);
    saveAndClose.click();
  }

  public void currencySelect(String currency) {
    Select select = new Select(Driver.getDriver().findElement(By.xpath("//select[@id='pc_currency']")));
    select.selectByValue(currency);
  }

  public String setAlertMsg(String choice) {
    switch (choice) {

      case "text":
        System.out.println(Driver.getDriver().switchTo().alert().getText());
        break;
      case "accept":
        Driver.getDriver().switchTo().alert().accept();
        break;
      case "dismiss":
        Driver.getDriver().switchTo().alert().dismiss();
        break;
    }
    return choice;
  }
}
