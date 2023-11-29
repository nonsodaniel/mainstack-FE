import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MultiSelectComponent } from "@/lib/utils";

const TransactionType = () => {
  const { handleSubmit, control, reset, register, errors } = useForm();
  const [selected, setSelected] = useState([]);

  const initialOption = [
    { label: "Store Transaction", value: "Get Tipped" },
    { label: "Withdrawals", value: "Withdrawals" },
    { label: "Chargebacks", value: "Chargebacks" },
    { label: "Others", value: "Others" },
  ];

  const onSubmit = (data) => {
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
          className="col-form-label text-md text-black font-semibold"
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
              value={field.value || []}
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
