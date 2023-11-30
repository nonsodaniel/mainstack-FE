import React, { useState } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { MultiSelectComponent } from "@/lib/utils";

interface OptionType {
  label: string;
  value: string;
}
interface FormData {
  transactionType: string[];
}
const TransactionType = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const [selected, setSelected] = useState<OptionType[]>([]);

  const initialOption: OptionType[] = [
    { label: "Store Transaction", value: "Store Transaction" },
    { label: "Get Tipped", value: "Get Tipped" },
    { label: "Withdrawals", value: "Withdrawals" },
    { label: "Chargebacks", value: "Chargebacks" },
    { label: "Cashbacks", value: "Cashbacks" },
    { label: "Refer and Earn", value: "Refer and Earn" },
  ];

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-group col-md-12 mt-7"
      >
        <label
          htmlFor="inputState"
          className="col-form-label text-sm text-black font-extrabold"
        >
          Transaction Type
        </label>
        <Controller
          control={control}
          name="transactionType"
          defaultValue={[]}
          rules={{
            validate: (value) =>
              value.length > 0 || "Please select at least a transaction type",
            required: true,
          }}
          render={({ field }) => (
            <MultiSelectComponent
              options={initialOption}
              value={field.value || []}
              onChange={(selected) => {
                setSelected(selected as OptionType[]);
                field.onChange(selected);
              }}
              labelledBy={"Select"}
              name="transactionType"
              className="border border-secondary rounded p-2 align-items-center"
            />
          )}
        />
        {errors?.transactionType && (
          <span className="error">{errors?.transactionType.message}</span>
        )}
      </form>
    </div>
  );
};

export default TransactionType;
