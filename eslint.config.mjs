import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// تحديد المسارات للملف الحالي
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),


  {
    rules: {
    
      "no-console": "off", 
      
     
      "react/prop-types": "off", 

      
      "@typescript-eslint/no-explicit-any": "off", 

     
      "next/no-img-element": "off",
      
     
     
      "react-hooks/rules-of-hooks": "warn", 

     
      "react/jsx-no-target-blank": "error",
    },
  },
];

export default eslintConfig;
