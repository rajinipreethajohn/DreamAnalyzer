import React from 'react';
import { format } from 'date-fns';

interface AnalysisProps {
  analysis: {
    interpretation: string;
    symbols: string[];
    recommendations: string[];
    date: string;
  };
}

export function Analysis({ analysis }: AnalysisProps) {
  return (
    <div className="ancient-border rounded-lg p-6 space-y-6">
      <div className="flex justify-between items-center border-b border-mystic-200 pb-4">
        <h2 className="text-2xl font-semibold text-mystic-50">⊱ Dream Vision ⊰</h2>
        <span className="text-mystic-100">
          {format(new Date(analysis.date), 'MMMM d, yyyy')}
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium text-mystic-50 mb-3">⊱ Ancient Wisdom Speaks ⊰</h3>
          <p className="text-mystic-100 leading-relaxed">{analysis.interpretation}</p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-mystic-50 mb-3">⊱ Sacred Symbols ⊰</h3>
          <ul className="space-y-2">
            {analysis.symbols.map((symbol, index) => (
              <li key={index} className="text-mystic-100 flex items-center">
                <span className="text-mystic-50 mr-2">✧</span> {symbol}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-mystic-50 mb-3">⊱ Path Forward ⊰</h3>
          <ul className="space-y-2">
            {analysis.recommendations.map((rec, index) => (
              <li key={index} className="text-mystic-100 flex items-center">
                <span className="text-mystic-50 mr-2">✧</span> {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}