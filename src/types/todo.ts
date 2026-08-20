/**
 * Type definitions for Todo application
 */

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
}

export interface TodoFilters {
  status: 'all' | 'active' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  tag?: string;
}

export interface TodoStats {
  total: number;
  completed: number;
  active: number;
  byPriority: {
    low: number;
    medium: number;
    high: number;
  };
}
