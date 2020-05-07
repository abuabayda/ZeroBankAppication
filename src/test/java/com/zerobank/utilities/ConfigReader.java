package com.zerobank.utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader {
  private static Properties properties;

  static {
    try {
      //reads file in java, we need tp pass path of file
      FileInputStream fileInputStream = new FileInputStream("config.properties");
      //initialize object
      properties = new Properties();

      //load contents of file properties object
      properties.load(fileInputStream);
      fileInputStream.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
  public static String getProperty(String key){
    //getting property browser
    return  properties.getProperty(key);
  }

}
