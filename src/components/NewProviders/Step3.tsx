'use client';
import React, { useState } from 'react';
import { Flex, Text, Badge, Grid, Box } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
dayjs.locale('es');

interface Certification {
  id: string;
  name: string;
  fileName: string;
  expirationDate: string;
  isFileUploaded: boolean;
  isPredefined: boolean;
}

interface Step3Props {
  onPrevious: () => void;
  onNext: () => void;
}

export const Step3 = ({ onPrevious, onNext }: Step3Props) => {
  
  const initialCertifications: Certification[] = [
    {
      id: '1',
      name: 'Certificado IATF16949',
      fileName: '',
      expirationDate: '',
      isFileUploaded: false,
      isPredefined: true,
    },
    {
      id: '2',
      name: 'Certificado ISO9001',
      fileName: '',
      expirationDate: '',
      isFileUploaded: false,
      isPredefined: true,
    },
    {
      id: '3',
      name: 'Certificado ISO14001',
      fileName: '',
      expirationDate: '',
      isFileUploaded: false,
      isPredefined: true,
    },
  ];

  const [certifications, setCertifications] = useState<Certification[]>(
    initialCertifications
  );
  const [dateErrors, setDateErrors] = useState<{ [key: string]: string }>({});
  const [newCertName, setNewCertName] = useState('');
  const [showCertInput, setShowCertInput] = useState(false);

  const handleFileChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setCertifications((certs) =>
        certs.map((cert) =>
          cert.id === id
            ? { ...cert, fileName: file.name, isFileUploaded: true }
            : cert
        )
      );
    }
  };

  const handleDateChange = (id: string, value: string) => {
    setCertifications((certs) =>
      certs.map((cert) =>
        cert.id === id ? { ...cert, expirationDate: value } : cert
      )
    );

    if (value) {
      const date = dayjs(value, 'YYYY-MM-DD', true);
      if (date.isValid()) {
        setDateErrors((prev) => ({ ...prev, [id]: '' }));
      } else {
        setDateErrors((prev) => ({
          ...prev,
          [id]: 'Formato debe ser AAAA-MM-DD',
        }));
      }
    }
  };

  const addCustomCertification = () => {
    if (certifications.length >= 5) return;
    if (!newCertName.trim()) {
      alert('Por favor ingresa un nombre para el certificado');
      return;
    }

    const newCert: Certification = {
      id: Date.now().toString(),
      name: newCertName.trim(),
      fileName: '',
      expirationDate: '',
      isFileUploaded: false,
      isPredefined: false,
    };

    setCertifications([...certifications, newCert]);
    setNewCertName('');
    setShowCertInput(false);
  };

  const removeCertification = (id: string) => {
    setCertifications((certs) => certs.filter((cert) => cert.id !== id));
  };

  const getStatusColor = (expirationDate: string) => {
    if (!expirationDate) return 'gray';

    try {
      const expDate = dayjs(expirationDate, 'YYYY-MM-DD');
      const today = dayjs();
      const diffDays = expDate.diff(today, 'day');

      if (diffDays > 30) return 'green';
      if (diffDays >= 0) return 'yellow';
      return 'red';
    } catch {
      return 'gray';
    }
  };

  return (
    <>
      <Grid columns="2" gap="3">
        
        <Flex direction="column" gap="3">
          {certifications
            .filter((_, index) => index % 2 === 0)
            .map((cert) => (
              <Box key={cert.id} className="border-b pb-4">
                <Text as="div" size="2" mb="1" weight="bold">
                  {cert.name}
                </Text>

                <Flex direction="column" gap="3">
                  <Flex align="center" gap="2">
                    <Text size="2">Expiración:</Text>
                    {cert.isFileUploaded ? (
                      <Input
                        type="date"
                        value={cert.expirationDate}
                        onChange={(e) => handleDateChange(cert.id, e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <Text size="2">--/--/----</Text>
                    )}

                    {cert.expirationDate && (
                      <Badge color={getStatusColor(cert.expirationDate)}>
                        {getStatusColor(cert.expirationDate) === 'green'
                          ? 'VIGENTE'
                          : getStatusColor(cert.expirationDate) === 'yellow'
                            ? 'POR VENCER'
                            : 'VENCIDO'}
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
                      className="hidden"
                      onChange={(e) => handleFileChange(cert.id, e)}
                    />
                    <Button
                      variant="secondary"
                      onClick={() =>
                        document.getElementById(`file-upload-${cert.id}`)?.click()
                      }
                    >
                      Seleccionar archivo
                    </Button>

                    {!cert.isPredefined && (
                      <Button
                        variant="destructive"
                        onClick={() => removeCertification(cert.id)}
                      >
                        Eliminar
                      </Button>
                    )}
                  </Flex>

                  {dateErrors[cert.id] && (
                    <Text size="1" color="red">
                      {dateErrors[cert.id]}
                    </Text>
                  )}
                </Flex>
              </Box>
            ))}
        </Flex>

        
        <Flex direction="column" gap="3">
          {certifications
            .filter((_, index) => index % 2 === 1)
            .map((cert) => (
              <Box key={cert.id} className="border-b pb-4">
                <Text as="div" size="2" mb="1" weight="bold">
                  {cert.name}
                </Text>

                <Flex direction="column" gap="3">
                  <Flex align="center" gap="2">
                    <Text size="2">Expiración:</Text>
                    {cert.isFileUploaded ? (
                      <Input
                        type="date"
                        value={cert.expirationDate}
                        onChange={(e) => handleDateChange(cert.id, e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <Text size="2">--/--/----</Text>
                    )}

                    {cert.expirationDate && (
                      <Badge color={getStatusColor(cert.expirationDate)}>
                        {getStatusColor(cert.expirationDate) === 'green'
                          ? 'VIGENTE'
                          : getStatusColor(cert.expirationDate) === 'yellow'
                            ? 'POR VENCER'
                            : 'VENCIDO'}
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
                      className="hidden"
                      onChange={(e) => handleFileChange(cert.id, e)}
                    />
                    <Button
                      variant="secondary"
                      onClick={() =>
                        document.getElementById(`file-upload-${cert.id}`)?.click()
                      }
                    >
                      Seleccionar archivo
                    </Button>

                    {!cert.isPredefined && (
                      <Button
                        variant="destructive"
                        onClick={() => removeCertification(cert.id)}
                      >
                        Eliminar
                      </Button>
                    )}
                  </Flex>

                  {dateErrors[cert.id] && (
                    <Text size="1" color="red">
                      {dateErrors[cert.id]}
                    </Text>
                  )}
                </Flex>
              </Box>
            ))}
        </Flex>
      </Grid>

      {certifications.length < 5 && (
        <Flex justify="center" mt="3">
          {showCertInput ? (
            <Flex gap="2" align="center">
              <Input
                placeholder="Nombre del certificado"
                value={newCertName}
                onChange={(e) => setNewCertName(e.target.value)}
                className="w-[280px]"
              />
              <Button onClick={addCustomCertification}>Agregar</Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setShowCertInput(false);
                  setNewCertName('');
                }}
              >
                Cancelar
              </Button>
            </Flex>
          ) : (
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-800"
              onClick={() => setShowCertInput(true)}
            >
              + Otro Certificado
            </Button>
          )}
        </Flex>
      )}

    <Flex 
      gap="3" 
      className="absolute bottom-5 right-5 justify-end"
    >
            <Button variant="ghost" onClick={onPrevious}>
              Anterior
            </Button>
            <Button onClick={onNext}>
              Siguiente
            </Button>
          </Flex>
    </>
  );
};