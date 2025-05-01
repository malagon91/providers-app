'use client';
import React from 'react';
import { Flex, Text, Grid, Box } from '@radix-ui/themes';
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
  handleAdditionalFileChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
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
  onNext,
}: Step2Props) => {
  return (
    <Flex direction="column" gap="3">
      <Grid columns="2" gap="3">
        
        <Flex direction="column" gap="3">
          <Box className="border-b pb-4">
            <Text as="div" size="2" mb="1" weight="bold">
              Acuerdo de calidad
            </Text>
            <Flex gap="3" align="center">
              <Input
                placeholder="Acuerdos de calidad"
                value={fileName1}
                readOnly
              />
              <input
                type="file"
                id="file-upload-1"
                className="hidden"
                onChange={(e) => setFileName1(e.target.files?.[0]?.name || '')}
              />
              <Button
                variant="secondary"
                onClick={() => document.getElementById('file-upload-1')?.click()}
              >
                Seleccionar
              </Button>
            </Flex>
          </Box>

          {additionalFiles
            .filter((_, index) => index % 2 === 0)
            .map((file, index) => (
              <Box key={index * 2} className="border-b pb-4">
                <Text as="div" size="2" mb="1" weight="bold">
                  Documento adicional {index * 2 + 1}
                </Text>
                <Flex direction="column" gap="3">
                  <Input
                    value={file.label}
                    onChange={(e) =>
                      updateAdditionalFileLabel(index * 2, e.target.value)
                    }
                    placeholder="Título del documento"
                  />
                  <Flex gap="3" align="center">
                    <Input
                      placeholder={`Documento ${index * 2 + 3}`}
                      value={file.name}
                      readOnly
                    />
                    <input
                      type="file"
                      id={`file-upload-additional-${index * 2}`}
                      className="hidden"
                      onChange={(e) => handleAdditionalFileChange(index * 2, e)}
                    />
                    <Button
                      variant="secondary"
                      onClick={() =>
                        document
                          .getElementById(`file-upload-additional-${index * 2}`)
                          ?.click()
                      }
                    >
                      Seleccionar
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => removeAdditionalFile(index * 2)}
                    >
                      Eliminar
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </Flex>

        <Flex direction="column" gap="3">
          <Box className="border-b pb-4">
            <Text as="div" size="2" mb="1" weight="bold">
              Acuerdo de confidencialidad
            </Text>
            <Flex gap="3" align="center">
              <Input
                placeholder="Acuerdo de confidencialidad"
                value={fileName2}
                readOnly
              />
              <input
                type="file"
                id="file-upload-2"
                className="hidden"
                onChange={(e) => setFileName2(e.target.files?.[0]?.name || '')}
              />
              <Button
                variant="secondary"
                onClick={() => document.getElementById('file-upload-2')?.click()}
              >
                Seleccionar
              </Button>
            </Flex>
          </Box>

          {additionalFiles
            .filter((_, index) => index % 2 === 1)
            .map((file, index) => (
              <Box key={index * 2 + 1} className="border-b pb-4">
                <Text as="div" size="2" mb="1" weight="bold">
                  Documento adicional {index * 2 + 2}
                </Text>
                <Flex direction="column" gap="3">
                  <Input
                    value={file.label}
                    onChange={(e) =>
                      updateAdditionalFileLabel(index * 2 + 1, e.target.value)
                    }
                    placeholder="Título del documento"
                  />
                  <Flex gap="3" align="center">
                    <Input
                      placeholder={`Documento ${index * 2 + 4}`}
                      value={file.name}
                      readOnly
                    />
                    <input
                      type="file"
                      id={`file-upload-additional-${index * 2 + 1}`}
                      className="hidden"
                      onChange={(e) =>
                        handleAdditionalFileChange(index * 2 + 1, e)
                      }
                    />
                    <Button
                      variant="secondary"
                      onClick={() =>
                        document
                          .getElementById(
                            `file-upload-additional-${index * 2 + 1}`
                          )
                          ?.click()
                      }
                    >
                      Seleccionar
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => removeAdditionalFile(index * 2 + 1)}
                    >
                      Eliminar
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </Flex>
      </Grid>

      {additionalFiles.length < 5 && (
        <Flex justify="center" mt="3">
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-800"
            onClick={addAdditionalFile}
          >
            <span className="mr-1">+</span> Agregar otro documento
          </Button>
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
    </Flex>
  );
};