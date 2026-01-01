// application-frontend/src/features/parents/ParentRegisterPage.tsx
import React, { useState } from "react";

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string) || "";

export default function ParentRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pupilName, setPupilName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/parent/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          pupilName,
          relationship,
          password,
        }),
      });

      const text = await res.text();
      let data: any = null;
      try { data = text ? JSON.parse(text) : null; } catch { data = text; }

      if (!res.ok) {
        const msg = (data && data.message) ? data.message : text || res.statusText;
        throw new Error(msg);
      }

      // registration successful -> go to login
      alert("Registration successful. Please login.");
      window.location.href = "/parent/login";
    } catch (err: any) {
      setError(err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 640, margin: "40px auto", padding: 12 }}>
      <h2>Parent Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>Full name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Pupil name</label>
          <input value={pupilName} onChange={(e) => setPupilName(e.target.value)} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Relationship</label>
          <input value={relationship} onChange={(e) => setRelationship(e.target.value)} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Password</label>
          <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Registering…" : "Register"}
          </button>
        </div>

        {error && <div style={{ marginTop: 12, color: "crimson" }}>{error}</div>}
      </form>
    </main>
  );
}
