import SkillCard from "../SkillCard";
import { Code } from "lucide-react";

export default function SkillCardExample() {
  return (
    <div className="max-w-xs">
      <SkillCard icon={Code} name="React.js" index={0} />
    </div>
  );
}
