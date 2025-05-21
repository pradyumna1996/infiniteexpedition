trigger GuideExperienceRating on Guide__c (before insert, before update) {
    for (Guide__c guide : Trigger.new) {
        // Only proceed if experience is provided
        if (guide.Experience_Years__c != null) {
            // On update, check if the value changed
            if (Trigger.isUpdate && 
                guide.Experience_Years__c == Trigger.oldMap.get(guide.Id).Experience_Years__c) {
                continue; // Skip if experience hasn't changed
            }

            // Set rating based on experience
            Decimal experience = guide.Experience_Years__c;

            if (experience <= 2) {
                guide.Rating__c = 'Rookie';
            } else if (experience < 3) {
                guide.Rating__c = 'Pro';
            } else if (experience < 4) {
                guide.Rating__c = 'Pro Active';
            } else if (experience > 5) {
                guide.Rating__c = 'Active Always';
            } else {
                guide.Rating__c = null; // Clear if no matching category
            }
        }
    }
}