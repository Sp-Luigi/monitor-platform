import { hello } from "@/api/test";
import { useEffect, useState } from "react";
export default function Test(){
  const [str, setStr] = useState('')
  useEffect(() => {
    hello().then(res => {
      setStr((res as any));
    })
  },[]);
  return (
    <div>
      {str}
    </div>
  )
}