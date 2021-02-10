module.exports = (componentName) => ({
  content: `
import { HTMLAttributes } from 'react';
import { CommonComponent } from '../common.models';
export interface ${componentName}Props extends CommonComponent, HTMLAttributes<HTMLElement>  {
  foo: string;
}`,
  extension: `.types.ts`
});
