import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  return (
    <div className="balance">
      {formatCurrency(useSelector((store) => store.accounts.balance))}
    </div>
  );
}

export default BalanceDisplay;
