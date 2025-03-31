// User type for creator and approver
type User = {
  _id: string;
  name: string;
  email: string;
};

// Date range parameters
type DateRange = {
  start: string;
  end: string;
};

// Scheduled report configuration
type ScheduledReport = {
  isScheduled: boolean;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  recipients: string[];
};

// Parameters for report filtering
type ReportParameters = {
  dateRange: DateRange;
  sectors: string[];
  locations: string[];
};

// Main Report type definition
export type Report = {
  _id: string;
  title: string;
  description: string;
  parameters: ReportParameters;
  scheduledReport: ScheduledReport;
  createdBy: User;
  state: 'Draft' | 'Pending' | 'Approved' | 'Rejected';
  createdAt: string;
  updatedAt?: string;
  approvedBy?: User;
  approvedDate?: string;
  __v: number;
};
