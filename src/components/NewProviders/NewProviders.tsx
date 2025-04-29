'use client';
import React from 'react';
import { Dialog, Flex, Text, Box, Heading } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

interface AdditionalFile {
  name: string;
  label: string;
}

const statusOptions = ['En Progreso', 'En Hold', 'Activo', 'Inactivo'];
const supplierOptions = ['Proyecto A', 'Proyecto B', 'Proyecto C'];
const commodityOptions = ['Componente X', 'Componente Y', 'Componente Z'];

const NewProviders = () => {
  const [status, setStatus] = React.useState('');
  const [proyect, setProyect] = React.useState('');
  const [commodity, setCommodity] = React.useState('');
  const [currentStep, setCurrentStep] = React.useState(1);
  const [fileName1, setFileName1] = React.useState('');
  const [fileName2, setFileName2] = React.useState('');
  const [additionalFiles, setAdditionalFiles] = React.useState<
    AdditionalFile[]
  >([]);

  const steps = [
    { id: 1, title: 'Información', shortTitle: 'Inf.' },
    { id: 2, title: 'Contratos', shortTitle: 'Contratos' },
    { id: 3, title: 'Documentación', shortTitle: 'Doc.' },
    { id: 4, title: 'Evaluación', shortTitle: 'Eval.' },
  ];

  const addAdditionalFile = () => {
    if (additionalFiles.length < 5) {
      setAdditionalFiles([
        ...additionalFiles,
        { name: '', label: `Documento ${additionalFiles.length + 3}` },
      ]);
    }
  };

  const removeAdditionalFile = (index: number) => {
    const newFiles = [...additionalFiles];
    newFiles.splice(index, 1);
    setAdditionalFiles(newFiles);
  };

  const handleAdditionalFileChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFiles = [...additionalFiles];
    newFiles[index] = {
      ...newFiles[index],
      name: event.target.files?.[0]?.name || '',
    };
    setAdditionalFiles(newFiles);
  };

  const updateAdditionalFileLabel = (index: number, label: string) => {
    const newFiles = [...additionalFiles];
    newFiles[index] = {
      ...newFiles[index],
      label: label,
    };
    setAdditionalFiles(newFiles);
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    
    setProyect('');
    setStatus('');
    setCommodity('');
    setFileName1('');
    setFileName2('');
    setAdditionalFiles([]);
    setCurrentStep(1);
  };

  return (
    <Dialog.Content style={{ width: '800px',height:"530px", maxWidth: '90vw' }}>
      <Dialog.Title>
        <VisuallyHidden>Agregar Nuevo Proveedor</VisuallyHidden>
      </Dialog.Title>

      
      <Flex justify="between" mb="4" className="border-b pb-4">
        {steps.map((step) => (
          <Flex
            key={step.id}
            direction="column"
            align="center"
            className={
              currentStep >= step.id ? 'text-primary' : 'text-gray-500'
            }
          >
            <Text weight="bold">{step.shortTitle}</Text>
            <Box
              className={`h-1 w-8 mt-2 ${
                currentStep >= step.id ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          </Flex>
        ))}
      </Flex>

      
      {currentStep === 1 && (
        <Step1
          proyect={proyect}
          setProyect={setProyect}
          status={status}
          setStatus={setStatus}
          commodity={commodity}
          setCommodity={setCommodity}
          onNext={handleNext}
          onCancel={handleCancel}
        />
      )}

      {currentStep === 2 && (
        <Step2
          fileName1={fileName1}
          setFileName1={setFileName1}
          fileName2={fileName2}
          setFileName2={setFileName2}
          additionalFiles={additionalFiles}
          addAdditionalFile={addAdditionalFile}
          removeAdditionalFile={removeAdditionalFile}
          handleAdditionalFileChange={handleAdditionalFileChange}
          updateAdditionalFileLabel={updateAdditionalFileLabel}
          onPrevious={handlePrev}
          onNext={handleNext}
        />
      )}

      {currentStep === 3 && (
        <Step3 onPrevious={handlePrev} onNext={handleNext} />
      )}

      {currentStep === 4 && (
        <Flex direction="column" gap="3">
          <Text size="4" weight="bold">
            Evaluación
          </Text>
          <Flex gap="3" mt="4" justify="end">
            <Button variant="ghost" onClick={handlePrev}>
              Anterior
            </Button>
            <Dialog.Close>
              <Button variant="default">Finalizar</Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      )}
    </Dialog.Content>
  );
};

export default NewProviders;
