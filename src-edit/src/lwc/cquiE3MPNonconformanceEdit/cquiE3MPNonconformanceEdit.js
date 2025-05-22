// basic import
import { track, api} from 'lwc';
import cqRecordForm from 'c/cqRecordForm';





// field and schema import

// Object_<Object api name without __c if present>
import OBJECT_COMPLIANCEQUEST__SQX_NONCONFORMANCE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c';

import FIELD_COMPLIANCEQUEST__SQX_NONCONFORMANCE__C__NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.Name';


import FIELD_RECORDTYPENAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.RecordType.Name';
import FIELD_RECORDTYPEDEVELOPERNAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.RecordType.DeveloperName';

// Field_<field api name without __c if present>

import FIELD_COMPLIANCEQUEST__NC_TITLE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__NC_Title__c';

import FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Occurrence_Date__c';

import FIELD_COMPLIANCEQUEST__DESCRIPTION_RT__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Description_RT__c';

import FIELD_COMPLIANCEQUEST__AWARE_DATE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Aware_Date__c';

import FIELD_COMPLIANCEQUEST__TYPE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Type__c';

import FIELD_COMPLIANCEQUEST__PRIORITY__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Priority__c';

import FIELD_COMPLIANCEQUEST__TYPE_OF_ISSUE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Type_Of_Issue__c';

import FIELD_COMPLIANCEQUEST__SQX_SERVICE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Service__c';

import FIELD_COMPLIANCEQUEST__IS_PART_IMPACTED__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Is_Part_Impacted__c';

import FIELD_COMPLIANCEQUEST__SQX_LOCATION__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Location__c';

import FIELD_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__QMS_Reference_Number__c';

import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Department__c';

import FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Account__c';

import FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_External_Contact__c';

import FIELD_REGION_REQUIRED__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.Region_Required__c';

import FIELD_REGION__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.Region__c';

import FIELD_COMPLIANCEQUEST__SQX_PART__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Part__c';

import FIELD_COMPLIANCEQUEST__UNIT_OF_MEASURE__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__Unit_of_Measure__c';





// additional Field_<field api name without __c if present>


    
import FIELD_CQ_E3M_PERFORM_CLOSURE_COMPLETED__C from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.CQ_E3M_Perform_Closure_Completed__c';
    


// Lookup fields Field_<field api name without __c if present>_<name field>


    


    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Service__r.Name';
    


    


    
import FIELD_COMPLIANCEQUEST__SQX_LOCATION__NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Location__r.Name';
    


    


    
import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Department__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Account__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_External_Contact__r.Name';
    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_PART__NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.compliancequest__SQX_Part__r.Name';
    


    



// import section custom label
    
        
import CQE3MP_DETAILS from '@salesforce/label/c.CQE3MP_DETAILS';
        
    
        
import CQE3MP_IMPACTED_PART_LOT from '@salesforce/label/c.CQE3MP_IMPACTED_PART_LOT';
        
    
        
import CQE3MP_CUSTOM_LINKS from '@salesforce/label/c.CQE3MP_CUSTOM_LINKS';
        
    


    


// generated to match the indext with the exact value field


// import as array to help in code generation below

const fields = [

    FIELD_RECORDTYPENAME,
    FIELD_RECORDTYPEDEVELOPERNAME,
 

    FIELD_COMPLIANCEQUEST__SQX_NONCONFORMANCE__C__NAME,

    
        
    FIELD_COMPLIANCEQUEST__NC_TITLE__C,
        
    
        
    FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C,
        
    
        
    FIELD_COMPLIANCEQUEST__DESCRIPTION_RT__C,
        
    
        
    FIELD_COMPLIANCEQUEST__AWARE_DATE__C,
        
    
        
    FIELD_COMPLIANCEQUEST__TYPE__C,
        
    
        
    FIELD_COMPLIANCEQUEST__PRIORITY__C,
        
    
        
    FIELD_COMPLIANCEQUEST__TYPE_OF_ISSUE__C,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_SERVICE__C,
        
    
        
    FIELD_COMPLIANCEQUEST__IS_PART_IMPACTED__C,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_LOCATION__C,
        
    
        
    FIELD_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C,
        
    
        
    FIELD_REGION_REQUIRED__C,
        
    
        
    FIELD_REGION__C,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_PART__C,
        
    
        
    FIELD_COMPLIANCEQUEST__UNIT_OF_MEASURE__C,
        
    
    
        
    FIELD_CQ_E3M_PERFORM_CLOSURE_COMPLETED__C,
        
    
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME,
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_LOCATION__NAME,
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME,
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_PART__NAME,
        
    
        
    
];

const lookupDisplayFields = {
    
    "RecordTypeId": FIELD_RECORDTYPENAME,
    
    
        

        

        

        

        

        

        

        
    "compliancequest__SQX_Service__c": FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME,
    

        

        
    "compliancequest__SQX_Location__c": FIELD_COMPLIANCEQUEST__SQX_LOCATION__NAME,
    

        

        
    "compliancequest__SQX_Department__c": FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
    

        
    "compliancequest__SQX_Account__c": FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME,
    

        
    "compliancequest__SQX_External_Contact__c": FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME,
    

        

        

        
    "compliancequest__SQX_Part__c": FIELD_COMPLIANCEQUEST__SQX_PART__NAME,
    

        

};

const LOOKUP_FILTERS = {"CQ_E3M_SQX_NC_Email_Setup__c":{"filters":[{"field":"CQ_E3M_Type__c","operator":"eq","value":"3M"}],"logic":"and"},"compliancequest__SQX_Approval_Matrix__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","usv_param":"DeveloperName","operator":"eq","value":"Nonconformance"}],"logic":"and"},"compliancequest__SQX_Defect_Code__c":{"filters":[{"field":"compliancequest__Active__c","operator":"eq","value":"True"},{"field":"RecordTypeId","usv_function":"reference","usv_param":"Name","operator":"eq","value":"Non-Complaint Related"}],"logic":"and"},"compliancequest__SQX_Equipment__c":{"filters":[{"field":"compliancequest__Equipment_Status__c","operator":"eq","value":"Active"}],"logic":"and"},"compliancequest__SQX_External_Contact__c":{"field":"AccountId","operator":"eq","dynamicValue":"compliancequest__SQX_Account__c","isDynamic":true},"compliancequest__SQX_Impacted_Part__c":{"filters":[{"field":"compliancequest__Active__c","operator":"eq","value":"True"}],"logic":"and"},"compliancequest__SQX_Part__c":{"filters":[{"field":"compliancequest__Active__c","operator":"eq","value":"True"}],"logic":"and"}};
const DYNAMIC_SOURCES = {};
const FORM_RULES = {"Region__c":{"hidden":{"fields":["Region_Required__c"],"filter":"record.Region_Required__c == 'B' "},"required":{"fields":["Region_Required__c"],"filter":"record.Region_Required__c == 'A' "},"setValues":[{"fields":["Region__c"],"filter":" record.Region__c == record.Region__c","action":{"Region__c":null}}]}};
const FORMULA_FIELDS = {};

export default class cquiE3MPNonconformanceEdit  extends cqRecordForm {


    
    @track
    sectionHider = {};
    fieldsToTrack = [];
    saveImmediate = false;

    constructor() {
        super();
        this.init(OBJECT_COMPLIANCEQUEST__SQX_NONCONFORMANCE__C,fields,lookupDisplayFields);
        
        
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
    
    get v_COMPLIANCEQUEST__NC_TITLE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__NC_TITLE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__NC_TITLE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__NC_TITLE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__NC_TITLE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__NC_TITLE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__NC_TITLE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__OCCURRENCE_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__OCCURRENCE_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__OCCURRENCE_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DESCRIPTION_RT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DESCRIPTION_RT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DESCRIPTION_RT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DESCRIPTION_RT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DESCRIPTION_RT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION_RT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION_RT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__AWARE_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__AWARE_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__AWARE_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__TYPE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__TYPE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__TYPE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__TYPE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__TYPE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__TYPE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__TYPE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__PRIORITY__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__PRIORITY__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__PRIORITY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__PRIORITY__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__PRIORITY__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__PRIORITY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__PRIORITY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__TYPE_OF_ISSUE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__TYPE_OF_ISSUE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__TYPE_OF_ISSUE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__TYPE_OF_ISSUE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__TYPE_OF_ISSUE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__TYPE_OF_ISSUE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__TYPE_OF_ISSUE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_SERVICE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_SERVICE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_SERVICE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__IS_PART_IMPACTED__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__IS_PART_IMPACTED__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__IS_PART_IMPACTED__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__IS_PART_IMPACTED__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__IS_PART_IMPACTED__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__IS_PART_IMPACTED__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__IS_PART_IMPACTED__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_LOCATION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_LOCATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_LOCATION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__QMS_REFERENCE_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName].fieldApiName);
    }

    
    get v_REGION_REQUIRED__C() {
        return this.getValueFor(FIELD_REGION_REQUIRED__C.fieldApiName);
    }
    get f_REGION_REQUIRED__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_REGION_REQUIRED__C.fieldApiName] : {};
        return val;
    }

    get d_REGION_REQUIRED__C() {
        return lookupDisplayFields[FIELD_REGION_REQUIRED__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_REGION_REQUIRED__C.fieldApiName].fieldApiName);
    }

    
    get v_REGION__C() {
        return this.getValueFor(FIELD_REGION__C.fieldApiName);
    }
    get f_REGION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_REGION__C.fieldApiName] : {};
        return val;
    }

    get d_REGION__C() {
        return lookupDisplayFields[FIELD_REGION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_REGION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_PART__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_PART__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_PART__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__UNIT_OF_MEASURE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__UNIT_OF_MEASURE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__UNIT_OF_MEASURE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__UNIT_OF_MEASURE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__UNIT_OF_MEASURE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__UNIT_OF_MEASURE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__UNIT_OF_MEASURE__C.fieldApiName].fieldApiName);
    }

    


    
        
    get CQE3MP_DETAILS() {
        return CQE3MP_DETAILS;
    }
        
    
        
    get CQE3MP_IMPACTED_PART_LOT() {
        return CQE3MP_IMPACTED_PART_LOT;
    }
        
    
        
    get CQE3MP_CUSTOM_LINKS() {
        return CQE3MP_CUSTOM_LINKS;
    }
        
    
}
