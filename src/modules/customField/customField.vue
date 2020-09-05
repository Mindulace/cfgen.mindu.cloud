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
        }
    },
    data() {
        return {
            'configuration': {
                'type': 'header',
                'value': 'CustomField',
                'children': [
                    {
                        'type': 'option',
                        'config': {
                            'text': {
                                'default': '',
                                'property': 'name',
                            }
                        }
                    },
                    {
                        'type': 'option',
                        'config': {
                            'select': {
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
                        }
                    },
                    {
                        'type': 'header',
                        'value': 'Label',
                        'children': [
                            {
                                'text': {
                                    'default': '',
                                    'property': 'label.deDE',
                                },
                            },
                            {
                                'text': {
                                    'default': '',
                                    'property': 'label.enGB',
                                }
                            }
                        ]
                    },
                    {
                        'type': 'header',
                        'value': 'helpText',
                        'children': [
                            {
                                'text': {
                                    'default': '',
                                    'property': 'helpText.deDE',
                                },
                            },
                            {
                                'text': {
                                    'default': '',
                                    'property': 'helpText.enGB',
                                }
                            }
                        ]
                    }
                ],
            },
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
                'name': this.configuration.name,
                'type': jsonar.literal(this.configuration.type),
                'config': {
                    'label': {
                        'de-DE': this.configuration.label.deDE,
                        'en-GB': this.configuration.label.enGB
                    },
                    'helpText': {
                        'de-DE': this.configuration.helpText.deDE,
                        'en-GB': this.configuration.helpText.enGB
                    }
                }
            }
        }
    }  
}
</script>