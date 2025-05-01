'use client';
import React from 'react';
import { Dialog, Flex, Text, Box, Heading } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

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
  const [additionalFiles, setAdditionalFiles] = React.useState<AdditionalFile[]>([]);

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
    <Dialog.Content style={{ width: '800px', height: '590px', maxWidth: '90vw' }}>
      <Dialog.Title>
        <VisuallyHidden>Agregar Nuevo Proveedor</VisuallyHidden>
      </Dialog.Title>

      
      <Flex align="center" justify="between" mb="4" className="relative pb-6">
        
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200 z-0">
          
          <div 
            className="h-full bg-primary transition-all duration-300" 
            style={{ 
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` 
            }}
          />
        </div>

        {steps.map((step) => (
          <Flex
            key={step.id}
            direction="column"
            align="center"
            className="relative z-10"
          >
            
            <div className={`
              w-6 h-6 rounded-full flex items-center justify-center mb-2
              ${currentStep >= step.id ? 'bg-primary' : 'bg-gray-200'}
              ${currentStep > step.id ? 'text-white' : 'text-gray-700'}
            `}>
              {currentStep > step.id ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <Text weight="bold">{step.id}</Text>
              )}
            </div>
            
            
            <Text 
              weight="bold" 
              className={`${currentStep >= step.id ? 'text-primary' : 'text-gray-500'}`}
            >
              {step.shortTitle}
            </Text>
          </Flex>
        ))}
      </Flex>

      
      {currentStep === 1 && (
      <>
      
        <Flex direction="column" gap="3">
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
        <Flex 
      gap="3" 
      position="absolute" 
      className="bottom-5 right-5"
      justify="end"
    >
      <Dialog.Close>
      <Button variant="ghost" onClick={handlePrev}>
        Cancelar
      </Button>
      
      </Dialog.Close>
      <Button onClick={handleNext}>
        Siguiente
        
      </Button>
      
    </Flex>
      </Flex>
      </>

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
          <Step4 onPrevious={handlePrev} onNext={handleNext} />
          <Flex 
        gap="3" 
        position="absolute" 
        className="bottom-5 right-5"
        justify="end"
      >
        <Button variant="ghost" onClick={handlePrev}>
          Anterior
        </Button>
        <Dialog.Close>
        <Button onClick={handleNext}>
          Finalizar
          
        </Button>
        </Dialog.Close>
      </Flex>
        </Flex>
      )}
    </Dialog.Content>
  );
};

export default NewProviders;