import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Overview from "./Overview";
import RecentSales from "./RecentSales";
import TransactionHeader from "./TransactionHeader";
import TransactionList from "./TransactionList";

export default function Revenue() {
  return (
    <div className="mt-32 w-full md:w-[90%] mx-auto">
      <div className="w-full lg:w-[80%] mx-auto flex-col md:flex shadow-none">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6 shadow-none">
          <Card
            className="col-span-4 shadow-none"
            style={{ border: "none", borderRadius: "0px" }}
          >
            <CardHeader>
              <CardTitle className="text-gray-500 text-md">
                Available balance
              </CardTitle>
            </CardHeader>
            <CardContent
              className="pl-2"
              style={{ border: "none", borderRadius: "0px" }}
            >
              <Overview />
            </CardContent>
          </Card>
          <Card
            className="col-span-2 shadow-none"
            style={{ border: "none", borderRadius: "0px" }}
          >
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
        <TransactionHeader />
        <TransactionList />
      </div>
    </div>
  );
}
