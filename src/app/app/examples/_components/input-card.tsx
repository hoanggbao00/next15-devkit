
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";

export default function InputCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inputs</CardTitle>
        <CardDescription>A collection of inputs with icons</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3>Icons</h3>
          <div className="flex gap-2">
            <Input startIcon={SearchIcon} placeholder="Start Icon" />
            <Input endIcon={SearchIcon} placeholder="End Icon" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
