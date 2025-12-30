"use client";

import { useState, type FormEvent } from "react";
import { loginClient } from "@/app/(public)/apis/login/login.client";
import styles from "./contents.module.css";

export default function Contents() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await loginClient(email, password);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
        >
          ログイン
        </button>
      </form>
    </div>
  );
}
