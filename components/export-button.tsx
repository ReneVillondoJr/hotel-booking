import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface ExportButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function ExportButton({ onClick, disabled = false }: ExportButtonProps) {
  return (
    <Button
      type='button'
      variant='outline'
      onClick={onClick}
      disabled={disabled}
    >
      <Download className='size-4' />
      Export
    </Button>
  );
}
