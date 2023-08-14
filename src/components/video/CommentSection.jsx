import React, { useState, useRef } from 'react';
import axios from 'axios';
import useSWR, { mutate } from 'swr';

const fetcher = (url) => axios.get(url).then((response) => response.data);

const CommentSection = ({ videoId }) => {
  const [newComment, setNewComment] = useState('');
  const commentContainerRef = useRef(); // Ref for the comment container

  const { data: comments, error } = useSWR(
    `https://gigih-api-production.up.railway.app/api/videos/${videoId}/comment`,
    fetcher
  );

  const handleNewComment = async () => {
    if (newComment.trim() !== '') {
      try {
        const response = await axios.post(`https://gigih-api-production.up.railway.app/api/videos/${videoId}`, {
          username: 'Adi Warsa',
          comment: newComment,
          videoId: videoId,
        });
        mutate(`https://gigih-api-production.up.railway.app/api/videos/${videoId}/comment`); 
        setNewComment('');

        if (commentContainerRef.current) {
          commentContainerRef.current.scrollTop = commentContainerRef.current.scrollHeight;
        }
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    }
  };

  return (
    <div className="mt-10 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Live Comments</h2>
      {comments ? (
        <div
          ref={commentContainerRef}
          className="border-t pt-4 max-h-96 overflow-y-auto"
        >
          {comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <p className="text-gray-500">
                {comment.username} : {comment.comment}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(comment.timestamp).toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>No Comment Yet...</div>
      )}
      <textarea
        className="w-full p-2 border rounded mt-4"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleNewComment();
          }
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
        onClick={handleNewComment}
      >
        Post Comment
      </button>
    </div>
  );
};

export default CommentSection;
