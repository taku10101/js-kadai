import React from "react";

export const CreateForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //作成用かんすう
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='名前' required />
        <textarea name='content' placeholder='本文' required></textarea>
        <button type='submit'>送信</button>
      </form>
    </div>
  );
};
