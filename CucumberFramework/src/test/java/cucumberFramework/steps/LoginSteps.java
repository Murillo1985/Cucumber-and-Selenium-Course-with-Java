package cucumberFramework.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginSteps {

	WebDriver driver;

	@Before()
	public void setup() {
		System.setProperty("webdriver.gecko.driver","D:\\CucumberFramework\\CucumberFramework\\src\\test\\java\\cucumberFramework\\resources\\geckodriver_1.exe");
		this.driver = new FirefoxDriver();
		System.setProperty("webdriver.chrome.driver", "D:\\CucumberFramework\\CucumberFramework\\src\\test\\java\\cucumberFramework\\resources\\chromedriver.exe");
		//this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);

	}

	@Given("^User navigates to olx website$")
	public void user_navigates_to_olx_website() throws Throwable {
		//driver.get("https://www.stackoverflow.com");
		driver.get("https://www.olx.pt");
	}

	@Given("^User clicks on the login button on homepage$")
	public void user_clicks_on_the_login_button_on_homepage() throws Throwable {
		driver.findElement(By.xpath("//*[@class='link inlblk']")).click();
		//driver.findElement(By.xpath("//a[@data-cy='common_link_header_myaccount']")).click();
		//driver.findElement(By.xpath("//a[text()='Log in']")).click();
		//driver.findElement(By.xpath("//a[@data-gps-track='login.click']")).click();  //exclusive for stackoverflow website 
		//driver.findElement(By.xpath("//a[text()[contains(.,'Log in')]]")).click();
		//driver.findElement(By.xpath("//a[text(), 'Log in')]")).click();
	}

	@Given("^User enters a valid username$")
	public void user_enters_a_valid_username() throws Throwable {
		Thread.sleep(3000);
		//driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("murilloautomatictester@gmail.com");
		driver.findElement(By.xpath(".//*[@id='userEmail']")).sendKeys("murilloautomatictester@gmail.com");
		
	}

	@Given("^User enters a valid password$")
	public void user_enters_a_valid_password() throws Throwable {
		//driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("N1o9m8e5d");
		driver.findElement(By.xpath(".//*[@id='userPass']")).sendKeys("N1o9m8e5d");
	}

	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		Thread.sleep(3000);
		//driver.findElement(By.xpath("//button[@class='grid--cell s-btn s-btn__primary']")).click();
		driver.findElement(By.xpath(".//*[@id='se_userLogin']")).click();
	}

	@Then("^User enters your phone number$")
	public void user_enters_your_phone_number() throws Throwable {
		Thread.sleep(10000);
		driver.findElement(By.xpath(".//*[div[contains(.,'indicativo')]]")).sendKeys("935303226");
		
	}
}