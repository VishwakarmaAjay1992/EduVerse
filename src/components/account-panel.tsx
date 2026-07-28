"use client";

import { useEffect, useState } from "react";
import { Download, LogOut, ShieldCheck, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { clearProfile, getProfile, saveProfile, type LearnerProfile } from "@/lib/profile-store";

export function AccountPanel() {
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");

  useEffect(() => setProfile(getProfile()), []);

  function create() {
    const next: LearnerProfile = {
      id: crypto.randomUUID(),
      name: name.trim() || "Learner",
      email: email.trim() || undefined,
      role,
      createdAt: new Date().toISOString(),
    };
    saveProfile(next);
    setProfile(next);
  }

  function backup() {
    const data: Record<string, string> = {};
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key?.startsWith("eduverse")) data[key] = localStorage.getItem(key) ?? "";
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "eduverse-cloud-ready-backup.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <Card className="overflow-hidden shadow-sm">
      <CardHeader className="border-b bg-muted/30">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserRound className="size-5" aria-hidden="true" />
          </span>
          <div>
            <CardTitle className="text-xl leading-tight sm:text-2xl">EduVerse account</CardTitle>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Keep a stable learner identity and prepare your progress for future cloud synchronization.
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-4 sm:pt-6">
        {profile ? (
          <>
            <div className="rounded-xl border bg-muted/25 p-4">
              <p className="text-lg font-semibold">{profile.name}</p>
              <p className="mt-1 text-sm capitalize text-muted-foreground">
                {profile.role}{profile.email ? ` · ${profile.email}` : ""}
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-emerald-500/10 p-4 text-sm leading-6">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden="true" />
              <p>
                Your data remains local-first. The portable backup contains your profile, progress, bookmarks, mistakes, reviews and mastery records.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button onClick={backup} className="w-full sm:w-auto">
                <Download aria-hidden="true" /> Export synchronized backup
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => {
                  clearProfile();
                  setProfile(null);
                }}
              >
                <LogOut aria-hidden="true" /> Sign out
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="profile-name">Name</Label>
              <Input id="profile-name" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-email">Email <span className="font-normal text-muted-foreground">(optional)</span></Label>
              <Input id="profile-email" type="email" inputMode="email" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-role">Role</Label>
              <select
                id="profile-role"
                className="h-11 w-full rounded-md border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={role}
                onChange={(event) => setRole(event.target.value as "student" | "teacher")}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <Button onClick={create} className="w-full sm:w-auto">Create local-first account</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
