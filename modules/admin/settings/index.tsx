'use client';

import { useState } from 'react';

import { defaultSettings } from './data/settings';

import AppearanceSettingsForm from './components/appearance';
import BookingSettingsForm from './components/booking';
import ContactSettingsForm from './components/contact-settings';
import HotelSettingsForm from './components/hotel-settings';
import NotificationSettingsForm from './components/notification';
import PaymentSettingsForm from './components/payment';
import PolicySettingsForm from './components/policy';
import SaveBar from './components/save-bar';
import SecuritySettingsForm from './components/security';
import SettingsHeader from './components/header';
import SettingsNavigation from './components/navigation';

import type { HotelBookingSettings, SettingsSection } from './types/settings';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SettingsSection>('HOTEL');

  const [settings, setSettings] =
    useState<HotelBookingSettings>(defaultSettings);

  const [savedSettings, setSavedSettings] =
    useState<HotelBookingSettings>(defaultSettings);

  const isDirty = JSON.stringify(settings) !== JSON.stringify(savedSettings);

  function handleSave() {
    // Later replace this with API request
    console.log('Saving settings:', settings);

    setSavedSettings(settings);
  }

  function handleReset() {
    setSettings(savedSettings);
  }

  return (
    <div className='space-y-6'>
      <SettingsHeader />

      <div className='grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]'>
        <aside className='lg:sticky lg:top-6 lg:self-start'>
          <SettingsNavigation
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </aside>

        <main className='min-w-0'>
          {activeSection === 'HOTEL' && (
            <HotelSettingsForm
              settings={settings.hotel}
              onChange={(hotel) =>
                setSettings((current) => ({
                  ...current,
                  hotel,
                }))
              }
            />
          )}

          {activeSection === 'CONTACT' && (
            <ContactSettingsForm
              settings={settings.contact}
              onChange={(contact) =>
                setSettings((current) => ({
                  ...current,
                  contact,
                }))
              }
            />
          )}

          {activeSection === 'BOOKING' && (
            <BookingSettingsForm
              settings={settings.booking}
              onChange={(booking) =>
                setSettings((current) => ({
                  ...current,
                  booking,
                }))
              }
            />
          )}

          {activeSection === 'PAYMENT' && (
            <PaymentSettingsForm
              settings={settings.payment}
              onChange={(payment) =>
                setSettings((current) => ({
                  ...current,
                  payment,
                }))
              }
            />
          )}

          {activeSection === 'NOTIFICATIONS' && (
            <NotificationSettingsForm
              settings={settings.notifications}
              onChange={(notifications) =>
                setSettings((current) => ({
                  ...current,
                  notifications,
                }))
              }
            />
          )}

          {activeSection === 'POLICIES' && (
            <PolicySettingsForm
              settings={settings.policies}
              onChange={(policies) =>
                setSettings((current) => ({
                  ...current,
                  policies,
                }))
              }
            />
          )}

          {activeSection === 'APPEARANCE' && (
            <AppearanceSettingsForm
              settings={settings.appearance}
              onChange={(appearance) =>
                setSettings((current) => ({
                  ...current,
                  appearance,
                }))
              }
            />
          )}

          {activeSection === 'SECURITY' && (
            <SecuritySettingsForm
              settings={settings.security}
              onChange={(security) =>
                setSettings((current) => ({
                  ...current,
                  security,
                }))
              }
            />
          )}
        </main>
      </div>

      <SaveBar isDirty={isDirty} onSave={handleSave} onReset={handleReset} />
    </div>
  );
}
