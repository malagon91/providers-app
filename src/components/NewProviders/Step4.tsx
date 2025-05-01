'use client';
import React, { useState } from 'react';
import { Flex, Text, Box, Select } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Evaluation {
  id: string;
  rating: string;
  reportFile: string;
  additionalInfo: string;
}

interface Step4Props {
  onPrevious: () => void;
  onNext: () => void;
}

const getRatingStyle = (rating: string) => {
    const baseStyle = {
      display: 'flex',
      height: '2.5rem',
      width: '6rem', 
      borderRadius: '0.375rem',
      borderWidth: '1px',
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      outline: 'none',
      cursor: 'default',
    };
  
    switch (rating) {
      case 'A':
        return { ...baseStyle, backgroundColor: '#dcfce7', borderColor: '#22c55e' };
      case 'B':
        return { ...baseStyle, backgroundColor: '#fef9c3', borderColor: '#eab308' };
      case 'C':
        return { ...baseStyle, backgroundColor: '#fee2e2', borderColor: '#ef4444' };
      default:
        return { ...baseStyle, backgroundColor: 'white', borderColor: 'hsl(var(--input))' };
    }
  };

export const Step4 = ({ onPrevious, onNext }: Step4Props) => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([
    { id: '1', rating: '', reportFile: '', additionalInfo: '' }
  ]);

  const handleRatingChange = (id: string, value: string) => {
    setEvaluations(evals =>
      evals.map(evalItem =>
        evalItem.id === id ? { ...evalItem, rating: value } : evalItem
      )
    );
  };

  const handleReportFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setEvaluations(evals =>
        evals.map(evalItem =>
          evalItem.id === id ? { ...evalItem, reportFile: file.name } : evalItem
        )
      );
    }
  };

  const handleAdditionalInfoChange = (id: string, value: string) => {
    setEvaluations(evals =>
      evals.map(evalItem =>
        evalItem.id === id ? { ...evalItem, additionalInfo: value } : evalItem
      )
    );
  };

  const addEvaluation = () => {
    if (evaluations.length >= 3) return;
    const newId = (evaluations.length + 1).toString();
    setEvaluations([...evaluations, { id: newId, rating: '', reportFile: '', additionalInfo: '' }]);
  };

  const removeEvaluation = (id: string) => {
    if (evaluations.length <= 1) return;
    setEvaluations(evals => evals.filter(evalItem => evalItem.id !== id));
  };

  const getRatingBackgroundColor = (rating: string) => {
    switch (rating) {
      case 'A': return 'bg-green-100';
      case 'B': return 'bg-yellow-100';
      case 'C': return 'bg-red-100';
      default: return 'bg-white';
    }
  };

  return (
    <Flex direction="column" position="relative" className="max-w-3xl mx-auto p-2">
      <Flex direction="column" gap="4">
        {evaluations.map((evalItem) => (
          <Flex key={evalItem.id} direction="column" className="border-b pb-4">
            <Text size="5" weight="bold" mb="2">Evaluación {evalItem.id}</Text>

            <Flex direction="column" gap="2">
              
              <Flex align="center" >
                <Text as="label" size="2" className="w-24 font-medium">Calificación:</Text>
                
<Select.Root
  value={evalItem.rating}
  onValueChange={(value) => handleRatingChange(evalItem.id, value)}
>
  <Select.Trigger 
    placeholder="Selecciona" 
    style={getRatingStyle(evalItem.rating)}
  />
  <Select.Content>
    <Select.Item value="A">A</Select.Item>
    <Select.Item value="B">B</Select.Item>
    <Select.Item value="C">C</Select.Item>
  </Select.Content>
</Select.Root>
              </Flex>

              
              <Flex gap="3">
                
                <Flex  align="center" gap="2">
                  <Text as="label" size="2" className="font-medium min-w-[60px]">Reporte:</Text>
                  <Flex  gap="1">
                    <Input
                      type="text"
                      value={evalItem.reportFile}
                      readOnly
                      placeholder="Archivo de reporte"
                      className="flex-1 h-9"
                    />
                    <input
                      type="file"
                      id={`report-file-${evalItem.id}`}
                      className="hidden"
                      onChange={(e) => handleReportFileChange(evalItem.id, e)}
                    />
                    <Button
                      variant="secondary"
                      className="w-20 h-9"
                      onClick={() => document.getElementById(`report-file-${evalItem.id}`)?.click()}
                    >
                      Subir
                    </Button>
                  </Flex>
                </Flex>

                
                <Flex  align="center" gap="2">
                  <Text as="label" size="2" className="font-medium min-w-[40px]">Otro:</Text>
                  <Flex gap="1">
                    <Input
                      type="text"
                      value={evalItem.additionalInfo}
                      onChange={(e) => handleAdditionalInfoChange(evalItem.id, e.target.value)}
                      placeholder="Información adicional"
                      className="flex-1 h-9"
                    />
                    <Button
                      variant="secondary"
                      className="w-20 h-9"
                      onClick={() => document.getElementById(`report-file-${evalItem.id}`)?.click()}
                    >
                      Subir
                    </Button>
                  </Flex>
                </Flex>
              </Flex>

              {evaluations.length > 1 && (
                <Flex justify="end" mt="2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeEvaluation(evalItem.id)}
                  >
                    Eliminar evaluación
                  </Button>
                </Flex>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>

      {evaluations.length < 3 && (
        <Flex justify="center" mt="3">
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-800"
            onClick={addEvaluation}
          >
            + Agregar otra evaluación
          </Button>
        </Flex>
      )}




</Flex>


    
  );
};