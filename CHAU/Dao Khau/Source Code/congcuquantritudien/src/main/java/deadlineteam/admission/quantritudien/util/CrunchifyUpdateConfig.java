package deadlineteam.admission.quantritudien.util;

import java.io.UnsupportedEncodingException; 
import java.security.MessageDigest; 
import java.security.NoSuchAlgorithmException;

import org.apache.commons.configuration.PropertiesConfiguration;
import org.hibernate.internal.util.config.ConfigurationException;
 
public class CrunchifyUpdateConfig {
    
	public static void ConfigSystem(String driver, String username, String password, String url) throws ConfigurationException, org.apache.commons.configuration.ConfigurationException {

        PropertiesConfiguration config = new PropertiesConfiguration("./application.properties");
        config.setProperty("db.driver", driver);
        config.setProperty("db.url", url);
        config.setProperty("db.username", username);
        config.setProperty("db.password", password);      
        config.save(); 
    }
	public static void ConfigMail(String host, String port, String username, String password) throws ConfigurationException, org.apache.commons.configuration.ConfigurationException {

        PropertiesConfiguration config = new PropertiesConfiguration("./application.properties");
        config.setProperty("mail.host", host);
        config.setProperty("mail.port", port);
        config.setProperty("mail.username", username);
        config.setProperty("mail.password", password);      
        config.save(); 
    }
   
}