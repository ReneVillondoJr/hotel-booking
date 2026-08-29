'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import type { PaymentSettings } from '../types/settings';

interface PaymentSettingsProps {
  settings: PaymentSettings;

  onChange: (settings: PaymentSettings) => void;
}

export default function PaymentSettingsForm({
  settings,
  onChange,
}: PaymentSettingsProps) {
  function updateField<T extends keyof PaymentSettings>(
    field: T,
    value: PaymentSettings[T],
  ) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>

          <CardDescription>
            Choose which payment methods you accept.
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-4'>
          <PaymentSwitch
            label='Cash'
            checked={settings.acceptCash}
            onCheckedChange={(value) => updateField('acceptCash', value)}
          />

          <PaymentSwitch
            label='Bank Transfer'
            checked={settings.acceptBankTransfer}
            onCheckedChange={(value) =>
              updateField('acceptBankTransfer', value)
            }
          />

          <PaymentSwitch
            label='Credit / Debit Card'
            checked={settings.acceptCard}
            onCheckedChange={(value) => updateField('acceptCard', value)}
          />

          <PaymentSwitch
            label='Online Payment'
            checked={settings.acceptOnlinePayment}
            onCheckedChange={(value) =>
              updateField('acceptOnlinePayment', value)
            }
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deposit</CardTitle>

          <CardDescription>
            Configure booking deposit requirements.
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-4'>
          <PaymentSwitch
            label='Require Deposit'
            checked={settings.requireDeposit}
            onCheckedChange={(value) => updateField('requireDeposit', value)}
          />

          {settings.requireDeposit && (
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
                <Label>Deposit Type</Label>

                <select
                  value={settings.depositType}
                  onChange={(event) =>
                    updateField(
                      'depositType',
                      event.target.value as 'PERCENTAGE' | 'FIXED',
                    )
                  }
                  className='flex h-9 w-full rounded-md border bg-transparent px-3 text-sm'
                >
                  <option value='PERCENTAGE'>Percentage</option>

                  <option value='FIXED'>Fixed Amount</option>
                </select>
              </div>

              <div className='space-y-2'>
                <Label>Deposit Value</Label>

                <Input
                  type='number'
                  min={0}
                  value={settings.depositValue}
                  onChange={(event) =>
                    updateField('depositValue', Number(event.target.value))
                  }
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tax and Service Charge</CardTitle>
        </CardHeader>

        <CardContent className='space-y-6'>
          <PaymentSwitch
            label='Enable Tax'
            checked={settings.taxEnabled}
            onCheckedChange={(value) => updateField('taxEnabled', value)}
          />

          {settings.taxEnabled && (
            <div className='space-y-2'>
              <Label>Tax Rate (%)</Label>

              <Input
                type='number'
                min={0}
                value={settings.taxRate}
                onChange={(event) =>
                  updateField('taxRate', Number(event.target.value))
                }
              />
            </div>
          )}

          <PaymentSwitch
            label='Enable Service Charge'
            checked={settings.serviceChargeEnabled}
            onCheckedChange={(value) =>
              updateField('serviceChargeEnabled', value)
            }
          />

          {settings.serviceChargeEnabled && (
            <div className='space-y-2'>
              <Label>Service Charge Rate (%)</Label>

              <Input
                type='number'
                min={0}
                value={settings.serviceChargeRate}
                onChange={(event) =>
                  updateField('serviceChargeRate', Number(event.target.value))
                }
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

interface PaymentSwitchProps {
  label: string;
  checked: boolean;

  onCheckedChange: (checked: boolean) => void;
}

function PaymentSwitch({
  label,
  checked,
  onCheckedChange,
}: PaymentSwitchProps) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <Label>{label}</Label>

      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}
