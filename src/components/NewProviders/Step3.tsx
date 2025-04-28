'use client';
import React, { useState, useEffect } from 'react';
import { Flex, Text, Badge } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

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
    {
      id: '1',
      name: 'Certificado IATF16949',
      fileName: 'TotalPlay.png',
      expirationDate: '25/09/2025',
      isFileUploaded: true,
    },
    {
      id: '2',
      name: 'Certificado ISO9001',
      fileName: '',
      expirationDate: '',
      isFileUploaded: false,
    },
    {
      id: '3',
      name: 'Certificado ISO14001',
      fileName: '',
      expirationDate: '',
      isFileUploaded: false,
    },
  ]);

  const [dateErrors, setDateErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    certifications.forEach((cert) => {
      if (cert.expirationDate) {
        const expDate = dayjs(cert.expirationDate, 'YYYY-MM-DD', true);

        const today = dayjs();
        const diffDays = expDate.diff(today, 'day');

        console.log('Fecha parseada:', expDate.format());
        console.log('Diferencia en días:', diffDays);
        console.log('Estado calculado:', getStatusColor(cert.expirationDate));
        console.log('---');
      }
    });
  }, [certifications]);

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
          [id]: 'Formato debe ser dd/mm/aaaa',
        }));
      }
    }
  };

  const handleSave = (id: string) => {
    const cert = certifications.find((c) => c.id === id);
    if (!cert || !cert.expirationDate || dateErrors[id]) {
      alert('Ingrese una fecha válida');
      return;
    }
    console.log(`Guardando ${cert.name}:`, cert);
  };

  const getStatusColor = (expirationDate: string) => {
    if (!expirationDate) return 'gray';

    try {
      const expDate = dayjs(expirationDate, 'YYY-MM-DD', true);
      const today = dayjs();
      const diffDays = expDate.diff(today, 'day');

      console.log(
        `[Debug] Fecha: ${expirationDate}, Días restantes: ${diffDays}`
      );

      if (isNaN(diffDays)) return 'gray';

      if (diffDays > 30) return 'green';
      if (diffDays >= 0) return 'yellow';
      return 'red';
    } catch (error) {
      console.error('Error al parsear fecha:', error);
      return 'gray';
    }
  };

  return (
    <>
      <Flex direction="column" gap="4">
        <Text size="4" weight="bold">
          Documentación
        </Text>

        <Text size="1" color="gray">
          Fecha actual: {dayjs().format('YYY-MM-DD')}
        </Text>

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
                  placeholder="aaaa-mm-dd"
                  value={cert.expirationDate}
                  onChange={(e) => handleDateChange(cert.id, e.target.value)}
                  style={{ width: '120px' }}
                  title="Formato: aaaa-mm-dd"
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
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(cert.id, e)}
              />
              <Button
                onClick={() =>
                  document.getElementById(`file-upload-${cert.id}`)?.click()
                }
              >
                Seleccionar archivo
              </Button>

              {cert.isFileUploaded &&
                cert.expirationDate &&
                !dateErrors[cert.id] && (
                  <Button onClick={() => handleSave(cert.id)}>Guardar</Button>
                )}
            </Flex>

            {dateErrors[cert.id] && (
              <Text size="1" color="red">
                {dateErrors[cert.id]}
              </Text>
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
