import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const PasswordInputBox = ({ onChange }: { onChange: (e: any) => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative mt-1 rounded-md shadow-sm">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        onChange={onChange}
        className="block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter your password"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {showPassword ? (
          <EyeSlashIcon
            onClick={() => {
              setShowPassword(false);
            }}
            className="w-5 h-5 text-gray-400 hover:cursor-pointer hover:text-black"
            aria-hidden="true"
          />
        ) : (
          <EyeIcon
            onClick={() => {
              setShowPassword(true);
            }}
            className="w-5 h-5 text-gray-400 hover:cursor-pointer hover:text-black"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInputBox;
