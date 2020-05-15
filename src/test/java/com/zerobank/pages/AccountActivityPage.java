package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AccountActivityPage extends PageBase {

  @FindBy(xpath = "//table[@class='table table-condensed table-hover']//thead//tr/th")
  public List<WebElement> tableHeaderName;
  @FindBy(xpath = "//a[contains(text(),'Find Transactions')]")
  public WebElement findTrans;
  @FindBy(xpath = "//input[@id='aa_fromDate']")
  public WebElement start_date;
  @FindBy(xpath = "//input[@id='aa_toDate']")
  public WebElement end_date;
  @FindBy(css = ".btn.btn-primary")
  public WebElement find_bttn;
  @FindBy(xpath = "//a[contains(text(),'Show Transactions')]")
  public WebElement showTrans;
  @FindBy(xpath = "//div[@id='all_transactions_for_account']//td")
  public List <WebElement> search_Res;
  @FindBy(xpath = "//div[@id='filtered_transactions_for_account']//tr/td[1]")
  public List<WebElement>filter_Res;
  @FindBy(id = "aa_description")
  public WebElement desc_input;
  @FindBy(xpath = "//div[@id='filtered_transactions_for_account']//tr/td")
  public List<WebElement> desc_col;
  @FindBy(xpath = "//div[@id='filtered_transactions_for_account']")
  public WebElement Filter;

public String filterBColumn(Integer column){
  String col = "//div[@id='filtered_transactions_for_account']//tr//td["+column+"]";
  WebElement xpath = Driver.getDriver().findElement(By.xpath(col));
  return xpath.getText();
}


  public String  setAccountDrop(String account){

    Select accountSelected = new Select(Driver.getDriver().
              findElement(By.xpath("//select[@id='aa_accountId']")));
    accountSelected.selectByVisibleText(account);
    return account;
  }
  public static List<WebElement> select() {
    Select select = new Select(Driver.getDriver().findElement(By.className("input-xlarge")));
    return select.getOptions();
  }
  public String  transactionType(String type){
    Select accountSelected = new Select(Driver.getDriver().
                    findElement(By.cssSelector("#aa_accountId.input-xlarge")));
    accountSelected.selectByVisibleText(type);
    return type;
  }
  public String dateRes(String date){
    String res = "//td[contains(text(),'"+date+"')]";
    WebElement dateRes = Driver.getDriver().findElement(By.xpath(res));
    System.out.println(dateRes.isDisplayed());
    return dateRes.getText();
  }
  public void transTab(String tab){
    String tab1Xpath = "//div[@id='filtered_transactions_for_account']//td[contains(text(),'"+tab+"')]";
    WebElement tab1 = Driver.getDriver().findElement(By.xpath(tab1Xpath));
    tab1.click();

    BrowserUtils.wait(1);
  }
  public void setTypeDrop(String type){

    Select accountSelected = new Select(Driver.getDriver().findElement(By.id("aa_type")));
    accountSelected.selectByVisibleText(type);
  }
  public void scrollToElement(WebElement element) {
    ((JavascriptExecutor) Driver.getDriver()).executeScript("arguments[0].scrollIntoView(true);", element);
  }
}
