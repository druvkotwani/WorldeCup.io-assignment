import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";


export default function SelectStatus({ handleChange, }) {

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

            <Select
                label="Select  Status"
                className=""
                va
                onChange={handleChange}
            >
                {animals.map((animal) => (
                    <SelectItem
                        key={animal.value} value={animal.value} textValue={animal.label}>
                        <div className="flex justify-between items-center gap-2 w-full">
                            {animal.label}
                            <span className={`w-4 h-4 bg-${animal.value} rounded-full`}></span>
                        </div>
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}

export const animals = [
    { label: "Online", value: "success" },
    { label: "Eager", value: "secondary" },
    { label: "Away", value: "warning" },
    { label: "Invisible", value: "default" },
    { label: "Dnd", value: "danger" },

];
