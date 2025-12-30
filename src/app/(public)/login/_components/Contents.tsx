"use client";

import { useState, type FormEvent } from "react";
import { InputField } from "@/components/form/InputField";
import { loginClient } from "@/app/(public)/apis/login/login.client";
import styles from "./contents.module.css";
import { Button } from "@/components/button/Button";

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
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button>ログイン</Button>
      </form>
    </div>
  );
}
