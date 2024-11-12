import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const dreamSchema = z.object({
  dreamContent: z.string().min(10, 'Dream description must be at least 10 characters'),
  mood: z.string().optional(),
  date: z.string()
});

type DreamFormData = z.infer<typeof dreamSchema>;

interface DreamInputProps {
  onSubmit: (data: DreamFormData) => void;
  isLoading: boolean;
}

export function DreamInput({ onSubmit, isLoading }: DreamInputProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<DreamFormData>({
    resolver: zodResolver(dreamSchema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0]
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-lg font-medium text-mystic-50">
          ⊱ Share Your Dream Journey ⊰
        </label>
        <textarea
          {...register('dreamContent')}
          className="mt-3 block w-full rounded-lg bg-mystic-400 border-mystic-200 text-mystic-50 shadow-sm focus:border-mystic-100 focus:ring-mystic-100 min-h-[120px] p-3"
          placeholder="Let your dream story unfold..."
        />
        {errors.dreamContent && (
          <p className="mt-2 text-red-400">{errors.dreamContent.message}</p>
        )}
      </div>

      <div>
        <label className="block text-lg font-medium text-mystic-50">
          ⊱ Emotions Felt ⊰
        </label>
        <input
          type="text"
          {...register('mood')}
          className="mt-3 block w-full rounded-lg bg-mystic-400 border-mystic-200 text-mystic-50 shadow-sm focus:border-mystic-100 focus:ring-mystic-100 p-3"
          placeholder="What emotions stirred within?"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-mystic-50">
          ⊱ Night of the Dream ⊰
        </label>
        <input
          type="date"
          {...register('date')}
          className="mt-3 block w-full rounded-lg bg-mystic-400 border-mystic-200 text-mystic-50 shadow-sm focus:border-mystic-100 focus:ring-mystic-100 p-3"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-3 px-4 border border-mystic-200 rounded-lg shadow-sm text-lg font-medium text-mystic-50 bg-mystic-400 hover:bg-mystic-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mystic-200 disabled:opacity-50 transition-colors duration-200"
      >
        {isLoading ? '✧ Consulting the Ancient Wisdom... ✧' : '✧ Interpret My Dream ✧'}
      </button>
    </form>
  );
}