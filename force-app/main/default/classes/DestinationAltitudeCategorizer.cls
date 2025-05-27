public class DestinationAltitudeCategorizer {
  
      public static void assignAltitudeZones() {
            List<Destination__c> destinations = [
                SELECT Id, Altitude__c, Altitude_Zone__c
                FROM Destination__c
            ];
    
            for (Destination__c dest : destinations) {
                if (dest.Altitude__c < 2000) {
                    dest.Altitude_Zone__c = 'Low Altitude';
                } else if (dest.Altitude__c >= 2000 && dest.Altitude__c <= 3000) {
                    dest.Altitude_Zone__c = 'Moderate Altitude';
                } else if (dest.Altitude__c > 3000) {
                    dest.Altitude_Zone__c = 'High Altitude';
                }
            }
    
            if (!destinations.isEmpty()) {
                update destinations;
            }
        }
}