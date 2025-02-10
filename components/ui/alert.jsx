import React from "react";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

export const Alert = React.forwardRef(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-blue-500/20 text-blue-700 border-blue-500/50",
      destructive: "bg-red-500/20 text-red-700 border-red-500/50",
      success: "bg-green-500/20 text-green-700 border-green-500/50",
      warning: "bg-yellow-500/20 text-yellow-700 border-yellow-500/50",
    };

    const icons = {
      default: <AlertCircle className="h-4 w-4" />,
      destructive: <XCircle className="h-4 w-4" />,
      success: <CheckCircle2 className="h-4 w-4" />,
      warning: <AlertCircle className="h-4 w-4" />,
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={`relative w-full rounded-lg border p-4 flex items-center gap-3 ${variants[variant]} ${className}`}
        {...props}
      >
        {icons[variant]}
        <div className="flex-1">{children}</div>
      </div>
    );
  }
);

export const AlertDescription = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`text-sm [&_p]:leading-relaxed ${className}`}
        {...props}
      />
    );
  }
);

Alert.displayName = "Alert";
AlertDescription.displayName = "AlertDescription";
