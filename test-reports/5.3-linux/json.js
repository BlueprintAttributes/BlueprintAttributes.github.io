const json = {
    "devices": [
        {
            "deviceName": "b0d9ebbfb7a9",
            "instance": "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD",
            "platform": "LinuxEditor",
            "oSVersion": "Ubuntu 22.04.2 LTS 5.15.146.1-microsoft-standard-WSL2",
            "model": "Default",
            "gPU": "UnknownVendor",
            "cPUModel": "AMD Ryzen 9 7950X 16-Core Processor",
            "rAMInGB": 31,
            "renderMode": "SM5",
            "rHI": "",
            "appInstanceLog": ""
        }
    ],
    "reportCreatedOn": "2024.03.18-14.58.17",
    "succeeded": 35,
    "succeededWithWarnings": 2,
    "failed": 0,
    "notRun": 0,
    "inProcess": 0,
    "totalDuration": 1.3776391744613647,
    "comparisonExported": false,
    "comparisonExportDirectory": "",
    "tests": [
        {
            "testDisplayName": "should update all K2 Nodes with a FGameplayAttribute Pin parameter",
            "fullTestPath": "BlueprintAttributes.Editor.GBAEditorSubsystem.Handle K2Nodes on Attribute rename.should update all K2 Nodes with a FGameplayAttribute Pin parameter",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.0841791182756424,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Warning",
                        "message": "LogAbilitySystem: FGameplayAttribute::PostSerialize called on an invalid attribute with owner GBA_Reff_Test_C and name Ref_012. (Asset: /BlueprintAttributesTests/Fixtures/GBAEditorSubsystem/GBA_Reff_Test.Default__GBA_Reff_Test_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": 0,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Renaming attribute from Ref_01 to Renamed_Ref_01 in GBA_Reff_Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiers - InEffectCDO: Default__GE_Referencer2_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Ref_01, InNewPropertyName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiersBackingAttribute - InEffectCDO: Default__GE_Referencer2_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Ref_01, InNewPropertyName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Warning",
                        "message": "LogAbilitySystem: FGameplayAttribute::PostSerialize called on an invalid attribute with owner GBA_Reff_Test_C and name GE_Test_123. (Asset: /BlueprintAttributesTests/Fixtures/GBAEditorSubsystem/GE_Referencer.Default__GE_Referencer_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": 0,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiers - InEffectCDO: Default__GE_Referencer_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Ref_01, InNewPropertyName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiersBackingAttribute - InEffectCDO: Default__GE_Referencer_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Ref_01, InNewPropertyName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: Blueprint compiled successfully (GBA_Reff_Test)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Check Blueprint: GBA_Reff_Test",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LastEditedUberGraph: EventGraph",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Graphs: 4",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Nodes: 4",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Node: K2Node_CallFunction_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Pin: Attribute, PackageName: /BlueprintAttributesTests/Fixtures/GBAEditorSubsystem/GBA_Reff_Test, AttributeName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Node: K2Node_CallFunction_4",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Pin: Attribute, PackageName: /BlueprintAttributesTests/Fixtures/GBAEditorSubsystem/GBA_Reff_Test, AttributeName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Node: K2Node_CallFunction_2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Pin: Attribute, PackageName: /BlueprintAttributesTests/Fixtures/GBAEditorSubsystem/GBA_Reff_Test, AttributeName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Node: K2Node_CallFunction_3",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "\t Pin: Attribute, PackageName: /BlueprintAttributesTests/Fixtures/GBAEditorSubsystem/GBA_Reff_Test, AttributeName: Renamed_Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Restore GBA_Reff_Test BP to original state",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiers - InEffectCDO: Default__GE_Referencer2_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Renamed_Ref_01, InNewPropertyName: Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiersBackingAttribute - InEffectCDO: Default__GE_Referencer2_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Renamed_Ref_01, InNewPropertyName: Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiers - InEffectCDO: Default__GE_Referencer_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Renamed_Ref_01, InNewPropertyName: Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: UpdateModifiersBackingAttribute - InEffectCDO: Default__GE_Referencer_C, InBlueprint: GBA_Reff_Test, InOldPropertyName: Renamed_Ref_01, InNewPropertyName: Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogBlueprintAttributesEditor: Blueprint compiled successfully (GBA_Reff_Test)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.05"
                }
            ],
            "warnings": 2,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::ClampAttributeValue()",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::ClampAttributeValue()",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.12853743135929108,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Warning",
                        "message": "LogAbilitySystem: No GameplayCueNotifyPaths were specified in DefaultGame.ini under [/Script/GameplayAbilities.AbilitySystemGlobals]. Falling back to using all of /Game/. This may be slow on large projects. Consider specifying which paths are to be searched.",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": 0,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 99.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 25.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with -99.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                }
            ],
            "warnings": 1,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should return same name when name is without trailing _C",
            "fullTestPath": "BlueprintAttributes.Editor.GBAEditorSettings.GBAEditorSettings::IsAttributeFiltered().should return same name when name is without trailing _C",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.01143594179302454,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::GetActorInfo()",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::GetActorInfo()",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.0245797298848629,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "ActorInfo AvatarActor: BP_Attributes_Test_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "ActorInfo OwnerActor: BP_Attributes_Test_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "ActorInfo AbilitySystemComponent: AbilitySystemComponent",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "ActorInfo SkeletalMeshComponent: CharacterMesh0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "ActorInfo AnimInstance: None",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "ActorInfo MovementComponent: CharMoveComp",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TestActor AnimInstance: TutorialTPP_AnimBlueprint_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TestActor CharacterMovementComponent: CharMoveComp",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::GetAttributeValue()",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::GetAttributeValue()",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.02990027517080307,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::GetOwningAbilitySystemComponent()",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::GetOwningAbilitySystemComponent()",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.024348953738808632,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "OwningASC: AbilitySystemComponent",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::GetOwningActor()",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::GetOwningActor()",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.02233228087425232,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "OwningActor: BP_Attributes_Test_Character_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::InitFromMetaDataTable",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::InitFromMetaDataTable",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.02270370163023472,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Endurance for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Strength for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Dexterity for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Intelligence for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Faith for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Luck for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Endurance for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Strength for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Dexterity for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Intelligence for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Faith for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Luck for equality with 12.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::PostAttributeBaseChange",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::PostAttributeBaseChange",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.020968619734048843,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Vitality is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Endurance is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Strength is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Dexterity is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Intelligence is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Faith is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Luck is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Stats_Init_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Stats_Init.GE_Test_Stats_Init_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Vitality was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Endurance was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Strength was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Dexterity was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Intelligence was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Faith was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeBaseChange_Luck was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.07"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::PostAttributeChange",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::PostAttributeChange",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.020953938364982605,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Vitality is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Endurance is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Strength is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Dexterity is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Intelligence is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Faith is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Luck is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: 0.000000 (Base: 0.000000) - Vitality",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: 0.000000 (Base: 0.000000) - Endurance",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: 0.000000 (Base: 0.000000) - Strength",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: 0.000000 (Base: 0.000000) - Dexterity",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: 0.000000 (Base: 0.000000) - Intelligence",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: 0.000000 (Base: 0.000000) - Faith",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: 0.000000 (Base: 0.000000) - Luck",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Stats_Init_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Stats_Init.GE_Test_Stats_Init_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - Vitality",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - Endurance",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - Strength",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - Dexterity",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - Intelligence",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - Faith",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - Luck",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Vitality was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Endurance was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Strength was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Dexterity was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Intelligence was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Faith was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostAttributeChange_Luck was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::PostGameplayEffectExecute",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::PostGameplayEffectExecute",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.021002890542149544,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Vitality is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Endurance is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Strength is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Dexterity is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Intelligence is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Faith is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Luck is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Stats_Init_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Stats_Init.GE_Test_Stats_Init_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Vitality was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Endurance was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Strength was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Dexterity was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Intelligence was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Faith was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PostGameplayEffectExecute_Luck was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::PreAttributeBaseChange",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::PreAttributeBaseChange",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.020245034247636795,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Vitality is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Endurance is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Strength is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Dexterity is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Intelligence is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Faith is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Luck is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Stats_Init_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Stats_Init.GE_Test_Stats_Init_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Vitality was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Endurance was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Strength was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Dexterity was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Intelligence was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Faith was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeBaseChange_Luck was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.08"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::PreAttributeChange",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::PreAttributeChange",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.02063538134098053,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Vitality is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Endurance is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Strength is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Dexterity is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Intelligence is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Faith is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Luck is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Stats_Init_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Stats_Init.GE_Test_Stats_Init_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Vitality was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Endurance was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Strength was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Dexterity was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Intelligence was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Faith was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreAttributeChange_Luck was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::PreGameplayEffectExecute",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::PreGameplayEffectExecute",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.021407239139080048,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Vitality is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Endurance is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Strength is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Dexterity is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Intelligence is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Faith is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Luck is invalid as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Stats_Init_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Stats_Init.GE_Test_Stats_Init_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Vitality was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Endurance was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Strength was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Dexterity was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Intelligence was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Faith was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking storage for PreGameplayEffectExecute_Luck was set as expected",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "UGBAAttributeSetBlueprintBase::SetAttributeValue()",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.API.UGBAAttributeSetBlueprintBase::SetAttributeValue()",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.02177213877439499,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 99.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 9001.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have attributes clamped after Gameplay Effect application",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping (Attribute Based - Health).should have attributes clamped after Gameplay Effect application",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.1472644805908203,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute MinHealth for equality with -20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute MaxHealth for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with -20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with -20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 5.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 10.000000 (Base: 10.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 15.000000 (Base: 15.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 15.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 20.000000 (Base: 20.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 25.000000 (Base: 25.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 25.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 30.000000 (Base: 30.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 30.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 35.000000 (Base: 35.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 35.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 40.000000 (Base: 40.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 40.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 45.000000 (Base: 45.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 45.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 50.000000 (Base: 50.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 50.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 55.000000 (Base: 55.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 55.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 60.000000 (Base: 60.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 60.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 65.000000 (Base: 65.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 65.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 70.000000 (Base: 70.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 70.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 75.000000 (Base: 75.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 75.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.09"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Health for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.10"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have attributes clamped after Gameplay Effect application",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping (Attribute Based - Mana).should have attributes clamped after Gameplay Effect application",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.1435161530971527,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute MaxMana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with -100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with -200.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 5.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 10.000000 (Base: 10.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 15.000000 (Base: 15.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 15.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 20.000000 (Base: 20.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 25.000000 (Base: 25.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 25.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 30.000000 (Base: 30.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 30.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 35.000000 (Base: 35.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 35.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 40.000000 (Base: 40.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 40.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 45.000000 (Base: 45.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 45.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 50.000000 (Base: 50.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 50.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 55.000000 (Base: 55.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 55.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 60.000000 (Base: 60.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 60.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 65.000000 (Base: 65.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 65.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 70.000000 (Base: 70.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 70.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 75.000000 (Base: 75.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 75.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 85.000000 (Base: 85.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 85.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 90.000000 (Base: 90.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 90.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 95.000000 (Base: 95.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 95.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 100.000000 (Base: 100.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 105.000000 (Base: 105.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 105.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 110.000000 (Base: 110.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 110.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 115.000000 (Base: 115.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 115.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Mana for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.11"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have attributes clamped after Gameplay Effect application",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping (Attribute Based - Score).should have attributes clamped after Gameplay Effect application",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.14320586621761322,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute MinScore for equality with 20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 25.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 30.000000 (Base: 30.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 30.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 35.000000 (Base: 35.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 35.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 40.000000 (Base: 40.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 40.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 45.000000 (Base: 45.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 45.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 50.000000 (Base: 50.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 50.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 55.000000 (Base: 55.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 55.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 60.000000 (Base: 60.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 60.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 65.000000 (Base: 65.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 65.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 70.000000 (Base: 70.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 70.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 75.000000 (Base: 75.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 75.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 85.000000 (Base: 85.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 85.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 90.000000 (Base: 90.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 90.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 95.000000 (Base: 95.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 95.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 100.000000 (Base: 100.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 105.000000 (Base: 105.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 105.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 110.000000 (Base: 110.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 110.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 115.000000 (Base: 115.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 115.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 120.000000 (Base: 120.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 120.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 125.000000 (Base: 125.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 125.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 130.000000 (Base: 130.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 130.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 135.000000 (Base: 135.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 135.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 140.000000 (Base: 140.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 140.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 145.000000 (Base: 145.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 145.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 150.000000 (Base: 150.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 150.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 155.000000 (Base: 155.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 155.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 160.000000 (Base: 160.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 160.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 165.000000 (Base: 165.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 165.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 170.000000 (Base: 170.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 170.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 175.000000 (Base: 175.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 175.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 180.000000 (Base: 180.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 180.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 185.000000 (Base: 185.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 185.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 190.000000 (Base: 190.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 190.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 195.000000 (Base: 195.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 195.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 200.000000 (Base: 200.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 200.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 205.000000 (Base: 205.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 205.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 210.000000 (Base: 210.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 210.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 215.000000 (Base: 215.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 215.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 220.000000 (Base: 220.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 220.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 225.000000 (Base: 225.000000) - Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Score for equality with 225.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.12"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have attributes clamped after Gameplay Effect application",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping (Attribute Based - Stamina).should have attributes clamped after Gameplay Effect application",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.1435026079416275,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute MaxStamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with -100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with -200.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 5.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 10.000000 (Base: 10.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 15.000000 (Base: 15.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 15.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 20.000000 (Base: 20.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 20.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 25.000000 (Base: 25.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 25.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 30.000000 (Base: 30.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 30.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 35.000000 (Base: 35.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 35.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 40.000000 (Base: 40.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 40.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 45.000000 (Base: 45.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 45.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 50.000000 (Base: 50.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 50.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 55.000000 (Base: 55.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 55.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 60.000000 (Base: 60.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 60.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 65.000000 (Base: 65.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 65.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 70.000000 (Base: 70.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 70.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 75.000000 (Base: 75.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 75.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after tick Current: 80.000000 (Base: 80.000000) - Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Stamina for equality with 80.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.13"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "has attributes meta map initialized",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping (via DataTable or Clamped Struct Defaults).has attributes meta map initialized",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.029237287119030952,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have attributes clamped after Gameplay Effect application",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping (via DataTable or Clamped Struct Defaults).should have attributes clamped after Gameplay Effect application",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.029976660385727882,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestDTClamp for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestBoth for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestClampedAttribute for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestNotClamped for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Clamped_Substract_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Clamped_Substract.GE_Test_Clamped_Substract_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestDTClamp for equality with -100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestBoth for equality with -10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestClampedAttribute for equality with -10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestNotClamped for equality with -10000.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value before GE Current: -10.000000 (Base: -10.000000) - TestClampedAttribute",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Applying effect GE_Test_Clamped_Add_C (/BlueprintAttributesTests/Fixtures/GBAAttributeSetBlueprintBase_Spec/GE_Test_Clamped_Add.GE_Test_Clamped_Add_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Value after GE Current: 10.000000 (Base: 10.000000) - TestClampedAttribute",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestDTClamp for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestBoth for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestClampedAttribute for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestNotClamped for equality with 90000.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have base value clamped after DT initialization",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping (via DataTable or Clamped Struct Defaults).should have base value clamped after DT initialization",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.022597484290599823,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestDTClamp for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestBoth for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestDTClampMin0Value for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestClampedAttribute for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestNotClamped for equality with 0.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestClampedAttributeOnInit for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.14"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "Should clamp property even with DataTable BaseValue higher (and without valid clamp range)",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Clamping.Clamping clamped property and datatable without valid clamping props.Should clamp property even with DataTable BaseValue higher (and without valid clamp range)",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.022006351500749588,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute TestClampedAttributeOnInit_02 for equality with 100.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have Attributes values initialized to 0",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Sanity Check.should have Attributes values initialized to 0",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.022753126919269562,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Endurance",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Strength",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Dexterity",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Intelligence",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Faith",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Luck",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have AttributeSet granted and initialized",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Sanity Check.should have AttributeSet granted and initialized",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.023335477337241173,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have value changed after application of override instant GE",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Sanity Check.should have value changed after application of override instant GE",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.02279810793697834,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Vitality for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Endurance for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Strength for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Dexterity for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Intelligence for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Faith for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Checking Attribute Luck for equality with 10.000000",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should spawned actor be initialized with an AbilitySystemComponent",
            "fullTestPath": "BlueprintAttributes.GBAAttributeSetBlueprintBase.Sanity Check.should spawned actor be initialized with an AbilitySystemComponent",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.023621732369065285,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Before Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "After Each ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.15"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "returns \"none\" empty on invalid attribute",
            "fullTestPath": "BlueprintAttributes.GBABlueprintLibrary.GBABlueprintLibrary::GetDebugStringFromAttribute().returns \"none\" empty on invalid attribute",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.011105228215456009,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "returns attribute name",
            "fullTestPath": "BlueprintAttributes.GBABlueprintLibrary.GBABlueprintLibrary::GetDebugStringFromAttribute().returns attribute name",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.011070157401263714,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "Test stuff",
            "fullTestPath": "BlueprintAttributes.GBASandbox.GBASandbox.Test stuff",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.010908103547990322,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: UberGraphFrame",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: Vitality",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: Endurance",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: Strength",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: Dexterity",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: Intelligence",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: Faith",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Prop: Luck",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "returns all attribute properties",
            "fullTestPath": "BlueprintAttributes.GBAUtils.GBAUtils::GetAllAttributeProperties().returns all attribute properties",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.011121279560029507,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: AbilitySystemComponent.OutgoingDuration",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: AbilitySystemComponent.IncomingDuration",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.Ref_01",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.Ref_02",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.Test_Ref",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.Test_Ref2",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.😜 NewName 😜",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.CCCC",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.GE_Test_12",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Reff_Test_C.BB",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Stats_C.Vitality",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Stats_C.Endurance",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Stats_C.Strength",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Stats_C.Dexterity",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Stats_C.Intelligence",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Stats_C.Faith",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Stats_C.Luck",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_HealthSet_C.Health",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_HealthSet_C.MinHealth",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_HealthSet_C.MaxHealth",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_ManaSet_C.Mana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_ManaSet_C.MaxMana",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_ScoreSet_C.Score",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_ScoreSet_C.MinScore",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_StaminaSet_C.Stamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_StaminaSet_C.MaxStamina",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Clamping_C.TestDTClamp",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Clamping_C.TestClampedAttribute",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Clamping_C.TestBoth",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Clamping_C.TestNotClamped",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Clamping_C.TestDTClampMin0Value",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Clamping_C.TestClampedAttributeOnInit",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Found property: GBA_Test_Clamping_C.TestClampedAttributeOnInit_02",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should return same name when name is without trailing _C",
            "fullTestPath": "BlueprintAttributes.GBAUtils.GBAUtils::GetAttributeClassName().should return same name when name is without trailing _C",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.010687749832868576,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should strip out _C from the end of a class name",
            "fullTestPath": "BlueprintAttributes.GBAUtils.GBAUtils::GetAttributeClassName().should strip out _C from the end of a class name",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.011096457950770855,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should strip out _C from the end of a class name (BP Loaded class)",
            "fullTestPath": "BlueprintAttributes.GBAUtils.GBAUtils::GetAttributeClassName().should strip out _C from the end of a class name (BP Loaded class)",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.011158298701047897,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Test with GBA_AttributeSetsUtils_Test_C loaded BP class",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.16"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should return false for non Attribute Sets derived classes",
            "fullTestPath": "BlueprintAttributes.GBAUtils.GBAUtils::IsValidAttributeClass().should return false for non Attribute Sets derived classes",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.010443385690450668,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should return true for BP Attribute Sets",
            "fullTestPath": "BlueprintAttributes.GBAUtils.GBAUtils::IsValidAttributeClass().should return true for BP Attribute Sets",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.010517287068068981,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Test with GBA_AttributeSetsUtils_Test_C loaded BP class",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2024.03.18-14.58.17"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should return true for regular Attribute Sets",
            "fullTestPath": "BlueprintAttributes.GBAUtils.GBAUtils::IsValidAttributeClass().should return true for regular Attribute Sets",
            "state": "Success",
            "deviceInstance": [
                "b0d9ebbfb7a9-0D3F0905BEAD41BEA72B79C4179670AB-FB7C72DD0B6F495F9668687F04CFBDBD"
            ],
            "duration": 0.010713612660765648,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        }
    ]
};
