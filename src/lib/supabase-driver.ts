
import { supabase } from '@/integrations/supabase/client';
import { DriverApplication } from './types';

export const driverService = {
  async submitApplication(application: Omit<DriverApplication, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    const { data, error } = await supabase
      .from('driver_applications')
      .insert([{
        ...application,
        status: 'pending'
      }])
      .select()
      .single();

    if (error) {
      console.error('Error submitting driver application:', error);
      throw error;
    }

    return data;
  },

  async getApplicationByEmail(email: string) {
    const { data, error } = await supabase
      .from('driver_applications')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching driver application:', error);
      throw error;
    }

    return data;
  },

  async updateApplicationStatus(id: string, status: 'pending' | 'approved' | 'rejected') {
    const { data, error } = await supabase
      .from('driver_applications')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating driver application status:', error);
      throw error;
    }

    return data;
  }
};
