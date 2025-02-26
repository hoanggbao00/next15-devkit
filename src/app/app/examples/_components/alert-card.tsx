"use client";

import {
  useAlert,
  useConfirm,
  usePrompt,
} from "@/components/providers/alert-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function AlertCard() {
  const confirm = useConfirm();
  const prompt = usePrompt();
  const alert = useAlert();

  async function handleConfirm(isPromise?: boolean) {
    let toastId: string | number = "";

    const result = await confirm({
      title: "Are you sure?",
      body: "This action cannot be undone.",
      onConfirm: isPromise
        ? async () => {
            toastId = toast.loading("Confirming...");
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
        : undefined,
    });
    toast[result ? "success" : "warning"](result ? "Confirmed" : "Cancelled", {
      id: toastId,
    });
  }

  async function handlePrompt(isPromise?: boolean) {
    let toastId: string | number = "";
    const result = await prompt({
      title: "Enter your name",
      body: "Please enter your name",
      onConfirm: isPromise
        ? async () => {
            toastId = toast.loading("Prompting...");
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
        : undefined,
    });
    toast[result ? "success" : "warning"](`You submitted ${result}`, {
      id: toastId,
    });
  }

  async function handleAlert() {
    const result = await alert({
      title: "Alert",
      body: "This is an alert",
    });
    toast[result ? "success" : "warning"](
      result ? "User confirmed" : "User cancelled",
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Confirm Dialog</CardTitle>
        <CardDescription>A collection of inputs with icons</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3>Confirm</h3>
          <div className="flex gap-2">
            <Button onClick={() => handleConfirm(false)}>Confirm</Button>
            <Button onClick={() => handleConfirm(true)}>
              Confirm (with Promise)
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3>Alert</h3>
          <div className="flex gap-2">
            <Button onClick={() => handleAlert()}>Alert</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3>Prompt</h3>
          <div className="flex gap-2">
            <Button onClick={() => handlePrompt(false)}>Prompt</Button>
            <Button onClick={() => handlePrompt(true)}>
              Prompt (with Promise)
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
