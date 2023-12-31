"use client";

import toast from "react-hot-toast";
import { Copy, Server } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("API Router copied to the clipboard");
  };

  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle
        className={`flex ${
          title.length > 6 ? " flex-col gap-y-2 items-start" : "items-center gap-x-2"
        }`}
      >
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="break-all relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ">
          {description}
        </code>
        <Button
          className="ml-3 p-2"
          variant="outline"
          size="icon"
          onClick={onCopy}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
