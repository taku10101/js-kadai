"use client";
import { useEffect, useState } from "react"; // 不要な `use` を削除

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({
    id: 0,
    title: "",
    content: "",
  });
  const [editPost, setEditPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    const res = await fetch(`http://localhost:8000/posts`);
    if (!res.ok) {
      console.error("Network response was not ok");
      return;
    }
    const posts: Post[] = await res.json();
    setPosts(posts);
  };

  const createPost = async (post: Post) => {
    const res = await fetch(`http://localhost:8000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!res.ok) {
      console.error("Failed to create post");
      return;
    }
    fetchPosts();
  };

  const updatePost = async (post: Post) => {
    const res = await fetch(`http://localhost:8000/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!res.ok) {
      console.error("Failed to update post");
      return;
    }
    fetchPosts();
  };

  const deletePost = async (id: number) => {
    const res = await fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("Failed to delete post");
      return;
    }
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPost(newPost);
    setNewPost({ id: 0, title: "", content: "" });
  };

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editPost) {
      updatePost(editPost);
      setEditPost(null);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Post Management</h1>

      <form onSubmit={handleCreate} style={{ marginBottom: "20px" }}>
        <h2>Create New Post</h2>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <textarea
          name='content'
          placeholder='Content'
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
          style={{
            padding: "10px",
            width: "300px",
            height: "100px",
            marginRight: "10px",
          }}
        />
        <button type='submit' style={{ padding: "10px 20px" }}>
          Create
        </button>
      </form>

      {editPost && (
        <form onSubmit={handleUpdate} style={{ marginBottom: "20px" }}>
          <h2>Edit Post</h2>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={editPost.title}
            onChange={(e) =>
              setEditPost({ ...editPost, title: e.target.value })
            }
            required
            style={{ padding: "10px", width: "300px", marginRight: "10px" }}
          />
          <textarea
            name='content'
            placeholder='Content'
            value={editPost.content}
            onChange={(e) =>
              setEditPost({ ...editPost, content: e.target.value })
            }
            required
            style={{
              padding: "10px",
              width: "300px",
              height: "100px",
              marginRight: "10px",
            }}
          />
          <button type='submit' style={{ padding: "10px 20px" }}>
            Update
          </button>
          <button
            type='button'
            onClick={() => setEditPost(null)}
            style={{ padding: "10px 20px", marginLeft: "10px" }}
          >
            Cancel
          </button>
        </form>
      )}

      {posts.map((post: Post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button
            onClick={() => setEditPost(post)}
            style={{ padding: "10px 20px", marginRight: "10px" }}
          >
            Edit
          </button>
          <button
            onClick={() => deletePost(post.id)}
            style={{ padding: "10px 20px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
