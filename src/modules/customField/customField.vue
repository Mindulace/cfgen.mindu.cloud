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
                    'type': 'header',
                    'label': 'CustomField',
                    'children': [
                        {
                            'type': 'option',
                            'config': {
                                'type': 'text',
                                'default': '',
                                'property': 'name'
                            }
                        },
                        {
                            'type': 'option',
                            'config': {
                                'type': 'select',
                                'default': '',
                                'property': 'type',
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
                            'type': 'header',
                            'label': 'Label',
                            'children': [
                                {
                                    'type': 'option',
                                    'config': {
                                        'type': 'text',
                                        'default': '',
                                        'property': 'label.deDE'
                                    }
                                },
                                {
                                    'type': 'option',
                                    'config': {
                                        'type': 'text',
                                        'default': '',
                                        'property': 'label.enGB'
                                    }
                                }
                            ]
                        },
                        {
                            'type': 'header',
                            'label': 'helpText',
                            'children': [
                                {
                                    'type': 'option',
                                    'config': {
                                        'type': 'text',
                                        'default': '',
                                        'property': 'helpText.deDE'
                                    }
                                },
                                {
                                    'type': 'option',
                                    'config': {
                                        'type': 'text',
                                        'default': '',
                                        'property': 'helpText.enGB'
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