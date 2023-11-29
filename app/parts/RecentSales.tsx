import { RiErrorWarningLine } from "react-icons/ri";

export default function RecentSales() {
  return (
    <div className="space-y-14 shadow-none">
      <div className="flex items-center pt-20">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Ledger</p>
          <p className="text-2xl font-extrabold leading-none">USD 0.00</p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Total Payout</p>
          <p className="text-2xl font-extrabold leading-none">USD 55,080.00</p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-extrabold leading-none">USD 175,580.00</p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-4">
          <p className="text-sm text-muted-foreground">Pending Payout</p>
          <p className="text-2xl font-extrabold leading-none">USD 0.00</p>
        </div>
        <div className="ml-auto font-medium">
          <RiErrorWarningLine />
        </div>
      </div>
    </div>
  );
}
