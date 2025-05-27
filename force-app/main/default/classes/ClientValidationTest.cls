@isTest
						private class ClientValidationTest {
    						
						@isTest
    						static void testPhoneValidation() {
        						Client__c client = new Client__c(Name='John', Phone__c='1234567890');
        						Test.startTest();
        						try {
            							insert client;
            							System.assert(false, 'Should have thrown an error');
        						} catch (DmlException e) {
            							System.assert(e.getMessage().contains('Phone number must start with 98'));
        							}
        						Test.stopTest();
    							}
						}