import { CheckIcon, CloseIcon } from '@multiverse-io/stardust-react';
import React from 'react';

const renderTextWithJsonList = (rawString: string) => {
  // Split the raw string around the JSON block (delimited by ```json)
  const parts = rawString.split('```json');

  // Text before and after the JSON
  const initialText = parts[0].trim();
  const jsonPart = parts[1]?.split('```')[0]?.trim();
  const restOfText = parts[1]?.split('```')[1]?.trim() || '';

  // Parse the JSON if it exists
  let jsonData;
  try {
    jsonData = JSON.parse(jsonPart);
  } catch (e) {
    jsonData = null;
  }

  return (
    <div>
      <p>{initialText}</p>
      {jsonData && (
        <ol>
          {jsonData.map(
            (
              item: {
                criterionName:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                passed: any;
                reasoning:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <li
                key={index}
                className="flex items-start gap-1 m-1 mb-2 flex-col"
              >
                <header>
                  {item.passed ? (
                    <CheckIcon variant="success" />
                  ) : (
                    <CloseIcon variant="negative" />
                  )}
                  <strong>{item.criterionName}</strong>
                </header>
                <p className="">{item.reasoning}</p>
              </li>
            )
          )}
        </ol>
      )}
      <p>{restOfText}</p>
    </div>
  );
};

export default renderTextWithJsonList;
