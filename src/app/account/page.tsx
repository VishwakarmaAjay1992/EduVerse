import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { AccountPanel } from "@/components/account-panel";

export const metadata: Metadata = {
  title: "Account",
  description: "Create your local-first EduVerse profile and export a portable progress backup.",
  robots: { index: false, follow: true },
};

export default function AccountPage() {
  return (
    <>
      <SiteHeader />
      <main className="container max-w-2xl py-8 sm:py-12">
        <AccountPanel />
      </main>
    </>
  );
}
