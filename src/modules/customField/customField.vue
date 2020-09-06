<script>
import jsonar from 'jsonar'

export default {
    name: 'customField',
    methods: {
        isValid: function() {
            return true;
        },
        getJson: function(){
            return this.properties;
        },
        getConfiguration: function() {
            return this.configuration;
        }
    },
    data() {
        return {
            'configuration': [
                {
                    'type': 'headerElement',
                    'label': 'CustomField',
                    'children': [
                        {
                            'type': 'optionElement',
                            'config': {
                                'type': 'text',
                                'placeholder': 'Enter name',
                                'property': 'name',
                                'label': 'Name',
                            }
                        },
                        {
                            'type': 'optionElement',
                            'config': {
                                'type': 'select',
                                'placeholder': 'Select type',
                                'property': 'type',
                                'label': 'Type',
                                'options': [
                                    {
                                        'value': 'CustomFieldTypes::BOOL',
                                        'label': 'Boolean'
                                    },
                                    {
                                        'value': 'CustomFieldTypes::DATETIME',
                                        'label': 'Date/Time'
                                    },
                                    {
                                        'value': 'CustomFieldTypes::FLOAT',
                                        'label': 'Float'
                                    },
                                    {
                                        'value': 'CustomFieldTypes::INT',
                                        'label': 'Integer'
                                    },
                                    {
                                        'value': 'CustomFieldTypes::JSON',
                                        'label': 'JSON'
                                    },
                                    {
                                        'value': 'CustomFieldTypes::TEXT',
                                        'label': 'Text'
                                    },
                                    {
                                        'value': 'CustomFieldTypes::HTML',
                                        'label': 'HTML'
                                    },
                                    {
                                        'value': 'CustomFieldTypes::SELECT',
                                        'label': 'Select'
                                    }
                                ]
                            }
                        },
                        {
                            'type': 'headerElement',
                            'label': 'Label',
                            'children': [
                                {
                                    'type': 'optionElement',
                                    'config': {
                                        'type': 'text',
                                        'placeholder': 'Enter german label',
                                        'property': 'label.deDE',
                                        'label': 'de-DE'
                                    }
                                },
                                {
                                    'type': 'optionElement',
                                    'config': {
                                        'type': 'text',
                                        'placeholder': 'Enter english label',
                                        'property': 'label.enGB',
                                        'label': 'en-GB'
                                    }
                                }
                            ]
                        },
                        {
                            'type': 'headerElement',
                            'label': 'helpText',
                            'children': [
                                {
                                    'type': 'optionElement',
                                    'config': {
                                        'type': 'text',
                                        'placeholder': 'Enter german helptext',
                                        'property': 'helpText.deDE',
                                        'label': 'de-DE'
                                    }
                                },
                                {
                                    'type': 'optionElement',
                                    'config': {
                                        'type': 'text',
                                        'placeholder': 'Enter english helptext',
                                        'property': 'helpText.enGB',
                                        'label': 'en-GB'
                                    }
                                }
                            ]
                        }
                    ],
                }
            ],
            'values': {
                'name': '',
                'type': '',
                'label': {
                    'deDE': '',
                    'enGB': ''
                },
                'helpText': {
                    'deDE': '',
                    'enGB': ''
                }
            }
        };
    },
    computed: {
        properties: function() {
            return {
                'name': this.values.name,
                'type': jsonar.literal(this.values.type),
                'config': {
                    'label': {
                        'de-DE': this.values.label.deDE,
                        'en-GB': this.values.label.enGB
                    },
                    'helpText': {
                        'de-DE': this.values.helpText.deDE,
                        'en-GB': this.values.helpText.enGB
                    }
                }
            }
        }
    }  
}
</script>