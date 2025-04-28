'use client';
import React, { useState } from 'react';
import { Flex, Text, Badge } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { parse, differenceInDays } from 'date-fns';

interface Certification {
  id: string;
  name: string;
  fileName: string;
  expirationDate: string;
  isFileUploaded: boolean;
}

interface Step3Props {
  onPrevious: () => void;
  onNext: () => void;
}

export const Step3 = ({ onPrevious, onNext }: Step3Props) => {
  const [certifications, setCertifications] = useState<Certification[]>([
    { id: '1', name: 'Certificado IATF16949', fileName: '', expirationDate: '', isFileUploaded: false },
    { id: '2', name: 'Certificado ISO9001', fileName: '', expirationDate: '', isFileUploaded: false },
    { id: '3', name: 'Certificado ISO14001', fileName: '', expirationDate: '', isFileUploaded: false },
  ]);

  const [dateErrors, setDateErrors] = useState<{[key: string]: string}>({});

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCertifications(certs => 
        certs.map(cert => 
          cert.id === id 
            ? { ...cert, fileName: file.name, isFileUploaded: true } 
            : cert
        )
      );
    }
  };

  const handleDateChange = (id: string, value: string) => {
    setCertifications(certs => 
      certs.map(cert => 
        cert.id === id 
          ? { ...cert, expirationDate: value } 
          : cert
      )
    );

    try {
      if (value) {
        parse(value, 'dd/MM/yyyy', new Date());
        setDateErrors(prev => ({ ...prev, [id]: '' }));
      }
    } catch {
      setDateErrors(prev => ({ ...prev, [id]: 'Formato debe ser dd/mm/aaaa' }));
    }
  };

  const handleSave = (id: string) => {
    const cert = certifications.find(c => c.id === id);
    if (!cert || !cert.expirationDate || dateErrors[id]) {
      alert('Ingrese una fecha válida');
      return;
    }
    
  };

  const getStatusColor = (expirationDate: string) => {
    if (!expirationDate) return 'gray';
    
    try {
      const expDate = parse(expirationDate, 'dd/MM/yyyy', new Date());
      const today = new Date();
      const diffDays = differenceInDays(expDate, today);
      
      if (diffDays > 30) return 'green';
      if (diffDays >= 0) return 'yellow';
      return 'red';
    } catch {
      return 'gray';
    }
  };

  return (
    <>
      <Flex direction="column" gap="4">
        
        
        {certifications.map((cert) => (
          <Flex key={cert.id} direction="column" gap="2">
            <Text as="div" size="2" weight="bold">
              {cert.name}
            </Text>
            
            <Flex align="center" gap="2">
              <Text size="2">Expiración:</Text>
              {cert.isFileUploaded ? (
                <Input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  value={cert.expirationDate}
                  onChange={(e) => handleDateChange(cert.id, e.target.value)}
                  style={{ width: '120px' }}
                  title="Formato: dd/mm/aaaa"
                />
              ) : (
                <Text size="2">--/--/----</Text>
              )}
              
              {cert.expirationDate && (
                <Badge color={getStatusColor(cert.expirationDate)}>
                  {getStatusColor(cert.expirationDate) === 'green' ? 'VIGENTE' : 
                   getStatusColor(cert.expirationDate) === 'yellow' ? 'POR VENCER' : 'VENCIDO'}
                </Badge>
              )}
            </Flex>
            
            <Flex align="center" gap="2">
              <Text size="2">Archivo:</Text>
              <Text size="2">{cert.fileName || 'No cargado'}</Text>
            </Flex>
            
            <Flex gap="2">
              <input
                type="file"
                id={`file-upload-${cert.id}`}
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(cert.id, e)}
              />
              <Button onClick={() => document.getElementById(`file-upload-${cert.id}`)?.click()}>
                Seleccionar archivo
              </Button>
              
              {cert.isFileUploaded && cert.expirationDate && !dateErrors[cert.id] && (
                <Button onClick={() => handleSave(cert.id)}>
                  Guardar
                </Button>
              )}
            </Flex>
            
            {dateErrors[cert.id] && (
              <Text size="1" color="red">{dateErrors[cert.id]}</Text>
            )}
          </Flex>
        ))}
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Button variant="ghost" onClick={onPrevious}>
          Anterior
        </Button>
        <Button variant="link" onClick={onNext}>
          Siguiente
        </Button>
      </Flex>
    </>
  );
};