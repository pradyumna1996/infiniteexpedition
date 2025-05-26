import {api } from 'lwc';
import CqGridForm from 'c/cqGridForm';
import NC_OBSERVATION__C from '@salesforce/schema/NC_Observation__c';


import FIELDS_PARENT_ID from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.Id';

import FIELDS_PARENT_NAME from '@salesforce/schema/compliancequest__SQX_Nonconformance__c.Name';





//import fields


import FIELDS_NC_OBSERVATION__C_NAME from '@salesforce/schema/NC_Observation__c.Name';

import FIELDS_NC_OBSERVATION__C_NONCONFORMANCE__C from '@salesforce/schema/NC_Observation__c.Nonconformance__c';


//import customlabels (Labels must not have space)

import CQE3M_NEW from '@salesforce/label/c.CQE3M_NEW';

import CQE3M_EDIT_MORE from '@salesforce/label/c.CQE3M_EDIT_MORE';


import CQE3M_MY_NC_OBSERVATIONS from '@salesforce/label/c.CQE3M_MY_NC_OBSERVATIONS';




//additonalFields added in query while fetching data
const additionalFields = [



];
const columns = [


    FIELDS_NC_OBSERVATION__C_NAME,

        
    
];

const parentFields = [

    FIELDS_PARENT_ID,

    FIELDS_PARENT_NAME,

];



export default class cquiE3MNcObservationGrid  extends CqGridForm {
    @api
    maxRows;

    @api
    maxColumns;

    @api
    gridType;

    @api
    flexipageRegionWidth;
    
    constructor() {
        super();
        this.fields = columns;
        this.columns = columns;
        this.mainObject = NC_OBSERVATION__C;
        this.relationalField = FIELDS_NC_OBSERVATION__C_NONCONFORMANCE__C; //todo use this in import
        this.additionalFields = additionalFields;
        this.parentFields = parentFields;
        

        
        this.headerActions = [{"label": CQE3M_NEW,"name":"std_new","componentName":"cqui-e3-m-nc-observation-create"},{"label": CQE3M_EDIT_MORE,"name":"showEditSelected","componentName":"cqui-e3-m-nc-observation-edit","component_namespace":"c-","action_type":"","bulk":true},];
        

        this.limitToRecordType = '';

        
        this.rowActions = [];
        

        
        this.rowFormRules = {};
        

        
        this.headerFormRules = {};
        

        
        
    
        
        this.orderBy = FIELDS_NC_OBSERVATION__C_NAME;
        

        
        this.sortOrder = 'ASC NULLS LAST';
        

        
        this.customTitle = CQE3M_MY_NC_OBSERVATIONS;
        

        

        

        

        this.componentName="c:cquiE3MNcObservationGrid";

    }

    connectedCallback(){
        this.maxRowsToDisplay = this.maxRows;
        this.maxColumnsToDisplay = this.maxColumns;
        this.gridDesktopView = this.gridType;
    }

    @api 
    get recordId() {
        return this._recordId;
    }

    set recordId(value) {
        this._recordId = value;
    }

}