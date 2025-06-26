
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { EditPage } from "./pages/EditPage";
import { ViewPage } from "./pages/ViewPage";
import { Header } from "./components/Header";
import { PostsProvider } from "./data/PostContext";

export default function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/edit/:id" element={<EditPage />} />
              <Route path="/post/:id" element={<ViewPage />} />
            </Routes>
          </main>
        </div>
      </PostsProvider>
    </BrowserRouter>
  );
}