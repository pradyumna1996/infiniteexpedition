// basic import
import { track, api} from 'lwc';
import cqRecordForm from 'c/cqRecordForm';





// field and schema import

// Object_<Object api name without __c if present>
import OBJECT_NC_OBSERVATION__C from '@salesforce/schema/NC_Observation__c';


// Field_<field api name without __c if present>

import FIELD_NAME from '@salesforce/schema/NC_Observation__c.Name';

import FIELD_OWNERID from '@salesforce/schema/NC_Observation__c.OwnerId';

import FIELD_NONCONFORMANCE__C from '@salesforce/schema/NC_Observation__c.Nonconformance__c';

import FIELD_CREATEDBYID from '@salesforce/schema/NC_Observation__c.CreatedById';

import FIELD_LASTMODIFIEDBYID from '@salesforce/schema/NC_Observation__c.LastModifiedById';





// additional Field_<field api name without __c if present>



// Lookup fields Field_<field api name without __c if present>_<name field>


    


    


    
import FIELD_NONCONFORMANCE__NAME from '@salesforce/schema/NC_Observation__c.Nonconformance__r.Name';
    


    


    



// import section custom label
    
        
import CQE3M_INFORMATION from '@salesforce/label/c.CQE3M_INFORMATION';
        
    
        
import CQE3M_SYSTEM_INFORMATION from '@salesforce/label/c.CQE3M_SYSTEM_INFORMATION';
        
    
        
import CQE3M_CUSTOM_LINKS from '@salesforce/label/c.CQE3M_CUSTOM_LINKS';
        
    


    


// generated to match the indext with the exact value field


// import as array to help in code generation below

const fields = [
 

    
        
    FIELD_NAME,
        
    
        
    FIELD_OWNERID,
        
    
        
    FIELD_NONCONFORMANCE__C,
        
    
        
    
        
    
    
    
        
    
        
    
        
    FIELD_NONCONFORMANCE__NAME,
        
    
        
    
        
    
];

const lookupDisplayFields = {
    
    
        

        

        
    "Nonconformance__c": FIELD_NONCONFORMANCE__NAME,
    

        

        

};

const LOOKUP_FILTERS = {};
const DYNAMIC_SOURCES = {};
const FORM_RULES = {};
const FORMULA_FIELDS = {};

export default class cquiE3MNcObservationEdit  extends cqRecordForm {


    
    @track
    sectionHider = {};
    fieldsToTrack = [];
    saveImmediate = false;

    constructor() {
        super();
        this.init(OBJECT_NC_OBSERVATION__C,fields,lookupDisplayFields);
        
        
        this.sectionHider = {"expando_unique_id_1":true,"expando_unique_id_2":true,"expando_unique_id_3":true}

        // Extend rules
        this.lookupFilters = LOOKUP_FILTERS;
        this.dynamicSources = DYNAMIC_SOURCES;
        this.inputFormRules = FORM_RULES;
        this.systemFormRules = FORMULA_FIELDS;
        this.picklistValueSource = {
            
        };
        this.uiType = {};
        this.parentRecordApi="";
        
    }


    @api
    get recordId() {
        return this._recordId;
    }
    set recordId(value) {
        this._recordId = value;
        this.parentId = value;
    }

    // getters for field value, display value and field metadata
    
    get v_NAME() {
        return this.getValueFor(FIELD_NAME.fieldApiName);
    }
    get f_NAME() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_NAME.fieldApiName] : {};
        return val;
    }

    get d_NAME() {
        return lookupDisplayFields[FIELD_NAME.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_NAME.fieldApiName].fieldApiName);
    }

    
    get v_OWNERID() {
        return this.getValueFor(FIELD_OWNERID.fieldApiName);
    }
    get f_OWNERID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_OWNERID.fieldApiName] : {};
        return val;
    }

    get d_OWNERID() {
        return lookupDisplayFields[FIELD_OWNERID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_OWNERID.fieldApiName].fieldApiName);
    }

    
    get v_NONCONFORMANCE__C() {
        return this.getValueFor(FIELD_NONCONFORMANCE__C.fieldApiName);
    }
    get f_NONCONFORMANCE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_NONCONFORMANCE__C.fieldApiName] : {};
        return val;
    }

    get d_NONCONFORMANCE__C() {
        return lookupDisplayFields[FIELD_NONCONFORMANCE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_NONCONFORMANCE__C.fieldApiName].fieldApiName);
    }

    
    get v_CREATEDBYID() {
        return this.getValueFor(FIELD_CREATEDBYID.fieldApiName);
    }
    get f_CREATEDBYID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CREATEDBYID.fieldApiName] : {};
        return val;
    }

    get d_CREATEDBYID() {
        return lookupDisplayFields[FIELD_CREATEDBYID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CREATEDBYID.fieldApiName].fieldApiName);
    }

    
    get v_LASTMODIFIEDBYID() {
        return this.getValueFor(FIELD_LASTMODIFIEDBYID.fieldApiName);
    }
    get f_LASTMODIFIEDBYID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_LASTMODIFIEDBYID.fieldApiName] : {};
        return val;
    }

    get d_LASTMODIFIEDBYID() {
        return lookupDisplayFields[FIELD_LASTMODIFIEDBYID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_LASTMODIFIEDBYID.fieldApiName].fieldApiName);
    }

    


    
        
    get CQE3M_INFORMATION() {
        return CQE3M_INFORMATION;
    }
        
    
        
    get CQE3M_SYSTEM_INFORMATION() {
        return CQE3M_SYSTEM_INFORMATION;
    }
        
    
        
    get CQE3M_CUSTOM_LINKS() {
        return CQE3M_CUSTOM_LINKS;
    }
        
    
}