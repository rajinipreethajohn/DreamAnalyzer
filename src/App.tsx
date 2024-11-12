import React, { useState } from 'react';
import { DreamInput } from './components/DreamInput';
import { Analysis } from './components/Analysis';
import { Comments } from './components/Comments';

interface DreamAnalysis {
  interpretation: string;
  symbols: string[];
  recommendations: string[];
  date: string;
}

function App() {
  const [analysis, setAnalysis] = useState<DreamAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([
    {
      id: '1',
      author: 'Dream Explorer',
      content: 'The analysis was surprisingly accurate! It helped me understand the connection between my dream and recent life events.',
      date: '2023-11-01',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
    }
  ]);

  const analyzeDream = async (dreamData: any) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setAnalysis({
        interpretation: "Your dream suggests a period of personal growth and transformation. The symbols present indicate you're processing significant changes in your life.",
        symbols: ["Water - Emotions and unconscious thoughts", "Flying - Freedom and perspective", "Door - New opportunities"],
        recommendations: ["Reflect on current life changes", "Journal about your emotions", "Consider meditation practices"],
        date: dreamData.date
      });
    } catch (error) {
      console.error('Error analyzing dream:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addComment = (content: string) => {
    const newComment = {
      id: Date.now().toString(),
      author: 'User',
      content,
      date: new Date().toISOString().split('T')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`
    };
    setComments(prev => [newComment, ...prev]);
  };

  return (
    <div className="min-h-screen bg-mystic-500 font-cinzel">
      <header className="ancient-border">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-mystic-50">✧ What's your dream telling you? ✧</h1>
          <p className="mt-2 text-mystic-100">Unlock the ancient wisdom hidden in your dreams</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="ancient-border rounded-lg p-6">
                <DreamInput onSubmit={analyzeDream} isLoading={isLoading} />
              </div>
              
              {analysis && <Analysis analysis={analysis} />}
            </div>

            <div className="ancient-border rounded-lg p-6">
              <Comments comments={comments} onAddComment={addComment} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;