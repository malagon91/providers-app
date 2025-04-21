import * as React from 'react';
import { Theme, Button } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function ProveedoresMenu() {
  return (
    <Theme appearance="light" accentColor="blue">
      <div style={{
        backgroundColor: '#dce4f2',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Button variant="solid" size="3">Nuevo Proveedor</Button>
          <Button variant="solid" size="3">Panel de Proveedores</Button>
          <Button variant="solid" size="3">Reportes de Calidad</Button>
        </div>
      </div>
    </Theme>
  );
}