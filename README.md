# LUMORA — Hotel Booking & Management Platform

A modern full-stack hotel booking and management platform designed to handle the complete hospitality workflow — from guest room discovery and reservations to check-in, check-out, room management, guest management, payments, and administrative operations.

LUMORA combines a polished guest booking experience with a secure hotel administration dashboard.

---

## Table of Contents

- [Overview](#overview)
- [Project Goals](#project-goals)
- [Key Features](#key-features)
- [Guest Experience](#guest-experience)
- [Room Discovery](#room-discovery)
- [Room Details](#room-details)
- [Reservations](#reservations)
- [Guest Management](#guest-management)
- [Check-In & Check-Out](#check-in--check-out)
- [Payment Management](#payment-management)
- [Hotel Administration](#hotel-administration)
- [Dashboard](#dashboard)
- [Room Management](#room-management)
- [Reservation Management](#reservation-management)
- [User Management](#user-management)
- [Reports & Analytics](#reports--analytics)
- [Activity Logs](#activity-logs)
- [Authentication & Authorization](#authentication--authorization)
- [User Roles](#user-roles)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Application Routes](#application-routes)
- [Database Model](#database-model)
- [Business Workflows](#business-workflows)
- [Design System](#design-system)
- [Validation](#validation)
- [Security](#security)
- [Performance](#performance)
- [SEO](#seo)
- [Accessibility](#accessibility)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Development](#development)
- [Production Build](#production-build)
- [Useful Commands](#useful-commands)
- [Testing Strategy](#testing-strategy)
- [Deployment](#deployment)
- [Production Checklist](#production-checklist)
- [Future Improvements](#future-improvements)
- [Portfolio Highlights](#portfolio-highlights)
- [Project Status](#project-status)
- [Author](#author)
- [License](#license)

---

# Overview

LUMORA is a full-stack hotel booking and management platform designed to support both hotel guests and internal hotel staff.

The platform is divided into two connected experiences:

### Guest Website

Guests can:

- Browse rooms
- View room details
- Check availability
- Select booking dates
- Choose the number of guests
- Make reservations
- View reservation details
- Manage their bookings
- View booking history
- Manage their profile

### Hotel Administration

Authorized staff can:

- Manage rooms
- Manage room types
- Manage reservations
- Manage guests
- Manage availability
- Process check-ins
- Process check-outs
- Track payments
- View occupancy
- Generate reports
- Manage staff accounts
- Monitor activity

---

# Project Goals

The primary goal of LUMORA is to demonstrate a realistic hotel reservation and management workflow using a scalable full-stack architecture.

The project focuses on:

- Hotel reservation management
- Room availability management
- Guest management
- Check-in and check-out workflows
- Payment tracking
- Authentication
- Role-based access control
- Relational database design
- Administrative dashboards
- Reporting
- Audit logging
- Responsive UI
- Production-oriented architecture

---

# Key Features

## Guest Features

- Hotel homepage
- Room directory
- Room search
- Availability checking
- Room details
- Room gallery
- Booking flow
- Reservation confirmation
- Reservation history
- Booking details
- Guest profile
- Responsive design

## Administrative Features

- Secure authentication
- Role-based access control
- Hotel dashboard
- Room management
- Room type management
- Reservation management
- Guest management
- Check-in
- Check-out
- Payment management
- Occupancy monitoring
- Revenue reporting
- User management
- Activity logging
- Settings

---

# Guest Experience

The guest-facing website is designed around a simple reservation journey.

```text
Homepage
   ↓
Browse Rooms
   ↓
Select Dates
   ↓
Check Availability
   ↓
Select Room
   ↓
Enter Guest Details
   ↓
Review Reservation
   ↓
Confirm Booking
   ↓
Reservation Confirmation
Homepage

The hotel homepage can include:

Hotel introduction
Featured rooms
Amenities
Hotel services
Promotional offers
Gallery
Guest testimonials
Location
Contact information
Booking call-to-action
Room Discovery

Guests can browse available hotel rooms.

Room Information
Room Name
Room Type
Price per Night
Maximum Guests
Beds
Bathrooms
Room Size
Amenities
Availability
Room Types

Example room types:

STANDARD
DELUXE
SUPERIOR
FAMILY
SUITE
PRESIDENTIAL
Room Details

Each room has a dedicated detail page.

Room Gallery
     ↓
Room Name
     ↓
Room Type
     ↓
Price
     ↓
Room Overview
     ↓
Amenities
     ↓
Policies
     ↓
Availability
     ↓
Booking

Room details may include:

Room title
Description
Price
Room size
Bed configuration
Maximum occupancy
Bathroom information
Amenities
Policies
Gallery
Availability
Room Availability

Guests can check room availability based on:

Check-in Date
Check-out Date
Number of Guests

The booking system prevents conflicting reservations for the same room and period.

Reservations

The reservation workflow allows guests to create and manage hotel bookings.

Reservation Information
Guest
Room
Check-in Date
Check-out Date
Number of Guests
Nightly Rate
Number of Nights
Subtotal
Taxes
Fees
Total Amount
Reservation Status
Payment Status
Reservation Status
PENDING
CONFIRMED
CHECKED_IN
CHECKED_OUT
CANCELLED
NO_SHOW
Payment Status
PENDING
PARTIALLY_PAID
PAID
REFUNDED
FAILED
Booking Workflow
Available Room
      ↓
Select Dates
      ↓
Check Availability
      ↓
Select Room
      ↓
Guest Information
      ↓
Reservation Created
      ↓
Payment
      ↓
Confirmed
Guest Management

Hotel staff can manage guest records.

Guest Information
First Name
Last Name
Email
Phone
Address
Country
Account Status
Guest Activity

Staff can view:

Current reservations
Previous stays
Booking history
Payment history
Cancellation history
Check-In

Hotel staff can process guest arrivals.

Confirmed Reservation
        ↓
Verify Guest
        ↓
Confirm Room
        ↓
Check-In
        ↓
Reservation Status = CHECKED_IN

The system can record:

Check-in date and time
Staff member
Room
Guest
Notes
Check-Out

Hotel staff can process guest departures.

Checked-In Guest
       ↓
Review Charges
       ↓
Confirm Payment
       ↓
Check-Out
       ↓
Room Becomes Available

The system can record:

Check-out date and time
Final amount
Payment status
Staff member
Notes
Hotel Administration

The administration dashboard provides tools for daily hotel operations.

Main management areas:

Dashboard
Rooms
Room Types
Reservations
Guests
Payments
Reports
Users
Activity Logs
Settings
Dashboard

The dashboard provides an overview of hotel operations.

Main Metrics
Total Rooms
Available Rooms
Occupied Rooms
Pending Reservations
Today's Arrivals
Today's Departures
Active Guests
Revenue
Dashboard Sections
Overview Metrics
       ↓
Occupancy Overview
       ↓
Reservation Trends
       ↓
Revenue Overview
       ↓
Today's Arrivals
       ↓
Today's Departures
       ↓
Recent Reservations
       ↓
Recent Activity
Room Management

Administrators can manage all hotel rooms.

Room Information
Room Number
Room Type
Floor
Price
Maximum Occupancy
Status
Amenities
Description
Images
Room Status
AVAILABLE
OCCUPIED
RESERVED
MAINTENANCE
OUT_OF_SERVICE
Room Actions
Create room
Edit room
Update status
Assign room type
Manage amenities
Upload images
Remove room
Room Type Management

Administrators can define reusable room categories.

Example:

Standard Room
Deluxe Room
Superior Room
Family Room
Suite
Presidential Suite

Room types may contain:

Name
Description
Base Price
Max Occupancy
Bed Type
Room Size
Amenities
Images
Reservation Management

Staff can manage the complete reservation lifecycle.

Reservation Table
Reservation ID
Guest
Room
Check-in
Check-out
Guests
Total
Status
Payment
Actions
Reservation Actions
View
Confirm
Cancel
Check-In
Check-Out
Update
Refund
Availability Management

The system can provide an availability view showing:

Room
Room Type
Date
Reservation
Status

This helps hotel staff identify:

Available rooms
Occupied rooms
Reserved rooms
Rooms under maintenance
Payment Management

The platform tracks reservation-related payments.

Payment Information
Reservation
Guest
Amount
Payment Method
Transaction Reference
Payment Status
Paid At

Example payment methods:

CASH
CARD
BANK_TRANSFER
ONLINE
Guest Account

Authenticated guests can access their own reservation data.

Guest dashboard:

Profile
Current Booking
Upcoming Stay
Booking History
Reservation Details
Payment History
Account Settings
User Management

Administrators can manage hotel staff accounts.

User management includes:

Create user
Update user
Assign role
Activate user
Deactivate user
View account information
Authentication & Authorization

LUMORA uses authentication and role-based access control to protect administrative functionality.

Authentication
Login
Logout
Session management
Protected routes
Password hashing
Authenticated user context
Authorization

Access is determined by the authenticated user's role.

User
 ↓
Authenticated
 ↓
Role
 ↓
Permission
 ↓
Resource
User Roles
SUPER_ADMIN

Full system access.

Users
Rooms
Room Types
Reservations
Guests
Payments
Reports
Activity Logs
Settings
ADMIN

Hotel administration access.

Rooms
Room Types
Reservations
Guests
Payments
Reports
FRONT_DESK

Front-desk operations.

Reservations
Guests
Check-In
Check-Out
Payments
Room Availability
HOUSEKEEPING

Room operational access.

Room Status
Cleaning Status
Maintenance Status
GUEST

Guest portal access.

Profile
Rooms
Reservations
Payments
Booking History
Room Operations

A hotel room may move through several operational states.

AVAILABLE
    ↓
RESERVED
    ↓
OCCUPIED
    ↓
CHECKED_OUT
    ↓
CLEANING
    ↓
AVAILABLE

Maintenance:

AVAILABLE
    ↓
MAINTENANCE
    ↓
AVAILABLE
Reports & Analytics

The administration system can provide reports for hotel operations.

Occupancy Reports
Current occupancy
Occupancy rate
Available rooms
Occupied rooms
Rooms under maintenance
Reservation Reports
Total reservations
Confirmed reservations
Cancelled reservations
No-shows
Average stay duration
Revenue Reports
Total revenue
Revenue by room type
Revenue by date
Payment collection
Refunds
Guest Reports
New guests
Returning guests
Booking frequency
Stay history
Activity Logs

Important administrative actions can be recorded.

Example:

Front Desk
Checked In Guest
Reservation #RES-2026-00124
September 11, 2026 — 2:10 PM

Logged activities can include:

User login
Reservation creation
Reservation updates
Reservation cancellation
Check-in
Check-out
Payment updates
Room status updates
User changes
Notifications

Possible notification events include:

Reservation confirmation
Reservation cancellation
Booking reminder
Check-in reminder
Payment confirmation
Check-out reminder
Technology Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Lucide React
Backend
Next.js App Router
Server Components
Server Actions / Route Handlers
Prisma ORM
PostgreSQL
Authentication
NextAuth / Auth.js
Credentials authentication
Role-based authorization
Validation
Zod
React Hook Form
Database
PostgreSQL
Prisma ORM
Development Tools
ESLint
Prettier
Git
GitHub
npm
Architecture

LUMORA follows a modular architecture.

                         LUMORA
                            │
             ┌──────────────┴──────────────┐
             │                             │
       GUEST WEBSITE                 ADMIN SYSTEM
             │                             │
       Browse Rooms                    Dashboard
       Availability                    Rooms
       Booking                         Room Types
       Reservations                    Reservations
       Profile                         Guests
       History                         Payments
                                      Reports
                                      Users
                                      Activity
             │                             │
             └──────────────┬──────────────┘
                            │
                          Next.js
                            │
                   Authentication
                            │
                           RBAC
                            │
                         Prisma
                            │
                       PostgreSQL
Project Structure
hotel-booking/
│
├── app/
│   ├── guest/
│   │   ├── page.tsx
│   │   ├── rooms/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── bookings/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── rooms/
│   │   ├── room-types/
│   │   ├── reservations/
│   │   ├── guests/
│   │   ├── payments/
│   │   ├── reports/
│   │   ├── users/
│   │   ├── activity-logs/
│   │   ├── settings/
│   │   └── layout.tsx
│   │
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── unauthorized/
│   │       └── page.tsx
│   │
│   └── api/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── booking/
│   ├── rooms/
│   ├── guests/
│   ├── reservations/
│   ├── payments/
│   ├── dashboard/
│   └── ui/
│
├── modules/
│   ├── guest/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.tsx
│   │
│   ├── rooms/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── services/
│   │   └── index.tsx
│   │
│   ├── reservations/
│   ├── guests/
│   ├── payments/
│   ├── dashboard/
│   ├── auth/
│   └── booking/
│
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   ├── permissions.ts
│   ├── calculations/
│   └── validations/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   ├── images/
│   ├── rooms/
│   └── icons/
│
├── types/
│
├── .env
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── prisma.config.ts
├── tsconfig.json
└── README.md
Application Routes
Guest
/guest

/guest/rooms
/guest/rooms/[id]

/guest/bookings
/guest/bookings/[id]

/guest/profile
Authentication
/auth/login
/auth/unauthorized
Admin
/admin/dashboard

/admin/rooms
/admin/rooms/[id]

/admin/room-types

/admin/reservations
/admin/reservations/[id]

/admin/guests
/admin/guests/[id]

/admin/payments

/admin/reports

/admin/users

/admin/activity-logs

/admin/settings
Database Model

The database can be centered around:

User
GuestProfile
RoomType
Room
RoomImage
Amenity
RoomAmenity
Reservation
Payment
ActivityLog

Potential supporting entities:

Hotel
BookingGuest
RoomMaintenance
Notification
Database Relationships
User
 └── GuestProfile

RoomType
 └── Rooms

Room
 ├── Images
 ├── Amenities
 └── Reservations

Guest
 ├── Reservations
 └── Payments

Reservation
 ├── Guest
 ├── Room
 └── Payments
Core Data Flow
Guest
  │
  └── Reservation
         │
         ├── Room
         │    └── RoomType
         │
         └── Payment
Reservation Workflow
Guest
  ↓
Select Dates
  ↓
Check Availability
  ↓
Select Room
  ↓
Enter Information
  ↓
Create Reservation
  ↓
Payment
  ↓
Confirmed
Hotel Operations Workflow
Confirmed Reservation
        ↓
Guest Arrival
        ↓
Check-In
        ↓
Occupied Room
        ↓
Guest Stay
        ↓
Check-Out
        ↓
Room Cleaning
        ↓
Room Available
Cancellation Workflow
Confirmed Reservation
        ↓
Cancellation Request
        ↓
Review Policy
        ↓
Cancel Reservation
        ↓
Refund if Applicable
        ↓
Room Availability Updated
Validation

Forms should use schema-based validation.

Validation areas include:

Login
Guest registration
Guest profile
Room management
Room types
Reservations
Payments
User management

Example:

React Hook Form
       ↓
Zod
       ↓
Server Validation
       ↓
Business Rules
       ↓
Database
Security

Security practices include:

Protected admin routes
Authentication
Role-based authorization
Server-side permission checks
Server-side validation
Password hashing
Secure sessions
Environment variable protection
Controlled customer data access
Activity logging
Database constraints

Payment credentials and private configuration must never be exposed to the client.

Performance

Performance considerations include:

Next.js Server Components
Server-side data fetching
Pagination
Efficient Prisma queries
Database indexes
Optimized images
Lazy loading
Loading states
Selective client components
SEO

Public pages can include:

Metadata
Open Graph metadata
Canonical URLs
Sitemap
Robots.txt
Semantic HTML
Optimized images
Structured data

Example:

/guest/rooms/deluxe-king
Accessibility

The interface aims to support:

Semantic HTML
Keyboard navigation
Accessible forms
Descriptive labels
Focus states
Accessible dialogs
Appropriate contrast
Responsive layouts
Design System

LUMORA uses a premium hospitality design direction.

Design Principles
Elegant
Clean
Minimal
Comfortable
Premium
Spacious
Professional
Responsive
Suggested Color Palette
Primary Background
#F7F5F0

Primary Text
#252522

Secondary Background
#E9E6DE

Accent
#9A7650

White
#FFFFFF
Typography

Suggested typography:

Headings:
Cinzel

Body:
Source Sans 3

The typography creates a premium hospitality/editorial appearance while maintaining readability.

UI Principles
Generous whitespace
Large room photography
Refined typography
Subtle borders
Minimal shadows
Clear hierarchy
Strong booking CTAs
Consistent spacing
Responsive layouts
Installation
1. Clone the Repository
git clone https://github.com/your-username/hotel-booking.git
cd hotel-booking
2. Install Dependencies
npm install
3. Configure Environment Variables

Create:

.env

Use .env.example as the template.

Example:

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

NEXTAUTH_URL="http://localhost:3000"

NEXTAUTH_SECRET="your-secret-key"
Database Setup

Generate Prisma Client:

npx prisma generate

Run migrations:

npx prisma migrate dev

Seed development data:

npx prisma db seed

Open Prisma Studio:

npx prisma studio
Development

Start the development server:

npm run dev

Open:

http://localhost:3000

Guest experience:

http://localhost:3000/guest

Admin dashboard:

http://localhost:3000/admin/dashboard
Production Build

Create a production build:

npm run build

Start the production server:

npm run start

Run linting:

npm run lint
Useful Commands
npm run dev

npm run build

npm run start

npm run lint

npx prisma generate

npx prisma migrate dev

npx prisma db seed

npx prisma studio
Environment Variables

Example .env.example:

DATABASE_URL=""

NEXTAUTH_URL="http://localhost:3000"

NEXTAUTH_SECRET=""

Never commit a production .env file.

Development Seed Data

The seed script can create example:

Users
Guests
Room types
Rooms
Reservations
Payments

This allows the application to be tested without manually creating every record.

Testing Strategy
Unit Tests

Test:

Availability calculations
Reservation calculations
Validation schemas
Permission helpers
Utility functions
Component Tests

Test:

Booking forms
Room cards
Reservation tables
Filters
Dialogs
Dashboard components
Integration Tests

Test:

Authentication
Room creation
Reservation creation
Availability checking
Check-in
Check-out
Payment recording
Role restrictions
End-to-End Tests

Example:

Guest Login
    ↓
Browse Rooms
    ↓
Select Dates
    ↓
Check Availability
    ↓
Create Reservation
    ↓
Confirm Booking
    ↓
Admin Login
    ↓
Review Reservation
    ↓
Check-In Guest
    ↓
Check-Out Guest
Deployment

Typical production architecture:

GitHub
   ↓
Deployment Platform
   ↓
Next.js Application
   ↓
PostgreSQL Database

Production environment variables should be configured through the hosting platform.

Production Checklist
[ ] Environment variables configured
[ ] Production database configured
[ ] Prisma migrations applied
[ ] Prisma Client generated
[ ] Authentication tested
[ ] RBAC tested
[ ] Booking workflow tested
[ ] Availability logic tested
[ ] Check-in tested
[ ] Check-out tested
[ ] Payment workflow tested
[ ] Validation tested
[ ] Error handling tested
[ ] Responsive UI tested
[ ] Accessibility reviewed
[ ] Security reviewed
[ ] Production build successful
Future Improvements
Booking
Real-time room availability
Booking modification
Cancellation policies
Promotional codes
Seasonal pricing
Package bookings
Multiple-room reservations
Guest Experience
Guest dashboard
Digital check-in
Room preferences
Special requests
Loyalty program
Guest messaging
Payments
Online payment gateway
Partial payments
Refund processing
Invoices
Receipts
Payment reconciliation
Hotel Operations
Housekeeping management
Maintenance management
Room inspection
Staff scheduling
Task management
Multi-property support
Communication
Email confirmations
SMS notifications
Booking reminders
Check-in reminders
Post-stay emails
Analytics
Occupancy analytics
Revenue analytics
Booking conversion
Average daily rate
RevPAR reporting
Guest retention
Portfolio Highlights

LUMORA demonstrates practical experience in:

Full-stack Next.js development
Hotel reservation workflows
Relational database design
Prisma ORM
PostgreSQL
Authentication
Role-based access control
CRUD operations
Booking availability logic
Guest management
Payment tracking
Check-in and check-out workflows
Dashboard development
Responsive UI
Business workflow modeling
What This Project Demonstrates

LUMORA goes beyond a simple booking form.

The platform connects:

Guest Experience
       +
Room Discovery
       +
Availability
       +
Reservations
       +
Guest Management
       +
Check-In
       +
Check-Out
       +
Payments
       +
Hotel Operations
       +
Administration
       +
RBAC
       +
Analytics

This demonstrates the ability to translate real-world hospitality operations into a structured full-stack application.

Main Application Areas
Guest
Home
Rooms
Room Details
Availability
Booking
Reservation Details
Booking History
Profile
Admin
Dashboard
Rooms
Room Types
Reservations
Guests
Payments
Reports
Users
Activity Logs
Settings
Project Roadmap
Phase 1 — Foundation
[✓] Project setup
[✓] Next.js
[✓] TypeScript
[✓] Tailwind CSS
[✓] shadcn/ui
[✓] Modular architecture
Phase 2 — Database
[✓] PostgreSQL
[✓] Prisma
[✓] Schema design
[✓] Migrations
[✓] Seed data
Phase 3 — Authentication
[✓] Authentication
[✓] Sessions
[✓] Roles
[✓] Protected routes
[✓] RBAC
Phase 4 — Guest Experience
[✓] Guest homepage
[✓] Room listing
[✓] Room details
[✓] Availability
[✓] Booking
[✓] Reservation details
[✓] Guest profile
Phase 5 — Administration
[✓] Admin dashboard
[✓] Room management
[✓] Room types
[✓] Reservation management
[✓] Guest management
[✓] Payments
[✓] Reports
[✓] Users
[✓] Activity logs
Phase 6 — Quality
[ ] Advanced validation
[ ] Error handling
[ ] Accessibility
[ ] Performance optimization
[ ] Automated tests
[ ] Security review
Phase 7 — Deployment
[✓] Production database
[✓] Environment variables
[✓] Production build
[✓] Deployment
Project Status
Planning
████████████████████ 100%

Architecture
████████████████████ 100%

Database
████████████████████ 100%

Authentication
████████████████████ 100%

Guest Experience
████████████████████ 100%

Admin Dashboard
████████████████████ 100%

Reservation Workflow
████████████████████ 100%

Payments
████████████████░░░░ 80%

Testing
██████████░░░░░░░░░░ 50%

Deployment
██████████████████░░ 90%

Update these values to match the actual project state.

Recommended Repository Name
hotel-booking

Alternative:

lumora-hotel-platform
Product Name
LUMORA
Product Description
Hotel Booking & Management Platform
Author
Rene B. Villondo Jr.

Full-Stack Web Developer & IT Support Specialist

GitHub:

https://github.com/ReneVillondoJr

Portfolio:

https://portfolio-renevillondo.vercel.app

LinkedIn:

https://www.linkedin.com/in/rene-villondo-5a6858430/

License

This project is intended for portfolio and educational purposes.

Add an appropriate license if the project is distributed publicly.

Built With
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Prisma
PostgreSQL
NextAuth
Zod
React Hook Form
Lucide React
Final Architecture
                         LUMORA
                           │
             ┌─────────────┴─────────────┐
             │                           │
       GUEST EXPERIENCE             HOTEL ADMIN
             │                           │
       Home                        Dashboard
       Rooms                       Rooms
       Details                     Room Types
       Availability                Reservations
       Booking                     Guests
       Reservations                Payments
       Profile                     Reports
                                   Users
                                   Activity Logs
                                   Settings
             │                           │
             └─────────────┬─────────────┘
                           │
                        Next.js
                           │
                    Authentication
                           │
                          RBAC
                           │
                         Prisma
                           │
                       PostgreSQL
