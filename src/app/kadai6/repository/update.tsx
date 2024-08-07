export const UpdateRepoistory = (
  id: string,
  title: string,
  content: string
) => {
  if (!title || !content || !id) {
    alert("タイトルと本文は必須です");
    return;
  }
  fetch(`http://localhost:8000/posts${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      title: title,
      content: content,
    }),
  }).then(() => {
    alert("更新しました");
  });
};
