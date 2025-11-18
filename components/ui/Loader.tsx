import {  LoaderCircle } from "lucide-react";

// SpinnerLoader.jsx
export default function DotsLoader() {
 return (
   <div className="flex items-center justify-center">
    <LoaderCircle className="animate-spin size-9 text-blue-800 "/>
   </div>
 );
}
