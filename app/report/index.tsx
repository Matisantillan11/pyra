import { useState } from 'react';
import { AlertTypeStep, ConfirmationStep, EvidenceStep, LocationStep, Stepper } from './components';
import ReportSuccess from './components/success';
import { ReportData } from './types';


export default function Report() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportData, setReportData] = useState<ReportData>({
    alertType: null,
    location: null,
    evidence: null,
    notes: '',
  });

  const steps = ['TIPO', 'UBICACIÓN', 'EVIDENCIA', 'DETALLES'];

  const handleSubmit = () => {
    console.log('Submitting report:', reportData);
    setIsSuccess(true);
  };

  const updateReportData = (data: Partial<ReportData>) => {
    setReportData((prev) => ({ ...prev, ...data }));
  };


  if (isSuccess) {
    return <ReportSuccess />;
  }

  return (
    <Stepper steps={steps} onComplete={handleSubmit}>
      <Stepper.Step nextDisabled={!reportData.alertType} showBackButton={false}>
        <AlertTypeStep
          selectedType={reportData.alertType}
          onSelect={(type) => updateReportData({ alertType: type })}
        />
      </Stepper.Step>

      <Stepper.Step showBackButton>
        <LocationStep
          location={reportData.location}
          onLocationSelect={(location) => updateReportData({ location })}
        />
      </Stepper.Step>

      <Stepper.Step
        showBackButton={false}
        secondaryAction={{ label: 'Saltar', onPress: () => { } }}
      >
        <EvidenceStep
          evidence={reportData.evidence}
          notes={reportData.notes}
          onEvidenceAdd={(evidence) => updateReportData({ evidence })}
          onNotesChange={(notes) => updateReportData({ notes })}
        />
      </Stepper.Step>

      <Stepper.Step showBackButton={false}>
        <ConfirmationStep reportData={reportData} />
      </Stepper.Step>
    </Stepper>
  );
}
