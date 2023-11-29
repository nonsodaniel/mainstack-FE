export interface UserProfileData {
  first_name: string;
  last_name: string;
  email: string;
}

export interface UserWalletData {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}
