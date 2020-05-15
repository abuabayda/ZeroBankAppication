@foreign_currency @regression

Feature: Purchase Foreign Currency

  @currency
  Scenario: Available currencies

    Given the user accesses the Purchase Foreign Currency cash tab

    Then following currencies should be available
      | Australia (dollar)    |
      | Canada (dollar)       |
      | Switzerland (franc)   |
      | China (yuan)          |
      | Denmark (krone)       |
      | Eurozone (euro)       |
      | Great Britain (pound) |
      | Japan (yen)           |
      | Mexico (peso)         |
      | Norway (krone)        |

  @error_currency
  Scenario: Error message for not selecting currency
    Given the user accesses the Purchase Foreign Currency cash tab
    When user tries to calculate cost without selecting a currency
    Then error message should be displayed

  @error_value
  Scenario: Error message for not entering value
    Given the user accesses the Purchase Foreign Currency cash tab
    When user tries to calculate cost without entering a value
    Then error message should be displayed