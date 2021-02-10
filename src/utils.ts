export const getSize = (size: string = 'md') => {
  let height: number;
  switch (size) {
    case 'sm':
      height = 24;
      break;
    case 'md':
      height = 40;
      break;
    case 'lg':
      height = 48;
      break;
    case 'xl':
      height = 56;
      break;
  
    default:
      break;
  }
  return height;
}
