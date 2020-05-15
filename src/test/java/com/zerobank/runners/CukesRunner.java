package com.zerobank.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
     plugin = {"pretty"
          ,"html:target/default-cucumber-reports",
                "rerun:target/rerun.txt",
                "json:target/cucumber.json"},

       features = "src/test/resources",
       glue = "com/zerobank/step_definitions",
       dryRun = false,
       tags = "@regression"
)
public class CukesRunner {
}
