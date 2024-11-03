import React, { useState } from 'react';
import styles from './AddPost.module.scss';

type AddPostProps = {
  onAdd: (title: string, content: string) => void;
};

function AddPost({ onAdd }: AddPostProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (): void => {
    onAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className={styles.wrapper}>
			<h1>Add Post</h1>
      <form className={styles.form}>
      	<input
	        type="text"
	        placeholder="Title"
	        value={title}
	        onChange={(e) => setTitle(e.target.value)}
	      />
	      <textarea
	        placeholder="Content"
	        value={content}
	        onChange={(e) => setContent(e.target.value)}
	      />
	      <button onClick={handleSubmit} type="submit">
	        Add Post
	      </button>
      </form>
    </div>
  );
}

export default AddPost;
