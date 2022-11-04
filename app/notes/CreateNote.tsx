'use client';
import { FormEvent, useState } from 'react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createNote = async (e: FormEvent) => {
    e.preventDefault();
    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={(e) => createNote(e)}>
      <h3>Create a new note</h3>
      <input
        type='text'
        required
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Content'
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit'>Create note</button>
    </form>
  );
};

export default CreateNote;
