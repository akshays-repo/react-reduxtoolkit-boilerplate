// All hardcoded dropdowns

interface GenderDropDownInterface {
  id: string | number;
  label: string;
}

export const GENDERS: GenderDropDownInterface[] = [
  { id: 1, label: 'Male' },
  { id: 2, label: 'Female' },
  { id: 3, label: 'Trans' },
  { id: 4, label: 'Other' },
];

interface FarmTypeDropDownInterface {
  id: string | number;
  label: string;
}

export const FARM_TYPE: FarmTypeDropDownInterface[] = [
  { id: 1, label: 'Small' },
  { id: 2, label: 'Medium' },
  { id: 3, label: 'Large' },
];

export const BILLING_TYPE: FarmTypeDropDownInterface[] = [
  { id: 1, label: 'Monthly' },
  { id: 2, label: 'Quarter' },
  { id: 3, label: 'Semi annual' },
  { id: 4, label: 'Annual' },
];
