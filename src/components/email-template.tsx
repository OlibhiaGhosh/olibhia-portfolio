import * as React from 'react';

interface EmailTemplateProps {
  content: string;
}

export function EmailTemplate({ content }: EmailTemplateProps) {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
}