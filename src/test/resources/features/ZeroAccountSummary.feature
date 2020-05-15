@Zero_Banks_Summary @wip @regression

Feature: Zero Account Summary, Account activity, Pay bills

  Background:
    Given   I am in "login" page
    When    I enter valid "username" and "password" in "Login" page


  @account_summary
  Scenario: Account Summary
    When    I click "Account Summary"
    Then    I should be in "Zero - Account Summary" page
    And     "Account Summary" page should have following accounts

      | Cash Accounts       |
      | Investment Accounts |
      | Credit Accounts     |
      | Loan Accounts       |

    And     "Credit Accounts" table must have the following data
      | Account     |
      | Credit Card |
      | Balance     |

  @account_activity
  Scenario: Account Activity
    When    I click "Account Activity"
    Then    I should be in "Zero - Account Activity" page
    And     Account "Savings" default should be "Savings"
    And     Account options should have the following data
      | Savings     |
      | Checking    |
      | Savings     |
      | Loan        |
      | Credit Card |
      | Brokerage   |

    And Transaction table should have columns data
      | Date        |
      | Description |
      | Deposit     |
      | Withdrawal  |
#
  @pay_bills
  Scenario: Pay Bills
    When   I click "Pays Bills"
    When   I should be in "Zero - Pay Bills" page
    And    I complete a successful payment transaction by entering "1" and "date"
    Then   I should see "The payment was successfully submitted."
    And    I try to make a payment without entering nothing to see "Please fill out this field."

  @checking_redirect
  Scenario: Checking account redirect Given the user is logged in
    When the user clicks on "Checking" link on the "Account Summary" page
    Then the "Account Activity" page should be displayed
    And Account drop down should have "Checking" selected

  @brokerage
  Scenario: Brokerage account redirect Given the user is logged in
    When the user clicks on "Brokerage" link on the "Account Summary" page
    Then the "Account Activity" page should be displayed
    And Account drop down should have "Brokerage" selected

  @credit_redirect
  Scenario: Credit Card account redirect Given the user is logged in
    When the user clicks on "Credit Card" link on the "Account Summary" page
    Then the "Account Activity" page should be displayed
    And Account drop down should have "Credit Card" selected

  @loan_redirect
  Scenario: Loan account redirect Given the user is logged in
    When the user clicks on "Loan" link on the "Account Summary" page
    Then the "Account Activity" page should be displayed
    And Account drop down should have "Loan" selected