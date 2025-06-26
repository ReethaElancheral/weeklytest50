import { useState, useEffect } from "react";


const translateText = async (text, source, target) => {
  if (!text.trim()) return "";
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=${source}|${target}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.responseData.translatedText;
};

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" }
];

export default function Translator() {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!input.trim()) {
        setOutput("");
        return;
      }
      setLoading(true);
      setError("");
      try {
        const translated = await translateText(input, sourceLang, targetLang);
        setOutput(translated);
      } catch (err) {
        console.error(err);
        setError("Translation failed. Please try again.");
        setOutput("");
      } finally {
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [input, sourceLang, targetLang]);

  return (
    <div className="translator">
      <div className="controls">
        <label>
          From:
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          To:
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <textarea
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to translate..."
      />

      <div className="output-wrapper">
        {loading ? (
          <p>Translating...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <textarea
            className="output"
            value={output}
            readOnly
            placeholder="Translation will appear here..."
          />
        )}
      </div>
    </div>
  );
}
