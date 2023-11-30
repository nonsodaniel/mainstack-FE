import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MultiSelectComponent } from "@/lib/utils";

const TransactionType = () => {
  //@ts-ignore
  const { handleSubmit, control, errors } = useForm();
  const [selected, setSelected] = useState([]);

  const initialOption = [
    { label: "Store Transaction", value: "Store Transaction" },
    { label: "Get Tipped", value: "Get Tipped" },
    { label: "Withdrawals", value: "Withdrawals" },
    { label: "Chargebacks", value: "Chargebacks" },
    { label: "Cashbacks", value: "Cashbacks" },
    { label: "Refer and Earn", value: "Refer and Earn" },
  ];

  const onSubmit = (data: any) => {
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
          defaultValue=""
          rules={{
            validate: (value) =>
              value.length > 0 || "Please select at least a transaction type",
            required: true,
          }}
          render={({ field }) => (
            <MultiSelectComponent
              options={initialOption}
              // @ts-ignore TODO:
              value={field.value || []}
              //@ts-ignore TODO:
              onChange={(selected) => {
                setSelected(selected);
                field.onChange(selected);
              }}
              labelledBy={"Select"}
              name="transactionType"
              className="border border-secondary rounded p-2 align-items-center"
            />
          )}
        />
        {errors?.selected && (
          <span className="error">{errors?.selected.message}</span>
        )}
      </form>
    </div>
  );
};

export default TransactionType;
