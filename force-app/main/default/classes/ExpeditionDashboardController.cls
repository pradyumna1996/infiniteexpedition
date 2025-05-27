public with sharing class ExpeditionDashboardController {

    @AuraEnabled(cacheable=true)
    public static Map<String, Integer> getDashboardCounts() {
        Map<String, Integer> counts = new Map<String, Integer>();

        counts.put('clients', [SELECT COUNT() FROM Client__c]);
        counts.put('treks', [SELECT COUNT() FROM Trek__c]);
        counts.put('guides', [SELECT COUNT() FROM Guide__c]);
        counts.put('bookings', [SELECT COUNT() FROM Trek_Booking__c]);

        return counts;
    }
}