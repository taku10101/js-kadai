"use client";
import { useEffect, useState } from "react"; // 不要な `use` を削除

type Post = {
  title: string;
  content: string;
};

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");

  const fetchPosts = async (title?: string) => {
    const res = await fetch(`http://localhost:8000/posts?title=${title}`);
    if (!res.ok) {
      console.error("Network response was not ok");
      return;
    }
    const posts: Post[] = await res.json();
    setPosts(posts);
  };

  useEffect(() => {
    if (search) {
      fetchPosts(search);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchPosts(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='名前'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button type='submit'>送信</button>
      </form>

      {posts.map((post: Post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
