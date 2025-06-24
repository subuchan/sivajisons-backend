const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/visaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Mongoose Schema
const ApplicationSchema = new mongoose.Schema({

surname: { type: String },
  givenname: { type: String },
  dob: { type: String },
  place_of_birth: { type: String },
  gender: { type: String },
  nationality: { type: String },

  travelling_with_anyone: { type: String },
  arrival_date: { type: String },
  stay_length: { type: String },

  companion_travelling_with_anyone: { type: String },
  companion_nationality: { type: String },
  companion_familyname: { type: String },
  companion_givenname: { type: String },
  companion_dob: { type: String },
  companion_visa: { type: String },
  planned_arrival_date: { type: String },
  intended_stay_duration: { type: String },
  uk_address_line1: { type: String },
  uk_address_line2: { type: String },
  uk_postcode: { type: String },
  uk_contact1: { type: String },
  uk_contact2: { type: String },
  uk_email: { type: String },

  perm_address_line1: { type: String },
  perm_address_line2: { type: String },
  perm_address_line3: { type: String },
  perm_address_line4: { type: String },
  perm_postal_code: { type: String },
  perm_country: { type: String },
  perm_contact_primary: { type: String },
  perm_contact_secondary: { type: String },
  perm_email: { type: String },
  perm_duration_at_address: { type: String },
  prefer_other_contact: { type: String },

  visa_issued_last_10_years: { type: String },
  visa_type: { type: String },
  visa_issue_date: { type: String },
  visa_expiry_date: { type: String },
  visa_issuing_authority: { type: String },
  uk_travel_last_10_years: { type: String },
  uk_arrival_date: { type: String },
  uk_departure_date: { type: String },
  uk_trip_purpose: { type: String },
  home_office_application: { type: String },
  home_office_app_date: { type: String },
  home_office_app_type: { type: String },
  home_office_ref_no: { type: String },
  refused_entry_uk: { type: String },
  uk_refusal_date: { type: String },
  uk_refusal_port: { type: String },
  uk_refusal_reason: { type: String },
  uk_refusal_reference: { type: String },
  refused_visa_any_country: { type: String },
  refused_visa_country: { type: String },
  refused_visa_type: { type: String },
  refused_visa_date: { type: String },
  refused_visa_reason: { type: String },
  other_country_travel: { type: String },
  other_travel_date: { type: String },
  other_travel_country: { type: String },
  other_travel_reason: { type: String },
  ni_number: { type: String },
  interview_language: { type: String },

  marital_status: { type: String },
  spouse_travelling_with_you: { type: String },
  spouse_passport_number: { type: String },
  spouse_nationality: { type: String },
  spouse_family_name: { type: String },
  spouse_given_name: { type: String },
  spouse_dob: { type: String },
  spouse_lives_with_you: { type: String },

  father_nationality: { type: String },
  father_family_name: { type: String },
  father_given_name: { type: String },
  father_dob: { type: String },
  father_place_of_birth: { type: String },

  mother_nationality: { type: String },
  mother_family_name: { type: String },
  mother_given_name: { type: String },
  mother_dob: { type: String },
  mother_place_of_birth: { type: String },

  has_dependent_children: { type: String },
  dependent_child_passport: { type: String },
  dependent_child_nationality: { type: String },
  dependent_child_family_name: { type: String },
  dependent_child_given_name: { type: String },
  dependent_child_dob: { type: String },
  dependent_child_birthplace: { type: String },
  dependent_child_travelling_with_you: { type: String },
  dependent_child_lives_with_you: { type: String },
  dependent_child_address1: { type: String },
  dependent_child_address2: { type: String },
  dependent_child_address3: { type: String },
  dependent_child_address4: { type: String },
  dependent_child_postal: { type: String },

  has_non_dependent_children: { type: String },
  non_dep_child_passport: { type: String },
  non_dep_child_nationality: { type: String },
  non_dep_child_family_name: { type: String },
  non_dep_child_given_name: { type: String },
  non_dep_child_dob: { type: String },
  non_dep_child_birthplace: { type: String },
  non_dep_child_living_with: { type: String },
  non_dep_child_relationship: { type: String },
  non_dep_child_parents_relationship: { type: String },

  worked_in_restricted_orgs: { type: String },
  past_org_name: { type: String },
  past_org_title: { type: String },
  past_org_work_type: { type: String },
  past_org_start_date: { type: String },
  past_org_end_date: { type: String },
  current_work_status: { type: String },
  monthly_income: { type: String },
  current_employer_name: { type: String },
  current_job_title: { type: String },
  current_work_type: { type: String },
  employer_address1: { type: String },
  employer_address2: { type: String },
  employer_address3: { type: String },
  employer_address4: { type: String },
  employer_postal_code: { type: String },
  employer_country: { type: String },
  employer_contact1: { type: String },
  employer_contact2: { type: String },
  employer_email: { type: String },
  current_job_start: { type: String },
  has_additional_jobs: { type: String },
  additional_job_org: { type: String },
  additional_job_title: { type: String },
  additional_job_work: { type: String },
  additional_job_start: { type: String },
  additional_job_end: { type: String },
  self_employed_income: { type: String },
  self_employed_company: { type: String },
  self_employed_title: { type: String },
  self_employed_work: { type: String },
  self_employed_address1: { type: String },
  self_employed_address2: { type: String },
  self_employed_address3: { type: String },
  self_employed_address4: { type: String },
  self_employed_postal: { type: String },
  self_employed_country: { type: String },
  self_employed_contact1: { type: String },
  self_employed_contact2: { type: String },
  self_employed_email: { type: String },
  self_employed_start: { type: String },
  self_employed_additional_jobs: { type: String },
  self_emp_add_job_org: { type: String },
  self_emp_add_job_title: { type: String },
  self_emp_add_job_work: { type: String },
  self_emp_add_job_start: { type: String },
  self_emp_add_job_end: { type: String },

  has_other_income: { type: String },
  other_income_total: { type: String },
  other_income_gbp: { type: String },
  monthly_living_costs: { type: String },
  monthly_income_given_to_family: { type: String },
  trip_cost: { type: String },
  trip_total_money: { type: String },
  trip_ticket_cost: { type: String },
  trip_accommodation_cost: { type: String },
  trip_living_expenses_cost: { type: String },
  trip_sponsored: { type: String },
  trip_sponsored_amount: { type: String },

  uk_plan: { type: String },
  has_family_or_friends_uk: { type: String },
  relative_relationship: { type: String },
  relative_surname: { type: String },
  relative_given_name: { type: String },
  relative_nationality: { type: String },
  relative_status: { type: String },
  relative_address1: { type: String },
  relative_address2: { type: String },
  relative_address3: { type: String },
  relative_address4: { type: String },
  relative_postal: { type: String },
  relative_contact1: { type: String },
  relative_contact2: { type: String },
  relative_email: { type: String },
  stay_with_relative: { type: String },

  received_medical_treatment_uk: { type: String },
  uk_inviter: { type: String },
  uk_inviter_last_name: { type: String },
  uk_inviter_first_name: { type: String },
  uk_institution_name: { type: String },
  uk_institution_type: { type: String },
  uk_institution_address1: { type: String },
  uk_institution_address2: { type: String },
  uk_institution_address3: { type: String },
  uk_institution_address4: { type: String },
  uk_institution_postal: { type: String },
  uk_institution_contact: { type: String },
  additional_info: { type: String },})
const Application = mongoose.model("Application", ApplicationSchema);
const usVisaSchema = new mongoose.Schema({
  security_question_answer: { type: String },

  // Personal Information 1
  surnames: { type: String },
  given_names: { type: String },
  native_alphabet_name: { type: String },
  used_other_names: { type: String },
  telecode_name: { type: String },
  sex: { type: String },
  marital_status: { type: String },
  dob: { type: String },
  city_of_birth: { type: String },
  place_of_birth: { type: String },

  // Personal Information 2
  nationality: { type: String },
  other_nationality: { type: String },
  national_id_number: { type: String },
  us_ssn: { type: String },
  us_tax_id: { type: String },

  // Address and Phone
  home_address_line1: { type: String },
  home_address_line2: { type: String },
  home_city: { type: String },
  home_state: { type: String },
  home_postal: { type: String },
  home_country: { type: String },
  same_mailing_address: { type: String },
  phone_primary: { type: String },
  phone_secondary: { type: String },
  work_phone: { type: String },
  email: { type: String },

  // Passport Info
  passport_type: { type: String },
  passport_book_number: { type: String },
  passport_issuing_country: { type: String },
  passport_issue_city: { type: String },
  passport_issue_state: { type: String },
  passport_issue_country: { type: String },
  passport_issuance_date: { type: String },
  passport_expiry_date: { type: String },
  passport_lost: { type: String },

  // Travel Info
  trip_purpose: { type: String },
  trip_purpose_other: { type: String },
  specific_plans: { type: String },
  arrival_date: { type: String },
  stay_length: { type: String },
  us_street_address: { type: String },
  us_city: { type: String },
  us_state: { type: String },
  us_zip: { type: String },
  trip_payer: { type: String },
  travelling_with_group: { type: String },

  // Previous US Travel Info
  been_in_us: { type: String },
  us_drivers_license: { type: String },
  issued_us_visa: { type: String },
  refused_us_visa: { type: String },
  immigrant_petition: { type: String },

  // US Contact
  contact_person_org: { type: String },
  contact_relationship: { type: String },
  contact_address_line1: { type: String },
  contact_city: { type: String },
  contact_state: { type: String },
  contact_zip: { type: String },
  contact_phone: { type: String },
  contact_email: { type: String },

  // Family - Relatives
  father_fullname_dob: { type: String },
  mother_fullname_dob: { type: String },
  immediate_relatives_us: { type: String },
  other_relatives_us: { type: String },

  // Family - Spouse
  spouse_surnames: { type: String },
  spouse_given_names: { type: String },
  spouse_dob: { type: String },
  spouse_nationality: { type: String },
  spouse_birth_city: { type: String },
  spouse_birth_country: { type: String },
  spouse_address: { type: String },

  // Work/Education/Training
  primary_occupation: { type: String },
  employer_school_name: { type: String },
  employer_address_line1: { type: String },
  employer_city: { type: String },
  employer_state: { type: String },
  employer_zip: { type: String },
  employer_phone: { type: String },
  employer_country: { type: String },
  employer_duties: { type: String },

  // Previous Work
  prev_employer_name: { type: String },
  prev_employer_address_line1: { type: String },
  prev_employer_city: { type: String },
  prev_employer_state: { type: String },
  prev_employer_zip: { type: String },
  prev_employer_phone: { type: String },
  prev_employer_country: { type: String },
  prev_job_title: { type: String },
  prev_supervisor_surname: { type: String },
  prev_supervisor_given: { type: String },
  prev_employment_from: { type: String },
  prev_employment_to: { type: String },
  prev_employer_duties: { type: String },

  // Education Info
  edu_institution: { type: String },
  edu_address_line1: { type: String },
  edu_city: { type: String },
  edu_state: { type: String },
  edu_zip: { type: String },
  edu_country: { type: String },
  edu_course: { type: String },
  edu_from: { type: String },
  edu_to: { type: String },

  // Additional
  clan_or_tribe: { type: String },
  languages_spoken: { type: String },
  travel_past_5_years: { type: String },
  professional_membership: { type: String },
  special_skills: { type: String },
  served_military: { type: String },
  paramilitary_involvement: { type: String },

  // Security Questions
  health_disease: { type: String },
  mental_disorder: { type: String },
  drug_abuse: { type: String },
  arrested_convicted: { type: String },
  drugs_law_violated: { type: String },
  prostitution: { type: String },
  money_laundering: { type: String },
  human_trafficking: { type: String },
  trafficking_helped: { type: String },
  trafficking_related_benefit: { type: String },
  espionage: { type: String },
  terrorism: { type: String },
  terrorism_support: { type: String },
  terrorism_member: { type: String },
  genocide: { type: String },
  torture: { type: String },
  extrajudicial_killings: { type: String },
  child_soldiers: { type: String },
  religion_violation: { type: String },
  forced_abortions: { type: String },
  organ_harvest: { type: String },
  visa_fraud: { type: String },
  custody_violations: { type: String },
  illegal_voting: { type: String },
  renounce_tax_evasion: { type: String }
});
const USVisa = mongoose.model("USVisa", usVisaSchema);

// ✅ Nodemailer config (update email & password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hiphopsandy63@gmail.com",          // Replace this with your email
    pass: "lzml puck yoij hgbw",       // Use Gmail App Password (not your regular password)
  },
});

// ✅ POST route to receive form data
app.post("/api/apply", async (req, res) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();

    const mailOptions = {
      from: "youradmin@gmail.com",
      to: "sarathibalaji2037@gmail.com", // Update this to your management email
      subject: "New Visa Application Received",
      html: `
  <h2>🛂 Uk Visa Application Received</h2>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif; width: 100%;">
  <tr style="background-color: #f2f2f2;"><th colspan="2">👤 Personal Details</th></tr>
  <tr><td><strong>Surname</strong></td><td>${req.body.surname}</td></tr>
  <tr><td><strong>Given Name</strong></td><td>${req.body.givenname}</td></tr>
  <tr><td><strong>Date of Birth</strong></td><td>${req.body.dob}</td></tr>
  <tr><td><strong>Place of Birth</strong></td><td>${req.body.place_of_birth}</td></tr>
  <tr><td><strong>Gender</strong></td><td>${req.body.gender}</td></tr>
  <tr><td><strong>Nationality</strong></td><td>${req.body.nationality}</td></tr>

  <tr style="background-color: #f2f2f2;"><th colspan="2">✈ Travel Details</th></tr>
  <tr><td><strong>Travelling with Anyone?</strong></td><td>${req.body.travelling_with_anyone}</td></tr>
  <tr><td><strong>Arrival Date</strong></td><td>${req.body.arrival_date}</td></tr>
  <tr><td><strong>Stay Length</strong></td><td>${req.body.stay_length}</td></tr>
  <tr><td><strong>Planned Arrival Date</strong></td><td>${req.body.planned_arrival_date}</td></tr>
  <tr><td><strong>Intended Stay Duration</strong></td><td>${req.body.intended_stay_duration}</td></tr>

  <tr style="background-color: #f2f2f2;"><th colspan="2">👫 Companion Details</th></tr>
  <tr><td><strong>Companion Travelling With</strong></td><td>${req.body.companion_travelling_with_anyone}</td></tr>
  <tr><td><strong>Companion Nationality</strong></td><td>${req.body.companion_nationality}</td></tr>
  <tr><td><strong>Family Name</strong></td><td>${req.body.companion_familyname}</td></tr>
  <tr><td><strong>Given Name</strong></td><td>${req.body.companion_givenname}</td></tr>
  <tr><td><strong>Date of Birth</strong></td><td>${req.body.companion_dob}</td></tr>
  <tr><td><strong>Visa Type</strong></td><td>${req.body.companion_visa}</td></tr>

  <tr style="background-color: #f2f2f2;"><th colspan="2">🏡 UK Address & Contact</th></tr>
  <tr><td><strong>Address Line 1</strong></td><td>${req.body.uk_address_line1}</td></tr>
  <tr><td><strong>Address Line 2</strong></td><td>${req.body.uk_address_line2}</td></tr>
  <tr><td><strong>Postcode</strong></td><td>${req.body.uk_postcode}</td></tr>
  <tr><td><strong>Contact 1</strong></td><td>${req.body.uk_contact1}</td></tr>
  <tr><td><strong>Contact 2</strong></td><td>${req.body.uk_contact2}</td></tr>
  <tr><td><strong>Email</strong></td><td>${req.body.uk_email}</td></tr>

  <tr style="background-color: #f2f2f2;"><th colspan="2">🏠 Permanent Address</th></tr>
  <tr><td><strong>Address Line 1</strong></td><td>${req.body.perm_address_line1}</td></tr>
  <tr><td><strong>Address Line 2</strong></td><td>${req.body.perm_address_line2}</td></tr>
  <tr><td><strong>Address Line 3</strong></td><td>${req.body.perm_address_line3}</td></tr>
  <tr><td><strong>Address Line 4</strong></td><td>${req.body.perm_address_line4}</td></tr>
  <tr><td><strong>Postal Code</strong></td><td>${req.body.perm_postal_code}</td></tr>
  <tr><td><strong>Country</strong></td><td>${req.body.perm_country}</td></tr>
  <tr><td><strong>Primary Contact</strong></td><td>${req.body.perm_contact_primary}</td></tr>
  <tr><td><strong>Secondary Contact</strong></td><td>${req.body.perm_contact_secondary}</td></tr>
  <tr><td><strong>Email</strong></td><td>${req.body.perm_email}</td></tr>
  <tr><td><strong>Duration at Address</strong></td><td>${req.body.perm_duration_at_address}</td></tr>
  <tr><td><strong>Prefer Other Contact?</strong></td><td>${req.body.prefer_other_contact}</td></tr>
<tr style="background-color: #f2f2f2;"><th colspan="2">🛂 Visa History</th></tr>
<tr><td><strong>Visa Issued Last 10 Years</strong></td><td>${req.body.visa_issued_last_10_years}</td></tr>
<tr><td><strong>Visa Type</strong></td><td>${req.body.visa_type}</td></tr>
<tr><td><strong>Visa Issue Date</strong></td><td>${req.body.visa_issue_date}</td></tr>
<tr><td><strong>Visa Expiry Date</strong></td><td>${req.body.visa_expiry_date}</td></tr>
<tr><td><strong>Visa Issuing Authority</strong></td><td>${req.body.visa_issuing_authority}</td></tr>
<tr><td><strong>UK Travel Last 10 Years</strong></td><td>${req.body.uk_travel_last_10_years}</td></tr>
<tr><td><strong>UK Arrival Date</strong></td><td>${req.body.uk_arrival_date}</td></tr>
<tr><td><strong>UK Departure Date</strong></td><td>${req.body.uk_departure_date}</td></tr>
<tr><td><strong>UK Trip Purpose</strong></td><td>${req.body.uk_trip_purpose}</td></tr>
<tr><td><strong>Home Office Application</strong></td><td>${req.body.home_office_application}</td></tr>
<tr><td><strong>Home Office App Date</strong></td><td>${req.body.home_office_app_date}</td></tr>
<tr><td><strong>Home Office App Type</strong></td><td>${req.body.home_office_app_type}</td></tr>
<tr><td><strong>Home Office Ref No</strong></td><td>${req.body.home_office_ref_no}</td></tr>
<tr><td><strong>Refused Entry UK</strong></td><td>${req.body.refused_entry_uk}</td></tr>
<tr><td><strong>UK Refusal Date</strong></td><td>${req.body.uk_refusal_date}</td></tr>
<tr><td><strong>UK Refusal Port</strong></td><td>${req.body.uk_refusal_port}</td></tr>
<tr><td><strong>UK Refusal Reason</strong></td><td>${req.body.uk_refusal_reason}</td></tr>
<tr><td><strong>UK Refusal Reference</strong></td><td>${req.body.uk_refusal_reference}</td></tr>
<tr><td><strong>Refused Visa Any Country</strong></td><td>${req.body.refused_visa_any_country}</td></tr>
<tr><td><strong>Refused Visa Country</strong></td><td>${req.body.refused_visa_country}</td></tr>
<tr><td><strong>Refused Visa Type</strong></td><td>${req.body.refused_visa_type}</td></tr>
<tr><td><strong>Refused Visa Date</strong></td><td>${req.body.refused_visa_date}</td></tr>
<tr><td><strong>Refused Visa Reason</strong></td><td>${req.body.refused_visa_reason}</td></tr>
<tr><td><strong>Other Country Travel</strong></td><td>${req.body.other_country_travel}</td></tr>
<tr><td><strong>Other Travel Date</strong></td><td>${req.body.other_travel_date}</td></tr>
<tr><td><strong>Other Travel Country</strong></td><td>${req.body.other_travel_country}</td></tr>
<tr><td><strong>Other Travel Reason</strong></td><td>${req.body.other_travel_reason}</td></tr>
<tr><td><strong>NI Number</strong></td><td>${req.body.ni_number}</td></tr>
<tr><td><strong>Interview Language</strong></td><td>${req.body.interview_language}</td></tr>

<tr style="background-color: #f2f2f2;"><th colspan="2">💍 Marital & Family Status</th></tr>
<tr><td><strong>Marital Status</strong></td><td>${req.body.marital_status}</td></tr>
<tr><td><strong>Spouse Travelling With You</strong></td><td>${req.body.spouse_travelling_with_you}</td></tr>
<tr><td><strong>Spouse Passport Number</strong></td><td>${req.body.spouse_passport_number}</td></tr>
<tr><td><strong>Spouse Nationality</strong></td><td>${req.body.spouse_nationality}</td></tr>
<tr><td><strong>Spouse Family Name</strong></td><td>${req.body.spouse_family_name}</td></tr>
<tr><td><strong>Spouse Given Name</strong></td><td>${req.body.spouse_given_name}</td></tr>
<tr><td><strong>Spouse DOB</strong></td><td>${req.body.spouse_dob}</td></tr>
<tr><td><strong>Spouse Lives With You</strong></td><td>${req.body.spouse_lives_with_you}</td></tr>
<tr style="background-color: #f2f2f2;"><th colspan="2">👶 Dependent Children</th></tr>
<tr><td><strong>Has Dependent Children</strong></td><td>${req.body.has_dependent_children}</td></tr>
<tr><td><strong>Dependent Child Passport</strong></td><td>${req.body.dependent_child_passport}</td></tr>
<tr><td><strong>Dependent Child Nationality</strong></td><td>${req.body.dependent_child_nationality}</td></tr>
<tr><td><strong>Dependent Child Family Name</strong></td><td>${req.body.dependent_child_family_name}</td></tr>
<tr><td><strong>Dependent Child Given Name</strong></td><td>${req.body.dependent_child_given_name}</td></tr>
<tr><td><strong>Dependent Child DOB</strong></td><td>${req.body.dependent_child_dob}</td></tr>
<tr><td><strong>Dependent Child Birthplace</strong></td><td>${req.body.dependent_child_birthplace}</td></tr>
<tr><td><strong>Dependent Child Travelling With You</strong></td><td>${req.body.dependent_child_travelling_with_you}</td></tr>
<tr><td><strong>Dependent Child Lives With You</strong></td><td>${req.body.dependent_child_lives_with_you}</td></tr>
<tr><td><strong>Dependent Child Address1</strong></td><td>${req.body.dependent_child_address1}</td></tr>
<tr><td><strong>Dependent Child Address2</strong></td><td>${req.body.dependent_child_address2}</td></tr>
<tr><td><strong>Dependent Child Address3</strong></td><td>${req.body.dependent_child_address3}</td></tr>
<tr><td><strong>Dependent Child Address4</strong></td><td>${req.body.dependent_child_address4}</td></tr>
<tr><td><strong>Dependent Child Postal</strong></td><td>${req.body.dependent_child_postal}</td></tr>

<tr style="background-color: #f2f2f2;"><th colspan="2">👦 Non-Dependent Children</th></tr>
<tr><td><strong>Has Non Dependent Children</strong></td><td>${req.body.has_non_dependent_children}</td></tr>
<tr><td><strong>Non Dep Child Passport</strong></td><td>${req.body.non_dep_child_passport}</td></tr>
<tr><td><strong>Non Dep Child Nationality</strong></td><td>${req.body.non_dep_child_nationality}</td></tr>
<tr><td><strong>Non Dep Child Family Name</strong></td><td>${req.body.non_dep_child_family_name}</td></tr>
<tr><td><strong>Non Dep Child Given Name</strong></td><td>${req.body.non_dep_child_given_name}</td></tr>
<tr><td><strong>Non Dep Child DOB</strong></td><td>${req.body.non_dep_child_dob}</td></tr>
<tr><td><strong>Non Dep Child Birthplace</strong></td><td>${req.body.non_dep_child_birthplace}</td></tr>
<tr><td><strong>Non Dep Child Living With</strong></td><td>${req.body.non_dep_child_living_with}</td></tr>
<tr><td><strong>Non Dep Child Relationship</strong></td><td>${req.body.non_dep_child_relationship}</td></tr>
<tr><td><strong>Non Dep Child Parents Relationship</strong></td><td>${req.body.non_dep_child_parents_relationship}</td></tr>

<tr style="background-color: #f2f2f2;"><th colspan="2">🏢 Employment History</th></tr>
<tr><td><strong>Worked In Restricted Orgs</strong></td><td>${req.body.worked_in_restricted_orgs}</td></tr>
<tr><td><strong>Past Org Name</strong></td><td>${req.body.past_org_name}</td></tr>
<tr><td><strong>Past Org Title</strong></td><td>${req.body.past_org_title}</td></tr>
<tr><td><strong>Past Org Work Type</strong></td><td>${req.body.past_org_work_type}</td></tr>
<tr><td><strong>Past Org Start Date</strong></td><td>${req.body.past_org_start_date}</td></tr>
<tr><td><strong>Past Org End Date</strong></td><td>${req.body.past_org_end_date}</td></tr>
<tr><td><strong>Current Work Status</strong></td><td>${req.body.current_work_status}</td></tr>
<tr><td><strong>Monthly Income</strong></td><td>${req.body.monthly_income}</td></tr>



<tr style="background-color: #f2f2f2;"><th colspan="2">🏥 Medical Treatment & Inviter</th></tr>
<tr><td><strong>Received Medical Treatment UK</strong></td><td>${req.body.received_medical_treatment_uk}</td></tr>
<tr><td><strong>UK Inviter</strong></td><td>${req.body.uk_inviter}</td></tr>
<tr><td><strong>UK Inviter Last Name</strong></td><td>${req.body.uk_inviter_last_name}</td></tr>
<tr><td><strong>UK Inviter First Name</strong></td><td>${req.body.uk_inviter_first_name}</td></tr>
<tr><td><strong>UK Institution Name</strong></td><td>${req.body.uk_institution_name}</td></tr>
<tr><td><strong>UK Institution Type</strong></td><td>${req.body.uk_institution_type}</td></tr>
<tr><td><strong>UK Institution Address1</strong></td><td>${req.body.uk_institution_address1}</td></tr>
<tr><td><strong>UK Institution Address2</strong></td><td>${req.body.uk_institution_address2}</td></tr>
<tr><td><strong>UK Institution Address3</strong></td><td>${req.body.uk_institution_address3}</td></tr>
<tr><td><strong>UK Institution Address4</strong></td><td>${req.body.uk_institution_address4}</td></tr>
<tr><td><strong>UK Institution Postal</strong></td><td>${req.body.uk_institution_postal}</td></tr>
<tr><td><strong>UK Institution Contact</strong></td><td>${req.body.uk_institution_contact}</td></tr>
<tr><td><strong>Additional Info</strong></td><td>${req.body.additional_info}</td></tr>




</table>


    <p>📩 Please follow up with the applicant soon.</p>
`
,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Application saved and email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving or sending email." });
  }
});

app.post("/api/us-apply", async (req, res) => {
  try {
    const newApp = new USVisa(req.body);
    await newApp.save();

    const mailOptions = {
      from: "youradmin@gmail.com",
      to: "sarathibalaji2037@gmail.com", // Update this to your management email
      subject: "New Visa Application Received",
      html: `
  <h2>🛂 US Visa Application Received</h2>
  <tr style="background-color: #f2f2f2;"><th colspan="2">👤 Security Questions</th></tr>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif; width: 100%;">
  <tr><td><strong>Security Answer</strong></td><td>${req.body.security_question_answer}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">👤 Personal Details</th></tr>
  <tr><td><strong>Surnames</strong></td><td>${req.body.surnames}</td></tr>
  <tr><td><strong>Given Names</strong></td><td>${req.body.given_names}</td></tr>
  <tr><td><strong>Native Alphabet Name</strong></td><td>${req.body.native_alphabet_name}</td></tr>
  <tr><td><strong>Used Other Names</strong></td><td>${req.body.used_other_names}</td></tr>
  <tr><td><strong>Telecode Name</strong></td><td>${req.body.telecode_name}</td></tr>
  <tr><td><strong>Sex</strong></td><td>${req.body.sex}</td></tr>
  <tr><td><strong>Marital Status</strong></td><td>${req.body.marital_status}</td></tr>
  <tr><td><strong>Date of Birth</strong></td><td>${req.body.dob}</td></tr>
  <tr><td><strong>City of Birth</strong></td><td>${req.body.city_of_birth}</td></tr>
  <tr><td><strong>Place of Birth</strong></td><td>${req.body.place_of_birth}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">🌍 Nationality & Identification</th></tr>
  <tr><td><strong>Nationality</strong></td><td>${req.body.nationality}</td></tr>
  <tr><td><strong>Other Nationality</strong></td><td>${req.body.other_nationality}</td></tr>
  <tr><td><strong>National ID Number</strong></td><td>${req.body.national_id_number}</td></tr>
  <tr><td><strong>US Social Security Number</strong></td><td>${req.body.us_ssn}</td></tr>
  <tr><td><strong>US Taxpayer ID</strong></td><td>${req.body.us_tax_id}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">🏠 Address & Phone Details</th></tr>
  <tr><td><strong>Home Address Line 1</strong></td><td>${req.body.home_address_line1}</td></tr>
  <tr><td><strong>Home Address Line 2</strong></td><td>${req.body.home_address_line2}</td></tr>
  <tr><td><strong>City</strong></td><td>${req.body.home_city}</td></tr>
  <tr><td><strong>State</strong></td><td>${req.body.home_state}</td></tr>
  <tr><td><strong>Postal Code</strong></td><td>${req.body.home_postal}</td></tr>
  <tr><td><strong>Country</strong></td><td>${req.body.home_country}</td></tr>
  <tr><td><strong>Same as Mailing Address?</strong></td><td>${req.body.same_mailing_address}</td></tr>
  <tr><td><strong>Primary Phone</strong></td><td>${req.body.phone_primary}</td></tr>
  <tr><td><strong>Secondary Phone</strong></td><td>${req.body.phone_secondary}</td></tr>
  <tr><td><strong>Work Phone</strong></td><td>${req.body.work_phone}</td></tr>
  <tr><td><strong>Email</strong></td><td>${req.body.email}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">🛂 Passport Information</th></tr>
  <tr><td><strong>Passport Type</strong></td><td>${req.body.passport_type}</td></tr>
  <tr><td><strong>Passport Book Number</strong></td><td>${req.body.passport_book_number}</td></tr>
  <tr><td><strong>Issuing Country</strong></td><td>${req.body.passport_issuing_country}</td></tr>
  <tr><td><strong>Issue City</strong></td><td>${req.body.passport_issue_city}</td></tr>
  <tr><td><strong>Issue State</strong></td><td>${req.body.passport_issue_state}</td></tr>
  <tr><td><strong>Issue Country</strong></td><td>${req.body.passport_issue_country}</td></tr>
  <tr><td><strong>Issuance Date</strong></td><td>${req.body.passport_issuance_date}</td></tr>
  <tr><td><strong>Expiry Date</strong></td><td>${req.body.passport_expiry_date}</td></tr>
  <tr><td><strong>Passport Lost?</strong></td><td>${req.body.passport_lost}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">✈ Travel Information</th></tr>
  <tr><td><strong>Purpose of Trip</strong></td><td>${req.body.trip_purpose}</td></tr>
  <tr><td><strong>Other Trip Purpose</strong></td><td>${req.body.trip_purpose_other}</td></tr>
  <tr><td><strong>Specific Travel Plans?</strong></td><td>${req.body.specific_plans}</td></tr>
  <tr><td><strong>Planned Arrival Date</strong></td><td>${req.body.arrival_date}</td></tr>
  <tr><td><strong>Intended Stay Duration</strong></td><td>${req.body.stay_length}</td></tr>
  <tr><td><strong>US Street Address</strong></td><td>${req.body.us_street_address}</td></tr>
  <tr><td><strong>City</strong></td><td>${req.body.us_city}</td></tr>
  <tr><td><strong>State</strong></td><td>${req.body.us_state}</td></tr>
  <tr><td><strong>Zip Code</strong></td><td>${req.body.us_zip}</td></tr>
  <tr><td><strong>Who Will Pay for Trip?</strong></td><td>${req.body.trip_payer}</td></tr>
  <tr><td><strong>Travelling With a Group?</strong></td><td>${req.body.travelling_with_group}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">🛬 Previous US Travel Info</th></tr>
  <tr><td><strong>Have You Been in the US?</strong></td><td>${req.body.been_in_us}</td></tr>
  <tr><td><strong>Do You Have a US Driver's License?</strong></td><td>${req.body.us_drivers_license}</td></tr>
  <tr><td><strong>Previously Issued a US Visa?</strong></td><td>${req.body.issued_us_visa}</td></tr>
  <tr><td><strong>Refused a US Visa?</strong></td><td>${req.body.refused_us_visa}</td></tr>
  <tr><td><strong>Immigrant Petition Filed?</strong></td><td>${req.body.immigrant_petition}</td></tr>
 <tr style="background-color: #f2f2f2;"><th colspan="2">📇 US Contact Information</th></tr>
  <tr><td><strong>Contact Person or Organization</strong></td><td>${req.body.contact_person_org}</td></tr>
  <tr><td><strong>Relationship to Applicant</strong></td><td>${req.body.contact_relationship}</td></tr>
  <tr><td><strong>Address Line 1</strong></td><td>${req.body.contact_address_line1}</td></tr>
  <tr><td><strong>City</strong></td><td>${req.body.contact_city}</td></tr>
  <tr><td><strong>State</strong></td><td>${req.body.contact_state}</td></tr>
  <tr><td><strong>ZIP Code</strong></td><td>${req.body.contact_zip}</td></tr>
  <tr><td><strong>Phone</strong></td><td>${req.body.contact_phone}</td></tr>
  <tr><td><strong>Email</strong></td><td>${req.body.contact_email}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">👨‍👩‍👧‍👦 Family – Relatives</th></tr>
  <tr><td><strong>Father's Full Name & DOB</strong></td><td>${req.body.father_fullname_dob}</td></tr>
  <tr><td><strong>Mother's Full Name & DOB</strong></td><td>${req.body.mother_fullname_dob}</td></tr>
  <tr><td><strong>Immediate Relatives in US?</strong></td><td>${req.body.immediate_relatives_us}</td></tr>
  <tr><td><strong>Other Relatives in US?</strong></td><td>${req.body.other_relatives_us}</td></tr>
 <tr style="background-color: #f2f2f2;"><th colspan="2">💍 Family – Spouse</th></tr>
  <tr><td><strong>Spouse's Surnames</strong></td><td>${req.body.spouse_surnames}</td></tr>
  <tr><td><strong>Spouse's Given Names</strong></td><td>${req.body.spouse_given_names}</td></tr>
  <tr><td><strong>Spouse's Date of Birth</strong></td><td>${req.body.spouse_dob}</td></tr>
  <tr><td><strong>Spouse's Nationality</strong></td><td>${req.body.spouse_nationality}</td></tr>
  <tr><td><strong>Spouse's Birth City</strong></td><td>${req.body.spouse_birth_city}</td></tr>
  <tr><td><strong>Spouse's Birth Country</strong></td><td>${req.body.spouse_birth_country}</td></tr>
  <tr><td><strong>Spouse's Address</strong></td><td>${req.body.spouse_address}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">💼 Work / Education / Training</th></tr>
  <tr><td><strong>Primary Occupation</strong></td><td>${req.body.primary_occupation}</td></tr>
  <tr><td><strong>Employer/School Name</strong></td><td>${req.body.employer_school_name}</td></tr>
  <tr><td><strong>Employer Address Line 1</strong></td><td>${req.body.employer_address_line1}</td></tr>
  <tr><td><strong>City</strong></td><td>${req.body.employer_city}</td></tr>
  <tr><td><strong>State</strong></td><td>${req.body.employer_state}</td></tr>
  <tr><td><strong>ZIP Code</strong></td><td>${req.body.employer_zip}</td></tr>
  <tr><td><strong>Phone</strong></td><td>${req.body.employer_phone}</td></tr>
  <tr><td><strong>Country</strong></td><td>${req.body.employer_country}</td></tr>
  <tr><td><strong>Job Duties</strong></td><td>${req.body.employer_duties}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">🧳 Previous Work Experience</th></tr>
  <tr><td><strong>Previous Employer Name</strong></td><td>${req.body.prev_employer_name}</td></tr>
  <tr><td><strong>Address Line 1</strong></td><td>${req.body.prev_employer_address_line1}</td></tr>
  <tr><td><strong>City</strong></td><td>${req.body.prev_employer_city}</td></tr>
  <tr><td><strong>State</strong></td><td>${req.body.prev_employer_state}</td></tr>
  <tr><td><strong>ZIP Code</strong></td><td>${req.body.prev_employer_zip}</td></tr>
  <tr><td><strong>Phone</strong></td><td>${req.body.prev_employer_phone}</td></tr>
  <tr><td><strong>Country</strong></td><td>${req.body.prev_employer_country}</td></tr>
  <tr><td><strong>Job Title</strong></td><td>${req.body.prev_job_title}</td></tr>
  <tr><td><strong>Supervisor Surname</strong></td><td>${req.body.prev_supervisor_surname}</td></tr>
  <tr><td><strong>Supervisor Given Name</strong></td><td>${req.body.prev_supervisor_given}</td></tr>
  <tr><td><strong>Employment From</strong></td><td>${req.body.prev_employment_from}</td></tr>
  <tr><td><strong>Employment To</strong></td><td>${req.body.prev_employment_to}</td></tr>
  <tr><td><strong>Job Duties</strong></td><td>${req.body.prev_employer_duties}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">🎓 Education Details</th></tr>
  <tr><td><strong>Institution Name</strong></td><td>${req.body.edu_institution}</td></tr>
  <tr><td><strong>Address Line 1</strong></td><td>${req.body.edu_address_line1}</td></tr>
  <tr><td><strong>City</strong></td><td>${req.body.edu_city}</td></tr>
  <tr><td><strong>State</strong></td><td>${req.body.edu_state}</td></tr>
  <tr><td><strong>ZIP Code</strong></td><td>${req.body.edu_zip}</td></tr>
  <tr><td><strong>Country</strong></td><td>${req.body.edu_country}</td></tr>
  <tr><td><strong>Course of Study</strong></td><td>${req.body.edu_course}</td></tr>
  <tr><td><strong>From Date</strong></td><td>${req.body.edu_from}</td></tr>
  <tr><td><strong>To Date</strong></td><td>${req.body.edu_to}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">✨ Additional Information</th></tr>
  <tr><td><strong>Clan or Tribe</strong></td><td>${req.body.clan_or_tribe}</td></tr>
  <tr><td><strong>Languages Spoken</strong></td><td>${req.body.languages_spoken}</td></tr>
  <tr><td><strong>Travel in Last 5 Years</strong></td><td>${req.body.travel_past_5_years}</td></tr>
  <tr><td><strong>Professional Memberships</strong></td><td>${req.body.professional_membership}</td></tr>
  <tr><td><strong>Special Skills</strong></td><td>${req.body.special_skills}</td></tr>
  <tr><td><strong>Served in Military</strong></td><td>${req.body.served_military}</td></tr>
  <tr><td><strong>Paramilitary Involvement</strong></td><td>${req.body.paramilitary_involvement}</td></tr>
  <tr style="background-color: #f2f2f2;"><th colspan="2">🛡 Security & Background Questions</th></tr>
  <tr><td><strong>Do you have a communicable disease of public health significance?</strong></td><td>${req.body.health_disease}</td></tr>
  <tr><td><strong>Do you have a mental or physical disorder?</strong></td><td>${req.body.mental_disorder}</td></tr>
  <tr><td><strong>Have you ever abused drugs?</strong></td><td>${req.body.drug_abuse}</td></tr>
  <tr><td><strong>Have you ever been arrested or convicted for any offense or crime?</strong></td><td>${req.body.arrested_convicted}</td></tr>
  <tr><td><strong>Have you ever violated any U.S. drug laws?</strong></td><td>${req.body.drugs_law_violated}</td></tr>
  <tr><td><strong>Are you or have you ever been involved in prostitution?</strong></td><td>${req.body.prostitution}</td></tr>
  <tr><td><strong>Have you ever engaged in money laundering?</strong></td><td>${req.body.money_laundering}</td></tr>
  <tr><td><strong>Have you ever trafficked in persons?</strong></td><td>${req.body.human_trafficking}</td></tr>
  <tr><td><strong>Have you ever knowingly helped anyone engage in human trafficking?</strong></td><td>${req.body.trafficking_helped}</td></tr>
  <tr><td><strong>Have you ever received benefits from human trafficking?</strong></td><td>${req.body.trafficking_related_benefit}</td></tr>
  <tr><td><strong>Have you ever committed espionage or sabotage?</strong></td><td>${req.body.espionage}</td></tr>
  <tr><td><strong>Have you ever participated in terrorism or terrorist activities?</strong></td><td>${req.body.terrorism}</td></tr>
  <tr><td><strong>Have you ever provided support to terrorist organizations?</strong></td><td>${req.body.terrorism_support}</td></tr>
  <tr><td><strong>Are you a member of a terrorist organization?</strong></td><td>${req.body.terrorism_member}</td></tr>
  <tr><td><strong>Have you committed or incited genocide?</strong></td><td>${req.body.genocide}</td></tr>
  <tr><td><strong>Have you ever engaged in torture?</strong></td><td>${req.body.torture}</td></tr>
  <tr><td><strong>Have you participated in extrajudicial killings?</strong></td><td>${req.body.extrajudicial_killings}</td></tr>
  <tr><td><strong>Have you recruited or used child soldiers?</strong></td><td>${req.body.child_soldiers}</td></tr>
  <tr><td><strong>Have you ever been involved in religious persecution?</strong></td><td>${req.body.religion_violation}</td></tr>
  <tr><td><strong>Have you ever forced abortions or sterilizations?</strong></td><td>${req.body.forced_abortions}</td></tr>
  <tr><td><strong>Have you harvested organs without consent?</strong></td><td>${req.body.organ_harvest}</td></tr>
  <tr><td><strong>Have you ever committed visa fraud or misrepresentation?</strong></td><td>${req.body.visa_fraud}</td></tr>
  <tr><td><strong>Have you violated custody agreements related to U.S. citizens?</strong></td><td>${req.body.custody_violations}</td></tr>
  <tr><td><strong>Have you ever illegally voted in the U.S.?</strong></td><td>${req.body.illegal_voting}</td></tr>
  <tr><td><strong>Have you renounced U.S. citizenship to avoid tax?</strong></td><td>${req.body.renounce_tax_evasion}</td></tr>

</table>




    <p>📩 Please follow up with the applicant soon.</p>
`
,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Application saved and email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving or sending email." });
  }
});


// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});