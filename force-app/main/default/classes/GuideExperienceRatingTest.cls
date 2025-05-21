@isTest
public class GuideExperienceRatingTest {
    
    @isTest
    static void testGuideRatingInsert() {
        // Create Guide records with different experience levels
        Guide__c guide1 = new Guide__c(Name='Guide One', Experience_Years__c=1);
        Guide__c guide2 = new Guide__c(Name='Guide Two', Experience_Years__c=2.5);
        Guide__c guide3 = new Guide__c(Name='Guide Three', Experience_Years__c=3.5);
        Guide__c guide4 = new Guide__c(Name='Guide Four', Experience_Years__c=6);

        Test.startTest();
        insert new List<Guide__c>{guide1, guide2, guide3, guide4};
        Test.stopTest();

        // Reload guides to verify trigger logic
        List<Guide__c> insertedGuides = [
            SELECT Id, Rating__c, Experience_Years__c FROM Guide__c 
            WHERE Id IN :new List<Id>{guide1.Id, guide2.Id, guide3.Id, guide4.Id}
        ];

        System.assertEquals('Rookie', insertedGuides[0].Rating__c);
        System.assertEquals('Pro', insertedGuides[1].Rating__c);
        System.assertEquals('Pro Active', insertedGuides[2].Rating__c);
        System.assertEquals('Active Always', insertedGuides[3].Rating__c);
    }

    @isTest
    static void testGuideRatingUpdate() {
        Guide__c guide = new Guide__c(Name='Guide Update', Experience_Years__c=1);
        insert guide;

        guide.Experience_Years__c = 6;
        Test.startTest();
        update guide;
        Test.stopTest();

        Guide__c updatedGuide = [SELECT Rating__c FROM Guide__c WHERE Id = :guide.Id];
        System.assertEquals('Active Always', updatedGuide.Rating__c);
    }

    @isTest
    static void testNoExperienceChange() {
        Guide__c guide = new Guide__c(Name='No Change', Experience_Years__c=2);
        insert guide;

        guide.Name = 'Still No Change'; // Change unrelated field
        Test.startTest();
        update guide;
        Test.stopTest();

        // Ensure rating remains unchanged
        Guide__c unchangedGuide = [SELECT Rating__c FROM Guide__c WHERE Id = :guide.Id];
        System.assertEquals('Rookie', unchangedGuide.Rating__c);
    }
}