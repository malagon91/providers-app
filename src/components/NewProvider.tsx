"use client"
import * as React from "react";



import {
  Box,
  Button,
  Text,
  TextField,
  Select,
  Flex,
  Theme,
} from "@radix-ui/themes";

const statusOptions = [
  "En progreso",
  "En Hold",
  "Activo",
  "Inactivo",
];

const proveedorOptions = [
  "Proyecto A",
  "Proyecto B",
  "Proyecto C",
];

const commodityOptions = [
  "Componente X",
  "Componente Y",
  "Componente Z",
];

export default function InformacionProveedor() {
  const [estatus, setEstatus] = React.useState("");
  const [proyecto, setProyecto] = React.useState("");
  const [commodity, setCommodity] = React.useState("");

  return (
    <Theme>
      <Flex direction="column" align="center" p="6">
        <Box width="400px" p="4" style={{ backgroundColor: "#dbeafe", borderRadius: "8px" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700 }}>
  Información del proveedor
</h2>

          <Flex direction="column" gap="3">
            <TextField.Root placeholder="Nombre del Proveedor" />
            <TextField.Root placeholder="Calle y número" />
            <TextField.Root placeholder="Ciudad" />
            <TextField.Root placeholder="Estado" />
            <TextField.Root placeholder="País" />

            {/* Proyecto como combobox */}
            <Select.Root value={proyecto} onValueChange={setProyecto}>
              <Select.Trigger placeholder="Proyecto" />
              <Select.Content>
                {proveedorOptions.map((op) => (
                  <Select.Item key={op} value={op}>
                    {op}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

            {/* Commodity como combobox */}
            <Select.Root value={commodity} onValueChange={setCommodity}>
              <Select.Trigger placeholder="Commodity" />
              <Select.Content>
                {commodityOptions.map((op) => (
                  <Select.Item key={op} value={op}>
                    {op}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

            {/* Estatus con opciones fijas */}
            <Select.Root value={estatus} onValueChange={setEstatus}>
              <Select.Trigger placeholder="Estatus" />
              <Select.Content>
                {statusOptions.map((op) => (
                  <Select.Item key={op} value={op}>
                    {op}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

            {/* Botón */}
            <Button mt="4">Siguiente</Button>
          </Flex>
        </Box>
      </Flex>
    </Theme>
  );
}
