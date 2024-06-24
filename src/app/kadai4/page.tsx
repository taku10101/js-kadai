type Post = {
  title: string;
  content: string;
};
export default async function Page() {
  const res = await fetch("http://localhost:8000/posts");
  if (!res.ok) {
    console.error("Network response was not ok");
    return;
  }

  const posts: Post[] = await res.json();
  console.log(posts);

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
