export const GetAllRepository = (id: string) => {
  if (!id) {
    alert("idは必須です");
    return;
  }
  fetch(`http://localhost:8000/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    console.log("取得しました");
  });
};
