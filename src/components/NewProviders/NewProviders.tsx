'use client';
import React from 'react';
import { Dialog, Flex, Text, Select, Tabs } from '@radix-ui/themes';
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
  const [currentTab, setCurrentTab] = React.useState('step1');
  const [dialogWidth, setDialogWidth] = React.useState('450px');
  const [fileName1, setFileName1] = React.useState('');
  const [fileName2, setFileName2] = React.useState('');
  const [additionalFiles, setAdditionalFiles] = React.useState<
    AdditionalFile[]
  >([]);

  const inputStyle = {
    display: 'flex',
    height: '2.5rem',
    width: '100%',
    borderRadius: '0.375rem',
    borderWidth: '1px',
    borderColor: 'hsl(var(--input))',
    backgroundColor: 'hsl(var(--background))',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    outline: 'none',
    ringOffsetWidth: '2px',
    cursor: 'default',
    opacity: '1',
  };

  React.useEffect(() => {
    switch (currentTab) {
      case 'step1':
        setDialogWidth('450px');
        break;
      case 'step2':
        setDialogWidth('600px');
        break;
      case 'step3':
        setDialogWidth('450px');
        break;
      case 'step4':
        setDialogWidth('1300px');
        break;
      default:
        setDialogWidth('450px');
    }
  }, [currentTab]);

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

  return (
    <Dialog.Content maxWidth={dialogWidth}>
      <Dialog.Title>
        <VisuallyHidden>Agregar Nuevo Proveedor</VisuallyHidden>
      </Dialog.Title>

      <Tabs.Root
        defaultValue="step1"
        value={currentTab}
        onValueChange={setCurrentTab}
      >
        <Tabs.List>
          <Tabs.Trigger value="step1">Inf.</Tabs.Trigger>
          <Tabs.Trigger value="step2">Contratos</Tabs.Trigger>
          <Tabs.Trigger value="step3">Documentacion</Tabs.Trigger>
          <Tabs.Trigger value="step4">Evaluacion</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="step1">
          <Step1
            proyect={proyect}
            setProyect={setProyect}
            status={status}
            setStatus={setStatus}
            commodity={commodity}
            setCommodity={setCommodity}
            onNext={() => setCurrentTab('step2')}
            onCancel={() => {
              setProyect('');
              setStatus('');
              setCommodity('');
            }}
          />
        </Tabs.Content>

        <Tabs.Content value="step2">
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
            onPrevious={() => setCurrentTab('step1')}
            onNext={() => setCurrentTab('step3')}
          />
        </Tabs.Content>

        <Tabs.Content value="step3">
          <Step3
            onPrevious={() => setCurrentTab('step2')}
            onNext={() => setCurrentTab('step4')}
          />
        </Tabs.Content>

        <Tabs.Content value="step4">
          <Flex direction="column" gap="3">
            <Text size="4" weight="bold">
              Evaluación
            </Text>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Button variant="ghost" onClick={() => setCurrentTab('step3')}>
              Anterior
            </Button>
            <Dialog.Close>
              <Button variant="default">Finalizar</Button>
            </Dialog.Close>
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </Dialog.Content>
  );
};

export default NewProviders;
