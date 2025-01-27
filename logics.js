let CSI_social_logics = [   
    {
        "dpCode": "GEC_00291",
        "at_code": "GEC_00291.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00291_1a.1", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["1a.2", "Strong commitment language"]
                        },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 4,
                                "attributes": [
                                    { "in": ["GEC_00291_1a.3", ["Human rights", "The Universal Declaration of Human Rights", "The International Bill of Human Rights", "All internationally recognised human rights"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["GEC_00291_1a.4", "All locations"]
                        },
                        {
                            "or": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 2,
                                        "attributes": [
                                            { "in": ["GEC_00291_1a.5", ["Own operations", "Supply Chain"]] }
                                        ]
                                    }
                                },
                                {
                                    "equals": ["GEC_00291_1a.5", "Value chain"]
                                }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement committing it to respect human rights"
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ]
    },
    {
        "dpCode": "GEC_00292",
        "at_code": "GEC_00292.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00292_2a.1", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["GEC_00292_2a.2", "Strong commitment language"]
                        },
                        {
                            "equals": ["GEC_00292_2a.3", "All locations"]
                        },
                        {
                            "or": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 2,
                                        "attributes": [
                                            { "in": ["GEC_00292_2a.4", ["Own operations", "Supply Chain"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00292_2a.4", "Value chain"] }
                            ]
                        },
                        {
                            "or": [
                                { "equals": ["GEC_00292_2a.5", "Yes"] },
                                {
                                    "and": [
                                        { "equals": ["GEC_00292_2a.6", "Yes"] },
                                        { "equals": ["GEC_00292_2a.7", "Yes"] },
                                        { "equals": ["GEC_00292_2a.8", "Yes"] },
                                        { "equals": ["GEC_00292_2a.9", "Yes"] },
                                        { "equals": ["GEC_00292_2a.10", "Yes"] }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement committing it to respect human rights with all conditions satisfied."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00293",
        "at_code": "GEC_00293.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00293_2b.1", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["GEC_00293_2b.2", "Strong commitment language"]
                        },
                        {
                            "equals": ["GEC_00293_2b.3", "All locations"]
                        },
                        {
                            "equals": ["GEC_00293_2b.4", "All business relationships"]
                        },
                        {
                            "or": [
                                { "equals": ["GEC_00293_2b.5", "Yes"] },
                                {
                                    "and": [
                                        { "equals": ["GEC_00293_2b.6", "Yes"] },
                                        { "equals": ["GEC_00293_2b.7", "Yes"] },
                                        { "equals": ["GEC_00293_2b.8", "Yes"] },
                                        { "equals": ["GEC_00293_2b.9", "Yes"] },
                                        { "equals": ["GEC_00293_2b.10", "Yes"] }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement that expects its business relationships to commit to respecting the human rights that the ILO has declared to be fundamental rights at work. "
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00777",
        "at_code": "GEC_00777.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00777_3a.1", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["GEC_00777_3a.2", "Strong commitment language"]
                        },
                        {
                            "equals": ["GEC_00777_3a.3", "Yes"]
                        },
                        {
                            "or": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 2,
                                        "attributes": [
                                            { "in": ["GEC_00777_3a.4", ["Own operations", "Supply chain"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00777_3a.4", "Value chain"] }
                            ]
                        },
                        {
                            "equals": ["GEC_00777_3a.5", "All locations"]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement committing it to remedy the adverse impacts on individuals, workers and communities that it has caused or contributed to."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00778",
        "at_code": "GEC_00778.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00778_3b.2", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["GEC_00778_3b.2", "Strong commitment language"]
                        },
                        {
                            "equals": ["GEC_00778_3b.3", "Yes"]
                        },
                        {
                            "or": [
                                { "equals": ["GEC_00778_3b.4", "All business relationships"] },
                                { "equals": ["GEC_00778_3b.4", "Some business relationships"] }
                            ]
                        },
                        {
                            "equals": ["GEC_00778_3b.5", "All locations"]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does expects its business relationships to commit to the right to remedy."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00294",
        "at_code": "GEC_00294.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                { "equals": ["GEC_00294_4a.1", "Yes"] },
                                { "equals": ["GEC_00294_4a.2", "Yes"] },
                                { "equals": ["GEC_00294_4a.3", "Yes"] },
                                { "equals": ["GEC_00294_4a.4", "No"] },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00294_4a.5", ["Using desk-based research and human rights risks analysis", "Using specialist research platforms or databases", "Engaging with affected stakeholders", "Engaging with human rights experts", "Engaging with internal company functions and/or suppliers"]] }
                                        ]
                                    }
                                }
                            ]
                        },
                        { "equals": ["GEC_00294_4a.6", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does describes the process(es) it has in place to identify its human rights risks and impact through relevant business relationships, including its supply chain."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00295",
        "at_code": "GEC_00295.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                            "and": [
                                { "equals": ["GEC_00295_4b.1", "Yes"] },
                                { "equals": ["GEC_00295_4b.2", "Yes"] },
                                { "equals": ["GEC_00295_4b.3", "Yes"] },
                                { "equals": ["GEC_00295_4b.4", "No"] },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00295_4b.5", ["Using desk-based research and human rights risks analysis", "Using specialist research platforms or databases", "Engaging with affected stakeholders", "Engaging with human rights experts", "Engaging with internal company functions and/or suppliers"]] }
                                        ]
                                    }
                                }
                            ]
                        },
                "elementScoreName": "Met",
                "externalComment": "The company does describes the process(es) it has in place to identify its human rights risks and impact through relevant business relationships, including its supply chain."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00779",
        "at_code": "GEC_00779.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00779_4c.1", "Yes"] },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00779_4c.2", ["(Potentially) affected stakeholder", "External human rights experts"]] }
                                ]
                            }
                        },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00779_4c.3", ["Stakeholder consultation(s)", "Focus group(s)", "Interviews", "Field visit(s) that include stakeholder consultations", "Company site visit(s) that include stakeholder consultations", "Audits that include stakeholder consultations", "Human Rights Impact Assessments that include stakeholder consultations", "High-level input from human rights experts as part of HRDD identification process", "Other in-depth method of stakeholder consultation"]] }
                                ]
                            }
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company describes how it involves affected stakeholders and internal or independent external human rights experts in its human rights risks and impact identification process(es)."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00780",
        "at_code": "GEC_00296.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00780_5a.1", "Yes"] },
                        { "equals": ["GEC_00780_5a.2", "Yes"] },
                        { "equals": ["GEC_00780_5a.3", "Yes"] },
                        { "equals": ["GEC_00780_5a.4", "Yes"] },
                        { "equals": ["GEC_00780_5a.5", "Yes"] },
                        { "equals": ["GEC_00780_5a.6", "No"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does describes the process(es) it has in place to assess its human rights risks and impact and discloses what it considers to be its salient human rights issues, covering its own operations."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00781",
        "at_code": "GEC_00781.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00781_5b.1", "Yes"] },
                        { "equals": ["GEC_00781_5b.2", "Yes"] },
                        { "equals": ["GEC_00781_5b.3", "Yes"] },
                        { "equals": ["GEC_00781_5b.4", "Yes"] },
                        { "equals": ["GEC_00781_5b.5", "No"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does describes the process(es) it has in place to assess its human rights risks and impact in its supply chain."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00297",
        "at_code": "GEC_00297.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00297_5c.1", "Yes"] },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 2,
                                "attributes": [
                                    { "in": ["GEC_00297_5c.2", ["Own operations", "Supply chain"]] }
                                ]
                            }
                        },
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company publicly discloses the results of its human rights risks and impact assessments, which may be aggregated across its operations and locations."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00782",
        "at_code": "GEC_00782.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00782_5d.1", "Yes"] },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    {
                                        "in": ["GEC_00782_5d.2", [
                                            "Stakeholder consultation(s)",
                                            "Focus group(s)",
                                            "Interviews",
                                            "Field visit(s) that include stakeholder consultations",
                                            "Company site visit(s) that include stakeholder consultations",
                                            "Audits that include stakeholder consultations",
                                            "Human Rights Impact Assessments that include stakeholder consultations",
                                            "Other in-depth method of stakeholder consultation"
                                        ]]
                                    }
                                ]
                            }
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does describes how it involves affected stakeholders in its human rights risks and impact assessment process(es)."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00783",
        "at_code": "GEC_00298.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "equals": [
                                "GEC_00783_6a.1",
                                "Yes"
                            ]
                        },
                        {
                            "equals": [
                                "GEC_00783_6a.2",
                                "Yes"
                            ]
                        },
                        {
                            "equals": [
                                "GEC_00783_6a.3",
                                "Yes"
                            ]
                        },
                        {
                            "equals": [
                                "GEC_00783_6a.4",
                                "Yes"
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does describes the process(es) it has in place to prevent, mitigate or remediate its salient human rights issues in its supply chain."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00784",
        "at_code": "GEC_00784.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00784_6b.1", "Yes"] },
                        { "equals": ["GEC_00784_6b.2", "Yes"] },
                        { "equals": ["GEC_00784_6b.3", "Yes"] },
                        { "equals": ["GEC_00784_6b.4", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does provides at least two examples of its engagement with stakeholders whose human rights have been or may be affected by its activities (or their legitimate representatives or multi-stakeholder initiatives) in the last two years."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },


    {
        "dpCode": "GEC_00299",
        "at_code": "GEC_00299.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00299_6c.1", "Yes"] },
                        { "equals": ["GEC_00299_6c.2", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does provides an example of the specific actions taken or to be taken on at least one of its salient human rights issues as a result of assessment process(es) in at least one of its activities/operations in the last three years."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00785",
        "at_code": "GEC_00785.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00785_6d.1", "Yes"] },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    {
                                        "in": ["GEC_00785_6d.2", [
                                            "Stakeholder consultation(s)",
                                            "Focus group(s)",
                                            "Interviews",
                                            "Field visit(s) that include stakeholder consultations",
                                            "Company site visit(s) that include stakeholder consultations",
                                            "Audits that include stakeholder consultations",
                                            "Human Rights Impact Assessments that include stakeholder consultations",
                                            "Other in-depth method of stakeholder consultation"
                                        ]]
                                    }
                                ]
                            }
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does describes how it involves affected stakeholders in decisions about the actions to take in response to its salient human rights issues."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00302",
        "at_code": "GEC_00302.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 5,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00302_7a.1", [
                                                    "Accessible to all employees",
                                                    "For all human rights complaints",
                                                    "Anonymous",
                                                    "Non-anonymous",
                                                    "Available in all languages"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00302_7a.2", "Yes"] },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00302_7a.3",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00302_7a.3",
                                                "NA"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 5,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00302_7a.1", [
                                                    "Accessible to all employees",
                                                    "For all human rights complaints",
                                                    "Anonymous",
                                                    "Non-anonymous",
                                                    "Available in one language"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00302_7a.2", "Yes"] },
                                { "equals": ["GEC_00302_7a.3", "Yes"] }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does indicates that it has one or more channel(s)/mechanism(s), or participates in a third-party or shared mechanism, accessible to all workers to raise complaints or concerns related to the company without fear of reprisals."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
     
        "dpCode": "GEC_00303",
        "at_code": "GEC_00303.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 5,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00303_8a.1", [
                                                    "Accessible to all employees",
                                                    "For all human rights complaints",
                                                    "Anonymous",
                                                    "Non-anonymous",
                                                    "Available in one language"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00303_8a.2",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00303_8a.2",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                                { "equals": ["GEC_00303_8a.3", "Yes"] }
                            ]
                        },
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 5,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00303_8a.1", [
                                                    "Accessible to all employees",
                                                    "For all human rights complaints",
                                                    "Anonymous",
                                                    "Non-anonymous",
                                                    "Available in one language"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00303_8a.2", "Yes"] },
                                { "equals": ["GEC_00303_8a.3", "Yes"] }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does indicates that it has one or more mechanism(s), or participates in a shared mechanism, accessible to all external individuals and communities who may be adversely impacted by the company, or those acting on their behalf, to raise complaints or concerns without fear of reprisals."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
   
        "dpCode": "GEC_00305",
        "at_code": "GEC_00305.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 8,
                                "attributes": [
                                    {
                                        "in": ["GEC_00305_9a.1", [
                                            "The number of fatalities as a result of work-related injuries",
                                            "The rate of fatalities as a result of work-related injuries",
                                            "The number of high-consequence work-related injuries (excluding fatalities)",
                                            "The rate of high-consequence work-related injuries (excluding fatalities)",
                                            "The number of recordable work-related injuries",
                                            "The rate of recordable work-related injuries",
                                            "The main types of work-related injuries",
                                            "The number of hours worked"
                                        ]]
                                    }
                                ]
                            }
                        },
                        { "equals": ["GEC_00305_9b.3", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has disclosed quantitative information on health and safety for its workers."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "The company fails to provide sufficient information on work-related injuries or related metrics as required."
            }
        ],
    },

    {
        "dpCode": "GEC_00307",
        "at_code": "GEC_00307.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "equals": ["GEC_00307_9b.1", "Yes"]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does discloses how it monitors the health and safety performance of its business relationships."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00309",
        "at_code": "GEC_00309.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00779_4c.2", ["Methodology", "Database"]] }
                                ]
                            }
                        },
                        {
                            "or": [
                                {
                                    "equals": [
                                        "GEC_00309_10a.2",
                                        "No"
                                    ]
                                },
                                {
                                    "equals": [
                                        "GEC_00309_10a.2",
                                        "NA"
                                    ]
                                }
                            ]
                        },
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does describes how it determines a living wage for the regions where it operates."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00786",
        "at_code": "GEC_00786.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "equals": ["GEC_00786_10b.1", "All locations where it operates"]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has measured the gap between current wages and living wages for all workers."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ]
    },

    {
        "dpCode": "GEC_00308",
        "at_code": "GEC_00308.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        { "equals": ["GEC_00308_10c.1", "Yes"] },
                        { "equals": ["GEC_00308_10c.2", "Yes"] },
                        {
                            "and": [
                                { "equals": ["GEC_00308_10c.4", "Yes"] },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 3,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00308_10c.5", [
                                                    "A decent standard of living or basic needs for employees/workers",
                                                    "Employees/workers' family and/or dependents",
                                                    "Some discretionary income"
                                                ]]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does disclose a time-bound target for paying all workers a living wage or that it has achieved paying all workers a living wage."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00310",
        "at_code": "GEC_00783.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        { "equals": ["GEC_00310_10d.1", "Yes"] },
                        { "equals": ["GEC_00310_10d.2", "Yes"] },
                        { "equals": ["GEC_00310_10d.3", "Yes"] },
                        { "equals": ["GEC_00310_10d.4", "Yes"] },
                        { "equals": ["GEC_00310_10d.5", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company does disclose evidence of activities to further the payment of living wages by its business relationships."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00311",
        "at_code": "GEC_00311.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    {
                                        "in": ["GEC_00311_11a.1", [
                                            "48 hour in a regular work week",
                                            "60 hours including overtime with not more than 48 hours in a regular work week",
                                            "Commitment to the International Labour Organization (ILO) Conventions on Working Hours",
                                            "Compliance with the Fair Labour Association (or equivalent standard)"
                                        ]]
                                    }
                                ]
                            }
                        },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00311_11a.2", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["GEC_00311_11a.3", "Strong commitment language"]
                        },
                        {
                            "or": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 2,
                                        "attributes": [
                                            { "in": ["GEC_00311_11a.4", ["Own operations", "Supply Chain"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00311_11a.4", "Value chain"] }
                            ]
                        },
                        {
                            "equals": ["GEC_00311_11a.5", "All locations"]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement committing it to respect the ILO conventions on working hours or stating that workers shall not be required to work more than 48 hours in a regular work week or 60 hours including overtime."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ]
    },
    {
        "dpCode": "GEC_00312",
        "at_code": "GEC_00312.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "or": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 3,
                                        "attributes": [
                                            { "in": ["GEC_00312_11b.1", ["Paid at a premium rate", "Consensual", "Compliance with the Fair Labour Association (or equivalent standard)"]] }
                                        ]
                                    }
                                },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 2,
                                        "attributes": [
                                            { "in": ["GEC_00312_11b.1", ["Paid at a premium rate", "Consensual"]] }
                                        ]
                                    }
                                },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00312_11b.1", ["Compliance with the Fair Labour Association (or equivalent standard)"]] }
                                        ]
                                    }
                                },
                            ]
                        },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00312_11b.2", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        {
                            "equals": ["GEC_00312_11b.3", "Strong commitment language"]
                        },
                        {
                            "or": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 2,
                                        "attributes": [
                                            { "in": ["GEC_00312_11b.4", ["Own operations", "Supply Chain"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00312_11b.4", "Value chain"] }
                            ]
                        },
                        {
                            "equals": ["GEC_00312_11b.5", "All locations"]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company publicly states that all overtime work must be consensual and be paid at a premium rate."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ]
    },
    {
        "dpCode": "GEC_00313",
        "at_code": "GEC_00313.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00313_11c.1", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        { "equals": ["GEC_00313_11c.2", "Strong commitment language"] },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    {
                                        "in": ["GEC_00313_11c.3", [
                                            "48 hour in a regular work week",
                                            "60 hours including overtime with not more than 48 hours in a regular work week",
                                            "Commitment to the International Labour Organization (ILO) Conventions on Working Hours",
                                            "Compliance with the Fair Labour Association (or equivalent standard)"
                                        ]]
                                    }
                                ]
                            }
                        },
                        { "equals": ["GEC_00313_11c.4", "All locations"] },
                        { "equals": ["GEC_00313_11c.5", "All business relationships"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a public expectation that its business relationships to commit to respecting the ILO conventions on working hours or not require workers to work more than 48 hours in a regular work week or 60 hours including overtime."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ]
    },
    {
        "dpCode": "GEC_00314",
        "at_code": "GEC_00314.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "equals": ["GEC_00314_12a.1", "Yes"]
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses the proportion of its total direct operations workforce covered by collective bargaining agreements."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00315",
        "at_code": "GEC_00315.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "atLeastCountMultiSelect": {
                        "minCount": 1,
                        "attributes": [
                            {
                                "in": ["GEC_00315_12b.1", [
                                    "By providing training to suppliers",
                                    "By conducting joint projects to support suppliers",
                                    "By supporting unionisation, workers’ groups or worker empowerment",
                                    "Other"
                                ]]
                            }
                        ]
                    }
                },
                "elementScoreName": "Met",
                "externalComment": "The company describes how it works to support the practices of its business relationships in relation to freedom of association and collective bargaining."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00316",
        "at_code": "GEC_00316.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "atLeastCountMultiSelect": {
                        "minCount": 1,
                        "attributes": [
                            { "in": ["GEC_00316_13a.1", ["Seniority", "Function"]] }
                        ]
                    }
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses the proportion of its total direct operations workforce for each employee category by age group."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },


    {
        "dpCode": "GEC_00317",
        "at_code": "GEC_00317.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "atLeastCountMultiSelect": {
                        "minCount": 1,
                        "attributes": [
                            { "in": ["GEC_00317_13b.1", ["Seniority", "Function"]] }
                        ]
                    }
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses the proportion of its total direct operations workforce for each employee category by gender."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00319",
        "at_code": "GEC_00319.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "atLeastCountMultiSelect": {
                        "minCount": 1,
                        "attributes": [
                            { "in": ["GEC_00319_13c.1", ["Seniority", "Function"]] }
                        ]
                    }
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses the proportion of its total direct operations workforce for each employee category by race or ethnicity."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00320",
        "at_code": "GEC_00320.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        { "equals": ["GEC_00320_14a.1", "All locations of operation"] },
                        {
                            "and": [
                                {
                                    "or": [
                                        {
                                            "atLeastCountMultiSelect": {
                                                "minCount": 2,
                                                "attributes": [
                                                    { "in": ["GEC_00320_14a.2", ["In its own operations", "In its value chain"]] }
                                                ]
                                            }
                                        },
                                        { "equals": ["GEC_00320_14a.2", "In its supply chain"] }
                                    ]
                                },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00320_14a.3", ["Policy Document", "Policy webpage"]] }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement committing it to gender equality and women's empowerment."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant policy disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00321",
        "at_code": "GEC_00321.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "atLeastCountMultiSelect": {
                        "minCount": 1,
                        "attributes": [
                            { "in": ["GEC_00321_14b.1", ["Representation", "Gender pay gap", "Health and well-being", "Violence and harassment", "Other"]] }
                        ]
                    }
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses one or more time-bound targets on gender equality and women’s empowerment."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00354",
        "at_code": "GEC_00354.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "equals": ["GEC_00354_14c.1", "Yes"]
                },
                "elementScoreName": "Met",
                "externalComment": "The company maintains a gender balance (between 40-60%) at the highest governance body."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },


    {
        "dpCode": "GEC_00323",
        "at_code": "GEC_00323.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "atLeastCountMultiSelect": {
                        "minCount": 1,
                        "attributes": [
                            { "in": ["GEC_00323_14d.1", ["Seniority", "Function"]] }
                        ]
                    }
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses the ratio of the basic salary and remuneration of women to men in its total direct operations workforce for each employee category, by significant locations of operation."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00324",
        "at_code": "GEC_00324.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00324_15a.1", ["Policy Document", "Policy webpage"]] }
                                        ]
                                    }
                                },
                                {
                                    "or": [
                                        {
                                            "atLeastCountMultiSelect": {
                                                "minCount": 2,
                                                "attributes": [
                                                    { "in": ["GEC_00324_15a.3", ["Employees", "Customers"]] }
                                                ]
                                            }
                                        },
                                        { "equals": ["GEC_00324_15a.3", "All stakeholders"] },
                                        {
                                            "atLeastCountMultiSelect": {
                                                "minCount": 3,
                                                "attributes": [
                                                    { "in": ["GEC_00324_15a.3", ["All stakeholders", "Employees", "Customers"]] }
                                                ]
                                            }
                                        },
                                    ]
                                },
                                { "equals": ["GEC_00324_15a.4", "All operations"] }
                            ]
                        },
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00324_15a.2", ["Policy Document", "Policy webpage"]] }
                                        ]
                                    }
                                },
                                {
                                    "or": [
                                        {
                                            "atLeastCountMultiSelect": {
                                                "minCount": 2,
                                                "attributes": [
                                                    { "in": ["GEC_00324_15a.3", ["Employees", "Customers"]] }
                                                ]
                                            }
                                        },
                                        { "equals": ["GEC_00324_15a.3", "All stakeholders"] },
                                        {
                                            "atLeastCountMultiSelect": {
                                                "minCount": 3,
                                                "attributes": [
                                                    { "in": ["GEC_00324_15a.3", ["All stakeholders", "Employees", "Customers"]] }
                                                ]
                                            }
                                        },
                                    ]
                                },
                                { "equals": ["GEC_00324_15a.4", "All operations"] }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a public commitment to protecting personal data.  "
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00325",
        "at_code": "GEC_00325.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 1,
                                "attributes": [
                                    { "in": ["GEC_00325_15b.1", ["Policy Document", "Policy webpage"]] }
                                ]
                            }
                        },
                        { "equals": ["GEC_00325_15b.2", "All operations"] },
                        {
                            "or": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 2,
                                        "attributes": [
                                            { "in": ["GEC_00325_15b.3", ["Employees", "Customers"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00325_15b.3", "All stakeholders"] },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 3,
                                        "attributes": [
                                            { "in": ["GEC_00325_15b.3", ["All stakeholders", "Employees", "Customers"]] }
                                        ]
                                    }
                                },
                            ]
                        },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 3,
                                "attributes": [
                                    { "in": ["GEC_00325_15b.4", ["Disclose the types of user information it collects", "Disclose the types of third parties that user information is shared with", "Allow a user to retrieve a copy of user information it collects"]] }
                                ]
                            }
                        },
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a global publicly available privacy statement in relation to the collection, sharing and access to personal data."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },


    {
        "dpCode": "GEC_00326",
        "at_code": "GEC_00326.2",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00326_16a.1", ["Policy Document", "Policy webpage"]] }
                                        ]
                                    }
                                },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 4,
                                        "attributes": [
                                            { "in": ["GEC_00326_16a.2", ["Tax oversight/governance", "Tax risk management", "Financial/tax auditing processes", "Approach to dealing with tax authorities"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00326_16a.3", "All locations"] },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00326_16a.4",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00326_16a.4",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        { "equals": ["GEC_00326_16a.4", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available global tax strategy, which is approved by the highest governance body."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00327",
        "at_code": "GEC_00327.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        { "equals": ["GEC_00326_16a.4", "Yes"] },
                        { "equals": ["GEC_00327_16b.1", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available global tax strategy, which is approved by the highest governance body."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00328",
        "at_code": "GEC_00328.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        { "equals": ["GEC_00327_16a.4", "Yes"] },
                        {
                            "and": [
                                { "equals": ["GEC_00328_16c.1", "Yes"] },
                                {
                                    "and": [
                                        {
                                            "and": [
                                                {
                                                    "or": [
                                                        {
                                                            "equals": [
                                                                "GEC_00328_16c.3",
                                                                "No"
                                                            ]
                                                        },
                                                        {
                                                            "equals": [
                                                                "GEC_00328_16c.3",
                                                                "NA"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "or": [
                                                        {
                                                            "equals": [
                                                                "GEC_00328_16c.4",
                                                                "No"
                                                            ]
                                                        },
                                                        {
                                                            "equals": [
                                                                "GEC_00328_16c.4",
                                                                "NA"
                                                            ]
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "and": [
                                                { "equals": ["GEC_00328_16c.3", "Yes"] },
                                                { "equals": ["GEC_00328_16c.4", "Yes"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company clearly discloses the amount of corporate income tax paid for each tax jurisdiction where the company is a resident for tax purposes."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00329",
        "at_code": "GEC_00329.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00329_17a.1", ["Policy Document", "Policy webpage"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00329_17a.4", "All operations"] },
                                {
                                    "and": [
                                        { "equals": ["GEC_00329_17a.2", "Yes"] },
                                        { "equals": ["GEC_00329_17a.3", "Yes"] }
                                    ]
                                }
                            ]
                        },
                        { "equals": ["GEC_00329_17a.5", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement prohibiting bribery and corruption."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00330",
        "at_code": "GEC_00330.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        { "equals": ["GEC_00330_17b.1", "Yes"] },
                        { "equals": ["GEC_00330_17b.2", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company describes the process(es) to identify its bribery and corruption risks and impacts in specific locations or activities covering its own operations."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00331",
        "at_code": "GEC_00331.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "or": [
                        { "equals": ["GEC_00331_17c.1", "Yes"] },
                        { "equals": ["GEC_00331_17c.2", "Yes"] },
                        { "equals": ["GEC_00331_17c.3", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company includes anti-bribery and anti-corruption clauses in its contracts with business relationships."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },

    {
        "dpCode": "GEC_00332",
        "at_code": "GEC_00332.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 4,
                                "attributes": [
                                    { "in": ["GEC_00332_17d.1", ["All stakeholders", "All aspects of bribery and corruption", "Anonymous", "Non-anonymous"]] }
                                ]
                            }
                        },
                        { "equals": ["GEC_00332_17d.2", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company indicates that it has a confidential and anonymous channel/mechanism accessible to all stakeholders to raise bribery and corruption concerns and complaints without fear of reprisals."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },


    {
        "dpCode": "GEC_00333",
        "at_code": "GEC_00333.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "and": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            { "in": ["GEC_00333_18a.1", ["Policy Document", "Policy webpage"]] }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00333_18a.1", "All locations of operation"] }
                            ]
                        },
                        {
                            "atLeastCountMultiSelect": {
                                "minCount": 2,
                                "attributes": [
                                    {
                                        "in": ["GEC_00333_18a.2", [
                                            "The types or ways the company engages politically",
                                            "The topics/issues covered in the company's political engagement",
                                            "The basis or intention of the company's political engagement",
                                            "The internal authorisation process or policies that must be followed to engage politically",
                                            "Whether personal political engagement is prohibited/restricted",
                                            "The types of stakeholders who the company engages with politically",
                                            "Internal management or oversight of political engagement",
                                            "Legal and reporting compliance around political engagement",
                                            "Political contributions and exceptions to it",
                                            "Political affiliation or neutrality"
                                        ]] }
                                ]
                            }
                        },
                        
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company has a publicly available policy statement(s) (or policy(ies) setting out its lobbying and political engagement approach."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00787",
        "at_code": "GEC_00787.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "equals": ["GEC_00787_18b.5", "Yes"]
                },
                "elementScoreName": "Not Applicable",
                "externalComment": "The company states that it is illegal for it to make direct political contributions."
            },
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 4,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00787_18b.1", [
                                                    "Direct",
                                                    "Financial",
                                                    "By country/location",
                                                    "All locations"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00787_18b.2", "Yes"] },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00787_18b.3",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00787_18b.3",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00787_18b.4",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00787_18b.4",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            "and": [
                                { "equals": ["GEC_00787_18b.3", "Yes"] },
                                { "equals": ["GEC_00787_18b.4", "Yes"] }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses the total monetary value of financial and in-kind political contributions made directly by the organization by country and recipient/beneficiary or meets the condition if both GEC_00787_18b.3 and GEC_00787_18b.4 are 'Yes'."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00788",
        "at_code": "GEC_00788.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "equals": ["GEC_00788_18c.10", "Yes"]
                },
                "elementScoreName": "Not Applicable",
                "externalComment": "The company states that it is illegal for it to make direct political contributions."
            },
            {
                "logicSyntax": {
                    "or": [
                        {
                            "and": [
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 4,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00788_18c.1", [
                                                    "Indirect",
                                                    "Financial",
                                                    "By country/location",
                                                    "Covering all locations"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00788_18c.2", [
                                                    "Internal lobbying activities (i.e. inhouse lobbyists)",
                                                    "External lobbying activities (i.e. through intermediary organisations)"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                { "equals": ["GEC_00788_18c.3", "All names of the trade associations (or equivalent bodies) it is a member of"] },
                                { "equals": ["GEC_00788_18c.4", "All membership fees by trade association"] },
                                {
                                    "atLeastCountMultiSelect": {
                                        "minCount": 1,
                                        "attributes": [
                                            {
                                                "in": ["GEC_00788_18c.5", [
                                                    "Through an intermediary organisation such as a lobbyist or charity?",
                                                    "To support an organisation such as a think tank or trade association",
                                                    "To support particular political parties or causes but are not made directly to political parties, candidates or elected representatives"
                                                ]]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00788_18c.6",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00788_18c.6",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00788_18c.7",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00788_18c.7",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00788_18c.8",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00788_18c.8",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "or": [
                                        {
                                            "equals": [
                                                "GEC_00788_18c.9",
                                                "No"
                                            ]
                                        },
                                        {
                                            "equals": [
                                                "GEC_00788_18c.9",
                                                "NA"
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            "and": [
                                { "equals": ["GEC_00788_18c.6", "Yes"] },
                                { "equals": ["GEC_00788_18c.7", "Yes"] },
                                { "equals": ["GEC_00788_18c.8", "Yes"] },
                                { "equals": ["GEC_00788_18c.9", "Yes"] }
                            ]
                        }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company discloses the total monetary value of financial and in-kind political contributions made indirectly by the organization by country and recipient/beneficiary, including its lobbying expenses."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    },
    {
        "dpCode": "GEC_00336",
        "at_code": "GEC_00336.1",
        "elementScoreLogic": [
            {
                "logicSyntax": {
                    "equals": ["GEC_00336_18d.4", "Yes"]
                },
                "elementScoreName": "Not Applicable",
                "externalComment": "The company states that it is illegal for it to make direct political contributions."
            },
            {
                "logicSyntax": {
                    "or": [
                        { "equals": ["GEC_00336_18d.1", "Yes"] },
                        { "equals": ["GEC_00336_18d.2", "Yes"] },
                        { "equals": ["GEC_00336_18d.3", "Yes"] }
                    ]
                },
                "elementScoreName": "Met",
                "externalComment": "The company requires third-party lobbyists to comply with its lobbying and political engagement policy (or policies)."
            },
            {
                "elementScoreName": "Unmet",
                "externalComment": "No relevant disclosure was found for the element."
            }
        ],
    }

]