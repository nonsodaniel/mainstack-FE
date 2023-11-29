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

interface TransactionMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name?: string;
}

export interface UserTransactionData {
  amount: number;
  metadata: TransactionMetadata;
  payment_reference?: string;
  status: string;
  type: string;
  date: string;
}
