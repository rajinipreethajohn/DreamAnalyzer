import React from 'react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
}

interface CommentsProps {
  comments: Comment[];
  onAddComment: (content: string) => void;
}

export function Comments({ comments, onAddComment }: CommentsProps) {
  const [newComment, setNewComment] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-mystic-50 text-center">⊱ Dream Seekers' Circle ⊰</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full rounded-lg bg-mystic-400 border-mystic-200 text-mystic-50 shadow-sm focus:border-mystic-100 focus:ring-mystic-100 p-3"
          placeholder="Share your wisdom with fellow dreamers..."
          rows={3}
        />
        <button
          type="submit"
          className="w-full py-3 px-4 border border-mystic-200 rounded-lg shadow-sm text-lg font-medium text-mystic-50 bg-mystic-400 hover:bg-mystic-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mystic-200 transition-colors duration-200"
        >
          ✧ Share Your Thoughts ✧
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4 p-4 bg-mystic-400 rounded-lg border border-mystic-200">
            <img
              src={comment.avatar}
              alt={comment.author}
              className="w-10 h-10 rounded-full border-2 border-mystic-200"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-mystic-50">{comment.author}</h3>
                <span className="text-sm text-mystic-100">{comment.date}</span>
              </div>
              <p className="text-mystic-100 mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}