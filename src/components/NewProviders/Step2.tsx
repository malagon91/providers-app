'use client';
import React from 'react';
import { Flex, Text, Box } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AdditionalFile {
  name: string;
  label: string;
}

interface Step2Props {
  fileName1: string;
  setFileName1: (value: string) => void;
  fileName2: string;
  setFileName2: (value: string) => void;
  additionalFiles: AdditionalFile[];
  addAdditionalFile: () => void;
  removeAdditionalFile: (index: number) => void;
  handleAdditionalFileChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  updateAdditionalFileLabel: (index: number, label: string) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const Step2 = ({
  fileName1,
  setFileName1,
  fileName2,
  setFileName2,
  additionalFiles,
  addAdditionalFile,
  removeAdditionalFile,
  handleAdditionalFileChange,
  updateAdditionalFileLabel,
  onPrevious,
  onNext
}: Step2Props) => {
  return (
    <Box className="w-full max-w-3xl mx-auto p-4">
      <Flex direction="column" gap="4" className="mb-6">
        
        <Box className="border-b pb-4">
          <Text as="div" size="3" weight="bold" className="mb-3 text-gray-800">
            Acuerdo de calidad
          </Text>
          <Flex gap="3" align="center">
            <Input
              placeholder="Acuerdos de calidad"
              className="w-[280px] bg-gray-50 border-gray-300"
              value={fileName1}
              readOnly
            />
            <input
              type="file"
              id="file-upload-1"
              className="hidden"
              onChange={(e) => setFileName1(e.target.files?.[0]?.name || '')}
            />
            <Button variant="secondary"
              onClick={() => document.getElementById('file-upload-1')?.click()}
            >
              Seleccionar
            </Button>
          </Flex>
        </Box>

        
        <Box className="border-b pb-4">
          <Text as="div" size="3" weight="bold" className="mb-3 text-gray-800">
            Acuerdo de confidencialidad
          </Text>
          <Flex gap="3" align="center">
            <Input
              placeholder="Acuerdo de confidencialidad"
              className="w-[280px] bg-gray-50 border-gray-300"
              value={fileName2}
              readOnly
            />
            <input
              type="file"
              id="file-upload-2"
              className="hidden"
              onChange={(e) => setFileName2(e.target.files?.[0]?.name || '')}
            />
            <Button variant="secondary"
            onClick={() => document.getElementById('file-upload-2')?.click()}
            >
              Seleccionar
            </Button>
          </Flex>
        </Box>

        
        {additionalFiles.map((file, index) => (
          <Box key={index} className="border-b pb-4 last:border-b-0">
            <Text as="div" size="3" weight="bold" className="mb-3 text-gray-800">
              Documento adicional {index + 1}
            </Text>
            <Flex direction="column" gap="3">
              <Input
                value={file.label}
                onChange={(e) => updateAdditionalFileLabel(index, e.target.value)}
                placeholder="Título del documento"
                className="w-[280px] bg-gray-50 border-gray-300"
              />
              <Flex gap="3" align="center">
                <Input
                  placeholder={`Documento ${index + 3}`}
                  className="w-[280px] bg-gray-50 border-gray-300"
                  value={file.name}
                  readOnly
                />
                <input
                  type="file"
                  id={`file-upload-additional-${index}`}
                  className="hidden"
                  onChange={(e) => handleAdditionalFileChange(index, e)}
                />
                <Button variant="secondary"
                  
                  onClick={() => document.getElementById(`file-upload-additional-${index}`)?.click()}
                >
                  Seleccionar
                </Button>
                <Button
                  variant="destructive"
                  
                  onClick={() => removeAdditionalFile(index)}
                >
                  Eliminar
                </Button>
              </Flex>
            </Flex>
          </Box>
        ))}

        {additionalFiles.length < 5 && (
          <Button
            variant="ghost"
            className="mt-2 w-[280px] text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            onClick={addAdditionalFile}
          >
            <span className="mr-1">+</span> Agregar otro documento
          </Button>
        )}
      </Flex>

      
      <Flex gap="3" justify="end" className="mt-8">
        <Button
          variant="ghost"
          
          onClick={onPrevious}
        >
          Anterior
        </Button>
        <Button variant="link"
          
          onClick={onNext}
        >
          Siguiente
        </Button>
      </Flex>
    </Box>
  );
};