import { AlertDialogProvider } from "@/components/providers/alert-provider";
import AlertCard from "./_components/alert-card";
import ButtonCard from "./_components/button-card";
import InputCard from "./_components/input-card";

export default function ExamplesPage() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ButtonCard />
        <InputCard />
        <AlertDialogProvider>
          <AlertCard />
        </AlertDialogProvider>
      </div>
    </div>
  );
}
