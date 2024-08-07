export const CreateRepository = (title: string, content: string) => {
  if (!title || !content) {
    alert("タイトルと本文は必須です");
    return;
  }
  fetch("http://localhost:8000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  }).then(() => {
    alert("作成しました");
  });
};
