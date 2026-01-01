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
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = text;
      }

      if (!res.ok) {
        const msg = (data && data.message) ? data.message : text || res.statusText;
        throw new Error(msg);
      }

      // registration success -> redirect to login
      window.alert("Registration successful. Please login.");
      window.location.href = "/parent/login";
    } catch (err: any) {
      setError(err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Parent Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div>
          <label>Pupil name</label>
          <input value={pupilName} onChange={(e) => setPupilName(e.target.value)} />
        </div>

        <div>
          <label>Relationship</label>
          <input value={relationship} onChange={(e) => setRelationship(e.target.value)} />
        </div>

        <div>
          <label>Password</label>
          <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </div>

        {error && <div style={{ color: "crimson", marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
}
