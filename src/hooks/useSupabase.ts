import { useState, useCallback } from 'react';
import supabase from '../../config/supabaseClient';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export const useSupabase = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Register or login user with Telegram initData
  const authenticateWithTelegram = useCallback(async (initData: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Parse the Telegram initData
      const parsedData: TelegramUser = JSON.parse(
        Object.fromEntries(
          new URLSearchParams(initData).entries()
        ).user
      );

      // Check if user exists
      const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('telegram_id', parsedData.id)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (!existingUser) {
        // Create new user
        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .insert([
            {
              telegram_id: parsedData.id,
              first_name: parsedData.first_name,
              last_name: parsedData.last_name || null,
              username: parsedData.username || null,
              photo_url: parsedData.photo_url || null,
              auth_date: parsedData.auth_date,
            }
          ])
          .select()
          .single();

        if (insertError) throw insertError;
        return newUser;
      }

      return existingUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Get current user data
  const getCurrentUser = useCallback(async (telegramId: number) => {
    try {
      setLoading(true);
      setError(null);

      const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('telegram_id', telegramId)
        .single();

      if (error) throw error;
      return user;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Update user profile
  const updateUserProfile = useCallback(async (
    telegramId: number,
    updates: Partial<Omit<TelegramUser, 'id' | 'hash'>>
  ) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('telegram_id', telegramId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete user account
  const deleteUser = useCallback(async (telegramId: number) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase
        .from('users')
        .delete()
        .eq('telegram_id', telegramId);

      if (error) throw error;
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    authenticateWithTelegram,
    getCurrentUser,
    updateUserProfile,
    deleteUser
  };
}; 