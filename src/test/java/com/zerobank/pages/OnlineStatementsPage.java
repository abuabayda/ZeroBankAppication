package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class OnlineStatementsPage extends PageBase {
  @FindBy(xpath = "//a[contains(text(),'Statements Documents')]")
  public WebElement onlineState;
  @FindBy(xpath = "//div[@class='tab-pane active']//td[1]")
  public WebElement recentYear;
  @FindBy(xpath = "//div[@class='tab-pane active']//td[1]")
  public List<WebElement> count;
  @FindBy(xpath = "//div[@class='tab-pane active']//tr[1]/th[1]")
  public WebElement typeOfDoc;
  @FindBy(xpath = "(//div[@class='tab-pane active']//tr/td[1])[1]")
  public WebElement statementTex;


  public void getYear(Integer year) {
    String yearsXpath = "//a[contains(text(),'" + year + "')]";
    WebElement years = Driver.getDriver().findElement(By.xpath(yearsXpath));
    years.click();
    System.out.println("CLick in " + years.getText());
  }

  public Integer getCount() {
    List<String> countText = BrowserUtils.getElementsText(Driver.getDriver().findElements(By.xpath("//div[@class='tab-pane active']//td[1]")));
    System.out.println("Recent statments \n" + countText);
    int count = 0;
    for (int i = 0; i < countText.size(); i++) {
      count++;
    }
    System.out.println(count);
    return count;
  }

  public void clickStatement(String statement) {

    String stateLinkText = "" + statement + "";
    WebElement statements = Driver.getDriver().findElement(By.linkText(stateLinkText));
    System.out.println(statements.getText());
    BrowserUtils.waitForVisibility(statements, 2);
    statements.click();
    BrowserUtils.wait(1);
  }
}

