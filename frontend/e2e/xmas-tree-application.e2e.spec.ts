import { ChristmasTreeForm } from './app.po';
import { FieldValidation } from './field-validation.po';
import { browser, element, by, Key } from 'protractor';

describe('Apply for a Christmas tree permit', () => {
  let page: ChristmasTreeForm;
  let fieldValidation: FieldValidation;
  fieldValidation = new FieldValidation();

  beforeEach(() => {
    page = new ChristmasTreeForm();
  });

  it('should display the permit name in the header', () => {
    page.navigateTo();
    expect<any>(element(by.css('app-root h1')).getText()).toEqual('Buy a Christmas tree permit.');
  });

  it( 'should show all fields as invalid if submitted without input', () => {
    page.submit().click();
    browser.sleep(500);


  });

  // it( 'should require a first name' () => {
  //
  // });
  //
  // it( 'should require a last name' () => {
  //
  // });
  //
  // it( 'should display an error for an invalid email address' () => {
  //
  // });
  //
  // it( 'should require a valid email address' () => {
  //
  // });
  //
  // it( 'should display an error for an invalid tree amount' () => {
  //
  // });
  //
  // it( 'should display an error for a tree amount great than allowed' () => {
  //
  // });

  it('should calculate total cost', () => {
    page.navigateTo();
    element(by.css('.primary-permit-holder-first-name')).sendKeys('Sarah');
    element(by.css('.primary-permit-holder-last-name')).sendKeys('Bell');
    element(by.id('email')).sendKeys('msdf@noemail.com');
    element(by.id('quantity')).sendKeys('2');
    expect<any>(element(by.id('total-cost')).getText()).toEqual('$20');
  });

  it('should redirect to mock pay.gov on application submit', () => {
    page.navigateTo();
    element(by.css('.primary-permit-holder-first-name')).sendKeys('Sarah');
    element(by.css('.primary-permit-holder-last-name')).sendKeys('Bell');
    element(by.id('email')).sendKeys('msdf@noemail.com');
    element(by.id('quantity')).sendKeys('2');
    element(by.id('submit-application')).click();
    browser.sleep(900);
    expect(browser.getCurrentUrl()).toContain('http://localhost:4200/mock-pay-gov');
  });
});
