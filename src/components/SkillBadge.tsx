import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SkillBadge = ({ children, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80",
        className
      )}
    >
      {children}
    </span>
  );
};