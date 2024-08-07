export const DeleteRepository = (id: string) => {
  if (!id) {
    alert("idは必須です");
    return;
  }
  fetch(`http://localhost:8000/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    alert("削除しました");
  });
};
