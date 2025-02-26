import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export default function ButtonCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>
          A collection of buttons with icons and loading state
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3>Variants</h3>
          <div className="flex gap-2">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3>Sizes</h3>
          <div className="flex gap-2">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon">Icon</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3>Icons</h3>
          <div className="flex gap-2">
            <Button icon={Plus} iconPlacement="left">
              Icon Left
            </Button>
            <Button icon={Plus} iconPlacement="right">
              Icon Right
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3>Loading State</h3>
          <div className="flex gap-2">
            <Button loading>Loading without Icon</Button>
            <Button variant="outline" loading>
              Outline
            </Button>
            <Button variant="secondary" loading>
              Secondary
            </Button>
            <Button variant="ghost" loading>
              Ghost
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
