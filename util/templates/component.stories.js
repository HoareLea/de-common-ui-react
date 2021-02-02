module.exports = (componentName) => ({
  content: `
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ${componentName} from './${componentName}';
import { ${componentName}Props } from './${componentName}.types';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  argTypes: {}
};

export const Default: Story<${componentName}Props> = (props) => {
  return <${componentName} {...props}/>;
};`,
  extension: `.stories.tsx`
});
