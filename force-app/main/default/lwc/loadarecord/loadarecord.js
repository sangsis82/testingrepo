import { LightningElement ,api} from 'lwc';

export default class Loadarecord extends LightningElement {
        @api recordId;
    @api objectApiName;
    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email','UpsellOpportunity__c	'];


}