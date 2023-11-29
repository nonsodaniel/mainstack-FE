import useFetch from "@/hooks/useFetch";
import { formatCurrency, walletURL } from "@/lib/constants";
import { UserWalletData } from "@/lib/types";
import { RiErrorWarningLine } from "react-icons/ri";

export default function RecentSales() {
  const { data, loading, error } = useFetch<UserWalletData>(walletURL);
  if (!data) return null;

  return (
    <div className="space-y-14 shadow-none">
      <div className="flex items-center justify-between  pt-20">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Ledger</p>
          <p className="text-2xl font-extrabold leading-none">
            USD {formatCurrency(data.ledger_balance)}
          </p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Total Payout</p>
          <p className="text-2xl font-extrabold leading-none">
            USD {formatCurrency(data.total_payout)}
          </p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-extrabold leading-none">
            USD {formatCurrency(data.total_revenue)}
          </p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Pending Payout</p>
          <p className="text-2xl font-extrabold leading-none">
            USD {formatCurrency(data.pending_payout)}
          </p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
    </div>
  );
}
