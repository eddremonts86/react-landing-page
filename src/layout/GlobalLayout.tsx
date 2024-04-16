import { Footer, Navigation } from "../components/Globals";

type Props = {
  readonly children: React.ReactNode;
};

export function GlobalLayout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen px-4 py-4 overflow-y-auto">{children}</main>
      <Footer />
    </>
  );
}
