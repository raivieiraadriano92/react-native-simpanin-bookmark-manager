import normalize from 'react-native-normalize'

type Props = {
  base?: 'height' | 'width'
  height: number
  size: number
  width: number
}

export default function ({
  base,
  height,
  size,
  width
}: Props): Pick<Props, 'height' | 'width'> {
  let newHeight = size
  let newWidth = size

  if (height > width || base === 'height') {
    newHeight = size
    newWidth = (size * width) / height
  } else if (height < width || base === 'width') {
    newHeight = (size * height) / width
    newWidth = size
  }

  return {
    height: normalize(newHeight),
    width: normalize(newWidth)
  }
}
