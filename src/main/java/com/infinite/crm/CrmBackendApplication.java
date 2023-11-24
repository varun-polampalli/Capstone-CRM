package com.infinite.crm;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class CrmBackendApplication {
	
	private static final Logger logger = Logger.getLogger(CrmBackendApplication.class);

	public static void main(String[] args) {
		PropertyConfigurator.configure("Log4j.properties"); 
		SpringApplication.run(CrmBackendApplication.class, args);
		logger.info("Working");
	}

}
