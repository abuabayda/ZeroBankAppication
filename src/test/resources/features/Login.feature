@login_ZeroApp @regression

Feature: Login to Zero Application

Background:
  Given   I am in "Login" page
  @authorized_user
  Scenario: Users login with valid credentials
    When    I enter valid "username" and "password" in "Login" page
    Then    I should be in "Account Summary" page


  @negative
  Scenario: Verify warning message for invalid credentials
    When    I enter valid "userName" and "passWord" in "Login" page
    And     user verifies that "Login and/or password are wrong." warning message is displayed
    Then    I should be in "Log in" page




