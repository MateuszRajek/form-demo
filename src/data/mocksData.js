const appointmentType = ["Dermatology", "Eye Doctor"];
const locationData = ["Carrickmines", "Lucan"];
const insurerCompanies = ["VHI Healthcare", "Irish Life Health", "Laya HEalthcare", "Other", "None"];
const countries = ["Ireland", "United Kingdom", "Other"];
const consentOptions = [
  { consent: "AppointmentProccess", text: "Please confirm that you understand the Appointment Proccess" },
  {
    consent: "PrivacyPolicy",
    text: "By submitting this form, you are agreeing to our Privacy Policy",
  },
  {
    consent: "DataSharing",
    text: "Consent to sharing your data with Vhi Healthcara",
  },
];
const steps = [
  { step: "appointment", title: "Appointment Details", key: "appointmentDetails" },
  { step: "patient", title: "Patient Contact Details", key: "patientDetails" },
  { step: "address", title: "Patient Address", key: "patientAddress" },
  { step: "gp", title: "GP Contact Details", key: "gpDetails" },
  { step: "consent", title: "Consent", key: "consent" },
];

export { appointmentType, locationData, insurerCompanies, countries, consentOptions, steps };
