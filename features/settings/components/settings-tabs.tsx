"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { notificationPrefs, workspacePlan } from "@/features/settings/mock";

const tabs = ["Profile", "Workspace", "Notifications", "Billing"] as const;
type Tab = (typeof tabs)[number];

export function SettingsTabs() {
  const [tab, setTab] = useState<Tab>("Profile");
  const [prefs, setPrefs] = useState(() => Object.fromEntries(notificationPrefs.map((p) => [p.id, p.defaultEnabled])));

  return (
    <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "shrink-0 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors lg:w-full",
              tab === t ? "bg-primary/12 text-primary" : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </nav>

      {tab === "Profile" && (
        <Card className="p-0">
          <CardHeader>
            <CardTitle className="text-base">Profile</CardTitle>
            <CardDescription>How your name appears across board sessions and reports.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" defaultValue="Piyush Ade" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="jordan@loadbay.co" />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" defaultValue="Founder" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save changes</Button>
          </CardFooter>
        </Card>
      )}

      {tab === "Workspace" && (
        <Card className="p-0">
          <CardHeader>
            <CardTitle className="text-base">Workspace</CardTitle>
            <CardDescription>Settings shared by everyone on your team.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="workspaceName">Workspace name</Label>
              <Input id="workspaceName" defaultValue="Loadbay" />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <p className="text-sm font-medium text-foreground">Default board composition</p>
                <p className="text-xs text-muted-foreground">All 8 executives are seated by default for new sessions.</p>
              </div>
              <Badge tone="brass">8 of 8 active</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save changes</Button>
          </CardFooter>
        </Card>
      )}

      {tab === "Notifications" && (
        <Card className="p-0">
          <CardHeader>
            <CardTitle className="text-base">Notifications</CardTitle>
            <CardDescription>Choose what the board should interrupt you for.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {notificationPrefs.map((pref, index) => (
              <div key={pref.id}>
                <div className="flex items-center justify-between gap-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{pref.label}</p>
                    <p className="text-xs text-muted-foreground">{pref.description}</p>
                  </div>
                  <Switch
                    checked={prefs[pref.id] ?? false}
                    onCheckedChange={(checked) => setPrefs((p) => ({ ...p, [pref.id]: checked }))}
                    aria-label={pref.label}
                  />
                </div>
                {index < notificationPrefs.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {tab === "Billing" && (
        <Card className="p-0">
          <CardHeader>
            <CardTitle className="text-base">Billing</CardTitle>
            <CardDescription>Manage your plan and seats.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 p-4">
              <div>
                <p className="text-sm font-medium text-foreground">{workspacePlan.name} plan</p>
                <p className="text-xs text-muted-foreground">
                  {workspacePlan.seatsUsed} of {workspacePlan.seatsTotal} seats used
                </p>
              </div>
              <p className="font-mono text-lg font-semibold text-foreground">{workspacePlan.price}</p>
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" size="sm">
              Change plan
            </Button>
            <Button variant="ghost" size="sm">
              Cancel subscription
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
