# Kinetiqx ApiGateway

> Version v1

N/A

## Path Table

| Method | Path | Description |
| --- | --- | --- |
| GET | [/api/admin/datasource/{datasourceKey}/remote-action](#getapiadmindatasourcedatasourcekeyremote-action) |  |
| GET | [/api/admin/invitation-code](#getapiadmininvitation-code) | Get a list of all the invitations codes
Status = requested, approved, activated |
| PUT | [/api/admin/invitation-code/{invitationCodeId}/send](#putapiadmininvitation-codeinvitationcodeidsend) | Approves a invitation code. |
| POST | [/api/admin/system-user](#postapiadminsystem-user) | Creates a system user.
UserType can be one of the System User Types: 
SuperAdmin = 1, ITAdmin = 2, ChiefSecurityOfficer = 3, SystemAdmin = 4, TechnicalSupport = 5, CustomerSupport = 6 |
| GET | [/api/admin/system-user/{id}](#getapiadminsystem-userid) | Get the specific system user profile information. |
| PUT | [/api/admin/system-user/{id}](#putapiadminsystem-userid) | Update specific system user profile information. |
| DELETE | [/api/admin/system-user/{id}](#deleteapiadminsystem-userid) | Delete specific system user. |
| GET | [/api/admin/system-users](#getapiadminsystem-users) | Query system users. |
| POST | [/api/admin/tenant](#postapiadmintenant) | Creates a tenant. |
| GET | [/api/admin/tenant/{id}](#getapiadmintenantid) | Get specific tenant information. |
| PUT | [/api/admin/tenant/{id}](#putapiadmintenantid) | Update specific tenant information. |
| DELETE | [/api/admin/tenant/{id}](#deleteapiadmintenantid) | Delete specific tenant. |
| GET | [/api/admin/tenants](#getapiadmintenants) | Query tenants. |
| PUT | [/api/admin/tenant/{organizationId}/system-user/{id}/association](#putapiadmintenantorganizationidsystem-useridassociation) | Associate system user to tenant. |
| DELETE | [/api/admin/tenant/{organizationId}/system-user/{id}/association](#deleteapiadmintenantorganizationidsystem-useridassociation) | Disassociate system user from tenant. |
| GET | [/api/admin/tenant/{organizationId}/system-users](#getapiadmintenantorganizationidsystem-users) | Query associations with system users for specific tenant. |
| PUT | [/api/admin/tenant/{organizationId}/device/{deviceId}/association](#putapiadmintenantorganizationiddevicedeviceidassociation) | Associate device to tenant. |
| DELETE | [/api/admin/tenant/{organizationId}/device/{deviceId}/association](#deleteapiadmintenantorganizationiddevicedeviceidassociation) | Disassociate device from tenant. |
| GET | [/api/admin/tenant/{organizationId}/devices](#getapiadmintenantorganizationiddevices) | Query devices for specific tenant. |
| GET | [/api/admin/tenant/{organizationId}/users](#getapiadmintenantorganizationidusers) | Query users for specific tenant. |
| GET | [/api/admin/tenant/{organizationId}/user/{organizationUserId}](#getapiadmintenantorganizationiduserorganizationuserid) | Get user information. |
| GET | [/api/admin/tenant/{organizationId}/hcps](#getapiadmintenantorganizationidhcps) | Query HCPs for specific tenant. |
| POST | [/api/admin/tenant/{organizationId}/user/{organizationUserId}/impersonate](#postapiadmintenantorganizationiduserorganizationuseridimpersonate) | Impersonate user. |
| POST | [/api/admin/tenant/{organizationId}/datasource](#postapiadmintenantorganizationiddatasource) | Create datasource for specific tenant. |
| DELETE | [/api/admin/tenant/{organizationId}/datasource/{datasourceId}](#deleteapiadmintenantorganizationiddatasourcedatasourceid) | Delete datasource from tenant. |
| GET | [/api/admin/tenant/cloud-datasource-templates](#getapiadmintenantcloud-datasource-templates) |  |
| GET | [/api/admin/tenant/cloud-datasource-templates/ids](#getapiadmintenantcloud-datasource-templatesids) |  |
| GET | [/api/admin/tenant/cloud-datasource-templates/{dataSourceTemplateId}](#getapiadmintenantcloud-datasource-templatesdatasourcetemplateid) |  |
| GET | [/api/admin/tenant/{organizationId}/datasources](#getapiadmintenantorganizationiddatasources) | Query datasources for specific tenant. |
| PUT | [/api/admin/tenant/{organizationId}/datasource/{datasourceKey}](#putapiadmintenantorganizationiddatasourcedatasourcekey) | Associates the datasource to a tenant |
| POST | [/api/admin/tenant/{organizationId}/user/{organizationUserId}/send-confirmation-email](#postapiadmintenantorganizationiduserorganizationuseridsend-confirmation-email) | Resend invitation email for user. |
| POST | [/api/admin/tenant/{organizationId}/user/{organizationUserId}/request-password-reset](#postapiadmintenantorganizationiduserorganizationuseridrequest-password-reset) | Request password reset |
| GET | [/api/admin/tenant/{organizationId})/rate-limits](#getapiadmintenantorganizationidrate-limits) |  |
| GET | [/api/common/user-tenants](#getapicommonuser-tenants) | Get a list of tenants the current user is associated with |
| GET | [/api/common/info](#getapicommoninfo) | Get the system translations and current user id, type and permissions |
| HEAD | [/api/common/tenant/{name}/exists](#headapicommontenantnameexists) | Verifies if a tenant exists by its name |
| HEAD | [/api/common/user/email/{email}/exists](#headapicommonuseremailemailexists) | Checks if user exists by specific email. |
| HEAD | [/api/common/user/username/{username}/exists](#headapicommonuserusernameusernameexists) | Checks if user exists by specific username. |
| POST | [/api/common/application/register](#postapicommonapplicationregister) | Creates the device for Physician or Patient user type. |
| POST | [/api/common/user/email/{email}/request-password-reset](#postapicommonuseremailemailrequest-password-reset) | Request password reset by user email. |
| OPTIONS | [/api/common/tenant/rate-limit](#optionsapicommontenantrate-limit) |  |
| OPTIONS | [/api/common/aggregation/filters](#optionsapicommonaggregationfilters) | Returns the intervals and types for aggregation. |
| POST | [/api/common/email/send](#postapicommonemailsend) |  |
| GET | [/api/config/datasources](#getapiconfigdatasources) |  |
| GET | [/api/config/global-parameters](#getapiconfigglobal-parameters) |  |
| HEAD | [/api/device/organization/{organizationId}/patient/{id}/association/exists](#headapideviceorganizationorganizationidpatientidassociationexists) |  |
| PUT | [/api/device/organization/{organizationId}/patient/{id}/association](#putapideviceorganizationorganizationidpatientidassociation) |  |
| DELETE | [/api/device/organization/{organizationId}/patient/{id}/association](#deleteapideviceorganizationorganizationidpatientidassociation) |  |
| POST | [/api/device/data](#postapidevicedata) | Upload a session of data. |
| GET | [/api/hcp](#getapihcp) | Gets the current physician user profile data. |
| PUT | [/api/hcp](#putapihcp) | Updates the current physician user profile data. |
| GET | [/api/hcp/patients](#getapihcppatients) | Query the patients for current physician. |
| GET | [/api/hcp/patient/{patientId}](#getapihcppatientpatientid) | Get the patient information associated to current physician. |
| GET | [/api/hcp/patient/{patientId}/values](#getapihcppatientpatientidvalues) | Query the parameter values for specific patient. |
| GET | [/api/hcp/patient/{patientId}/parameter-values-summary](#getapihcppatientpatientidparameter-values-summary) | Query Patient parameter values summary. |
| POST | [/api/hcp/patient/{organizationUserId}/data](#postapihcppatientorganizationuseriddata) | Save the parameter data for specific patient. |
| GET | [/api/hcp/datasources](#getapihcpdatasources) | Query all datasources for your tenant. |
| GET | [/api/hcp/datasource/{datasourceId}](#getapihcpdatasourcedatasourceid) | Get datasource for your tenant |
| GET | [/api/hcp/parameter-values-csv](#getapihcpparameter-values-csv) | Download the Parameter Values in Csv format |
| GET | [/api/hcp/aggregated-numeric-parameters](#getapihcpaggregated-numeric-parameters) |  |
| GET | [/api/hcp/patient/{organizationUserId}/values-binning](#getapihcppatientorganizationuseridvalues-binning) |  |
| GET | [/api/hcp/patient/{id}/parameters](#getapihcppatientidparameters) |  |
| POST | [/api/patient/data](#postapipatientdata) | Save parameters data for current patient. |
| GET | [/api/patient/values](#getapipatientvalues) | Query the parameter values for current patient. |
| GET | [/api/patient/values-binning](#getapipatientvalues-binning) |  |
| GET | [/api/patient/device/{serialNumber}/status](#getapipatientdeviceserialnumberstatus) | Get Device status for a Patient. |
| POST | [/api/patient/register-device](#postapipatientregister-device) |  |
| DELETE | [/api/patient/device/{id}](#deleteapipatientdeviceid) |  |
| GET | [/api/patient/datasources](#getapipatientdatasources) |  |
| GET | [/api/patient/datasources/{id}](#getapipatientdatasourcesid) |  |
| GET | [/api/patient/parameters](#getapipatientparameters) |  |
| GET | [/api/patient](#getapipatient) |  |
| PUT | [/api/patient](#putapipatient) |  |
| GET | [/api/patient/patient/devices](#getapipatientpatientdevices) |  |
| POST | [/api/register/tenant](#postapiregistertenant) | Register a tenant with a tenant admin based on an invitation code. |
| POST | [/api/register/request-invite](#postapiregisterrequest-invite) |  |
| GET | [/api/system-user](#getapisystem-user) | Returns the information for the system user that's making the request. |
| PUT | [/api/system-user](#putapisystem-user) | Updates the information of the system user that is making the request. |
| HEAD | [/api/tenant-admin/group/{name}/exists](#headapitenant-admingroupnameexists) | Check if group exists by name. |
| POST | [/api/tenant-admin/group](#postapitenant-admingroup) | Create group for your tenant. |
| PUT | [/api/tenant-admin/group/{id}](#putapitenant-admingroupid) | Update group by id. |
| DELETE | [/api/tenant-admin/group/{id}](#deleteapitenant-admingroupid) | Delete group. |
| GET | [/api/tenant-admin/groups](#getapitenant-admingroups) | Query the groups for your tenant. |
| PUT | [/api/tenant-admin/group/{groupId}/user/{organizationUserId}/member](#putapitenant-admingroupgroupiduserorganizationuseridmember) | Add user to a group. |
| DELETE | [/api/tenant-admin/group/{groupId}/user/{organizationUserId}/member](#deleteapitenant-admingroupgroupiduserorganizationuseridmember) | Remove user from group. |
| GET | [/api/tenant-admin/group/{groupId}/members](#getapitenant-admingroupgroupidmembers) | Query group members. |
| GET | [/api/tenant-admin/group/{groupId}/nonmembers](#getapitenant-admingroupgroupidnonmembers) | Query group non members. |
| POST | [/api/tenant-admin/hcp](#postapitenant-adminhcp) | Create an HCP. |
| POST | [/api/tenant-admin/hcp/{externalUserId}/invite](#postapitenant-adminhcpexternaluseridinvite) | Invite a HCP. |
| GET | [/api/tenant-admin/hcp/{id}](#getapitenant-adminhcpid) | Get HCP information. |
| PUT | [/api/tenant-admin/hcp/{id}](#putapitenant-adminhcpid) | Update UCP information. |
| DELETE | [/api/tenant-admin/hcp/{id}](#deleteapitenant-adminhcpid) | Delete an HCP. |
| GET | [/api/tenant-admin/hcps](#getapitenant-adminhcps) | Get a list of HCPs. |
| GET | [/api/tenant-admin/hcp/external](#getapitenant-adminhcpexternal) | Query extenal HCPs |
| PUT | [/api/tenant-admin/hcp/{id}/patient/{patientId}/association](#putapitenant-adminhcpidpatientpatientidassociation) | Associate Patient to HCP. |
| DELETE | [/api/tenant-admin/hcp/{id}/patient/{patientId}/association](#deleteapitenant-adminhcpidpatientpatientidassociation) | Disassociate Patient from HCP. |
| GET | [/api/tenant-admin/hcp/{id}/patients](#getapitenant-adminhcpidpatients) | Get a list of patients for an HCP |
| GET | [/api/tenant-admin/parameter-values](#getapitenant-adminparameter-values) | Query parameter values. |
| POST | [/api/tenant-admin/parameter-values](#postapitenant-adminparameter-values) |  |
| GET | [/api/tenant-admin/parameter-values-binning](#getapitenant-adminparameter-values-binning) |  |
| GET | [/api/tenant-admin/parameter-values-csv](#getapitenant-adminparameter-values-csv) | Download the Parameter Values in Csv format |
| GET | [/api/tenant-admin/parameter-values-summary](#getapitenant-adminparameter-values-summary) | Query parameter values summary report. |
| GET | [/api/tenant-admin/aggregated-numeric-parameters](#getapitenant-adminaggregated-numeric-parameters) |  |
| POST | [/api/tenant-admin/patient](#postapitenant-adminpatient) | Create a patient. |
| POST | [/api/tenant-admin/patient/{id}](#postapitenant-adminpatientid) | Create a patient with full profile information. |
| GET | [/api/tenant-admin/patient/{id}](#getapitenant-adminpatientid) | Get patient information. |
| PUT | [/api/tenant-admin/patient/{id}](#putapitenant-adminpatientid) | Update information for a patient |
| DELETE | [/api/tenant-admin/patient/{id}](#deleteapitenant-adminpatientid) | Delete a patient. |
| HEAD | [/api/tenant-admin/patient/{patientExternalId}/exists](#headapitenant-adminpatientpatientexternalidexists) | Check if a patient exists by external patient id. |
| GET | [/api/tenant-admin/patients](#getapitenant-adminpatients) | Get a list of patients. |
| GET | [/api/tenant-admin/patients/temporary](#getapitenant-adminpatientstemporary) | Query temporary patients. |
| GET | [/api/tenant-admin/patient/{id}/hcps](#getapitenant-adminpatientidhcps) | Query associated HCPs to patient. |
| PUT | [/api/tenant-admin/patient/{id}/device/{deviceId}/association](#putapitenant-adminpatientiddevicedeviceidassociation) | Associate a device to a patient. |
| DELETE | [/api/tenant-admin/patient/{id}/device/{deviceId}/association](#deleteapitenant-adminpatientiddevicedeviceidassociation) | Disassociate a device from a patient. |
| POST | [/api/tenant-admin/patient/{organizationUserId}/data](#postapitenant-adminpatientorganizationuseriddata) |  |
| POST | [/api/tenant-admin/datasource](#postapitenant-admindatasource) | Create datasource for tenant. |
| POST | [/api/tenant-admin/cloud-datasource](#postapitenant-admincloud-datasource) |  |
| GET | [/api/tenant-admin/datasources](#getapitenant-admindatasources) | Query all datasources for your tenant. |
| GET | [/api/tenant-admin/datasource/{datasourceId}](#getapitenant-admindatasourcedatasourceid) | Get datasource for your tenant. |
| DELETE | [/api/tenant-admin/datasource/{datasourceId}](#deleteapitenant-admindatasourcedatasourceid) | Delete a datasource for your tenant. |
| GET | [/api/tenant-admin/datasource/{datasourceKey}/remote-action](#getapitenant-admindatasourcedatasourcekeyremote-action) |  |
| PUT | [/api/tenant-admin/datasource/{datasourceKey}](#putapitenant-admindatasourcedatasourcekey) | Associates the datasource to a tenant |
| HEAD | [/api/tenant-admin/device/serialnumber/{serialNumber}/exists](#headapitenant-admindeviceserialnumberserialnumberexists) | Check if serial number exists. |
| GET | [/api/tenant-admin/device/{id}](#getapitenant-admindeviceid) | Get a device. |
| PUT | [/api/tenant-admin/device/{id}](#putapitenant-admindeviceid) | Update a device. |
| DELETE | [/api/tenant-admin/device/{id}](#deleteapitenant-admindeviceid) | Delete Device |
| GET | [/api/tenant-admin/devices](#getapitenant-admindevices) | Get a list of all the devices in the system |
| POST | [/api/tenant-admin/device](#postapitenant-admindevice) | Create device for your tenant. |
| PUT | [/api/tenant-admin/device/{id}/state/{state}](#putapitenant-admindeviceidstatestate) | Update device state. |
| GET | [/api/tenant-admin/device/{id}/certificate/generate](#getapitenant-admindeviceidcertificategenerate) |  |
| POST | [/api/tenant-admin/device/data](#postapitenant-admindevicedata) |  |
| POST | [/api/tenant-admin/tenant-user](#postapitenant-admintenant-user) | Create a tenant user. |
| GET | [/api/tenant-admin/tenant-user/{id}](#getapitenant-admintenant-userid) | Get the information for a tenant user. |
| PUT | [/api/tenant-admin/tenant-user/{id}](#putapitenant-admintenant-userid) | Update the information for a tenant user. |
| DELETE | [/api/tenant-admin/tenant-user/{id}](#deleteapitenant-admintenant-userid) | Delete a tenant user. |
| GET | [/api/tenant-admin/tenant-users](#getapitenant-admintenant-users) | Query tenant users. |
| GET | [/api/tenant-admin/tenant](#getapitenant-admintenant) | Get information for your tenant. |
| PUT | [/api/tenant-admin/tenant](#putapitenant-admintenant) | Update your tenant. |
| POST | [/api/tenant-admin/tenant/user/{organizationUserId}/send-confirmation-email](#postapitenant-admintenantuserorganizationuseridsend-confirmation-email) | Resend invitation email for specific user. |
| POST | [/api/tenant-admin/tenant/user/{organizationUserId}/request-password-reset](#postapitenant-admintenantuserorganizationuseridrequest-password-reset) | Request password reset |
| GET | [/api/tenant-admin](#getapitenant-admin) | Get your profile information. |
| PUT | [/api/tenant-admin](#putapitenant-admin) | Update your profile information. |
| POST | [/api/user/{identityProviderId}/lastlogin](#postapiuseridentityprovideridlastlogin) | Set last login time for a specific user. |
| POST | [/api/user/{identityProviderId}/lockedstatus](#postapiuseridentityprovideridlockedstatus) | Set locked status for specific user. |
| DELETE | [/api/user/{organizationUserId}/lockedstatus](#deleteapiuserorganizationuseridlockedstatus) | Remove locked status for specific user. |
| DELETE | [/api/user/{identityProviderId}/pendingstatus](#deleteapiuseridentityprovideridpendingstatus) | Remove pending activation status for specific user.s |
| POST | [/api/user/reset-password](#postapiuserreset-password) | Reset your password. |
| PUT | [/api/user/visualization-preference](#putapiuservisualization-preference) |  |
| GET | [/api/user/visualization-preference](#getapiuservisualization-preference) |  |

## Reference Table

| Name | Path | Description |
| --- | --- | --- |
| AccessTokenResponse | [#/components/schemas/AccessTokenResponse](#componentsschemasaccesstokenresponse) |  |
| AggregationData | [#/components/schemas/AggregationData](#componentsschemasaggregationdata) |  |
| Attribute | [#/components/schemas/Attribute](#componentsschemasattribute) |  |
| BaseHCPResponse | [#/components/schemas/BaseHCPResponse](#componentsschemasbasehcpresponse) |  |
| BaseParameterListResponse | [#/components/schemas/BaseParameterListResponse](#componentsschemasbaseparameterlistresponse) |  |
| BaseParameterResponse | [#/components/schemas/BaseParameterResponse](#componentsschemasbaseparameterresponse) |  |
| BasePatientResponse | [#/components/schemas/BasePatientResponse](#componentsschemasbasepatientresponse) |  |
| BaseUserResponse | [#/components/schemas/BaseUserResponse](#componentsschemasbaseuserresponse) |  |
| BinningParameterValueView | [#/components/schemas/BinningParameterValueView](#componentsschemasbinningparametervalueview) |  |
| CertificateAndKeys | [#/components/schemas/CertificateAndKeys](#componentsschemascertificateandkeys) |  |
| CreateCloudDatasourceForTenantRequest | [#/components/schemas/CreateCloudDatasourceForTenantRequest](#componentsschemascreateclouddatasourcefortenantrequest) |  |
| CreateCloudDatasourceRequest | [#/components/schemas/CreateCloudDatasourceRequest](#componentsschemascreateclouddatasourcerequest) |  |
| CreateDatasourceForTenantRequest | [#/components/schemas/CreateDatasourceForTenantRequest](#componentsschemascreatedatasourcefortenantrequest) |  |
| CreateDeviceCommand | [#/components/schemas/CreateDeviceCommand](#componentsschemascreatedevicecommand) |  |
| CreateDeviceForPatientRequest | [#/components/schemas/CreateDeviceForPatientRequest](#componentsschemascreatedeviceforpatientrequest) |  |
| CreateDeviceForTenantRequest | [#/components/schemas/CreateDeviceForTenantRequest](#componentsschemascreatedevicefortenantrequest) |  |
| CreateDeviceResponse | [#/components/schemas/CreateDeviceResponse](#componentsschemascreatedeviceresponse) |  |
| CreateFullPatientRequest | [#/components/schemas/CreateFullPatientRequest](#componentsschemascreatefullpatientrequest) |  |
| CreateGroupRequest | [#/components/schemas/CreateGroupRequest](#componentsschemascreategrouprequest) |  |
| CreateHCPRequest | [#/components/schemas/CreateHCPRequest](#componentsschemascreatehcprequest) |  |
| CreateParametersForDatasourceRequest | [#/components/schemas/CreateParametersForDatasourceRequest](#componentsschemascreateparametersfordatasourcerequest) |  |
| CreatePatientRequest | [#/components/schemas/CreatePatientRequest](#componentsschemascreatepatientrequest) |  |
| CreateSystemUserRequest | [#/components/schemas/CreateSystemUserRequest](#componentsschemascreatesystemuserrequest) |  |
| CreateTenantRequest | [#/components/schemas/CreateTenantRequest](#componentsschemascreatetenantrequest) |  |
| CreateTenantUserRequest | [#/components/schemas/CreateTenantUserRequest](#componentsschemascreatetenantuserrequest) |  |
| CreateUserRequest | [#/components/schemas/CreateUserRequest](#componentsschemascreateuserrequest) |  |
| DataPoint | [#/components/schemas/DataPoint](#componentsschemasdatapoint) |  |
| Datasource | [#/components/schemas/Datasource](#componentsschemasdatasource) |  |
| DatasourceAction | [#/components/schemas/DatasourceAction](#componentsschemasdatasourceaction) |  |
| DatasourcesConfigModel | [#/components/schemas/DatasourcesConfigModel](#componentsschemasdatasourcesconfigmodel) |  |
| DeviceResponse | [#/components/schemas/DeviceResponse](#componentsschemasdeviceresponse) |  |
| ErrorModel | [#/components/schemas/ErrorModel](#componentsschemaserrormodel) |  |
| ExternalHCPResponse | [#/components/schemas/ExternalHCPResponse](#componentsschemasexternalhcpresponse) |  |
| GetAggregationTypesAndIntervalsResponse | [#/components/schemas/GetAggregationTypesAndIntervalsResponse](#componentsschemasgetaggregationtypesandintervalsresponse) |  |
| GetDeviceStatusResponse | [#/components/schemas/GetDeviceStatusResponse](#componentsschemasgetdevicestatusresponse) |  |
| GetGlobalParameterConfigResponse | [#/components/schemas/GetGlobalParameterConfigResponse](#componentsschemasgetglobalparameterconfigresponse) |  |
| GetPatientDevicesResponse | [#/components/schemas/GetPatientDevicesResponse](#componentsschemasgetpatientdevicesresponse) |  |
| GetRateLimitConfigurationResponse | [#/components/schemas/GetRateLimitConfigurationResponse](#componentsschemasgetratelimitconfigurationresponse) |  |
| GetTenantRateLimitsResponse | [#/components/schemas/GetTenantRateLimitsResponse](#componentsschemasgettenantratelimitsresponse) |  |
| GroupMemberResponse | [#/components/schemas/GroupMemberResponse](#componentsschemasgroupmemberresponse) |  |
| GroupResponse | [#/components/schemas/GroupResponse](#componentsschemasgroupresponse) |  |
| HCPResponse | [#/components/schemas/HCPResponse](#componentsschemashcpresponse) |  |
| HCPSelfUpdateRequest | [#/components/schemas/HCPSelfUpdateRequest](#componentsschemashcpselfupdaterequest) |  |
| InfoResponse | [#/components/schemas/InfoResponse](#componentsschemasinforesponse) |  |
| InvitationListView | [#/components/schemas/InvitationListView](#componentsschemasinvitationlistview) |  |
| InvitationRequest | [#/components/schemas/InvitationRequest](#componentsschemasinvitationrequest) |  |
| InviteHCPRequest | [#/components/schemas/InviteHCPRequest](#componentsschemasinvitehcprequest) |  |
| JsonNode | [#/components/schemas/JsonNode](#componentsschemasjsonnode) |  |
| JsonNodeOptions | [#/components/schemas/JsonNodeOptions](#componentsschemasjsonnodeoptions) |  |
| NumericAggregatedData | [#/components/schemas/NumericAggregatedData](#componentsschemasnumericaggregateddata) |  |
| PaginationResponse | [#/components/schemas/PaginationResponse](#componentsschemaspaginationresponse) |  |
| Parameter | [#/components/schemas/Parameter](#componentsschemasparameter) |  |
| ParameterAggregation | [#/components/schemas/ParameterAggregation](#componentsschemasparameteraggregation) |  |
| ParameterConfig | [#/components/schemas/ParameterConfig](#componentsschemasparameterconfig) |  |
| ParameterConfigResponse | [#/components/schemas/ParameterConfigResponse](#componentsschemasparameterconfigresponse) |  |
| ParameterValueListView | [#/components/schemas/ParameterValueListView](#componentsschemasparametervaluelistview) |  |
| ParameterValueSummaryListView | [#/components/schemas/ParameterValueSummaryListView](#componentsschemasparametervaluesummarylistview) |  |
| ParameterView | [#/components/schemas/ParameterView](#componentsschemasparameterview) |  |
| PatientClouddataSourceResult | [#/components/schemas/PatientClouddataSourceResult](#componentsschemaspatientclouddatasourceresult) |  |
| PatientDeviceView | [#/components/schemas/PatientDeviceView](#componentsschemaspatientdeviceview) |  |
| PatientQueryDataSourcesResult | [#/components/schemas/PatientQueryDataSourcesResult](#componentsschemaspatientquerydatasourcesresult) |  |
| PatientResponse | [#/components/schemas/PatientResponse](#componentsschemaspatientresponse) |  |
| PersonaParameter | [#/components/schemas/PersonaParameter](#componentsschemaspersonaparameter) |  |
| ProblemDetails | [#/components/schemas/ProblemDetails](#componentsschemasproblemdetails) |  |
| ProfileValueResponse | [#/components/schemas/ProfileValueResponse](#componentsschemasprofilevalueresponse) |  |
| QueryCloudDataSourceResult | [#/components/schemas/QueryCloudDataSourceResult](#componentsschemasqueryclouddatasourceresult) |  |
| QueryCloudDatasourceTemplatesResponse | [#/components/schemas/QueryCloudDatasourceTemplatesResponse](#componentsschemasqueryclouddatasourcetemplatesresponse) |  |
| QueryDataSourceResult | [#/components/schemas/QueryDataSourceResult](#componentsschemasquerydatasourceresult) |  |
| QueryDatasourceForTenantResponse | [#/components/schemas/QueryDatasourceForTenantResponse](#componentsschemasquerydatasourcefortenantresponse) |  |
| QueryDevicesResponse | [#/components/schemas/QueryDevicesResponse](#componentsschemasquerydevicesresponse) |  |
| QueryExternalHCPResponse | [#/components/schemas/QueryExternalHCPResponse](#componentsschemasqueryexternalhcpresponse) |  |
| QueryGroupMembersResponse | [#/components/schemas/QueryGroupMembersResponse](#componentsschemasquerygroupmembersresponse) |  |
| QueryGroupsResponse | [#/components/schemas/QueryGroupsResponse](#componentsschemasquerygroupsresponse) |  |
| QueryHCPPatientsResponse | [#/components/schemas/QueryHCPPatientsResponse](#componentsschemasqueryhcppatientsresponse) |  |
| QueryHCPsResponse | [#/components/schemas/QueryHCPsResponse](#componentsschemasqueryhcpsresponse) |  |
| QueryInvitationsResult | [#/components/schemas/QueryInvitationsResult](#componentsschemasqueryinvitationsresult) |  |
| QueryNumericAggregatedDataResponse | [#/components/schemas/QueryNumericAggregatedDataResponse](#componentsschemasquerynumericaggregateddataresponse) |  |
| QueryParameterValuesBinningResponse | [#/components/schemas/QueryParameterValuesBinningResponse](#componentsschemasqueryparametervaluesbinningresponse) |  |
| QueryParameterValuesResponse | [#/components/schemas/QueryParameterValuesResponse](#componentsschemasqueryparametervaluesresponse) |  |
| QueryParameterValuesSummaryResponse | [#/components/schemas/QueryParameterValuesSummaryResponse](#componentsschemasqueryparametervaluessummaryresponse) |  |
| QueryPatientDatasourceForTenantResponse | [#/components/schemas/QueryPatientDatasourceForTenantResponse](#componentsschemasquerypatientdatasourcefortenantresponse) |  |
| QueryPatientHCPsResponse | [#/components/schemas/QueryPatientHCPsResponse](#componentsschemasquerypatienthcpsresponse) |  |
| QueryPatientsResponse | [#/components/schemas/QueryPatientsResponse](#componentsschemasquerypatientsresponse) |  |
| QuerySystemUsersResponse | [#/components/schemas/QuerySystemUsersResponse](#componentsschemasquerysystemusersresponse) |  |
| QueryTemporaryPatientsResponse | [#/components/schemas/QueryTemporaryPatientsResponse](#componentsschemasquerytemporarypatientsresponse) |  |
| QueryTenantDeviceAssociationsResponse | [#/components/schemas/QueryTenantDeviceAssociationsResponse](#componentsschemasquerytenantdeviceassociationsresponse) |  |
| QueryTenantUsersResponse | [#/components/schemas/QueryTenantUsersResponse](#componentsschemasquerytenantusersresponse) |  |
| QueryTenantsResponse | [#/components/schemas/QueryTenantsResponse](#componentsschemasquerytenantsresponse) |  |
| RateLimitListView | [#/components/schemas/RateLimitListView](#componentsschemasratelimitlistview) |  |
| RegisterTenantRequest | [#/components/schemas/RegisterTenantRequest](#componentsschemasregistertenantrequest) |  |
| RemoteDatasourceActionResponse | [#/components/schemas/RemoteDatasourceActionResponse](#componentsschemasremotedatasourceactionresponse) |  |
| ResourceIdResponse | [#/components/schemas/ResourceIdResponse](#componentsschemasresourceidresponse) |  |
| SaveDataResponse | [#/components/schemas/SaveDataResponse](#componentsschemassavedataresponse) |  |
| SaveDeviceDataRequest | [#/components/schemas/SaveDeviceDataRequest](#componentsschemassavedevicedatarequest) |  |
| SaveDeviceDataResponse | [#/components/schemas/SaveDeviceDataResponse](#componentsschemassavedevicedataresponse) |  |
| SaveParameterDataRequest | [#/components/schemas/SaveParameterDataRequest](#componentsschemassaveparameterdatarequest) |  |
| SendEmailRequest | [#/components/schemas/SendEmailRequest](#componentsschemassendemailrequest) |  |
| SystemUserSelfUpdateRequest | [#/components/schemas/SystemUserSelfUpdateRequest](#componentsschemassystemuserselfupdaterequest) |  |
| TemporaryPatientResponse | [#/components/schemas/TemporaryPatientResponse](#componentsschemastemporarypatientresponse) |  |
| TenantDeviceAssociation | [#/components/schemas/TenantDeviceAssociation](#componentsschemastenantdeviceassociation) |  |
| TenantResponse | [#/components/schemas/TenantResponse](#componentsschemastenantresponse) |  |
| TenantUserSelfUpdateRequest | [#/components/schemas/TenantUserSelfUpdateRequest](#componentsschemastenantuserselfupdaterequest) |  |
| UpdateDeviceRequest | [#/components/schemas/UpdateDeviceRequest](#componentsschemasupdatedevicerequest) |  |
| UpdateGroupRequest | [#/components/schemas/UpdateGroupRequest](#componentsschemasupdategrouprequest) |  |
| UpdateHCPRequest | [#/components/schemas/UpdateHCPRequest](#componentsschemasupdatehcprequest) |  |
| UpdatePatientRequest | [#/components/schemas/UpdatePatientRequest](#componentsschemasupdatepatientrequest) |  |
| UpdateProfileParameterRequest | [#/components/schemas/UpdateProfileParameterRequest](#componentsschemasupdateprofileparameterrequest) |  |
| UpdateSystemUserRequest | [#/components/schemas/UpdateSystemUserRequest](#componentsschemasupdatesystemuserrequest) |  |
| UpdateTenantRequest | [#/components/schemas/UpdateTenantRequest](#componentsschemasupdatetenantrequest) |  |
| UpdateTenantUserRequest | [#/components/schemas/UpdateTenantUserRequest](#componentsschemasupdatetenantuserrequest) |  |
| UserTenantResponse | [#/components/schemas/UserTenantResponse](#componentsschemasusertenantresponse) |  |
| UserTenantsResponse | [#/components/schemas/UserTenantsResponse](#componentsschemasusertenantsresponse) |  |
| Bearer | [#/components/securitySchemes/Bearer](#componentssecurityschemesbearer) | Please enter JWT with Bearer into field |

## Path Details

***

### [GET]/api/admin/datasource/{datasourceKey}/remote-action

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  datasourceKey?: string
  endpoint?: string
  secret?: string
  createdAt?: integer
  updatedAt?: integer
  deletedAt?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/invitation-code

- Summary  
Get a list of all the invitations codes  
Status = requested, approved, activated

#### Parameters(Query)

```ts
Q?: string
```

```ts
Status?: string[]
```

```ts
ReceiveUpdatesConsent?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    email?: string
    code?: string
    name?: string
    country?: string
    company?: string
    receiveUpdatesConsent?: boolean
    status?: string
    createdAt?: integer
    expiresAt?: integer
    activatedAt?: integer
  }[]
}
```

***

### [PUT]/api/admin/invitation-code/{invitationCodeId}/send

- Summary  
Approves a invitation code.

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

`text/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/admin/system-user

- Summary  
Creates a system user.  
UserType can be one of the System User Types:   
SuperAdmin = 1, ITAdmin = 2, ChiefSecurityOfficer = 3, SystemAdmin = 4, TechnicalSupport = 5, CustomerSupport = 6

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  userType?: integer
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [GET]/api/admin/system-user/{id}

- Summary  
Get the specific system user profile information.

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/admin/system-user/{id}

- Summary  
Update specific system user profile information.

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  phone?: string
  isActive?: boolean
  acceptedTerms?: string
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/admin/system-user/{id}

- Summary  
Delete specific system user.

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/system-users

- Summary  
Query system users.

#### Parameters(Query)

```ts
UserType?: integer
```

```ts
Q?: string
```

```ts
IsActive?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

***

### [POST]/api/admin/tenant

- Summary  
Creates a tenant.

#### RequestBody

- application/json

```ts
{
  tenancyName: string
  countryCode?: string
  admin: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    username?: string
  }
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [GET]/api/admin/tenant/{id}

- Summary  
Get specific tenant information.

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  tenancyName?: string
  countryCode?: string
  isActive?: boolean
  createdAt?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/admin/tenant/{id}

- Summary  
Update specific tenant information.

#### RequestBody

- application/json

```ts
{
  tenancyName?: string
  countryCode?: string
  isActive?: boolean
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/admin/tenant/{id}

- Summary  
Delete specific tenant.

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenants

- Summary  
Query tenants.

#### Parameters(Query)

```ts
Q?: string
```

```ts
IsActive?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    tenancyName?: string
    countryCode?: string
    isActive?: boolean
    createdAt?: integer
  }[]
}
```

***

### [PUT]/api/admin/tenant/{organizationId}/system-user/{id}/association

- Summary  
Associate system user to tenant.

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [DELETE]/api/admin/tenant/{organizationId}/system-user/{id}/association

- Summary  
Disassociate system user from tenant.

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenant/{organizationId}/system-users

- Summary  
Query associations with system users for specific tenant.

#### Parameters(Query)

```ts
Q?: string
```

```ts
IsActive?: boolean
```

```ts
UserType?: integer
```

```ts
Associated?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

***

### [PUT]/api/admin/tenant/{organizationId}/device/{deviceId}/association

- Summary  
Associate device to tenant.

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/admin/tenant/{organizationId}/device/{deviceId}/association

- Summary  
Disassociate device from tenant.

#### Parameters(Query)

```ts
isDeviceOk?: boolean
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenant/{organizationId}/devices

- Summary  
Query devices for specific tenant.

#### Parameters(Query)

```ts
Q?: string
```

```ts
State?: integer
```

```ts
IncludeEndedAssociations?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    organizationId?: integer
    startDate?: integer
    endDate?: integer
    device: {
      id?: integer
      datasourceId?: integer
      name?: string
      serialNumber?: string
      softwareVersion?: string
      state?: integer
      createdAt?: integer
      updatedAt?: integer
      datasourceName?: string
    }
  }[]
}
```

***

### [GET]/api/admin/tenant/{organizationId}/users

- Summary  
Query users for specific tenant.

#### Parameters(Query)

```ts
UserType?: integer
```

```ts
Q?: string
```

```ts
IsActive?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

***

### [GET]/api/admin/tenant/{organizationId}/user/{organizationUserId}

- Summary  
Get user information.

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenant/{organizationId}/hcps

- Summary  
Query HCPs for specific tenant.

#### Parameters(Query)

```ts
Q?: string
```

```ts
UserType?: integer
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

***

### [POST]/api/admin/tenant/{organizationId}/user/{organizationUserId}/impersonate

- Summary  
Impersonate user.

#### Responses

- 200 Success

`application/json`

```ts
{
  accessToken?: string
}
```

***

### [POST]/api/admin/tenant/{organizationId}/datasource

- Summary  
Create datasource for specific tenant.

#### RequestBody

- application/json

```ts
{
  datasourceKey?: string
  datasourceName: string
  datasourceAction: string
  remoteActionEndpoint?: string
  remoteActionSecret?: string
  parameters: {
    key?: string
    name: string
    isNumeric: boolean
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
  }[]
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [DELETE]/api/admin/tenant/{organizationId}/datasource/{datasourceId}

- Summary  
Delete datasource from tenant.

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenant/cloud-datasource-templates

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    cloudDataSourceTemplateId?: string
    authorizationGrantType?: string
    clientAuthenticationMethod?: string
    userNameAttribute?: string
    organizationRedirectUri?: string
    organizationNotificationUri?: string
    scopes?: string[]
    authorizationUris?: string[]
    tokenUris?: string[]
    userInfoUris?: string[]
    parameters: {
      key?: string
      name?: string
      parentParameterKey?: string
      isNumeric?: boolean
      unit?: string
    }[]
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenant/cloud-datasource-templates/ids

#### Responses

- 200 Success

`application/json`

```ts
string[]
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenant/cloud-datasource-templates/{dataSourceTemplateId}

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  cloudDataSourceTemplateId?: string
  authorizationGrantType?: string
  clientAuthenticationMethod?: string
  userNameAttribute?: string
  organizationRedirectUri?: string
  organizationNotificationUri?: string
  scopes?: string[]
  authorizationUris?: string[]
  tokenUris?: string[]
  userInfoUris?: string[]
  parameters: {
    key?: string
    name?: string
    parentParameterKey?: string
    isNumeric?: boolean
    unit?: string
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/admin/tenant/{organizationId}/datasources

- Summary  
Query datasources for specific tenant.

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    name?: string
    key?: string
    action?: string
    isCloudDatasource?: boolean
    parameters: {
      id?: integer
      key?: string
      name?: string
      type?: string
      config: {
        aggregations: {
          type?: string
          intervals?: string[]
        }[]
      }
      action?: string
      parentParameterId?: integer
      isNumeric?: boolean
      isHierarchical?: boolean
      unit?: string
      createdAt?: integer
    }[]
  }[]
}
```

***

### [PUT]/api/admin/tenant/{organizationId}/datasource/{datasourceKey}

- Summary  
Associates the datasource to a tenant

#### Responses

- 204 No Content

`application/json`

```ts
{
  id?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/admin/tenant/{organizationId}/user/{organizationUserId}/send-confirmation-email

- Summary  
Resend invitation email for user.

#### Responses

- 200 Success

***

### [POST]/api/admin/tenant/{organizationId}/user/{organizationUserId}/request-password-reset

- Summary  
Request password reset

#### Responses

- 200 Success

***

### [GET]/api/admin/tenant/{organizationId})/rate-limits

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    organizationId?: integer
    limitKey?: string
    currentValue?: number
    maxValue?: number
    createdAt?: integer
    updatedAt?: integer
    isActive?: boolean
    unitMeasure?: string
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/common/user-tenants

- Summary  
Get a list of tenants the current user is associated with

#### Responses

- 200 Success.

`application/json`

```ts
{
  result: {
    organizationId?: integer
    tenantId?: integer
    tenantName?: string
  }[]
}
```

***

### [GET]/api/common/info

- Summary  
Get the system translations and current user id, type and permissions

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success.

`application/json`

```ts
{
  availableLanguages?: string[]
  currentLanguage?: string
  translations: {
  }
  permissions?: string[]
  userInfo: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }
}
```

***

### [HEAD]/api/common/tenant/{name}/exists

- Summary  
Verifies if a tenant exists by its name

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`text/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [HEAD]/api/common/user/email/{email}/exists

- Summary  
Checks if user exists by specific email.

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`text/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [HEAD]/api/common/user/username/{username}/exists

- Summary  
Checks if user exists by specific username.

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`text/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [POST]/api/common/application/register

- Summary  
Creates the device for Physician or Patient user type.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  datasourceId?: integer
  deviceName?: string
  serialNumber?: string
  state?: integer
}
```

- text/json

```ts
{
  datasourceId?: integer
  deviceName?: string
  serialNumber?: string
  state?: integer
}
```

- application/*+json

```ts
{
  datasourceId?: integer
  deviceName?: string
  serialNumber?: string
  state?: integer
}
```

#### Responses

- 200 Success

`text/plain`

```ts
{
  id?: integer
}
```

`application/json`

```ts
{
  id?: integer
}
```

`text/json`

```ts
{
  id?: integer
}
```

- 404 Not Found

`text/plain`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`text/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [POST]/api/common/user/email/{email}/request-password-reset

- Summary  
Request password reset by user email.

#### Responses

- 200 Success

***

### [OPTIONS]/api/common/tenant/rate-limit

#### Parameters(Query)

```ts
organizationId?: integer
```

#### Responses

- 200 Success

`application/json`

```ts
{
  datasourcesLimit?: integer
  devicesLimit?: integer
  patientsLimit?: integer
  tenantUsersLimit?: integer
  hcpsLimit?: integer
  tenantsLimit?: integer
  tenantRequestLimit?: integer
  rawStorageLimit?: string
  datasourcesRemainingLimit?: integer
  devicesRemainingLimit?: integer
  patientsRemainingLimit?: integer
  tenantUsersRemainingLimit?: integer
  hcpsRemainingLimit?: integer
  tenantsRemainingLimit?: integer
}
```

***

### [OPTIONS]/api/common/aggregation/filters

- Summary  
Returns the intervals and types for aggregation.

#### Responses

- 200 Success

`application/json`

```ts
{
  aggregationTypes: {
    key?: string
    value?: string
  }[]
  aggregationIntervals:#/components/schemas/AggregationData[]
}
```

***

### [POST]/api/common/email/send

#### RequestBody

- application/json

```ts
{
  fromEmail?: string
  fromName?: string
  to: string
  subject: string
  body: string
  isBodyHtml: boolean
}
```

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`text/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [GET]/api/config/datasources

#### Responses

- 200 Success

`application/json`

```ts
{
  actions: {
    name?: string
    attributes: {
      name?: string
      type?: string
    }[]
  }[]
  datasources: {
    name?: string
    key?: string
    action?: string
    parameters: {
      name?: string
      key?: string
      isNumeric?: boolean
      config: {
      }
      type?: string
      parentParameterKey?: string
      unitMeasure?: string
    }[]
  }[]
}
```

***

### [GET]/api/config/global-parameters

#### Responses

- 200 Success

`application/json`

```ts
{
  globalParameters: {
    name?: string
    key?: string
    isNumeric?: boolean
    type?: string
    parentParameterKey?: string
    unitMeasure?: string
  }[]
}
```

***

### [HEAD]/api/device/organization/{organizationId}/patient/{id}/association/exists

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/device/organization/{organizationId}/patient/{id}/association

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/device/organization/{organizationId}/patient/{id}/association

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/device/data

- Summary  
Upload a session of data.

#### RequestBody

- application/json

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
  organizationId: integer
  patientId?: integer
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  sessionId?: string
  reference?: string
}
```

***

### [GET]/api/hcp

- Summary  
Gets the current physician user profile data.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  practice?: string
  speciality?: string
}
```

***

### [PUT]/api/hcp

- Summary  
Updates the current physician user profile data.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName?: string
  lastName?: string
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  phone?: string
}
```

#### Responses

- 204 No Content

***

### [GET]/api/hcp/patients

- Summary  
Query the patients for current physician.

#### Parameters(Query)

```ts
Q?: string
```

```ts
IsActive?: boolean
```

```ts
Unassigned?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
    patientId?: string
  }[]
}
```

***

### [GET]/api/hcp/patient/{patientId}

- Summary  
Get the patient information associated to current physician.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  patientId?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  birthdate?: string
  countryCode?: string
  gender?: string
  height?: number
  weight?: number
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/hcp/patient/{patientId}/values

- Summary  
Query the parameter values for specific patient.

#### Parameters(Query)

```ts
ParameterKey?: string[]
```

```ts
Reference?: string
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
Q?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    patientId?: integer
    deviceId?: integer
    parameterKey?: string
    startTimestamp?: integer
    endTimestamp?: integer
    reference?: string
    createdAt?: integer
    isNumeric?: boolean
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/hcp/patient/{patientId}/parameter-values-summary

- Summary  
Query Patient parameter values summary.

#### Parameters(Query)

```ts
ParameterKey?: string[]
```

```ts
Reference?: string
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
Q?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    startTimestamp?: integer
    endTimestamp?: integer
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/hcp/patient/{organizationUserId}/data

- Summary  
Save the parameter data for specific patient.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  sessionId?: string
}
```

***

### [GET]/api/hcp/datasources

- Summary  
Query all datasources for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    name?: string
    key?: string
    action?: string
    isCloudDatasource?: boolean
    parameters: {
      id?: integer
      key?: string
      name?: string
      type?: string
      config: {
        aggregations: {
          type?: string
          intervals?: string[]
        }[]
      }
      action?: string
      parentParameterId?: integer
      isNumeric?: boolean
      isHierarchical?: boolean
      unit?: string
      createdAt?: integer
    }[]
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/hcp/datasource/{datasourceId}

- Summary  
Get datasource for your tenant

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  name?: string
  key?: string
  action?: string
  isCloudDatasource?: boolean
  parameters: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/hcp/parameter-values-csv

- Summary  
Download the Parameter Values in Csv format

#### Parameters(Query)

```ts
PatientId?: integer
```

```ts
DeviceId?: integer
```

```ts
ParameterKey?: string[]
```

```ts
Reference?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`text/plain`

```ts
{
  "type": "string",
  "format": "binary"
}
```

`application/json`

```ts
{
  "type": "string",
  "format": "binary"
}
```

`text/json`

```ts
{
  "type": "string",
  "format": "binary"
}
```

***

### [GET]/api/hcp/aggregated-numeric-parameters

#### Parameters(Query)

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
Interval: string
```

```ts
AggregationType: string
```

```ts
ParameterKey: string
```

```ts
PatientId?: integer
```

```ts
DeviceId?: integer
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    startTimestamp?: integer
    endTimestamp?: integer
    value?: number
  }[]
}
```

***

### [GET]/api/hcp/patient/{organizationUserId}/values-binning

#### Parameters(Query)

```ts
ParameterKey: string
```

```ts
Reference?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
TotalDataPoints?: integer
```

```ts
ZoomLevel?: integer
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    reference?: string
    parameterKey?: string
    patientId?: integer
    deviceId?: integer
    startTimestamp?: integer
    endTimestamp?: integer
    unitMeasure?: string
    notes?: string
    dataPoints: {
      startTimestamp?: integer
      endTimestamp?: integer
      value?: number
    }[]
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/hcp/patient/{id}/parameters

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/patient/data

- Summary  
Save parameters data for current patient.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  sessionId?: string
}
```

***

### [GET]/api/patient/values

- Summary  
Query the parameter values for current patient.

#### Parameters(Query)

```ts
DeviceId?: integer
```

```ts
ParameterKey?: string[]
```

```ts
Reference?: string
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
Q?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    patientId?: integer
    deviceId?: integer
    parameterKey?: string
    startTimestamp?: integer
    endTimestamp?: integer
    reference?: string
    createdAt?: integer
    isNumeric?: boolean
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/patient/values-binning

#### Parameters(Query)

```ts
ParameterKey: string
```

```ts
Reference?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
TotalDataPoints?: integer
```

```ts
ZoomLevel?: integer
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    reference?: string
    parameterKey?: string
    patientId?: integer
    deviceId?: integer
    startTimestamp?: integer
    endTimestamp?: integer
    unitMeasure?: string
    notes?: string
    dataPoints: {
      startTimestamp?: integer
      endTimestamp?: integer
      value?: number
    }[]
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/patient/device/{serialNumber}/status

- Summary  
Get Device status for a Patient.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  isActive?: boolean
  associatedWithTenant?: boolean
  associatedWithPatient?: boolean
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/patient/register-device

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  datasourceKey: string
  deviceName: string
  serialNumber: string
  softwareVersion: string
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
}
```

***

### [DELETE]/api/patient/device/{id}

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/patient/datasources

#### Parameters(Query)

```ts
isCloudDatasource?: boolean
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    name?: string
    key?: string
    action?: string
    isCloudDatasource?: boolean
    parameters: {
      id?: integer
      key?: string
      name?: string
      type?: string
      config: {
        aggregations: {
          type?: string
          intervals?: string[]
        }[]
      }
      action?: string
      parentParameterId?: integer
      isNumeric?: boolean
      isHierarchical?: boolean
      unit?: string
      createdAt?: integer
    }[]
    cloudAccountConnectionStatus?: string
  }[]
}
```

***

### [GET]/api/patient/datasources/{id}

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  name?: string
  key?: string
  action?: string
  isCloudDatasource?: boolean
  parameters: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
  cloudDataSourceTemplateId?: string
  maskedClientId?: string
  authorizationUri?: string
  tokenUri?: string
  redirectUri?: string
  userInfoUri?: string
  cloudAccountConnectionStatus?: string
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/patient/parameters

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/patient

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  patientId?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  birthdate?: string
  countryCode?: string
  gender?: string
  height?: number
  weight?: number
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/patient

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  phone?: string
  username?: string
  isActive?: boolean
  patientId?: string
  birthdate?: string
  gender?: string
  height?: number
  weight?: number
  address?: string
  address1?: string
  city?: string
  state?: string
  countryCode?: string
  postalCode?: string
  phone2?: string
  phone3?: string
  phone4?: string
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/patient/patient/devices

#### Parameters(Query)

```ts
onlyValid?: boolean
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    organizationId?: integer
    organizationUserId?: integer
    deviceId?: integer
    userDeviceAssociationId?: integer
    startDate?: integer
    endDate?: integer
    lastUsedAt?: integer
    deviceName?: string
    serialNumber?: string
    datasourceId?: integer
    state?: integer
    softwareVersion?: string
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/register/tenant

- Summary  
Register a tenant with a tenant admin based on an invitation code.

#### RequestBody

- application/json

```ts
{
  tenancyName: string
  countryCode?: string
  admin: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    username?: string
  }
  invitationCode?: string
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [POST]/api/register/request-invite

#### RequestBody

- application/json

```ts
{
  name: string
  email: string
  company: string
  country: string
  updates?: boolean
  captchaToken: string
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [GET]/api/system-user

- Summary  
Returns the information for the system user that's making the request.

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
}
```

***

### [PUT]/api/system-user

- Summary  
Updates the information of the system user that is making the request.

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  phone?: string
  acceptedTerms?: string
}
```

#### Responses

- 204 No Content

***

### [HEAD]/api/tenant-admin/group/{name}/exists

- Summary  
Check if group exists by name.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`text/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [POST]/api/tenant-admin/group

- Summary  
Create group for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  name: string
  description?: string
  parentGroupId?: integer
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [PUT]/api/tenant-admin/group/{id}

- Summary  
Update group by id.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  name: string
  description?: string
  parentGroupId?: integer
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/group/{id}

- Summary  
Delete group.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/groups

- Summary  
Query the groups for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    name?: string
    description?: string
    parentGroupId?: integer
  }[]
}
```

***

### [PUT]/api/tenant-admin/group/{groupId}/user/{organizationUserId}/member

- Summary  
Add user to a group.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/group/{groupId}/user/{organizationUserId}/member

- Summary  
Remove user from group.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/group/{groupId}/members

- Summary  
Query group members.

#### Parameters(Query)

```ts
Q?: string
```

```ts
UserType?: integer
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    userName?: string
    firstName?: string
    lastName?: string
    creationTime?: integer
    userType?: integer
    organizationUserId?: integer
    email?: string
  }[]
}
```

***

### [GET]/api/tenant-admin/group/{groupId}/nonmembers

- Summary  
Query group non members.

#### Parameters(Query)

```ts
Q?: string
```

```ts
UserType?: integer
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    userName?: string
    firstName?: string
    lastName?: string
    creationTime?: integer
    userType?: integer
    organizationUserId?: integer
    email?: string
  }[]
}
```

***

### [POST]/api/tenant-admin/hcp

- Summary  
Create an HCP.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  postalCode?: string
  state?: string
  countryCode?: string
  userType: integer
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [POST]/api/tenant-admin/hcp/{externalUserId}/invite

- Summary  
Invite a HCP.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName?: string
  lastName?: string
  userType?: integer
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  phone?: string
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [GET]/api/tenant-admin/hcp/{id}

- Summary  
Get HCP information.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  practice?: string
  speciality?: string
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/tenant-admin/hcp/{id}

- Summary  
Update UCP information.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName?: string
  lastName?: string
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  phone?: string
  isActive?: boolean
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/hcp/{id}

- Summary  
Delete an HCP.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/hcps

- Summary  
Get a list of HCPs.

#### Parameters(Query)

```ts
Q?: string
```

```ts
UserType?: integer
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

***

### [GET]/api/tenant-admin/hcp/external

- Summary  
Query extenal HCPs

#### Parameters(Query)

```ts
email: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    userId?: string
    username?: string
    firstName?: string
    lastName?: string
    email?: string
    inCurrentTenant?: boolean
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/tenant-admin/hcp/{id}/patient/{patientId}/association

- Summary  
Associate Patient to HCP.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/hcp/{id}/patient/{patientId}/association

- Summary  
Disassociate Patient from HCP.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

`text/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/hcp/{id}/patients

- Summary  
Get a list of patients for an HCP

#### Parameters(Query)

```ts
Q?: string
```

```ts
IsActive?: boolean
```

```ts
Unassigned?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
    patientId?: string
  }[]
}
```

***

### [GET]/api/tenant-admin/parameter-values

- Summary  
Query parameter values.

#### Parameters(Query)

```ts
PatientId?: integer
```

```ts
DeviceId?: integer
```

```ts
ParameterKey?: string[]
```

```ts
Reference?: string
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
Q?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    patientId?: integer
    deviceId?: integer
    parameterKey?: string
    startTimestamp?: integer
    endTimestamp?: integer
    reference?: string
    createdAt?: integer
    isNumeric?: boolean
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/tenant-admin/parameter-values

#### RequestBody

- application/json

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
  organizationId: integer
  patientId?: integer
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  sessionId?: string
  reference?: string
}
```

***

### [GET]/api/tenant-admin/parameter-values-binning

#### Parameters(Query)

```ts
organizationUserId?: integer
```

```ts
deviceId?: integer
```

```ts
ParameterKey: string
```

```ts
Reference?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
TotalDataPoints?: integer
```

```ts
ZoomLevel?: integer
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    reference?: string
    parameterKey?: string
    patientId?: integer
    deviceId?: integer
    startTimestamp?: integer
    endTimestamp?: integer
    unitMeasure?: string
    notes?: string
    dataPoints: {
      startTimestamp?: integer
      endTimestamp?: integer
      value?: number
    }[]
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/parameter-values-csv

- Summary  
Download the Parameter Values in Csv format

#### Parameters(Query)

```ts
PatientId?: integer
```

```ts
DeviceId?: integer
```

```ts
ParameterKey?: string[]
```

```ts
Reference?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`text/plain`

```ts
{
  "type": "string",
  "format": "binary"
}
```

`application/json`

```ts
{
  "type": "string",
  "format": "binary"
}
```

`text/json`

```ts
{
  "type": "string",
  "format": "binary"
}
```

***

### [GET]/api/tenant-admin/parameter-values-summary

- Summary  
Query parameter values summary report.

#### Parameters(Query)

```ts
PatientId?: integer
```

```ts
DeviceId?: integer
```

```ts
ParameterKey?: string[]
```

```ts
Reference?: string
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
Q?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    startTimestamp?: integer
    endTimestamp?: integer
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/aggregated-numeric-parameters

#### Parameters(Query)

```ts
StartTimestamp?: integer
```

```ts
EndTimestamp?: integer
```

```ts
Interval: string
```

```ts
AggregationType: string
```

```ts
ParameterKey: string
```

```ts
PatientId?: integer
```

```ts
DeviceId?: integer
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    startTimestamp?: integer
    endTimestamp?: integer
    value?: number
  }[]
}
```

***

### [POST]/api/tenant-admin/patient

- Summary  
Create a patient.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  patientId?: string
  birthdate?: string
  gender?: string
  height?: number
  weight?: number
  address?: string
  address1?: string
  city?: string
  state?: string
  countryCode?: string
  postalCode?: string
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [POST]/api/tenant-admin/patient/{id}

- Summary  
Create a patient with full profile information.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  patientId?: string
  birthdate?: string
  gender?: string
  height?: number
  weight?: number
  address?: string
  address1?: string
  city?: string
  state?: string
  countryCode?: string
  postalCode?: string
  isActive?: boolean
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/patient/{id}

- Summary  
Get patient information.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  patientId?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  birthdate?: string
  countryCode?: string
  gender?: string
  height?: number
  weight?: number
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/tenant-admin/patient/{id}

- Summary  
Update information for a patient

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  phone?: string
  username?: string
  isActive?: boolean
  patientId?: string
  birthdate?: string
  gender?: string
  height?: number
  weight?: number
  address?: string
  address1?: string
  city?: string
  state?: string
  countryCode?: string
  postalCode?: string
  phone2?: string
  phone3?: string
  phone4?: string
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/patient/{id}

- Summary  
Delete a patient.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [HEAD]/api/tenant-admin/patient/{patientExternalId}/exists

- Summary  
Check if a patient exists by external patient id.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [GET]/api/tenant-admin/patients

- Summary  
Get a list of patients.

#### Parameters(Query)

```ts
IsActive?: boolean
```

```ts
Q?: string
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
    patientId?: string
  }[]
}
```

***

### [GET]/api/tenant-admin/patients/temporary

- Summary  
Query temporary patients.

#### Parameters(Query)

```ts
IsActive?: boolean
```

```ts
Q?: string
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    patientId?: string
    createdAt?: integer
  }[]
}
```

***

### [GET]/api/tenant-admin/patient/{id}/hcps

- Summary  
Query associated HCPs to patient.

#### Parameters(Query)

```ts
Q?: string
```

```ts
UserType?: integer
```

```ts
Unassigned?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

***

### [PUT]/api/tenant-admin/patient/{id}/device/{deviceId}/association

- Summary  
Associate a device to a patient.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/patient/{id}/device/{deviceId}/association

- Summary  
Disassociate a device from a patient.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/tenant-admin/patient/{organizationUserId}/data

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  sessionId?: string
}
```

***

### [POST]/api/tenant-admin/datasource

- Summary  
Create datasource for tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  datasourceKey?: string
  datasourceName: string
  datasourceAction: string
  remoteActionEndpoint?: string
  remoteActionSecret?: string
  parameters: {
    key?: string
    name: string
    isNumeric: boolean
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
  }[]
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [POST]/api/tenant-admin/cloud-datasource

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  datasourceName: string
  datasourceAction: string
  parameterKeys?: string[]
  cloudDatasource: {
    cloudDataSourceTemplateId: string
    clientId: string
    clientSecret: string
    authorizationUri: string
    tokenUri: string
    userInfoUri: string
  }
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [GET]/api/tenant-admin/datasources

- Summary  
Query all datasources for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  result: {
    id?: integer
    name?: string
    key?: string
    action?: string
    isCloudDatasource?: boolean
    parameters: {
      id?: integer
      key?: string
      name?: string
      type?: string
      config: {
        aggregations: {
          type?: string
          intervals?: string[]
        }[]
      }
      action?: string
      parentParameterId?: integer
      isNumeric?: boolean
      isHierarchical?: boolean
      unit?: string
      createdAt?: integer
    }[]
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/datasource/{datasourceId}

- Summary  
Get datasource for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  name?: string
  key?: string
  action?: string
  isCloudDatasource?: boolean
  parameters: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/datasource/{datasourceId}

- Summary  
Delete a datasource for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/datasource/{datasourceKey}/remote-action

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  datasourceKey?: string
  endpoint?: string
  secret?: string
  createdAt?: integer
  updatedAt?: integer
  deletedAt?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/tenant-admin/datasource/{datasourceKey}

- Summary  
Associates the datasource to a tenant

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

`application/json`

```ts
{
  id?: integer
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [HEAD]/api/tenant-admin/device/serialnumber/{serialNumber}/exists

- Summary  
Check if serial number exists.

#### Responses

- 204 No Content

- 404 Not Found

`text/plain`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`application/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

`text/json`

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

***

### [GET]/api/tenant-admin/device/{id}

- Summary  
Get a device.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  datasourceId?: integer
  name?: string
  serialNumber?: string
  softwareVersion?: string
  state?: integer
  createdAt?: integer
  updatedAt?: integer
  datasourceName?: string
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/tenant-admin/device/{id}

- Summary  
Update a device.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  name?: string
  softwareVersion?: string
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/device/{id}

- Summary  
Delete Device

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/devices

- Summary  
Get a list of all the devices in the system

#### Parameters(Query)

```ts
Q?: string
```

```ts
State?: integer
```

```ts
IncludeEndedAssociations?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    datasourceId?: integer
    name?: string
    serialNumber?: string
    softwareVersion?: string
    state?: integer
    createdAt?: integer
    updatedAt?: integer
    datasourceName?: string
  }[]
}
```

***

### [POST]/api/tenant-admin/device

- Summary  
Create device for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  datasourceId: integer
  name: string
  serialNumber: string
  softwareVersion: string
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
  certificate?: string
  publicKey?: string
  privateKey?: string
}
```

***

### [PUT]/api/tenant-admin/device/{id}/state/{state}

- Summary  
Update device state.

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/device/{id}/certificate/generate

#### Responses

- 200 Success

`application/json`

```ts
{
  certificate?: string
  publicKey?: string
  privateKey?: string
}
```

***

### [POST]/api/tenant-admin/device/data

#### RequestBody

- application/json

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
  organizationId: integer
  patientId?: integer
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  sessionId?: string
  reference?: string
}
```

***

### [POST]/api/tenant-admin/tenant-user

- Summary  
Create a tenant user.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  userType?: integer
}
```

#### Responses

- 201 Created

`application/json`

```ts
{
  id?: integer
}
```

***

### [GET]/api/tenant-admin/tenant-user/{id}

- Summary  
Get the information for a tenant user.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [PUT]/api/tenant-admin/tenant-user/{id}

- Summary  
Update the information for a tenant user.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  phone?: string
  isActive?: boolean
  acceptedTerms?: string
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [DELETE]/api/tenant-admin/tenant-user/{id}

- Summary  
Delete a tenant user.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/tenant-admin/tenant-users

- Summary  
Query tenant users.

#### Parameters(Query)

```ts
UserType?: integer
```

```ts
Q?: string
```

```ts
IsActive?: boolean
```

```ts
Page?: integer
```

```ts
PageSize?: integer
```

```ts
OrderBy?: string
```

```ts
Direction?: string
```

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

***

### [GET]/api/tenant-admin/tenant

- Summary  
Get information for your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  tenancyName?: string
  countryCode?: string
  isActive?: boolean
  createdAt?: integer
}
```

***

### [PUT]/api/tenant-admin/tenant

- Summary  
Update your tenant.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  tenancyName?: string
  countryCode?: string
  isActive?: boolean
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [POST]/api/tenant-admin/tenant/user/{organizationUserId}/send-confirmation-email

- Summary  
Resend invitation email for specific user.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

***

### [POST]/api/tenant-admin/tenant/user/{organizationUserId}/request-password-reset

- Summary  
Request password reset

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

***

### [GET]/api/tenant-admin

- Summary  
Get your profile information.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
}
```

***

### [PUT]/api/tenant-admin

- Summary  
Update your profile information.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  firstName: string
  lastName: string
  phone?: string
  acceptedTerms?: string
}
```

#### Responses

- 204 No Content

***

### [POST]/api/user/{identityProviderId}/lastlogin

- Summary  
Set last login time for a specific user.

#### Parameters(Query)

```ts
timestamp?: integer
```

#### Responses

- 200 Success

***

### [POST]/api/user/{identityProviderId}/lockedstatus

- Summary  
Set locked status for specific user.

#### Responses

- 200 Success

***

### [DELETE]/api/user/{organizationUserId}/lockedstatus

- Summary  
Remove locked status for specific user.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

***

### [DELETE]/api/user/{identityProviderId}/pendingstatus

- Summary  
Remove pending activation status for specific user.s

#### Responses

- 200 Success

***

### [POST]/api/user/reset-password

- Summary  
Reset your password.

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

***

### [PUT]/api/user/visualization-preference

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### RequestBody

- application/json

```ts
{
  value?: string
}
```

#### Responses

- 204 No Content

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

***

### [GET]/api/user/visualization-preference

#### Headers

```ts
{
  "name": "X-OrganizationId",
  "in": "header",
  "required": true
}
```

#### Responses

- 200 Success

`application/json`

```ts
{
  profileParameterId?: integer
  value?: string
  transactionId?: string
}
```

- 404 Not Found

`application/json`

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

## References

### #/components/schemas/AccessTokenResponse

```ts
{
  accessToken?: string
}
```

### #/components/schemas/AggregationData

```ts
{
  key?: string
  value?: string
}
```

### #/components/schemas/Attribute

```ts
{
  name?: string
  type?: string
}
```

### #/components/schemas/BaseHCPResponse

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
}
```

### #/components/schemas/BaseParameterListResponse

```ts
{
  result: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
}
```

### #/components/schemas/BaseParameterResponse

```ts
{
  id?: integer
  key?: string
  name?: string
  type?: string
  config: {
    aggregations: {
      type?: string
      intervals?: string[]
    }[]
  }
  action?: string
  parentParameterId?: integer
  isNumeric?: boolean
  isHierarchical?: boolean
  unit?: string
  createdAt?: integer
}
```

### #/components/schemas/BasePatientResponse

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  patientId?: string
}
```

### #/components/schemas/BaseUserResponse

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
}
```

### #/components/schemas/BinningParameterValueView

```ts
{
  id?: integer
  reference?: string
  parameterKey?: string
  patientId?: integer
  deviceId?: integer
  startTimestamp?: integer
  endTimestamp?: integer
  unitMeasure?: string
  notes?: string
  dataPoints: {
    startTimestamp?: integer
    endTimestamp?: integer
    value?: number
  }[]
}
```

### #/components/schemas/CertificateAndKeys

```ts
{
  certificate?: string
  publicKey?: string
  privateKey?: string
}
```

### #/components/schemas/CreateCloudDatasourceForTenantRequest

```ts
{
  datasourceName: string
  datasourceAction: string
  parameterKeys?: string[]
  cloudDatasource: {
    cloudDataSourceTemplateId: string
    clientId: string
    clientSecret: string
    authorizationUri: string
    tokenUri: string
    userInfoUri: string
  }
}
```

### #/components/schemas/CreateCloudDatasourceRequest

```ts
{
  cloudDataSourceTemplateId: string
  clientId: string
  clientSecret: string
  authorizationUri: string
  tokenUri: string
  userInfoUri: string
}
```

### #/components/schemas/CreateDatasourceForTenantRequest

```ts
{
  datasourceKey?: string
  datasourceName: string
  datasourceAction: string
  remoteActionEndpoint?: string
  remoteActionSecret?: string
  parameters: {
    key?: string
    name: string
    isNumeric: boolean
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
  }[]
}
```

### #/components/schemas/CreateDeviceCommand

```ts
{
  datasourceId?: integer
  deviceName?: string
  serialNumber?: string
  state?: integer
}
```

### #/components/schemas/CreateDeviceForPatientRequest

```ts
{
  datasourceKey: string
  deviceName: string
  serialNumber: string
  softwareVersion: string
}
```

### #/components/schemas/CreateDeviceForTenantRequest

```ts
{
  datasourceId: integer
  name: string
  serialNumber: string
  softwareVersion: string
}
```

### #/components/schemas/CreateDeviceResponse

```ts
{
  id?: integer
  certificate?: string
  publicKey?: string
  privateKey?: string
}
```

### #/components/schemas/CreateFullPatientRequest

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  patientId?: string
  birthdate?: string
  gender?: string
  height?: number
  weight?: number
  address?: string
  address1?: string
  city?: string
  state?: string
  countryCode?: string
  postalCode?: string
  isActive?: boolean
}
```

### #/components/schemas/CreateGroupRequest

```ts
{
  name: string
  description?: string
  parentGroupId?: integer
}
```

### #/components/schemas/CreateHCPRequest

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  postalCode?: string
  state?: string
  countryCode?: string
  userType: integer
}
```

### #/components/schemas/CreateParametersForDatasourceRequest

```ts
{
  key?: string
  name: string
  isNumeric: boolean
  config: {
    aggregations: {
      type?: string
      intervals?: string[]
    }[]
  }
}
```

### #/components/schemas/CreatePatientRequest

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  patientId?: string
  birthdate?: string
  gender?: string
  height?: number
  weight?: number
  address?: string
  address1?: string
  city?: string
  state?: string
  countryCode?: string
  postalCode?: string
}
```

### #/components/schemas/CreateSystemUserRequest

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  userType?: integer
}
```

### #/components/schemas/CreateTenantRequest

```ts
{
  tenancyName: string
  countryCode?: string
  admin: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    username?: string
  }
}
```

### #/components/schemas/CreateTenantUserRequest

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
  userType?: integer
}
```

### #/components/schemas/CreateUserRequest

```ts
{
  firstName: string
  lastName: string
  email: string
  phone?: string
  username?: string
}
```

### #/components/schemas/DataPoint

```ts
{
  startTimestamp?: integer
  endTimestamp?: integer
  value?: number
}
```

### #/components/schemas/Datasource

```ts
{
  name?: string
  key?: string
  action?: string
  parameters: {
    name?: string
    key?: string
    isNumeric?: boolean
    config: {
    }
    type?: string
    parentParameterKey?: string
    unitMeasure?: string
  }[]
}
```

### #/components/schemas/DatasourceAction

```ts
{
  name?: string
  attributes: {
    name?: string
    type?: string
  }[]
}
```

### #/components/schemas/DatasourcesConfigModel

```ts
{
  actions: {
    name?: string
    attributes: {
      name?: string
      type?: string
    }[]
  }[]
  datasources: {
    name?: string
    key?: string
    action?: string
    parameters: {
      name?: string
      key?: string
      isNumeric?: boolean
      config: {
      }
      type?: string
      parentParameterKey?: string
      unitMeasure?: string
    }[]
  }[]
}
```

### #/components/schemas/DeviceResponse

```ts
{
  id?: integer
  datasourceId?: integer
  name?: string
  serialNumber?: string
  softwareVersion?: string
  state?: integer
  createdAt?: integer
  updatedAt?: integer
  datasourceName?: string
}
```

### #/components/schemas/ErrorModel

```ts
{
  traceId?: string
  field?: string
  code?: string
}
```

### #/components/schemas/ExternalHCPResponse

```ts
{
  userId?: string
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  inCurrentTenant?: boolean
}
```

### #/components/schemas/GetAggregationTypesAndIntervalsResponse

```ts
{
  aggregationTypes: {
    key?: string
    value?: string
  }[]
  aggregationIntervals:#/components/schemas/AggregationData[]
}
```

### #/components/schemas/GetDeviceStatusResponse

```ts
{
  isActive?: boolean
  associatedWithTenant?: boolean
  associatedWithPatient?: boolean
}
```

### #/components/schemas/GetGlobalParameterConfigResponse

```ts
{
  globalParameters: {
    name?: string
    key?: string
    isNumeric?: boolean
    type?: string
    parentParameterKey?: string
    unitMeasure?: string
  }[]
}
```

### #/components/schemas/GetPatientDevicesResponse

```ts
{
  result: {
    organizationId?: integer
    organizationUserId?: integer
    deviceId?: integer
    userDeviceAssociationId?: integer
    startDate?: integer
    endDate?: integer
    lastUsedAt?: integer
    deviceName?: string
    serialNumber?: string
    datasourceId?: integer
    state?: integer
    softwareVersion?: string
  }[]
}
```

### #/components/schemas/GetRateLimitConfigurationResponse

```ts
{
  datasourcesLimit?: integer
  devicesLimit?: integer
  patientsLimit?: integer
  tenantUsersLimit?: integer
  hcpsLimit?: integer
  tenantsLimit?: integer
  tenantRequestLimit?: integer
  rawStorageLimit?: string
  datasourcesRemainingLimit?: integer
  devicesRemainingLimit?: integer
  patientsRemainingLimit?: integer
  tenantUsersRemainingLimit?: integer
  hcpsRemainingLimit?: integer
  tenantsRemainingLimit?: integer
}
```

### #/components/schemas/GetTenantRateLimitsResponse

```ts
{
  result: {
    id?: integer
    organizationId?: integer
    limitKey?: string
    currentValue?: number
    maxValue?: number
    createdAt?: integer
    updatedAt?: integer
    isActive?: boolean
    unitMeasure?: string
  }[]
}
```

### #/components/schemas/GroupMemberResponse

```ts
{
  userName?: string
  firstName?: string
  lastName?: string
  creationTime?: integer
  userType?: integer
  organizationUserId?: integer
  email?: string
}
```

### #/components/schemas/GroupResponse

```ts
{
  id?: integer
  name?: string
  description?: string
  parentGroupId?: integer
}
```

### #/components/schemas/HCPResponse

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  practice?: string
  speciality?: string
}
```

### #/components/schemas/HCPSelfUpdateRequest

```ts
{
  firstName?: string
  lastName?: string
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  phone?: string
}
```

### #/components/schemas/InfoResponse

```ts
{
  availableLanguages?: string[]
  currentLanguage?: string
  translations: {
  }
  permissions?: string[]
  userInfo: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }
}
```

### #/components/schemas/InvitationListView

```ts
{
  id?: integer
  email?: string
  code?: string
  name?: string
  country?: string
  company?: string
  receiveUpdatesConsent?: boolean
  status?: string
  createdAt?: integer
  expiresAt?: integer
  activatedAt?: integer
}
```

### #/components/schemas/InvitationRequest

```ts
{
  name: string
  email: string
  company: string
  country: string
  updates?: boolean
  captchaToken: string
}
```

### #/components/schemas/InviteHCPRequest

```ts
{
  firstName?: string
  lastName?: string
  userType?: integer
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  phone?: string
}
```

### #/components/schemas/JsonNode

```ts
{
  options: {
    propertyNameCaseInsensitive?: boolean
  }
  parent: {
    options:#/components/schemas/JsonNodeOptions
    parent:#/components/schemas/JsonNode
    root:#/components/schemas/JsonNode
  }
  root:#/components/schemas/JsonNode
}
```

### #/components/schemas/JsonNodeOptions

```ts
{
  propertyNameCaseInsensitive?: boolean
}
```

### #/components/schemas/NumericAggregatedData

```ts
{
  startTimestamp?: integer
  endTimestamp?: integer
  value?: number
}
```

### #/components/schemas/PaginationResponse

```ts
{
  total?: integer
  page?: integer
  pageSize?: integer
}
```

### #/components/schemas/Parameter

```ts
{
  name?: string
  key?: string
  isNumeric?: boolean
  config: {
  }
  type?: string
  parentParameterKey?: string
  unitMeasure?: string
}
```

### #/components/schemas/ParameterAggregation

```ts
{
  type?: string
  intervals?: string[]
}
```

### #/components/schemas/ParameterConfig

```ts
{
  aggregations: {
    type?: string
    intervals?: string[]
  }[]
}
```

### #/components/schemas/ParameterConfigResponse

```ts
{
  name?: string
  key?: string
  isNumeric?: boolean
  type?: string
  parentParameterKey?: string
  unitMeasure?: string
}
```

### #/components/schemas/ParameterValueListView

```ts
{
  patientId?: integer
  deviceId?: integer
  parameterKey?: string
  startTimestamp?: integer
  endTimestamp?: integer
  reference?: string
  createdAt?: integer
  isNumeric?: boolean
}
```

### #/components/schemas/ParameterValueSummaryListView

```ts
{
  startTimestamp?: integer
  endTimestamp?: integer
}
```

### #/components/schemas/ParameterView

```ts
{
  key?: string
  name?: string
  parentParameterKey?: string
  isNumeric?: boolean
  unit?: string
}
```

### #/components/schemas/PatientClouddataSourceResult

```ts
{
  id?: integer
  name?: string
  key?: string
  action?: string
  isCloudDatasource?: boolean
  parameters: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
  cloudDataSourceTemplateId?: string
  maskedClientId?: string
  authorizationUri?: string
  tokenUri?: string
  redirectUri?: string
  userInfoUri?: string
  cloudAccountConnectionStatus?: string
}
```

### #/components/schemas/PatientDeviceView

```ts
{
  organizationId?: integer
  organizationUserId?: integer
  deviceId?: integer
  userDeviceAssociationId?: integer
  startDate?: integer
  endDate?: integer
  lastUsedAt?: integer
  deviceName?: string
  serialNumber?: string
  datasourceId?: integer
  state?: integer
  softwareVersion?: string
}
```

### #/components/schemas/PatientQueryDataSourcesResult

```ts
{
  id?: integer
  name?: string
  key?: string
  action?: string
  isCloudDatasource?: boolean
  parameters: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
  cloudAccountConnectionStatus?: string
}
```

### #/components/schemas/PatientResponse

```ts
{
  id?: integer
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  phone?: string
  isActive?: boolean
  lastLoginTime?: integer
  isPendingActivation?: boolean
  isLocked?: boolean
  userType?: integer
  createdAt?: integer
  acceptedTerms?: string
  patientId?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  birthdate?: string
  countryCode?: string
  gender?: string
  height?: number
  weight?: number
}
```

### #/components/schemas/PersonaParameter

```ts
{
  organizationId?: integer
  organizationUserId?: integer
  username?: string
  userType?: integer
}
```

### #/components/schemas/ProblemDetails

```ts
{
  type?: string
  title?: string
  status?: integer
  detail?: string
  instance?: string
}
```

### #/components/schemas/ProfileValueResponse

```ts
{
  profileParameterId?: integer
  value?: string
  transactionId?: string
}
```

### #/components/schemas/QueryCloudDataSourceResult

```ts
{
  cloudDataSourceTemplateId?: string
  authorizationGrantType?: string
  clientAuthenticationMethod?: string
  userNameAttribute?: string
  organizationRedirectUri?: string
  organizationNotificationUri?: string
  scopes?: string[]
  authorizationUris?: string[]
  tokenUris?: string[]
  userInfoUris?: string[]
  parameters: {
    key?: string
    name?: string
    parentParameterKey?: string
    isNumeric?: boolean
    unit?: string
  }[]
}
```

### #/components/schemas/QueryCloudDatasourceTemplatesResponse

```ts
{
  result: {
    cloudDataSourceTemplateId?: string
    authorizationGrantType?: string
    clientAuthenticationMethod?: string
    userNameAttribute?: string
    organizationRedirectUri?: string
    organizationNotificationUri?: string
    scopes?: string[]
    authorizationUris?: string[]
    tokenUris?: string[]
    userInfoUris?: string[]
    parameters: {
      key?: string
      name?: string
      parentParameterKey?: string
      isNumeric?: boolean
      unit?: string
    }[]
  }[]
}
```

### #/components/schemas/QueryDataSourceResult

```ts
{
  id?: integer
  name?: string
  key?: string
  action?: string
  isCloudDatasource?: boolean
  parameters: {
    id?: integer
    key?: string
    name?: string
    type?: string
    config: {
      aggregations: {
        type?: string
        intervals?: string[]
      }[]
    }
    action?: string
    parentParameterId?: integer
    isNumeric?: boolean
    isHierarchical?: boolean
    unit?: string
    createdAt?: integer
  }[]
}
```

### #/components/schemas/QueryDatasourceForTenantResponse

```ts
{
  result: {
    id?: integer
    name?: string
    key?: string
    action?: string
    isCloudDatasource?: boolean
    parameters: {
      id?: integer
      key?: string
      name?: string
      type?: string
      config: {
        aggregations: {
          type?: string
          intervals?: string[]
        }[]
      }
      action?: string
      parentParameterId?: integer
      isNumeric?: boolean
      isHierarchical?: boolean
      unit?: string
      createdAt?: integer
    }[]
  }[]
}
```

### #/components/schemas/QueryDevicesResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    datasourceId?: integer
    name?: string
    serialNumber?: string
    softwareVersion?: string
    state?: integer
    createdAt?: integer
    updatedAt?: integer
    datasourceName?: string
  }[]
}
```

### #/components/schemas/QueryExternalHCPResponse

```ts
{
  result: {
    userId?: string
    username?: string
    firstName?: string
    lastName?: string
    email?: string
    inCurrentTenant?: boolean
  }[]
}
```

### #/components/schemas/QueryGroupMembersResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    userName?: string
    firstName?: string
    lastName?: string
    creationTime?: integer
    userType?: integer
    organizationUserId?: integer
    email?: string
  }[]
}
```

### #/components/schemas/QueryGroupsResponse

```ts
{
  result: {
    id?: integer
    name?: string
    description?: string
    parentGroupId?: integer
  }[]
}
```

### #/components/schemas/QueryHCPPatientsResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
    patientId?: string
  }[]
}
```

### #/components/schemas/QueryHCPsResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

### #/components/schemas/QueryInvitationsResult

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    email?: string
    code?: string
    name?: string
    country?: string
    company?: string
    receiveUpdatesConsent?: boolean
    status?: string
    createdAt?: integer
    expiresAt?: integer
    activatedAt?: integer
  }[]
}
```

### #/components/schemas/QueryNumericAggregatedDataResponse

```ts
{
  result: {
    startTimestamp?: integer
    endTimestamp?: integer
    value?: number
  }[]
}
```

### #/components/schemas/QueryParameterValuesBinningResponse

```ts
{
  result: {
    id?: integer
    reference?: string
    parameterKey?: string
    patientId?: integer
    deviceId?: integer
    startTimestamp?: integer
    endTimestamp?: integer
    unitMeasure?: string
    notes?: string
    dataPoints: {
      startTimestamp?: integer
      endTimestamp?: integer
      value?: number
    }[]
  }[]
}
```

### #/components/schemas/QueryParameterValuesResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    patientId?: integer
    deviceId?: integer
    parameterKey?: string
    startTimestamp?: integer
    endTimestamp?: integer
    reference?: string
    createdAt?: integer
    isNumeric?: boolean
  }[]
}
```

### #/components/schemas/QueryParameterValuesSummaryResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    startTimestamp?: integer
    endTimestamp?: integer
  }[]
}
```

### #/components/schemas/QueryPatientDatasourceForTenantResponse

```ts
{
  result: {
    id?: integer
    name?: string
    key?: string
    action?: string
    isCloudDatasource?: boolean
    parameters: {
      id?: integer
      key?: string
      name?: string
      type?: string
      config: {
        aggregations: {
          type?: string
          intervals?: string[]
        }[]
      }
      action?: string
      parentParameterId?: integer
      isNumeric?: boolean
      isHierarchical?: boolean
      unit?: string
      createdAt?: integer
    }[]
    cloudAccountConnectionStatus?: string
  }[]
}
```

### #/components/schemas/QueryPatientHCPsResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

### #/components/schemas/QueryPatientsResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
    patientId?: string
  }[]
}
```

### #/components/schemas/QuerySystemUsersResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

### #/components/schemas/QueryTemporaryPatientsResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    patientId?: string
    createdAt?: integer
  }[]
}
```

### #/components/schemas/QueryTenantDeviceAssociationsResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    organizationId?: integer
    startDate?: integer
    endDate?: integer
    device: {
      id?: integer
      datasourceId?: integer
      name?: string
      serialNumber?: string
      softwareVersion?: string
      state?: integer
      createdAt?: integer
      updatedAt?: integer
      datasourceName?: string
    }
  }[]
}
```

### #/components/schemas/QueryTenantUsersResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    phone?: string
    isActive?: boolean
    lastLoginTime?: integer
    isPendingActivation?: boolean
    isLocked?: boolean
    userType?: integer
    createdAt?: integer
    acceptedTerms?: string
  }[]
}
```

### #/components/schemas/QueryTenantsResponse

```ts
{
  pagination: {
    total?: integer
    page?: integer
    pageSize?: integer
  }
  result: {
    id?: integer
    tenancyName?: string
    countryCode?: string
    isActive?: boolean
    createdAt?: integer
  }[]
}
```

### #/components/schemas/RateLimitListView

```ts
{
  id?: integer
  organizationId?: integer
  limitKey?: string
  currentValue?: number
  maxValue?: number
  createdAt?: integer
  updatedAt?: integer
  isActive?: boolean
  unitMeasure?: string
}
```

### #/components/schemas/RegisterTenantRequest

```ts
{
  tenancyName: string
  countryCode?: string
  admin: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    username?: string
  }
  invitationCode?: string
}
```

### #/components/schemas/RemoteDatasourceActionResponse

```ts
{
  id?: integer
  datasourceKey?: string
  endpoint?: string
  secret?: string
  createdAt?: integer
  updatedAt?: integer
  deletedAt?: integer
}
```

### #/components/schemas/ResourceIdResponse

```ts
{
  id?: integer
}
```

### #/components/schemas/SaveDataResponse

```ts
{
  sessionId?: string
}
```

### #/components/schemas/SaveDeviceDataRequest

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
  organizationId: integer
  patientId?: integer
}
```

### #/components/schemas/SaveDeviceDataResponse

```ts
{
  sessionId?: string
  reference?: string
}
```

### #/components/schemas/SaveParameterDataRequest

```ts
{
  serialNumber: string
  dataType?: string
  timestamp?: integer
  metadata?: string
}
```

### #/components/schemas/SendEmailRequest

```ts
{
  fromEmail?: string
  fromName?: string
  to: string
  subject: string
  body: string
  isBodyHtml: boolean
}
```

### #/components/schemas/SystemUserSelfUpdateRequest

```ts
{
  firstName: string
  lastName: string
  phone?: string
  acceptedTerms?: string
}
```

### #/components/schemas/TemporaryPatientResponse

```ts
{
  id?: integer
  patientId?: string
  createdAt?: integer
}
```

### #/components/schemas/TenantDeviceAssociation

```ts
{
  organizationId?: integer
  startDate?: integer
  endDate?: integer
  device: {
    id?: integer
    datasourceId?: integer
    name?: string
    serialNumber?: string
    softwareVersion?: string
    state?: integer
    createdAt?: integer
    updatedAt?: integer
    datasourceName?: string
  }
}
```

### #/components/schemas/TenantResponse

```ts
{
  id?: integer
  tenancyName?: string
  countryCode?: string
  isActive?: boolean
  createdAt?: integer
}
```

### #/components/schemas/TenantUserSelfUpdateRequest

```ts
{
  firstName: string
  lastName: string
  phone?: string
  acceptedTerms?: string
}
```

### #/components/schemas/UpdateDeviceRequest

```ts
{
  name?: string
  softwareVersion?: string
}
```

### #/components/schemas/UpdateGroupRequest

```ts
{
  name: string
  description?: string
  parentGroupId?: integer
}
```

### #/components/schemas/UpdateHCPRequest

```ts
{
  firstName?: string
  lastName?: string
  practice?: string
  speciality?: string
  address?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  countryCode?: string
  phone?: string
  isActive?: boolean
}
```

### #/components/schemas/UpdatePatientRequest

```ts
{
  firstName: string
  lastName: string
  phone?: string
  username?: string
  isActive?: boolean
  patientId?: string
  birthdate?: string
  gender?: string
  height?: number
  weight?: number
  address?: string
  address1?: string
  city?: string
  state?: string
  countryCode?: string
  postalCode?: string
  phone2?: string
  phone3?: string
  phone4?: string
}
```

### #/components/schemas/UpdateProfileParameterRequest

```ts
{
  value?: string
}
```

### #/components/schemas/UpdateSystemUserRequest

```ts
{
  firstName: string
  lastName: string
  phone?: string
  isActive?: boolean
  acceptedTerms?: string
}
```

### #/components/schemas/UpdateTenantRequest

```ts
{
  tenancyName?: string
  countryCode?: string
  isActive?: boolean
}
```

### #/components/schemas/UpdateTenantUserRequest

```ts
{
  firstName: string
  lastName: string
  phone?: string
  isActive?: boolean
  acceptedTerms?: string
}
```

### #/components/schemas/UserTenantResponse

```ts
{
  organizationId?: integer
  tenantId?: integer
  tenantName?: string
}
```

### #/components/schemas/UserTenantsResponse

```ts
{
  result: {
    organizationId?: integer
    tenantId?: integer
    tenantName?: string
  }[]
}
```

### #/components/securitySchemes/Bearer

```ts
{
  "type": "apiKey",
  "description": "Please enter JWT with Bearer into field",
  "name": "Authorization",
  "in": "header"
}
```
