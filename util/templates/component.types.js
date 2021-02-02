module.exports = (componentName) => ({
  content: `
import { CommonComponent } from '../common.models';
export interface ${componentName}Props extends CommonComponent {
  foo: string;
}`,
  extension: `.types.ts`
});
