const questions = [
  {
    question: "Nitroglycerine is administered by which route?",
    answers: [
      { text: "By sublingual", correct: true },
      { text: "By inhalation", correct: false },
      { text: "By subcutaneouse", correct: false },
      { text: "By intramuscular", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The substances produced by or derived from living organisms that are used to kill bacteria or prevent their multiplication is called:",
    answers: [
      { text: "Antibiotics", correct: true },
      { text: "Antidotes", correct: false },
      { text: "Hormones ", correct: false },
      { text: "Enzymes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For a drug given orally, the principle site of drug absorption is:",
    answers: [
      { text: "Small intestine", correct: true },
      { text: "Mouth", correct: false },
      { text: "Oesophagus", correct: false },
      { text: "Large intestine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Specify from which dosage form, when taken orally the drug is absorbed and enters the bloodstream faster?",
    answers: [
      { text: "Solution", correct: true },
      { text: "Suspension", correct: false },
      { text: "Tablets", correct: false },
      { text: "Capsules", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with an edema would have an increased volume of distribution (Vd) if?",
    answers: [
      { text: "The patient was taking a hydrophilic drug", correct: true },
      { text: "The patient was taking a hydrophobic drug", correct: false },
      { text: " The patient was taking an anionic drug", correct: false },
      { text: "An edema always causes an increase in Vd", correct: false },
      { text: "An edema always causes an decrease in Vd", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as bioavailability?",
    answers: [
      { text: "Completeness and rate of drug intake into the total BF", correct: true },
      { text: "The nature of the distribution", correct: false },
      { text: "Metabolic rate", correct: false },
      { text: "The rate of administration", correct: false },
      { text: "The degree of binding by blood proteins", correct: false },
    ],
  },
  {
    question: "A new drug was tested in an in vitro system. It was found that only one enantiomer of the racemic pair bound substantially to a specific receptor, whereas the other enantiomer showed a negligible binding. Which of the following terms best defines this property?",
    answers: [
      { text: "Intrinsic activity", correct: true },
      { text: "Stereo-selectivity", correct: false },
      { text: "Maximal efficacy", correct: false },
      { text: "Variability", correct: false },
      { text: "Potency", correct: false },
    ],
  },
  {
    question: "Two new drugs ,A and B ,are tested in an in vitro system. The drugs turn out to have the same slope of the log dose-response curves and the same maximal efficacy.Which of the following pairs of statements best describes A and B?",
    answers: [
      { text: "A full agonist,B full agonist", correct: true },
      { text: "A full agonist,B partial agonist", correct: false },
      { text: "A full agonist ,B competitive antagonist", correct: false },
      { text: "A partial agonist,B noncompetitive antagonist", correct: false },
      { text: "A partial agonist, B functional antagonist", correct: false },
    ],
  },
  {
    question: "The most vulnerable period of pregnancy for the causation of foetal malformations due to drug is:",
    answers: [
      { text: "18-55 days of gestation", correct: true },
      { text: "56-84 days of gestation", correct: false },
      { text: "Second trimester", correct: false },
      { text: "36 weeks onwards", correct: false },
      { text: "Third trimester", correct: false },
    ],
  },
  {
    question: " Indiosyncrasy is:",
    answers: [
      { text: " A genetically determined abnormal reaction drugs", correct: true },
      { text: "A characteristic toxic effects at therapeutic doses", correct: false },
      { text: "An altered physiological state produced by repeated drugs use", correct: false },
      { text: "An immunologic ally mediated reaction", correct: false },
      { text: "Hypersensitivity reactions", correct: false },
    ],
  },
  {
    question: "Which of the following effect is not seen with cholinergic muscarinic receptor stimulation?",
    answers: [
      { text: "Rise in blood pressure", correct: true },
      { text: "Sweating", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Urination", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Parasympathomimetic drugs can be directly acting or indirectly acting. Of the directly-acting parasympathonfimetics, which drug has the maximum nicotinic receptor action?",
    answers: [
      { text: "Carbachol", correct: true },
      { text: "Bethanechol", correct: false },
      { text: "Pilocarpine", correct: false },
      { text: "Methacholine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What drug is Orthotoludine a metabolite of ?",
    answers: [
      { text: "Prilocaine", correct: true },
      { text: "Procaine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Tetracaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A female underwent LSCS surgery and it was performed under spinal anesthesia. As a complication of spinal anaesthesia, she has developed hypotension immediately after surgery. Her BP is 90/70 and HR is 100 per minute. Which is the best vasopressor to be chosen among the following for the treatment of above complication?",
    answers: [
      { text: "Phenylephrine", correct: true },
      { text: "Ephedrine", correct: false },
      { text: "Methoxamine", correct: false },
      { text: "Droxydopa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of salbutamol?",
    answers: [
      { text: "Relaxes bronchial smooth muscle", correct: true },
      { text: "Directly inhibits inflammation", correct: false },
      { text: "Decreases mucus production", correct: false },
      { text: "Inhibits histamine release", correct: false },
      { text: "Stabilizes mast cells", correct: false },
    ],
  },
  {
    question: "Salbutamol is primarily used to treat:",
    answers: [
      { text: "Asthma and COPD", correct: true },
      { text: "Hypertension", correct: false },
      { text: "Heart failure", correct: false },
      { text: "Anxiety disorders", correct: false },
      { text: "Migraine headaches", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a selective beta-2 adrenergic agonist commonly used in asthma treatment?",
    answers: [
      { text: "Albuterol", correct: true },
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Atenolol", correct: false },
    ],
  },
  {
    question: "Which adrenergic receptor is primarily responsible for vasoconstriction?",
    answers: [
      { text: "Alpha-1", correct: true },
      { text: "Alpha-2", correct: false },
      { text: "Beta-1", correct: false },
      { text: "Beta-2", correct: false },
      { text: "Dopamine", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of beta-blockers?",
    answers: [
      { text: "Bradycardia", correct: true },
      { text: "Anxiety", correct: false },
      { text: "Bronchodilation", correct: false },
      { text: "Tachycardia", correct: false },
      { text: "Increased blood pressure", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is the shortest-acting competitive neuromuscular blocker?",
    answers: [
      { text: "Mivacurium", correct: true },
      { text: "Doxacurium", correct: false },
      { text: "Pancuronium", correct: false },
      { text: "Vecuronium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient receives a toxic dose of lignocaine i.v. the patient is likely to exhibit?",
    answers: [
      { text: "Seizures and coma", correct: true },
      { text: "Mydriasis and diarrhea", correct: false },
      { text: "Respiratory paralysis", correct: false },
      { text: "Excessive salivation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The eutectic mixture approved for use, lignocaine-prilocaine, has which of the following unique as unique property?",
    answers: [
      { text: "By surface application, it can anaesthetize unbroken skin", correct: true },
      { text: "It causes motor blockade without sensory block", correct: false },
      { text: "It is not absorbed after surface application", correct: false },
      { text: "It has strong vasoconstrictor action", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not adverse effect of thalidomide?",
    answers: [
      { text: "Myocarditis", correct: true },
      { text: "Constipation", correct: false },
      { text: "Peripheral neuropathy", correct: false },
      { text: "Sedation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary risk associated with long-term opioid use?",
    answers: [
      { text: "Physical dependence and addiction", correct: true },
      { text: "Increased appetite", correct: false },
      { text: "Improved cognitive function", correct: false },
      { text: "Lowered blood pressure", correct: false },
      { text: "Increased energy levels", correct: false },
    ],
  },
  {
    question: "Which of the following statement  is about buspirone?",
    answers: [
      { text: "It has anxiolytic but no anticonvulsants or muscle relaxant property", correct: true },
      { text: "It interacts with benzodiazepine receptor as an inverse agonist", correct: false },
      { text: "It produces physical dependence and suppresses barbiturate withdrawal syndrome", correct: false },
      { text: "It is a rapidly acting anxiolytic: good for panic states", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 32 year old females, k/c/o depression, comes to you with drug overdosewith marked sedation, confusion and delirium. She has history of seizure at home after drug intake. On examination, you have found she is having ventricular arrhythmias, hypotension, and hyperthermia, flushing and dilated pupils. Which of the following drug has no role in treatment of above patient?",
    answers: [
      { text: "Flumazenil", correct: true },
      { text: "Phenylephrine", correct: false },
      { text: "Sodium bicarbonate", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following does not have a negative effect on patients taking MAO inhibitors?",
    answers: [
      { text: "Aspirin", correct: true },
      { text: "Indirect-acting sympathomimetics", correct: false },
      { text: "Tricyclic antidepressants", correct: false },
      { text: "Cheese", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 52-year-old unmarried woman suffers from breast cancer and is taking adjuvant hormonal therapy with tamoxifen 20 mg daily as a course of treatment. Her mother and two sisters have died due to breast cancer and she has also lost all hope of living due to her disease. As a physician, you want to improve her quality of life and would like to start her treatment with antidepressants. Which of the following is the best choice for this patient to start treatment with?",
    answers: [
      { text: "Venlafexine", correct: true },
      { text: "Fluoxetine", correct: false },
      { text: "Amitriptyline", correct: false },
      { text: "Duloxetine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following adverse effects of levodopa is not decreased by the addition of carbidopa?",
    answers: [
      { text: "Hallucinations", correct: true },
      { text: "Anorexia", correct: false },
      { text: "Cardiac arrhythmias", correct: false },
      { text: "Nausea and vomiting", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following crosses blood brain barrier?",
    answers: [
      { text: "Levodopa", correct: true },
      { text: "Dopamine", correct: false },
      { text: "Carvidopa", correct: false },
      { text: "Bromocriptine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug inhibits the production of stomach acid?",
    answers: [
      { text: "Proton pump inhibitors", correct: true },
      { text: "H2 blockers", correct: false },
      { text: "Both A and B", correct: false },
      { text: "Antimuscarinics", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The antiemetic action of metoclopramide is primarily due to which of the following actions?",
    answers: [
      { text: "02 antagonism", correct: true },
      { text: "02 agonism", correct: false },
      { text: "5HT3 antagonism", correct: false },
      { text: "5HT4 agonism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a stool softener?",
    answers: [
      { text: "Docussates", correct: true },
      { text: "Bisacodyl", correct: false },
      { text: "Bran", correct: false },
      { text: "Lactulose", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 3 year old child comes to emergency with vomiting. Nurse posted in emergency gives antiemetic to baby which is generally gives to adult patient. After few hours of hospital stay, child vomiting is stopped but child body gone into spasm with high tone in leg and neck muscles. Which antiemetic that nurse might have given to baby leading to above complication?",
    answers: [
      { text: "Metoclopramide", correct: true },
      { text: "Domperidone", correct: false },
      { text: "Cisapride", correct: false },
      { text: "Aprepitant", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is one of the most common side effects of inhaled beclomethasone dipropionate?",
    answers: [
      { text: "Oropharyngeal candidiasis", correct: true },
      { text: "Pituitary-adrenal suppression", correct: false },
      { text: "Atrophic rhinitis", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a side effect of salbutamol?",
    answers: [
      { text: "Hypoglycemia", correct: true },
      { text: "Hypokalemia", correct: false },
      { text: "Tremors", correct: false },
      { text: "Tachycardia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following actions is NOT exhibited by methylxanthines?",
    answers: [
      { text: "Restore steroid responsiveness in COPD patients", correct: true },
      { text: "Induction of histone deacetylase", correct: false },
      { text: "Anti-inflammatory action", correct: false },
      { text: "Inhibit the acetylation of core histones", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of H1 antihistamines?",
    answers: [
      { text: "Competitive antagonism of H1 receptors", correct: true },
      { text: "Direct stimulation of H1 receptors", correct: false },
      { text: "Inhibition of histamine synthesis", correct: false },
      { text: "nhibition of histamine release", correct: false },
      { text: "Non-competitive antagonism of H1 receptors", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of first-generation H1 antihistamines?",
    answers: [
      { text: "Insomnia", correct: true },
      { text: "Diarrhea", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Increased appetite", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a selective serotonin reuptake inhibitor (SSRI)?",
    answers: [
      { text: "Fluoxetine", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Alprazolam", correct: false },
      { text: "Lithium", correct: false },
      { text: "Phenelzine", correct: false },
    ],
  },
  {
    question: "This drug is used in treating supraventricular tachycardias: ",
    answers: [
      { text: "Digoxin ", correct: true },
      { text: "Dobutamine", correct: false },
      { text: " Amrinone", correct: false },
      { text: "Dopamine", correct: false },
      { text: "Verapamil", correct: false },
    ],
  },
  {
    question: "Which of the following most directly describes the mechanism of action of digitalis?",
    answers: [
      { text: "Inhibits sodium-potassiumATPase", correct: true },
      { text: "Decreases intracellular sodium concentration", correct: false },
      { text: "Increases the intracellular level of ATP", correct: false },
      { text: "Stimulates production of cAMP", correct: false },
      { text: "Decreases release of calcium from the sarcoplasmic reticulum", correct: false },
    ],
  },
  {
    question: "What effect does quinidine sulfate cause? ",
    answers: [
      { text: "antiarrhythmic", correct: true },
      { text: " antianginal", correct: false },
      { text: "cardiotonic", correct: false },
      { text: " analgesic", correct: false },
      { text: "hypertensive", correct: false },
    ],
  },
  {
    question: "This drug is a class IB antiarrhythmic drug:",
    answers: [
      { text: " lidocaine", correct: true },
      { text: "Sotalol", correct: false },
      { text: "Flecainide", correct: false },
      { text: " Salbutamol", correct: false },
      { text: "Propranolol ", correct: false },
    ],
  },
  {
    question: "Which of the following medications would be prescribed most frequently to patient suffering from chronic atrial fibrillation?",
    answers: [
      { text: "Warfarin", correct: true },
      { text: "Bretylium", correct: false },
      { text: "Adenosine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Specify an antiarrhythmic drug from the group of anesthetics.",
    answers: [
      { text: " lidocaine", correct: true },
      { text: "Hypertension", correct: false },
      { text: "cordarone", correct: false },
      { text: " verapamil", correct: false },
      { text: " lidocaine", correct: false },
    ],
  },
  {
    question: "Which one of the following adverse effects is associated with nitroglycerin?",
    answers: [
      { text: "Throbbing headache", correct: true },
      { text: "Elevated blood pressure", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Sexual dysfunction", correct: false },
      { text: "Anemia", correct: false },
    ],
  },
  {
    question: "Which one of the following is the most common side effect of antihyperlpidemic drug therapy?",
    answers: [
      { text: "Gastrointestinal disturbance", correct: true },
      { text: "Gastrointestinal disturbance", correct: false },
      { text: "Neurological problems", correct: false },
      { text: "Heart palpitations", correct: false },
      { text: "Migraine headaches", correct: false },
    ],
  },
  {
    question: "For what purpose is aspirin prescribed for myocardial infarction?",
    answers: [
      { text: "For inhibition of thromboxane synthesis, which prevents thrombus formation", correct: true },
      { text: "For reduction of serum lipid levels", correct: false },
      { text: "Due to the thrombolytic effect of aspirin", correct: false },
      { text: "For inhibition of cyclooxygenase", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with hypertension and BP of 160/90 mmHg has elevated lipoprotein A levels. Which lipid-lowering drug would you prescribe?",
    answers: [
      { text: "Niacin", correct: true },
      { text: "Pitavastatin", correct: false },
      { text: "Fenofibrate", correct: false },
      { text: "Ezetimibe", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a Diuretic?",
    answers: [
      { text: "Conivaptan", correct: true },
      { text: "Budesonide", correct: false },
      { text: "Domperidone", correct: false },
      { text: "Cisapride", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following agents is useful for the oral treatment of both pituitary as well as renal diabetes insipidus?",
    answers: [
      { text: "Hydrochlorthiazide", correct: true },
      { text: "Vasopressin", correct: false },
      { text: "Chlorpropamide", correct: false },
      { text: "Carbamazepine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  drug approved is for heavy menstrual bleeding?",
    answers: [
      { text: "Tranexamic acid", correct: true },
      { text: "Mefenarnic acid", correct: false },
      { text: "Epsilon amino caproic acid", correct: false },
      { text: "Acetylsalicylic acid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 36-year-old woman recently treated for leukemia is admitted to the hospital with malaise, chills, and high fever. Gram stain of the blood reveals gram-negative bacilli. The initial diagnosis is bacteremia, and parenteral antibiotics are indicated. The patient's history indicates that she has had severe urticaria, hypotension, and difficulty breathing after taking penicillin V orally about 6 months ago. Which of the following is the most appropriate drug?",
    answers: [
      { text: "Aztreonam", correct: true },
      { text: "Ampicillin plus sulbactum", correct: false },
      { text: "Cefazolin", correct: false },
      { text: "Imipenem plus cilastatin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Dr. Nitin decided to give oral iron therapy to a patient of iron deficiency anemia. Which of the following adverse effects leads to poor compliance of medicine by the patient?",
    answers: [
      { text: "Epigastric pain and bowel upset", correct: true },
      { text: "Staining of Teeth", correct: false },
      { text: "Black stools", correct: false },
      { text: "Metallic taste", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44 year old man presents to your clinic complaining of intense thirst and excessive urination for the past 2-3 months. The patient presents for consultation because he has had two episodes of bedwetting in the past week. On examination you notice that the patient has dry skin and also complains of mild constipation. You order fasting, random blood sugar levels and a bladder ultrasound, all of which are normal. You fixate on the diagnosis of diabetes insipidus. You would prefer to give him desmopressin intranasal spray instead of vasopressin. What is the reason for this?",
    answers: [
      { text: "Is more selective for the V2 receptor subtype", correct: true },
      { text: "Causes less hypernatremia", correct: false },
      { text: "Causes less factor VIII formation", correct: false },
      { text: "Provides greater relief from the excessive thirst experienced by the patient", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Urgent reversal of warfarin-induced bleeding is best achieved by the administration of ----",
    answers: [
      { text: "Prothrombin complex concentrates", correct: true },
      { text: "Cryoprecipitate", correct: false },
      { text: "Fresh frozen plasma", correct: false },
      { text: "Vitamin K1", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which CXCR-4 antagonist is used to mobilize peripheral blood stem cells?",
    answers: [
      { text: "Plerixafor", correct: true },
      { text: "Sargramostim", correct: false },
      { text: "Filgrastim", correct: false },
      { text: "Maraviroc", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most likely to be used in young children with chronic renal failure?",
    answers: [
      { text: "Erythropoietin", correct: true },
      { text: "Desferrioxamine", correct: false },
      { text: "Cyanocobalamin", correct: false },
      { text: "Filgrastim (G-CSF)", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the difference between iron-sorbitol-citric acid and iron-dextran?",
    answers: [
      { text: "Cannot be administered intravenously", correct: true },
      { text: "Does not bind to transferrin in plasma", correct: false },
      { text: "Is not excreted in urine", correct: false },
      { text: "Causes fewer side effects", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not therapeutic uses of penicillin G? ",
    answers: [
      { text: "Rickettsial infection", correct: true },
      { text: "Bacterial meningitis", correct: false },
      { text: "Syphilis", correct: false },
      { text: "Anthrax", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following condition is not of choice drug Penicillin G ?",
    answers: [
      { text: "Lyme disease", correct: true },
      { text: "Actinomycosis", correct: false },
      { text: "Listeria infections", correct: false },
      { text: "Rat-bite fever", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug has been reported to have both Bacteriostatic activity and bactericidal activity against Streptococcus pneumoniae?",
    answers: [
      { text: "Tigecycline", correct: true },
      { text: "lsoniazid", correct: false },
      { text: "Daptomycin", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This inhibitor of bacterial protein synthesis has a narrow spectrum of antibacterial activity. It was used in the treatment of an abdominal abscess caused by Bacteroides fragilis, but antibiotic-associated colitis occurred. Which of the following drugs is being described?",
    answers: [
      { text: "Clindamycin", correct: true },
      { text: "Clarithromycin", correct: false },
      { text: "Minocycline", correct: false },
      { text: "Ticarcillin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient infected with MRSA requires dialysis. The physician has already prescribed linezolid for the patient. On the day of dialysis, when should linezolid be administered to this patient?",
    answers: [
      { text: "After dialysis", correct: true },
      { text: "Before dialysis", correct: false },
      { text: "Can be administered independently of dialysis", correct: false },
      { text: "During dialysis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 54-year-old male who has been diagnosed with Renal failure presents with infectious symptoms, the following antibiotic is prescribed with full dose without modification. Identify the drug?",
    answers: [
      { text: "Doxycycline", correct: true },
      { text: "Vancomycin", correct: false },
      { text: "Gentamicin", correct: false },
      { text: "Amphotericin B", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Long-term use of which of the following drugs may be associated with the development of subacute myelooptic neuropathy (SMON)?",
    answers: [
      { text: "Quiniodochlor", correct: true },
      { text: "Diloxanide furoate", correct: false },
      { text: "Ernetin", correct: false },
      { text: "Furazolidone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the followinf is not used Dapsone? ",
    answers: [
      { text: "Schistosomiasis", correct: true },
      { text: "Pemphigo1d", correct: false },
      { text: "Pneumocystis jlroveci pneumonia", correct: false },
      { text: "Dermatitis herpet1formis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of sulfonamides?",
    answers: [
      { text: "Inhibition of folic acid synthesis", correct: true },
      { text: "Inhibition of cell wall synthesis", correct: false },
      { text: "Inhibition of protein synthesis", correct: false },
      { text: "Disruption of cell membrane", correct: false },
      { text: "Inhibition of DNA replication", correct: false },
    ],
  },
  {
    question: "Which of the following is a common adverse effect associated with sulfonamide use?",
    answers: [
      { text: "Stevens-Johnson syndrome", correct: true },
      { text: "Increased appetite", correct: false },
      { text: "Decreased heart rate", correct: false },
      { text: "Lowered blood pressure", correct: false },
      { text: "Increased blood sugar", correct: false },
    ],
  },
  {
    question: "Which of the following is the primary mechanism of action of quinolones?",
    answers: [
      { text: "Inhibition of DNA gyrase", correct: true },
      { text: "Inhibition of cell wall synthesis", correct: false },
      { text: "Inhibition of protein synthesis", correct: false },
      { text: "Disruption of cell membrane", correct: false },
      { text: "Inhibition of RNA gyrase", correct: false },
    ],
  },
  {
    question: "Which of the following is a common adverse effect associated with quinolone use?",
    answers: [
      { text: "Tendinitis and tendon rupture", correct: true },
      { text: "Hepatotoxicity", correct: false },
      { text: "Nephrotoxicity", correct: false },
      { text: "Ototoxicity", correct: false },
      { text: "Cardiotoxity", correct: false },
    ],
  },
  {
    question: "Which of the following is the most effective drug against extracellular mycobacteria?",
    answers: [
      { text: "Rifampin", correct: true },
      { text: "Isoniazid", correct: false },
      { text: "Pyrazinamide", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Based on which pharmacological feature is metronidazole selectively active against anaerobic and microaerophilic organisms?",
    answers: [
      { text: "Only anaerobes and microaerophiles reduce it by generating the reactive nitro radical", correct: true },
      { text: "Aerobes have an oxygen gradient within the cell that deactivates some of the metronidazole", correct: false },
      { text: "Aerobes have a drug efflux mechanism for metronidazole", correct: false },
      { text: "Metronidazole inserts pores into the cell membrane of anaerobes and microaerophiles", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is gametocidal for all malaria-causing species?",
    answers: [
      { text: "Primaquine", correct: true },
      { text: "Chloroquine", correct: false },
      { text: "Quinine", correct: false },
      { text: "dapsone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "If a drug is active against the pre-erythrocytic stage of the malaria parasite, how will the drug be useful?",
    answers: [
      { text: "Etiotropic prophylactic", correct: true },
      { text: "Suppressive prophylactic", correct: false },
      { text: "Clinical therapeutic", correct: false },
      { text: "Radical therapeutic", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which fungicidal drug can be used orally to treat onychomycosis?",
    answers: [
      { text: "Terbinafine", correct: true },
      { text: "Amphotericin B", correct: false },
      { text: "Clotrimazole", correct: false },
      { text: "Griseofulvin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the main difference between fluconazole and ketoconazole?",
    answers: [
      { text: "It is unlikely to cause antiandrogen side effects", correct: true },
      { text: "It is a more potent inhibitor of drug metabolism", correct: false },
      { text: "It is ineffective in cryptococcal meningitis", correct: false },
      { text: "It is inactive when taken orally", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of dapsone, given that it is used in the treatment of leprosy, fungal infections, and for immunomodulatory action?",
    answers: [
      { text: "Folic acid synthesis inhibitor", correct: true },
      { text: "Cell wall synthesis inhibitor", correct: false },
      { text: "Phrotein synthesis inhibitor", correct: false },
      { text: "Cell membrane inhibitor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the site of action of amphotericin B in fungi?",
    answers: [
      { text: "Cell membrane", correct: true },
      { text: "Ribosome", correct: false },
      { text: "Nucleic acid", correct: false },
      { text: "Cytoplasm", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used for prophylaxis of H1 N1 influenza virus infections?",
    answers: [
      { text: "Oseltamivir", correct: true },
      { text: "Abacavir", correct: false },
      { text: "Tenofovir", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Lamivudine is a nucleoside reverse transcriptase inhibitor (NRTI) and is a cytidine analogue. Which of the following drugs is also a cytidine analogue?",
    answers: [
      { text: "Emtricitabine", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Stavudine", correct: false },
      { text: "All of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the drug of choice for cytomegalovirus retinitis in patients with HIV?",
    answers: [
      { text: "Ganciclovir", correct: true },
      { text: "Acyclovir", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Foscarnet", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the drug of choice for herpes simplex virus infections?",
    answers: [
      { text: "Acyclovir", correct: true },
      { text: "Tenofovir", correct: false },
      { text: "Ganciclovir", correct: false },
      { text: "Abacavir", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs inhibits de novo synthesis of purines?",
    answers: [
      { text: "Mycophenolate", correct: true },
      { text: "Tacrolimus", correct: false },
      { text: "Cyclosporine", correct: false },
      { text: "Infliximab", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  is antibody against Rituximab? ",
    answers: [
      { text: "CD 20", correct: true },
      { text: "EGER", correct: false },
      { text: "VEGF", correct: false },
      { text: "IL-2", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following immunosuppressants is not used for the treatment of cancers?",
    answers: [
      { text: "Cyclosporine", correct: true },
      { text: "Cyclophosphamide", correct: false },
      { text: "Methotrexate", correct: false },
      { text: "6- Mercaptopurine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not adverse effect of glucocorticoids?",
    answers: [
      { text: "Hypoglycemia", correct: true },
      { text: "Cataract", correct: false },
      { text: "Peptic ulcer", correct: false },
      { text: "Infections", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a widely used drug that suppresses cellular immunity, inhibits prostaglandin and leukotriene synthesis and increases the catabolism of lgG antibody?",
    answers: [
      { text: "Prednisone", correct: true },
      { text: "Cyclophosphamide", correct: false },
      { text: "Cyclosporine", correct: false },
      { text: "Lnfliximab", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A truck driver presented to the hospital with a minor soft tissue injury. Which of the following NSAID should not be prescribed to him?",
    answers: [
      { text: "Indomethacin", correct: true },
      { text: "Celecoxib", correct: false },
      { text: "Naproxen", correct: false },
      { text: "Diclofenac sodium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is incorrect about inhaled corticosteroids?",
    answers: [
      { text: "Chlorofluorocarbons (CFC) have higher output of aerosol particles compared to hydrofluoroalkane (HFA)", correct: true },
      { text: "Optimal respirable particle range is between 1-5 microns", correct: false },
      { text: "Higher particle size results in deposition in upper airways", correct: false },
      { text: "Smaller particles size will result in expelling out of drug during exhalation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is corticotrophin releasing hormone (CRH) preparation that is used in the testing I of HPA axis?",
    answers: [
      { text: "Corticorelin", correct: true },
      { text: "Gonadorelin", correct: false },
      { text: "Ganirelix", correct: false },
      { text: "Cosyntropin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An 18 month old child with ambiguous genitalia presented to the hospital. his BP is 118178 mm Hg, Serum K+ is 6 mEq/L, serum sodium is 120 mEq/L. Patient was started on l.V. fluids. What additional specific therapy will you add?",
    answers: [
      { text: "Hydrocortisone", correct: true },
      { text: "Potassium binding resin", correct: false },
      { text: "Digoxin", correct: false },
      { text: "Calcium gluconate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a characteristic of Estrogen?",
    answers: [
      { text: "Increases plasma LDL and decreases HDL and TG levels", correct: true },
      { text: "Induce synthesis of clotting factors II, VII, IX and X", correct: false },
      { text: "Induces NO synthase and PGl2 production in vascular endothelium", correct: false },
      { text: "Increase lithogenicity of bile", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs enhances binding of thyroxine to thyroxine binding globulin?",
    answers: [
      { text: "Estrogens", correct: true },
      { text: "Corticosteroids", correct: false },
      { text: "Salicylates", correct: false },
      { text: "Androgens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young female, Rama with amenorrhea, infertility and galactorrhoea was treated with a drug that successfully restored ovulation and menstruation. Before being given the drug, the woman was carefully questioned about previous mental health problems, which she did not have. She was advised to take the drug orally. Which of the following drug used to treat this patient was probably?",
    answers: [
      { text: "Bromocriptine", correct: true },
      { text: "Desmopressin", correct: false },
      { text: "Human gonadotropin hormone", correct: false },
      { text: "Leuprolide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 29 year old female came in to your clin ic with complaints of irregular periods, infertility and breast pain. After collecting relevant history, before doing the physical examination, as you suspect and consider hyperprolactinemia as your diagnosis, you ask if the patient is taking any of the following medications, except?",
    answers: [
      { text: "Bromocriptine", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Reserpine", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug used to treat Type I Diabetes Mellitus ?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "Metformin", correct: false },
      { text: "Sulfony1ureas", correct: false },
      { text: "Meglitinides", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44 year old walks in to your clinic with complaints of increased hunger and thirst. On testing, was noted to have elevated blood sugar levels. Owing to the patient having a BMI of 31 Kg/m2, you prescribe him Metformin, which in turn?",
    answers: [
      { text: "Enhances glucose uptake by skeletal muscle", correct: true },
      { text: "Stimulates glycogenolysis", correct: false },
      { text: "Stimulates hepatic gluconeogenesis", correct: false },
      { text: "Releases insulin from beta cells of pancreas", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 43 year old male came in to your OPD with complaints of excessive thirst. After collecting history. You notice that the patient has polyuria and polyphagia. You suspect it could be OM and order for FBS, PP BS & HbA1 c. The HbA1c was about 12% and both the blood sugar values were over 240. You decide to start the patient on SIC Insulin therapy, and educate the patient regarding the same. What would you comment on its action.to the intern posted under you?",
    answers: [
      { text: "Stimulation of Enzymatic receptor   ", correct: true },
      { text: "Stimulation of lonotropic receptor", correct: false },
      { text: "Stimulation of Metabotropic receptor", correct: false },
      { text: "Stimulation of Nuclear receptor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which route of drug administration is most likely to lead to the first-pass effect? ",
    answers: [
      { text: "Oral", correct: true },
      { text: "Sublingual ", correct: false },
      { text: "Intravenous", correct: false },
      { text: "Intramascular", correct: false },
      { text: "Subcutaneous", correct: false },
    ],
  },
  {
    question: " The route of drug administration that gives the most rapid onset of the phar- macological effect is",
    answers: [
      { text: "Intravenouse injection", correct: true },
      { text: "Intramuscular injection ", correct: false },
      { text: " Intradermal injection", correct: false },
      { text: " Peroral administration", correct: false },
      { text: "Subcutaneous injection", correct: false },
    ],
  },
  {
    question: "Volatile drug may be best administered by:",
    answers: [
      { text: "Inhalation", correct: true },
      { text: " Oral route", correct: false },
      { text: "Sublingual route", correct: false },
      { text: "Intrathecal route", correct: false },
      { text: "Rectal route", correct: false },
    ],
  },
  {
    question: " After peroral administration, drugs generally are absorbed best from the",
    answers: [
      { text: "Buccal cavity", correct: true },
      { text: "Stomach", correct: false },
      { text: "Duodenum", correct: false },
      { text: "Ileum", correct: false },
      { text: "Rectum", correct: false },
    ],
  },
  {
    question: "What is the main route of eliminationof drugs from the body?",
    answers: [
      { text: "Kidneys with urine", correct: true },
      { text: "Liver with bile", correct: false },
      { text: "Lungs with exhaled air", correct: false },
      { text: "Sweat glands with sweat", correct: false },
      { text: "With milk", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as clearance?",
    answers: [
      { text: "The rate of elimination of the drug from the body", correct: true },
      { text: "The completeness of absorption", correct: false },
      { text: "The nature of the distribution", correct: false },
      { text: "The content of the active form of the drug in the blood", correct: false },
      { text: "The rate of absorbtion", correct: false },
    ],
  },
  {
    question: "Two new drugs, A and B, are tested in an in vitro system. The drugs turn out to have the same slope of the log dose-response curves and the same maximal efficacy. Which of the following pairs of statements best describes drugs A and B?",
    answers: [
      { text: "A full agonist , B full agonist", correct: true },
      { text: "A full agonist , B competitive antagonist", correct: false },
      { text: "A partial agonist, B functional antagonist", correct: false },
      { text: "A full agonist , B partial agonist", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pharmacodynamics involves the study of following?",
    answers: [
      { text: "Mechanism of drug action", correct: true },
      { text: "Biotransformation of drugs in the organism", correct: false },
      { text: "Distribution of drugs in the organism", correct: false },
      { text: "Absorption of drugs from GIT", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of pharmacodynamics drug interaction?",
    answers: [
      { text: " Insulin/Cortison", correct: true },
      { text: "Gentamicin/Ticarcillin", correct: false },
      { text: "Streptomycin/Cephalothin", correct: false },
      { text: "Oxtriphylline/Propranolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Which one of the following action may happen in combination of the drugs Amikacin and cephalosporines?",
    answers: [
      { text: "Added nephrotoxicity", correct: true },
      { text: "Accumulation of acetaldehyde", correct: false },
      { text: " Inhibition of tubular secretion", correct: false },
      { text: "Induction of metabolism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Modest improvement in the memory of patients with Alzheimer’s disease may occur with drugs that increase transmission at which of the following receptors?",
    answers: [
      { text: " Cholinergic", correct: true },
      { text: " Serotonergic  ", correct: false },
      { text: "Dopaminergic", correct: false },
      { text: " Gabaergic", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The patient mentions bethanechol when asked about his medication history. The nurse recognizes that this drug is used for the treatment of which condition? ",
    answers: [
      { text: "Urinary retention", correct: true },
      { text: "Diarrhea", correct: false },
      { text: "Glaucoma", correct: false },
      { text: "Urinary incontinence", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 33 year old male comes in to your clinic with a 4.Scm long superficial cut wound. You decide to suture it yourself. Take consent and ask the nurse to bring a local anaesthetic. Which of the following. though has the longest action, would not be your primary choice as it is the most toxic local anaesthetic?",
    answers: [
      { text: "Dibucaine", correct: true },
      { text: "Chlorprocaine", correct: false },
      { text: "Lignocaine", correct: false },
      { text: "Procaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug is Sugammadex an antagonist of?",
    answers: [
      { text: "Rocuronium", correct: true },
      { text: "Atropine", correct: false },
      { text: "Neostigmine", correct: false },
      { text: "Glycopyrrolate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Propanolol is useful in the management of which of the following side effects of a typical neuroleptic?",
    answers: [
      { text: "Akathisia", correct: true },
      { text: "Parkinsonism", correct: false },
      { text: "Tardive dyskinesia", correct: false },
      { text: "Acute muscle dystonia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of adrenergic agonists?",
    answers: [
      { text: "Mimic the effects of the sympathetic nervous system", correct: true },
      { text: "Block adrenergic receptors", correct: false },
      { text: "Inhibit the release of norepinephrine", correct: false },
      { text: "Decrease heart rate and blood pressure", correct: false },
      { text: "Induce parasympathetic activity", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of adrenergic agonists?",
    answers: [
      { text: "Tachycardia", correct: true },
      { text: "Bradycardia", correct: false },
      { text: "Hypotension", correct: false },
      { text: "Increased salivation", correct: false },
      { text: "Bronchoconstriction", correct: false },
    ],
  },
  {
    question: "What is the primary action of adrenergic receptor antagonists?",
    answers: [
      { text: "Block the effects of the sympathetic nervous system", correct: true },
      { text: "Mimic the effects of the sympathetic nervous system", correct: false },
      { text: "Increase heart rate and blood pressure", correct: false },
      { text: "Stimulate the parasympathetic nervous system", correct: false },
      { text: "Increase the release of norepinephrine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a selective beta-1 adrenergic antagonist?",
    answers: [
      { text: "Atenolol", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "Which of the following conditions may benefit from the use of alpha-1 adrenergic antagonists?",
    answers: [
      { text: "Benign prostatic hyperplasia", correct: true },
      { text: "Asthma", correct: false },
      { text: "Heart failure", correct: false },
      { text: "Anxiety", correct: false },
      { text: "Glaucoma", correct: false },
    ],
  },
  {
    question: "Opioid analgesics are primarily derived from which plant?",
    answers: [
      { text: "Opium poppy", correct: true },
      { text: "Willow tree", correct: false },
      { text: "Cannabis plant", correct: false },
      { text: "Foxglove plant", correct: false },
      { text: "Willow bark tree", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of NSAIDs?",
    answers: [
      { text: "Inhibiting the synthesis of prostaglandins", correct: true },
      { text: "Inhibiting the release of neurotransmitters", correct: false },
      { text: "Blocking pain receptors", correct: false },
      { text: "Directly affecting the central nervous system", correct: false },
      { text: "Stimulating the release of endorphins", correct: false },
    ],
  },
  {
    question: "Which of the following is a strong opioid agonist?",
    answers: [
      { text: "Naloxone", correct: true },
      { text: "Naltrexone", correct: false },
      { text: "Morphine", correct: false },
      { text: "Buprenorphine", correct: false },
      { text: "Pentazocine", correct: false },
    ],
  },
  {
    question: "Which of the following is a common side effect of opioid analgesics?",
    answers: [
      { text: "Constipation", correct: true },
      { text: "Increased respiratory rate", correct: false },
      { text: "Diarrhea", correct: false },
      { text: "Tachycardia", correct: false },
      { text: "Increased appetite", correct: false },
    ],
  },
  {
    question: "Which of the following is a contraindication to use drug Thalidomide?",
    answers: [
      { text: "HIV related neuropathy", correct: true },
      { text: "Erythema nodosum leprosum", correct: false },
      { text: "HIV related oral ulcer", correct: false },
      { text: "Behcet’s disease", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is preferred for long term treatment of severe anxiety disorder with intermittent panic attacks?",
    answers: [
      { text: "Selective serotonin reuptake inhibitor", correct: true },
      { text: "Phenothiazine", correct: false },
      { text: "B blocker", correct: false },
      { text: "Azapirone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an antidepressant drug which is known to have both high sedative and anticholinergic activity?",
    answers: [
      { text: "Amitriptyline", correct: true },
      { text: "Trazodone", correct: false },
      { text: "Fluoxetine", correct: false },
      { text: "Phenalgine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient Manoj with severe pain thought to be of gastrointestinal origin received 60 mg of meperidine subsequent to which he developed reaction characterized by tachycardia, hypertension, hyperpyrexia and seizures. He gave the history that he is also taking some medicine for his psychiatric condition. Which of the following drug can be held responsible for this sort of reaction?",
    answers: [
      { text: "Phenelzine", correct: true },
      { text: "Alprazolam", correct: false },
      { text: "Lithium", correct: false },
      { text: "Imipramine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs do not cause hyperprolactinemia? ",
    answers: [
      { text: "Bromocriptine", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Reserpine", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a pharmacological property of levodopa?",
    answers: [
      { text: "Domperidone reduces levodopa-induced vomiting and its therapeutic potential", correct: true },
      { text: "It is a prodrug", correct: false },
      { text: "Pyridoxine reduces the effect of levodopa in Parkinsonism", correct: false },
      { text: "Phenothiazines reduce its effectiveness in Parkinsonism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following can cause long term of aluminum hydroxide?",
    answers: [
      { text: "Osteomalacia", correct: true },
      { text: "Hyperuricaemia", correct: false },
      { text: "Hyperglycemia", correct: false },
      { text: "Vitamin B 12 deficiency", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Proton-pump inhibitors are most effective when they are given?",
    answers: [
      { text: "Shortly before meals", correct: true },
      { text: "After meals", correct: false },
      { text: "Along with H2 blockers", correct: false },
      { text: "During prolonged fasting periods", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of  the following drug does not cause stimulating 5HT4 receptors to act as a prokinetic agent?",
    answers: [
      { text: "Domperidone", correct: true },
      { text: "Renzapride", correct: false },
      { text: "Metoclopramide", correct: false },
      { text: "Cisapride", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 28 year old pregnant female, came in for her 4th antenatal visit. When asked about any issues, she mentions that she has had gastric irritation for about 2 weeks duration and no amount of natural therapy or diet modification helped through it. You suspect it could be peptic ulcer disease. Which of the following medications you would never give this patient for the same?",
    answers: [
      { text: "Misoprostol", correct: true },
      { text: "Ranitidine", correct: false },
      { text: "Omeprazole", correct: false },
      { text: "Famotidine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements is about theophylline?",
    answers: [
      { text: "Its use in asthma has declined because of narrow safety margin", correct: true },
      { text: "Its plasma half-life is longer in children as compared to that in adults", correct: false },
      { text: "Its dose needs to be reduced in the smokers", correct: false },
      { text: "It acts by increasing the formation of cAMP", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the most appropriate therapy for bronchodilation in acute severe asthma?",
    answers: [
      { text: "Nebulized SABAs", correct: true },
      { text: "Intravenous aminophylline", correct: false },
      { text: "lnhalational anticholinergics", correct: false },
      { text: "Intravenous SABAs", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is delivered as an aerosol formulation through a dry powder inhaler?",
    answers: [
      { text: "Indacaterol", correct: true },
      { text: "Ipratropium bromide", correct: false },
      { text: "Formoterol", correct: false },
      { text: "Salmeterol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs CANNOT be administered by inhalation?",
    answers: [
      { text: "Theophylline", correct: true },
      { text: "Ipratropium bromide", correct: false },
      { text: "Budesonide", correct: false },
      { text: "Terbutaline", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary cell type responsible for histamine release?",
    answers: [
      { text: "Mast cells", correct: true },
      { text: "Neutrophils", correct: false },
      { text: "Eosinophils", correct: false },
      { text: "Lymphocytes", correct: false },
      { text: "Erythrocytes", correct: false },
    ],
  },
  {
    question: "Which of the following is a primary effect of histamine release?",
    answers: [
      { text: "Increased vascular permeability", correct: true },
      { text: "Vasoconstriction", correct: false },
      { text: "Bronchodilation", correct: false },
      { text: "Increased vascular permeability", correct: false },
      { text: "Decreased mucus production", correct: false },
    ],
  },
  {
    question: "Which of the following drug is cardiac glycoside?",
    answers: [
      { text: "Strophanthin", correct: true },
      { text: "Quinidine sulfate", correct: false },
      { text: "Caffeine", correct: false },
      { text: "Budesonide", correct: false },
      { text: "Cordiamine", correct: false },
    ],
  },
  {
    question: "If quinidine and digoxin are administered concurrently, what effect does quinidine have on digoxin?",
    answers: [
      { text: "Plasma concentration of digoxin is increased", correct: true },
      { text: "Absorption of digoxin from the gastrointestinal tract is decreased", correct: false },
      { text: "Effect of digoxin on the AV node is antagonized", correct: false },
      { text: "Metabolism of digoxin is prevented", correct: false },
      { text: "Adverse effect of digoxin is decreased", correct: false },
    ],
  },
  {
    question: "Which of the following antiarrhythmic drugs belongs to calcium channel blockers?",
    answers: [
      { text: " verapamil", correct: true },
      { text: " lidocaine", correct: false },
      { text: " inderal", correct: false },
      { text: "cordarone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This drug is a Class IA antiarrhythmic drug: ",
    answers: [
      { text: "Quinidine ", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Flecainide ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This drug has beta-adrenergic blocking activity: ",
    answers: [
      { text: "Sotalol ", correct: true },
      { text: "Quinidine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Verapamil ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This drug is a Class II antiarrhythmic drug: ",
    answers: [
      { text: " Propranolol ", correct: true },
      { text: "Quinidine", correct: false },
      { text: "Lidocaine ", correct: false },
      { text: "Verapamil ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs causes a decrease in liver triacylglycerol synthesis by limiting available free fatty acids needed as building blocks for this pathway?",
    answers: [
      { text: "Niacin", correct: true },
      { text: "Clofibrate", correct: false },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs inhibits 3-hydroxy-3-methylglutaryl CoA reductase, the rate limiting step in cholesterol synthesis?",
    answers: [
      { text: "Lovastatin", correct: true },
      { text: "Clofibrate", correct: false },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "How does aspirin work when used to prevent myocardial infarction?",
    answers: [
      { text: "Inhibition of cyclooxygenase", correct: true },
      { text: "Lowering serum lipids", correct: false },
      { text: "Coronary steal phenomenon", correct: false },
      { text: "Inhibition of thromboxane synthetase", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following Beta blocker increases HDL?",
    answers: [
      { text: "Bucindolol", correct: true },
      { text: "Nebivolol", correct: false },
      { text: "Carvedilol", correct: false },
      { text: "Celiprolol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following fluid and electrolyte imbalance are not seen with thiazide diuretics?",
    answers: [
      { text: "Hypermagnesemia", correct: true },
      { text: "Hypochloremia", correct: false },
      { text: "Metabolic alkalosis", correct: false },
      { text: "Hypercalcemia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "At equally natriuretic doses. which of the following drugs causes maximum potassium excretion?",
    answers: [
      { text: "Acetazolamide", correct: true },
      { text: "Spironolactone", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Aldosterone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a hematopoietic growth factor used to stimulate red blood cell production?",
    answers: [
      { text: "Epoetin alfa", correct: true },
      { text: "Heparin", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Aspirin", correct: false },
      { text: "Clopidogrel", correct: false },
    ],
  },
  {
    question: "This drug class is commonly used to treat clotting disorders and can increase the risk of bleeding.",
    answers: [
      { text: "Anticoagulants", correct: true },
      { text: "Antiplatelet drugs", correct: false },
      { text: "Thrombolytics", correct: false },
      { text: "Hematopoietic growth factors", correct: false },
      { text: "Iron supplements", correct: false },
    ],
  },
  {
    question: "Intravenous furosemide is used for rapid symptom control in acute left ventricular failure. How does it provide rapid relief of dyspnea?",
    answers: [
      { text: "By causing vasodilation", correct: true },
      { text: "By causing rapid diuresis and volume depletion", correct: false },
      { text: "By causing bronchodilation", correct: false },
      { text: "By stimulating left ventricular contractility", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40 year old man has megaloblastic: anemia and early signs of neurological abnormality.Which of the following drug is most probably required?",
    answers: [
      { text: "Vitamin B12", correct: true },
      { text: "folic acid", correct: false },
      { text: "Iron sulphate", correct: false },
      { text: "Erythropoietin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Why does Heparin act as an anticoagulant?",
    answers: [
      { text: "Activates antithrombin III", correct: true },
      { text: "Inactivates antithrombin III", correct: false },
      { text: "Activates thrombin", correct: false },
      { text: "Activates factor Xa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which among the following is not a fetal abnormality caused by warfarin administered during pregnancy?",
    answers: [
      { text: "Macrocephaly", correct: true },
      { text: "Fetal haemorrhage", correct: false },
      { text: "Stippled epiphyses", correct: false },
      { text: "Nasal hypoplasia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug can be used as an antidote for fibrinolytic therapy?",
    answers: [
      { text: "E-Aminocaproic acid", correct: true },
      { text: "Streptokinase", correct: false },
      { text: "Heparin", correct: false },
      { text: "Protamine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is treatment of choice in a patient acute pulmonary embolism with right ventricular hyperkinesia and a compromised cardiac output but normal blood pressure?",
    answers: [
      { text: "Thrombolytic agent", correct: true },
      { text: "IV Filters", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Low molecular weight heparin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 29-year-old male presented with symptoms of Ototoxicity and nephrotoxicity after a week. Which of the following drugs do you think is responsible for this?",
    answers: [
      { text: "Vancomycin", correct: true },
      { text: "Azithromycin", correct: false },
      { text: "Clindamycin", correct: false },
      { text: "Penicillin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not an established antimicrobial synergy at the clinical level?",
    answers: [
      { text: "Penicillin and tetracycline for bacterial meningitis", correct: true },
      { text: "B Carbenicillin and gentamicin for pseudomonal infections", correct: false },
      { text: "Amphotericin and flucytosine for cryptococcal meningitis", correct: false },
      { text: "Trimethoprim and sulfamethoxazole for coliform infections", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drug that can not be used to treat infections caused by Bacteroides fragilis?",
    answers: [
      { text: "Amikacin", correct: true },
      { text: "Metronidazole", correct: false },
      { text: "Trovafloxacin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A neonate who has been diagnosed with neonatal sepsis has been brought up for her daily dose of IM gentamicin, What's the reason for giving it IM instead of Oral?",
    answers: [
      { text: "It has poor absorption", correct: true },
      { text: "It has adverse effects on gastric mucosa", correct: false },
      { text: "It interferes with absorption of other drugs", correct: false },
      { text: "It is rapidly destroyed by gastric acid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is the one that should be used to prevent close contacts of a patient with meningococcal meningitis?",
    answers: [
      { text: "Rifampicin", correct: true },
      { text: "Dapsone", correct: false },
      { text: "Erythromidine", correct: false },
      { text: "Amikacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For a 23 old pregnant female having severe allergy to amoxicillin.Which of the following drug used to treat gonorrhoea in a single dose?",
    answers: [
      { text: "Spectinomycin", correct: true },
      { text: "Ceftriaxone", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a first-generation quinolone primarily used for urinary tract infections?",
    answers: [
      { text: "Nalidixic acid", correct: true },
      { text: "Ciprofloxacin", correct: false },
      { text: "Levofloxacin", correct: false },
      { text: "Moxifloxacin", correct: false },
      { text: "Ceftriaxone", correct: false },
    ],
  },
  {
    question: "What is the combination of sulfamethoxazole and trimethoprim known as?",
    answers: [
      { text: "Co-trimoxazole", correct: true },
      { text: "Penicillin G", correct: false },
      { text: "Cephalexin", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "Azithromycin", correct: false },
    ],
  },
  {
    question: "What is the primary use of co-trimoxazole?",
    answers: [
      { text: "Prevention of urinary tract infections", correct: true },
      { text: "Treatment of fungal infections", correct: false },
      { text: "Treatment of viral infections", correct: false },
      { text: "Treatment of systemic infections", correct: false },
      { text: "Treatment of tuberculosis", correct: false },
    ],
  },
  {
    question: "Which of the following is a key difference between sulfonamides and co-trimoxazole?",
    answers: [
      { text: "Co-trimoxazole has a broader spectrum of activity than sulfonamides.", correct: true },
      { text: "Sulfonamides are more effective against Gram-positive bacteria.", correct: false },
      { text: "Sulfonamides are more likely to cause kidney damage.", correct: false },
      { text: "Co-trimoxazole is more effective against fungal infections.", correct: false },
      { text: "Sulfonamides are more effective against viral infections.", correct: false },
    ],
  },
  {
    question: "Which of the following is a true statement regarding quinolones and urinary tract antiseptics?",
    answers: [
      { text: "Quinolones are bactericidal, while urinary tract antiseptics are bacteriostatic.", correct: true },
      { text: "Quinolones are more effective against Gram-positive bacteria than Gram-negative bacteria.", correct: false },
      { text: "Urinary tract antiseptics are primarily used to treat systemic infections.", correct: false },
      { text: "Both quinolones and urinary tract antiseptics can cause renal toxicity.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a common urinary tract antiseptic?",
    answers: [
      { text: "Nitrofurantoin", correct: true },
      { text: "Penicillin", correct: false },
      { text: "Cephalosporin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "Moxifloxacin", correct: false },
    ],
  },
  {
    question: "A middle-aged man with chronic renal failure is diagnosed with pulmonary tuberculosis with a positive sputum test. His creatinine clearance is 25 ml/min. Except for which of the following drugs do the following require dose adjustments?",
    answers: [
      { text: "Rifampin", correct: true },
      { text: "Streptomycin", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "Isoniazid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient has been prescribed streptomycin as part of his Ant i-tubercular-treatment regimen. Which of the following is the most serious adverse effect you will expect in this case?",
    answers: [
      { text: "Ototoxicity", correct: true },
      { text: "Hepatotoxicity", correct: false },
      { text: "Ocular toxicity", correct: false },
      { text: "Hematological disturbances", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old female medical student from Assam presented with symptoms of chronic episodic headache and intermittent low-grade fever in the evening. A presumptive diagnosis of malaria was made based on the patient's place of residence. Which of the following schizontocidal drugs will be used to treat this patient, which is also the fastest acting",
    answers: [
      { text: "Artemether", correct: true },
      { text: "Mefloquine", correct: false },
      { text: "Chloroquine", correct: false },
      { text: "Proguanil", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A researcher who was studying on Plasm odium species decided to visit the malaria- endemic place in Odisha after 2 days to do his clinical study for 5 weeks. Which of the following drugs need to be taken as prophylaxis before visiting the malaria-endemic place?",
    answers: [
      { text: "Doxycycline", correct: true },
      { text: "Mefloquine", correct: false },
      { text: "Artesunate", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is dose limiting toxicity of amphotericin B?",
    answers: [
      { text: "Renal tubular acidosis", correct: true },
      { text: "Infusion related reaction", correct: false },
      { text: "Myelosuppression", correct: false },
      { text: "Hypotension", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the drug of choice for the treatment of neurocysticercosis?",
    answers: [
      { text: "Albendazole", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Piperazine", correct: false },
      { text: "Pyrantel palmoate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which antihelminthic also acts as an immunomodulator?",
    answers: [
      { text: "Levamisole", correct: true },
      { text: "Albendazole", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Piperazine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 50 year old male had fever for 1 week, abdominal distention and loss of appetite. It is not responding to antibiotics and antimalarial. Wida I test is negative but RK39 dipstick test was positive. Which drug can be used?",
    answers: [
      { text: "Amphotericin B", correct: true },
      { text: "Bedaquiline", correct: false },
      { text: "Linezolide", correct: false },
      { text: "Fluconazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A person is being treated for Human Immunodeficiency Virus-1 . He developed hypertriglyceridemia and hypercholesterolemia. Which of the following is most likely drug implicated for these adverse effects?",
    answers: [
      { text: "Ritonavir", correct: true },
      { text: "Raltegravir", correct: false },
      { text: "Tenofovir", correct: false },
      { text: "Efavirenz", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an aerosol drug used for treatment of RSV infection in a child?",
    answers: [
      { text: "Ribavirin", correct: true },
      { text: "Indinavir", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Tenofovir", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most likely to cause additive anemia and neutropenia if administered to an AIDS patient taking zidovudine?",
    answers: [
      { text: "Ganciclovir", correct: true },
      { text: "Amantadine", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "Stavudine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " A previously known case of AIDS patient presents with complaints of recurrent episodes of severe abdominal pain and vomiting over the pasts days. The pain was more in the epigastric region radiating to the upper back, increased with food intake, and in the supine position. On laboratory examination, his serum amylase and lipase levels were 909 U/L and 1744 UIL respectively. Which of the drug most likely to be responsible for this?",
    answers: [
      { text: "Didanosine", correct: true },
      { text: "Ketoconazole", correct: false },
      { text: "Saquinavir", correct: false },
      { text: "Zidovudine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a characteristic of methotrexate?",
    answers: [
      { text: "Folic acid reverses its toxic effects", correct: true },
      { text: "Its toxicity primarily affects bone marrow and epithelial structures", correct: false },
      { text: "It is cell cycle specific and kills cells in the s phase", correct: false },
      { text: "It is the drug of choice for choriocarcinoma", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is Bevacizumab?",
    answers: [
      { text: "Monoclonal antibody against VEGF", correct: true },
      { text: "Anti-IL-2 monoclonal antibody", correct: false },
      { text: "Monoclonal antibody against FGFR", correct: false },
      { text: "Monoclonal antibody against EGFR", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 46-year-old female patient with known breast cancer was prescribed fluorouracil therapy. Which of the following correctly describes the mechanism of action of this drug?",
    answers: [
      { text: "Cytotoxicity caused by a metabolite that interferes with dTMP formation", correct: true },
      { text: "Cross-linking of double-stranded DNA and subsequent inhibition of DNA replication and transcription", correct: false },
      { text: "Irreversible inhibition of dihydrofolate reductase", correct: false },
      { text: "Inhibition of mitotic spindle formation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which liver enzyme is elevated in Azathioprine toxicity?",
    answers: [
      { text: "SGPT", correct: true },
      { text: "GGT", correct: false },
      { text: "ALP", correct: false },
      { text: "TPMT", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following immunosuppressants requires regular monitoring of renal function?",
    answers: [
      { text: "Cyclosporine", correct: true },
      { text: "Mycophenolate mofetil", correct: false },
      { text: "Methatrexate", correct: false },
      { text: "Azathioprine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary mechanism of action of immunocorrective agents?",
    answers: [
      { text: "Suppressing the immune system", correct: true },
      { text: "Stimulating the immune system", correct: false },
      { text: "Directly killing bacteria", correct: false },
      { text: "Blocking viral replication", correct: false },
      { text: "Inhibiting inflammation", correct: false },
    ],
  },
  {
    question: "Which of the following drugs inhibit 5'- Deiodinase?",
    answers: [
      { text: "Propylthiouracil", correct: true },
      { text: "Lugol’s Iodine", correct: false },
      { text: "Radioactive iodine", correct: false },
      { text: "Methimazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following the anti-thyroid drug with the most rapid onset of anti-thyroid action? ",
    answers: [
      { text: "Sodium iodide", correct: true },
      { text: "Propylthiouracil", correct: false },
      { text: "Methimazole", correct: false },
      { text: "I 31", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is more true of liothyronine than levothyroxine?",
    answers: [
      { text: "Better absorption", correct: true },
      { text: "Longer half-life", correct: false },
      { text: "Slower onset of action", correct: false },
      { text: "Less potency", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which oral hypoglycemic drug class works by stimulating insulin release from the pancreas?",
    answers: [
      { text: "Sulfonylureas", correct: true },
      { text: "Biguanides", correct: false },
      { text: "Thiazolidinediones", correct: false },
      { text: "DPP-4 inhibitors", correct: false },
      { text: "GLP-1 receptor agonists", correct: false },
    ],
  },
  {
    question: "A patient taking levothyroxine regularly becomes pregnant. Which of the following should be the dose of the levothyroxine?",
    answers: [
      { text: "Increased", correct: true },
      { text: "Decreased", correct: false },
      { text: "Unaltered", correct: false },
      { text: "stop using", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an indication for the use of folic acid?",
    answers: [
      { text: "Counteracting the toxicity of high-dose methotrexate therapy", correct: true },
      { text: "Prevention of neural tube defects in the offspring of women receiving anticonvulsants", correct: false },
      { text: "Pernicious anemia", correct: false },
      { text: "Anemia associated with renal failure", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 62 year old male patient comes to you with urinary retention, back pain, and hematuria. He also has complaints of Weight loss and loss of appetite, Bone pain with repeated fracture and Neurologic deficits. On Digital rectal examination a nodule is discovered on prostate and prostate-specific antigen (PSA) found out to be very high on evaluation. You have started first line hormonal therapy for the above problem but patient disease found to be refractory to it.Which of the following can not be chosen for above refractory disease?",
    answers: [
      { text: "Bicalutamide", correct: true },
      { text: "Enzalutamine", correct: false },
      { text: "Apalutamide", correct: false },
      { text: "Abiraterone acetate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which hormone is primarily responsible for increasing blood calcium levels?",
    answers: [
      { text: "Parathyroid hormone (PTH)", correct: true },
      { text: "Insulin", correct: false },
      { text: "Glucagon", correct: false },
      { text: "Calcitonin", correct: false },
      { text: "Aldosterone", correct: false },
    ],
  },
  {
    question: "Metformin is considered to be the first-line oral hypoglycemic agent of choice. It has also been used in the treatment of PCOS. It is not found to be effective in lowering blood glucose in which of the following populations?",
    answers: [
      { text: "Non diabetics", correct: true },
      { text: "Obese diabetics", correct: false },
      { text: " Type 2 diabetics", correct: false },
      { text: "Diabetics not responding to sulfonylureas", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " A 44 year old male visits your clinic situated in the outskirts of a town. He is a known diabetic who was having sugar on control, taking Metformin 500 mg twice a day. The recent results make you consider adding another medication. Due to the financial crunch the patient is going through, you would prefer prescribing a sulfonylurea over the newer agents. Why would you pick glipizide over chlorpropamide?",
    answers: [
      { text: " It is more potent", correct: true },
      { text: "It is longer acting", correct: false },
      { text: "It does not lower blood sugar in nondiabetic subjects", correct: false },
      { text: "It is less prone to cause hypoglycemic reaction", correct: false },
      { text: "nan", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("night-mode-toggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    toggle.textContent = document.body.classList.contains("night-mode")
      ? "☀️ Day Mode"
      : "🌙 Night Mode";
  });
});


startQuiz();
