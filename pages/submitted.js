import { useRouter } from "next/router";
import { useState } from "react";

export default function Submitted() {
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
  const router = useRouter();
  return (
      <div>
        {router.query.reg_no}
        {router.query.name}
        {router.query.branch}
        {router.query.year_of_study}
        {router.query.section}
        {router.query.batch}
        {router.query.type_of_participation}
      </div>
  );
}