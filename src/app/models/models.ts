export class Project {
  uid!: string;
  name!: string;
  description!: string;
  url!: string;
  yearFounded!: string;
  sustainableDevelopmentGoal!: Array<string>;
  projectListingDate!: string;
  size!: string;
  sectors!: Array<string>;
  email!: string;
  phoneNumber!: string;
  registry!: string;
  registryLink!: string;
  corsiaEligibility!: string;
  projectDocument!: string;
  afoluActivity!: string;
  projectCcbStatus!: string;
  projectCcbValidator!: string;
  projectCcbStandard!: string;
  projectCcbVerification!: string;
  projectAcreage!: string;
  projectType!: string;
  projectSubType!: string;
  methodology!: Array<string>;
  originRegistryId!: string;
  registryUri!: string;
  projectStatus!: string;
  electricityProducedInMwh!: string;
  projectReportingStartDate!: string;
  projectRegistrationDate!: string;
  projectStartDate!: string;
  estimatedAnnualCredits!: string;
  estimatedDirectPrice!: string;
  estimatedAnnualEmissionReduction!: string;
  monitoringPeriodEndDate!: string;
  monitoringPeriodStartDate!: string;
  projectProponents!: Array<string>;
  projectVerifiers!: Array<string>;
  projectOwners!: Array<string>;
  countries!: Array<string>;
  ratings!: Array<string>;
}

export class Country {
  name!: string;
}
