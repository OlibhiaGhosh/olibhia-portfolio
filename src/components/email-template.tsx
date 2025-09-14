import * as React from 'react';

interface EmailTemplateProps {
  Content: string;
}

export function EmailTemplate({ Content }: EmailTemplateProps) {
  return (
    <div>
      <p>{Content}</p>
    </div>
  );
}