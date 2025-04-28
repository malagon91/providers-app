import { Database } from '../../database.types';
export type Category = Database['public']['Tables']['category']['Row'];
export type UpdateCategoryType =
  Database['public']['Tables']['category']['Update'];
export type Commodity = Database['public']['Tables']['commodity']['Row'];
