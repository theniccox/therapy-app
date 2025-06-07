'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const feelings = [
  'Anxious', 'Depressed', 'Overwhelmed', 'Confused', 'Angry', 
  'Fearful', 'Guilty', 'Ashamed', 'Numb', 'Disconnected',
  'Irritable', 'Exhausted', 'Hopeless', 'Lonely', 'OK but...'
];

const explorationGoals = [
  'Purpose', 'Self', 'Relationships', 'Past trauma', 'Family issues',
  'Work stress', 'Identity', 'Confidence', 'Anxiety', 'Depression',
  'Addiction', 'Grief', 'Life transitions', 'Parenting', 'Sexuality'
];

const symptoms = {
  psychological: [
    'Shame', 'Guilt', 'Mood swings', 'Fear', 'Panic', 
    'Aggression', 'Anxiety', 'Rage', 'Terror', 'Confusion', 
    'Self-blame', 'Overwhelm'
  ],
  physical: [
    'Insomnia', 'Nightmares', 'Jumpiness', 'Racing heart', 
    'Migraines', 'Digestion issues', 'Teeth grinding', 
    'Muscle tension', 'Exhaustion', 'Chronic fatigue'
  ],
  social: [
    'Relationship difficulties', 'Fear of abandonment', 
    'Boundary issues', 'Social anxiety', 'Irritability', 
    'Social withdrawal', 'Difficulty trusting others'
  ]
};

export default function Questionnaire() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [feeling, setFeeling] = useState('');
  const [explorationGoal, setExplorationGoal] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [statement, setStatement] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [searchParams, setSearchParams] = useState({});

  const handleFeelingSelect = (selected: string) => {
    setFeeling(selected);
    setStep(2);
  };

  const handleExplorationSelect = (selected: string) => {
    setExplorationGoal(selected);
    
    // Generate statement
    const newStatement = feeling === 'OK but...' 
      ? `I feel OK but I want to explore my ${selected.toLowerCase()}`
      : `I feel ${feeling.toLowerCase()} and I want to explore my ${selected.toLowerCase()}`;
    
    setStatement(newStatement);
    setStep(3);
  };

  const handleSymptomSelect = (symptom: string) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptom)) {
        return prev.filter(s => s !== symptom);
      } else {
        return [...prev, symptom];
      }
    });
  };

  const handleSymptomsContinue = () => {
    setStep(4);
  };

  const startRecording = () => {
    setIsRecording(true);
    // In a real app, this would trigger voice recording
    // For this prototype, we'll simulate recording
    setTimeout(() => {
      setIsRecording(false);
      setIsVerified(true);
      setStep(5);
    }, 2000);
  };

  const handleFindTherapists = () => {
    // Generate search parameters based on questionnaire responses
    const params: any = {};
    
    // Map feeling to reason
    if (feeling === 'Anxious') params.reason = 'Anxiety';
    else if (feeling === 'Depressed') params.reason = 'Depression';
    else if (feeling === 'Overwhelmed' || feeling === 'Exhausted') params.reason = 'Work stress';
    else if (feeling === 'Angry' || feeling === 'Irritable') params.reason = 'Anger management';
    
    // Map exploration goal to therapy type
    if (explorationGoal === 'Past trauma') params.therapy_type = 'EMDR';
    else if (explorationGoal === 'Relationships') params.therapy_type = 'Systemic';
    else if (explorationGoal === 'Anxiety') params.therapy_type = 'CBT';
    else if (explorationGoal === 'Identity') params.therapy_type = 'Narrative Therapy';
    
    // Default location to Wembley
    params.location = 'Wembley, London';
    
    setSearchParams(params);
    
    // Save questionnaire response to database (would be implemented in a real app)
    // For prototype, we'll just redirect to search with params
    router.push(`/search?${new URLSearchParams(params).toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-block mb-6 text-primary hover:text-primary-dark">
          &larr; Back to Home
        </Link>
        
        <div className="max-w-2xl mx-auto card p-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-primary rounded-full" 
                  style={{ width: `${(step / 5) * 100}%` }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-text-light">Step {step} of 5</span>
            </div>
          </div>
          
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">How do you feel?</h2>
              <p className="text-text-light mb-6">Select the emotion that best describes how you're feeling right now.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {feelings.map((f) => (
                  <button
                    key={f}
                    onClick={() => handleFeelingSelect(f)}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      feeling === f 
                        ? 'border-primary bg-primary-light/10 text-primary-dark' 
                        : 'border-gray-200 hover:border-primary-light hover:bg-primary-light/5'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">What do you want to explore?</h2>
              <p className="text-text-light mb-6">Select an area you'd like to focus on in therapy.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {explorationGoals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => handleExplorationSelect(goal)}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      explorationGoal === goal 
                        ? 'border-primary bg-primary-light/10 text-primary-dark' 
                        : 'border-gray-200 hover:border-primary-light hover:bg-primary-light/5'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Are you experiencing any of these symptoms?</h2>
              <p className="text-text-light mb-6">Select all that apply to you.</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-text mb-2">Psychological & Emotional</h3>
                <div className="flex flex-wrap gap-2">
                  {symptoms.psychological.map((symptom) => (
                    <button
                      key={symptom}
                      onClick={() => handleSymptomSelect(symptom)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedSymptoms.includes(symptom)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-text-light'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-text mb-2">Physical</h3>
                <div className="flex flex-wrap gap-2">
                  {symptoms.physical.map((symptom) => (
                    <button
                      key={symptom}
                      onClick={() => handleSymptomSelect(symptom)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedSymptoms.includes(symptom)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-text-light'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-text mb-2">Social</h3>
                <div className="flex flex-wrap gap-2">
                  {symptoms.social.map((symptom) => (
                    <button
                      key={symptom}
                      onClick={() => handleSymptomSelect(symptom)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedSymptoms.includes(symptom)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-text-light'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleSymptomsContinue}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 mt-4"
              >
                Continue
              </button>
            </div>
          )}
          
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Your Statement</h2>
              <p className="text-text-light mb-6">
                The first step to healing is to be able to say it out loud. Please read and verify your statement:
              </p>
              
              <div className="bg-primary-light/10 border border-primary-light/20 rounded-lg p-6 mb-8">
                <p className="text-xl text-center font-medium text-primary">"{statement}"</p>
              </div>
              
              <p className="text-text-light mb-6">
                To verify your account and help you on your journey, please record yourself saying this statement.
              </p>
              
              <button
                onClick={startRecording}
                className={`w-full py-3 px-4 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-4 ${
                  isRecording 
                    ? 'bg-accent hover:bg-accent/90 text-white focus:ring-accent'
                    : 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary'
                }`}
              >
                {isRecording ? 'Recording... (Tap to Stop)' : 'Start Recording'}
              </button>
            </div>
          )}
          
          {step === 5 && (
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-2">Verification Complete</h2>
                <p className="text-text-light">
                  Thank you for sharing. We're ready to help you find the right therapist for your journey.
                </p>
              </div>
              
              <div className="bg-primary-light/10 border border-primary-light/20 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-primary mb-2">Your Therapy Goals:</h3>
                <ul className="space-y-2 text-text">
                  <li>• Address feelings of {feeling.toLowerCase()}</li>
                  <li>• Explore your {explorationGoal.toLowerCase()}</li>
                  {selectedSymptoms.length > 0 && (
                    <li>• Work on symptoms: {selectedSymptoms.slice(0, 3).join(', ')}{selectedSymptoms.length > 3 ? ` and ${selectedSymptoms.length - 3} more` : ''}</li>
                  )}
                </ul>
              </div>
              
              <button
                onClick={handleFindTherapists}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Find Matching Therapists
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
