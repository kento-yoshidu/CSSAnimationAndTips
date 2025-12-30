type LoginResult = {
  success: boolean;
  message: string;
  token?: string;
};

// Caution: 🚨 Client Componentから呼び出す関数です
export async function loginClient(email?: string, password?: string): Promise<LoginResult> {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      return { success: false, message: data.message || "メールアドレス、またはパスワードが正しくありません。" };
    }

    const data = await res.json();

    return {
      success: data.success,
      message: data.message || "成功",
      token: data.token,
    };
  } catch (err: any) {
    return { success: false, message: err.message || "ネットワークエラー" };
  }
}
