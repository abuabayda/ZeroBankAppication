package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigReader;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends PageBase{

  @FindBy(className = "icon-signin")
  public WebElement singIn;
  @FindBy(css = "#user_login")
  public WebElement username;
  @FindBy(css = "#user_password")
  public WebElement password;
  @FindBy(name = "submit")
  public WebElement loginBtt;
  @FindBy(xpath = "//div[@class='alert alert-error']")
  public WebElement accessDenied;
  @FindBy(xpath = "//h3")
  public WebElement LoginTxt;
  @FindBy(css = "#user_remember_me")
  public WebElement rememberMeElement;
  //==============================
  public void login() {

    this.username.sendKeys("username");
    this.password.sendKeys("password");
    rememberMeElement.click();
    loginBtt.click();
  }

  public void goToLandingPage() {
    Driver.getDriver().get(ConfigReader.getProperty("url"));
    BrowserUtils.wait(1);
  }

  public String getErrorMessage() {
    return accessDenied.getText();
  }

  public static String  getCurrentTitle(){
    return Driver.getDriver().getTitle();
  }
}
