import { useMemo } from 'react'
import { useTheme } from 'styled-components/native'

import Assets from 'src/assets'
import { hexToRgba, resize } from 'src/utils'

export type Data = {
  bg: string
  description: string
  image: {
    height: number
    source: any
    width: number
  }
  key: string
  title: string
}

export default function (): Data[] {
  const theme = useTheme()

  const data = useMemo<Data[]>(() => {
    const items: Data[] = []

    const imageSize1 = resize({
      base: 'height',
      height: 264,
      size: 220,
      width: 312
    })
    const item1 = {
      bg: hexToRgba(theme.colors.primary, 0.2),
      description:
        'Create, save, manage your bookmark, images, link, or documents just in one app.',
      image: {
        height: imageSize1.height,
        source: Assets.images.onboarding1.source,
        width: imageSize1.width
      },
      key: '1',
      title: 'Simple way to Manage'
    }
    items.push(item1)

    const imageSize2 = resize({
      base: 'height',
      height: 270,
      size: 220,
      width: 296
    })
    const item2 = {
      bg: hexToRgba(theme.colors.blue, 0.2),
      description:
        'Say no to mess with grouped folders, add your tags, or just search with advanced filters.',
      image: {
        height: imageSize2.height,
        source: Assets.images.onboarding2.source,
        width: imageSize2.width
      },
      key: '2',
      title: 'Organize is easy'
    }
    items.push(item2)

    const imageSize3 = resize({
      base: 'height',
      height: 328,
      size: 220,
      width: 317
    })
    const item3 = {
      bg: hexToRgba(theme.colors.pink, 0.2),
      description:
        "We believe privacy is a right. We won't sell your data, no ads, ever.",
      image: {
        height: imageSize3.height,
        source: Assets.images.onboarding3.source,
        width: imageSize3.width
      },
      key: '3',
      title: 'Safe and Secure'
    }
    items.push(item3)

    return items
  }, [theme.colors.blue, theme.colors.pink, theme.colors.primary])

  return data
}
