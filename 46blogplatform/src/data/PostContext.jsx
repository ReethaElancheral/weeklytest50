import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

const defaultPosts = [
  {
    id: "static-1",
    title: "Top 5 Latest Cars in 2025",
    content:
      "Explore the latest car models of 2025 including Tesla Model Y 2025, BMW i5, Mercedes EQE, Audi A6 e-tron, and Hyundai Ioniq 7.",
    tags: ["cars", "automobile", "latest"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "static-2",
    title: "Electric Bikes Revolution",
    content:
      "Electric bikes are changing urban transport. Top models include VanMoof, Super73, and Rad Power Bikes.",
    tags: ["bikes", "EV", "mobility"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "static-3",
    title: "Hybrid vs Electric: Which is Better?",
    content:
      "Comparing hybrid and electric vehicles in 2025 based on performance, cost, and sustainability.",
    tags: ["cars", "hybrid", "ev"],
    createdAt: new Date().toISOString(),
  },
];

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState(() => {
   const stored = localStorage.getItem("blogPosts");
if (stored) {
  const savedPosts = JSON.parse(stored);
  const staticIds = new Set(savedPosts.map(p => p.id));
 
  const merged = [...defaultPosts.filter(p => !staticIds.has(p.id)), ...savedPosts];
  return merged;
} else {
  return defaultPosts;
}

  });

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => setPosts([post, ...posts]);
  const updatePost = (id, updated) =>
    setPosts(posts.map((p) => (p.id === id ? updated : p)));
  const deletePost = (id) => setPosts(posts.filter((p) => p.id !== id));
  const getPost = (id) => posts.find((p) => p.id === id);

  return (
    <PostContext.Provider
      value={{ posts, addPost, updatePost, deletePost, getPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function useLocalPosts() {
  return useContext(PostContext);
}
