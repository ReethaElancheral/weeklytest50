import { useState } from "react";

export function BlogForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  const [tags, setTags] = useState(initialData.tags?.join(", ") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    const tagArray = tags.split(",").map((t) => t.trim());
    onSubmit({ title, content, tags: tagArray });
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
  <label>Post Title</label>
  <input
    type="text"
    placeholder="Post Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  
  <label>Content</label>
  <textarea
    rows="8"
    placeholder="Write your post here..."
    value={content}
    onChange={(e) => setContent(e.target.value)}
  />
  
  <label>Tags (comma separated)</label>
  <input
    type="text"
    placeholder="Tags (comma separated)"
    value={tags}
    onChange={(e) => setTags(e.target.value)}
  />
  
  <button type="submit">Save Post</button>
</form>

  );
}