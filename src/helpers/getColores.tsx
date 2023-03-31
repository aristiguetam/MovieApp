import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});
  let primary;
  let secundary;

  switch (colors.platform) {
    case 'android':
      // android colors properties
      primary = colors.dominant;
      secundary = colors.average;
      return [primary, secundary];

    case 'ios':
      // iOS colors properties
      primary = colors.primary;
      secundary = colors.secondary;
      return [primary, secundary];
    default:
      throw new Error('Unexpected platform key');
  }
};
