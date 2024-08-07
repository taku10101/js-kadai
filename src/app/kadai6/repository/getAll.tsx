export const GetAllRepository = () => {
  fetch("http://localhost:8000/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    console.log("取得しました");
  });
};
