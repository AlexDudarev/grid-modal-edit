var modelMetaData = [
    {
        label: 'Name',
        field: 'name',
        type: 'text',
        placeholder : 'Enter Name'
    },{
        label: 'Allowance',
        field: 'allowance',
        type: 'textarea'
    },{
        label: 'Paid',
        field: 'paid',
        type: 'checkbox',
        //type: 'text',
        typeValue : "boolean",
        trueValue : true,
        falseValue : false
    },{
        label: 'Allowance Select',
        field: 'allowance',
        type: 'select',
        //options: [{value: 'true', label: 'True'},{value: 'false', label: 'False'}]
        options: [{value: '10', label: 'Ten'}, {value: '100', label: 'Hundred'},{value: '1000', label: 'Thousand'}]
    },{
        label: 'Allowance Select',
        field: 'allowance',
        type: 'radiobutton',
        //options: [{value: 'true', label: 'True'},{value: 'false', label: 'False'}]
        options: [{value: '10', label: 'Ten'}, {value: '100', label: 'Hundred'},{value: '1000', label: 'Thousand'}]
    }
];

