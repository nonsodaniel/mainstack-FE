import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Overview from "./Overview";
import RecentSales from "./RecentSales";
import TransactionHeader from "./TransactionHeader";
import TransactionList from "./TransactionList";
import { UserTransactionData } from "@/lib/types";
import { transactionURL } from "@/lib/constants";
import useFetch from "@/hooks/useFetch";

export default function Revenue() {
  const { data } = useFetch<UserTransactionData[]>(transactionURL);
  if (!data) return null;
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
            className="md:col-span-2 col-span-4  shadow-none"
            style={{ border: "none", borderRadius: "0px" }}
          >
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
        <TransactionHeader data={data} />
        <TransactionList transactions={data} />
      </div>
    </div>
  );
}
