import { LightningElement, wire } from 'lwc';
import getDashboardCounts from '@salesforce/apex/ExpeditionDashboardController.getDashboardCounts';

export default class ExpeditionDashboardCounts extends LightningElement {
    counts = { clients: 0, treks: 0, guides: 0, bookings: 0 };

    @wire(getDashboardCounts)
    wiredCounts({ error, data }) {
        if (data) {
            this.counts = data;
        } else if (error) {
            console.error('Error fetching dashboard counts:', error);
        }
    }
}