import React from "react";

export const Card = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    />
  );
});

export const CardHeader = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col space-y-1.5 p-6 ${className}`}
        {...props}
      />
    );
  }
);

export const CardTitle = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
        {...props}
      />
    );
  }
);

export const CardDescription = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-sm text-gray-500 ${className}`}
        {...props}
      />
    );
  }
);

export const CardContent = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />;
  }
);

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
