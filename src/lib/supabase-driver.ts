
import { DriverApplication } from './types';

export const driverService = {
  async submitApplication(application: Omit<DriverApplication, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newApplication: DriverApplication = {
      id: Date.now().toString(),
      ...application,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Store in localStorage for demo purposes
    const existingApplications = JSON.parse(localStorage.getItem('driver_applications') || '[]');
    existingApplications.push(newApplication);
    localStorage.setItem('driver_applications', JSON.stringify(existingApplications));

    return newApplication;
  },

  async getApplicationByEmail(email: string) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const applications = JSON.parse(localStorage.getItem('driver_applications') || '[]');
    const application = applications.find((app: DriverApplication) => app.email === email);
    
    return application || null;
  },

  async updateApplicationStatus(id: string, status: 'pending' | 'approved' | 'rejected') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const applications = JSON.parse(localStorage.getItem('driver_applications') || '[]');
    const applicationIndex = applications.findIndex((app: DriverApplication) => app.id === id);
    
    if (applicationIndex === -1) {
      throw new Error('Application not found');
    }

    applications[applicationIndex] = {
      ...applications[applicationIndex],
      status,
      updated_at: new Date().toISOString()
    };

    localStorage.setItem('driver_applications', JSON.stringify(applications));
    return applications[applicationIndex];
  }
};
