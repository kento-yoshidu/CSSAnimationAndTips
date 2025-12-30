import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const res = await fetch(`https://cognito-idp.${process.env.COGNITO_REGION}.amazonaws.com/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-amz-json-1.1",
        "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
      },
      body: JSON.stringify({
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: process.env.COGNITO_CLIENT_ID,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password
        }
      }),
    });

    const data = await res.json();

    const idToken = data?.AuthenticationResult?.IdToken;

    if (!idToken) {
      return NextResponse.json(
        {
          success: false,
          message: "メールアドレス、またはパスワードが正しくありません。",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "ログイン成功",
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `id_token=${idToken}; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=3600`,
        },
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: "サーバーエラーが発生しました。"
      },
      {
        status: 500,
      }
    );
  }
}
