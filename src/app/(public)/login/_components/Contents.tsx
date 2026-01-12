"use client";

import { useState, type FormEvent } from "react";
import { InputField } from "@/components/form/InputField";
import { loginClient } from "@/app/(public)/apis/login/login.client";
import { Button } from "@/components/button/Button";
import SnackBar from "@/components/ui/SnackBar";
import styles from "./contents.module.css";

export default function Contents() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await loginClient(email, password);

    if (res.success) {
      setIsOpenSnackBar(true);
    }
  };

  return (
    <>
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

      <SnackBar
        title="ログインに成功しました"
        variant="success"
        isOpen={isOpenSnackBar}
        onClose={() => setIsOpenSnackBar(false)}
      />
    </>
  );
}
