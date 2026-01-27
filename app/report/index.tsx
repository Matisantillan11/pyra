import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertTypeStep, ConfirmationStep, EvidenceStep, LocationStep, ReportStepper } from './components';
import ReportSuccess from './components/success';
import { ReportData } from './types';

export default function Report() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportData, setReportData] = useState<ReportData>({
    alertType: null,
    location: null,
    evidence: null,
    notes: '',
  });

  const steps = ['TIPO', 'UBICACIÓN', 'DETALLES'];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting report:', reportData);
    setIsSuccess(true);
  };

  const updateReportData = (data: Partial<ReportData>) => {
    setReportData({ ...reportData, ...data });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <AlertTypeStep
            selectedType={reportData.alertType}
            onSelect={(type) => updateReportData({ alertType: type })}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <LocationStep
            location={reportData.location}
            onLocationSelect={(location) => updateReportData({ location })}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <EvidenceStep
            evidence={reportData.evidence}
            notes={reportData.notes}
            onEvidenceAdd={(evidence) => updateReportData({ evidence })}
            onNotesChange={(notes) => updateReportData({ notes })}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <ConfirmationStep
            reportData={reportData}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
      default:
        return (
          <AlertTypeStep
            selectedType={reportData.alertType}
            onSelect={(type) => updateReportData({ alertType: type })}
            onNext={handleNext}
          />
        );
    }
  };

  if (isSuccess) {
    return <ReportSuccess />;
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} className="flex-1 bg-white">
      <ReportStepper steps={steps} currentStep={currentStep} />
      {renderStep()}
    </SafeAreaView>
  );
}
