import AuthProviders from "@/components/providers/AuthProviders";
import "../globals.css";

export const metadata = {
  title: "Sign-up page",
  description: "Sign-up first to login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProviders>{children}</AuthProviders>
      </body>
    </html>
  );
}
