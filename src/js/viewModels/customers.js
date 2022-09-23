/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
//define(['../accUtils'],
 //function(accUtils) {
   // function CustomerViewModel() {
    


/////////////////////////////////////////////////////////




define(['knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojcontext', 'ojs/ojknockout', 'ojs/ojinputtext',
    'ojs/ojinputnumber', 'ojs/ojtable','ojs/ojdatetimepicker','ojs/ojformlayout','ojs/ojselectsingle', 'ojs/ojlabel', 
    'ojs/ojchart','ojs/ojvalidationgroup'],
  function (ko, Bootstrap, ArrayDataProvider, Context) {
    function CustomerViewModel() {
      var deptArray = [
      { FirstName: 'klei', LastName: 'Dura', Birthday:'2002-07-13',Gender:'Male',Birthplace:'Athine', Age: 20 },
      { FirstName: 'Ana', LastName: 'Stefani',Gender:'Female' ,Birthday:'1996-07-02', Age: 26 }];
      
      
      this.deptObservableArray = ko.observableArray(deptArray);
      this.dataprovider = new ArrayDataProvider(this.deptObservableArray, { keyAttributes: '@index' });
      this.groupValid = ko.observable();
      this.isEmptyTable = ko.computed(function () {
        return this.deptObservableArray().length === 0;
      }, this);

      // add to the observableArray
      this.addRow = function () {
        if (this.groupValid() === 'invalidShown') {
          return;
        }
        var dept = {
              FirstName:this.inputFirstName(),
              LastName:this.inputLastName(),
              Birthday:this.inputBirthday(),
              Gender:this.selectGenderValue(),
              Birthplace:this.inputBirthplace(),
              Age:this.inputAge()
            
        }; 
       

        this.deptObservableArray.push(dept);
      }.bind(this);
  
      
  
      // intialize the observable values in the forms
      this.inputFirstName=ko.observable(null);
      this.inputLastName=ko.observable(null);
      this.inputBirthday=ko.observable(null);
      this.selectGenderValue=ko.observable(null);  
      this.inputBirthplace=ko.observable(null);
      this.inputAge=ko.observable(null);
      this.inputGender=ko.observable(new  ArrayDataProvider([
        {
          value:1,
          label:"Male"
        },
        {
          value:2,
          label:"Female"
        }
       ],{
         keyAttributes:'label',
      }));


///////////////////////////Provojme grafikun:


      this.UserPieDataProvider =ko.observable( new ArrayDataProvider([
        {
          "id": 0,
          "series": "Series 1",
          "group": "Group A",
          "value": 42
        },
        {
          "id": 1,
          "series": "Series 2",
          "group": "Group A",
          "value": 1
        },
        {
          "id": 2,
          "series": "Series 3",
          "group": "Group A",
          "value": 36
        },
        {
          "id": 3,
          "series": "Series 4",
          "group": "Group A",
          "value": 22
        },
        {
          "id": 4,
          "series": "Series 5",
          "group": "Group A",
          "value": 22
        }
      ], {
        keyAttributes: 'id',
    }));


 
////////////////////////////////////////////////////////////
    }
   return CustomerViewModel;
  }
);
