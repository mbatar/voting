import Providers from "@/providers/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vote!",
  description: "Vote for your favorite employee",
};
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
