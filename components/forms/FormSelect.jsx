"use client";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export default function FormSelect({
  label,
  name,
  control,
  options,
  rules,
  error,
  isMulti = false,
  placeholder,
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            isMulti={isMulti}
            placeholder={placeholder}
            classNamePrefix="react-select"
          />
        )}
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
}


