"use client"
import * as React from "react";
import {SubmitButton} from '@/components/submit-button';


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
  "In Progress",
  "On Hold",
  "Active",
  "Inactive",
];

const proveedorOptions = [
  "Proyect A",
  "Proyect B",
  "Proyect C",
];

const commodityOptions = [
  "Component X",
  "Component Y",
  "Component Z",
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
  
</h2>

          <Flex direction="column" gap="3">
            <TextField.Root placeholder="Supplier Name" />
            <TextField.Root placeholder="Street and Number" />
            <TextField.Root placeholder="City" />
            <TextField.Root placeholder="State" />
            <TextField.Root placeholder="Country" />

            {/* Proyecto como combobox */}
            <Select.Root value={proyecto} onValueChange={setProyecto}>
              <Select.Trigger placeholder="Proyect" />
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
              <Select.Trigger placeholder="Status" />
              <Select.Content>
                {statusOptions.map((op) => (
                  <Select.Item key={op} value={op}>
                    {op}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

            {/* Botón */}
            <SubmitButton>Add supplier</SubmitButton>
          </Flex>
        </Box>
      </Flex>
    </Theme>
  );
}
