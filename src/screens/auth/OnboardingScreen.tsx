import { FunctionComponent, useMemo } from 'react'

import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  useTheme,
  VStack
} from 'native-base'
import { Dimensions, ImageSourcePropType } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'
import { AuthStackScreenComponent } from 'src/navigation'

type AnimatedDotProps = {
  index: number
  scrollX: Animated.SharedValue<number>
}

type Slide = {
  bg: 'blue' | 'indigo' | 'red'
  description: string
  image: ImageSourcePropType
  title: string
}

const { width: SCREEN_WIDTH } = Dimensions.get('screen')

const slides: Slide[] = [
  {
    bg: 'indigo',
    description: 'Create, save, manage your bookmark, images, link, or documents just in one app.',
    image: require('assets/onboarding1.png'),
    title: 'Simple way to Manage'
  },
  {
    bg: 'blue',
    description:
      'Say no to mess with grouped folders, add your tags, or just search with advanced filters.',
    image: require('assets/onboarding2.png'),
    title: 'Organize is easy'
  },
  {
    bg: 'red',
    description: "We believe privacy is a right. We won't sell your data, no ads, ever.",
    image: require('assets/onboarding3.png'),
    title: 'Safe and Secure'
  }
]

const AnimatedBox = Animated.createAnimatedComponent(Box)

const AnimatedDot: FunctionComponent<AnimatedDotProps> = ({ index, scrollX }) => {
  const theme = useTheme()

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollX.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [theme.colors.blueGray[300], theme.colors.indigo[500], theme.colors.blueGray[300]]
    )
  }))

  return <AnimatedBox borderRadius="full" h="6px" style={animatedStyle} w="6px" />
}

const Logo = () => {
  const theme = useTheme()

  const color = useColorModeValue(theme.colors.indigo[500], theme.colors.white)

  return (
    <Svg width={122} height={20} viewBox="0 0 122 20" fill="none">
      <Path
        d="M5.99489 14.2889C4.14523 14.2889 2.69192 13.9009 1.63497 13.125C0.594535 12.3325 0.0495445 11.2429 0 9.85613H3.09654C3.12957 10.3349 3.37729 10.7642 3.8397 11.1439C4.31863 11.5071 5.05355 11.6887 6.04444 11.6887C6.85367 11.6887 7.506 11.5401 8.00145 11.2429C8.49689 10.9458 8.74462 10.5413 8.74462 10.0295C8.74462 9.58373 8.5547 9.23703 8.17485 8.98939C7.81153 8.72523 7.18396 8.54363 6.29216 8.44458L5.10309 8.32076C3.58372 8.15566 2.41943 7.72641 1.6102 7.03302C0.817485 6.33962 0.421129 5.41509 0.421129 4.25943C0.421129 3.35141 0.652337 2.58373 1.11475 1.95637C1.57717 1.3125 2.21299 0.833726 3.02222 0.520047C3.84796 0.189858 4.78931 0.0247635 5.84626 0.0247635C7.49774 0.0247635 8.83545 0.396226 9.85937 1.13915C10.8833 1.86557 11.42 2.92217 11.4696 4.30896H8.37303C8.32349 3.8467 8.08402 3.45047 7.65463 3.12028C7.24176 2.79009 6.63071 2.625 5.82149 2.625C5.09483 2.625 4.53333 2.76533 4.13697 3.04599C3.74061 3.32665 3.54244 3.68986 3.54244 4.13561C3.54244 4.56486 3.69933 4.89505 4.01311 5.12618C4.32689 5.35731 4.85537 5.51415 5.59854 5.5967L6.78761 5.72052C8.35652 5.88561 9.59513 6.32311 10.5034 7.03302C11.4118 7.74292 11.8659 8.70047 11.8659 9.90566C11.8659 10.7972 11.6182 11.5731 11.1228 12.2335C10.6438 12.8774 9.96672 13.3809 9.09143 13.7441C8.21614 14.1073 7.18396 14.2889 5.99489 14.2889Z"
        fill={color}
      />
      <Path d="M15.3546 16.816V2.99646H13.4719V0.420989H18.7979V16.816H15.3546Z" fill={color} />
      <Path
        d="M22.7663 13.8679V0.420989H25.4913V3.71462C26.0528 1.23821 27.5143 0 29.876 0H30.0246C32.155 0 33.5588 1.01533 34.2359 3.04599C34.8965 1.01533 36.3002 0 38.4472 0H38.5958C40.1317 0 41.296 0.528301 42.0887 1.5849C42.8979 2.64151 43.3025 4.17689 43.3025 6.19104V13.8679H39.8592V5.8691C39.8592 5.02712 39.6445 4.35849 39.2151 3.86321C38.7857 3.35141 38.1747 3.09552 37.382 3.09552C36.5727 3.09552 35.9286 3.35967 35.4497 3.88797C34.9873 4.39976 34.7561 5.09316 34.7561 5.96816V13.8679H31.3127V5.8691C31.3127 5.02712 31.0981 4.35849 30.6687 3.86321C30.2393 3.35141 29.6282 3.09552 28.8355 3.09552C28.0263 3.09552 27.3822 3.35967 26.9033 3.88797C26.4409 4.39976 26.2097 5.09316 26.2097 5.96816V13.8679H22.7663Z"
        fill={color}
      />
      <Path
        d="M46.9822 20V0.420989H49.7071V3.78891C50.12 2.5342 50.7971 1.59316 51.7385 0.965801C52.6798 0.321934 53.7615 0 54.9836 0C56.2553 0 57.3535 0.305424 58.2783 0.916273C59.2197 1.52712 59.9546 2.35259 60.4831 3.39269C61.0115 4.41627 61.2758 5.57193 61.2758 6.85967V7.37972C61.2758 8.66745 61.0198 9.83962 60.5078 10.8962C59.9959 11.9363 59.2692 12.77 58.3279 13.3974C57.3865 14.0083 56.2718 14.3137 54.9836 14.3137C54.0423 14.3137 53.1752 14.1403 52.3825 13.7936C51.5898 13.4304 50.9375 12.8608 50.4255 12.0849V20H46.9822ZM54.1166 11.4163C55.2231 11.4163 56.1149 11.02 56.792 10.2276C57.4856 9.41863 57.8324 8.38679 57.8324 7.13207C57.8324 5.86085 57.4856 4.83726 56.792 4.06132C56.1149 3.28538 55.2231 2.89741 54.1166 2.89741C53.4395 2.89741 52.8119 3.05424 52.2339 3.36792C51.6559 3.66509 51.1935 4.10259 50.8467 4.68042C50.4998 5.24174 50.3264 5.92689 50.3264 6.73585V7.72641C50.3264 8.50236 50.5081 9.17099 50.8714 9.73231C51.2348 10.2771 51.7054 10.6981 52.2834 10.9953C52.8615 11.2759 53.4725 11.4163 54.1166 11.4163Z"
        fill={color}
      />
      <Path
        d="M68.1184 14.2146C66.632 14.2146 65.4429 13.8349 64.5511 13.0755C63.6759 12.316 63.2382 11.2512 63.2382 9.8809C63.2382 8.41156 63.7667 7.33019 64.8236 6.63679C65.8971 5.92689 67.3339 5.57193 69.134 5.57193H71.8837V5.44811C71.8837 3.91274 71.1075 3.14505 69.5551 3.14505C69.1423 3.14505 68.6468 3.1533 68.0688 3.16981C67.4908 3.18632 66.9045 3.21108 66.31 3.2441C65.732 3.26061 65.2117 3.28538 64.7493 3.3184V0.396226C65.3108 0.346697 65.9797 0.305423 66.7559 0.272405C67.5486 0.239387 68.2753 0.222878 68.9358 0.222878C71.0002 0.222878 72.5526 0.643868 73.593 1.48585C74.65 2.31132 75.1785 3.65684 75.1785 5.52241V13.8679H72.4535V11.2925C71.8425 13.2406 70.3974 14.2146 68.1184 14.2146ZM69.0845 11.763C69.5469 11.763 69.9845 11.6804 70.3974 11.5153C70.8103 11.3337 71.1488 11.0366 71.4131 10.6238C71.6938 10.1946 71.8507 9.61675 71.8837 8.89033V7.62736H69.0845C68.2918 7.62736 67.6807 7.82547 67.2513 8.2217C66.8385 8.60141 66.632 9.0967 66.632 9.70755C66.632 10.3349 66.8385 10.8384 67.2513 11.2182C67.6807 11.5814 68.2918 11.763 69.0845 11.763Z"
        fill={color}
      />
      <Path
        d="M78.8668 13.8679V0.420989H81.5918V3.73939C82.1698 1.24646 83.7057 0 86.1994 0H86.348C87.95 0 89.1638 0.520047 89.9896 1.56014C90.8153 2.60024 91.2282 4.13561 91.2282 6.16627V13.8679H87.7848V5.8691C87.7848 5.04363 87.5454 4.375 87.0664 3.86321C86.5875 3.35141 85.9434 3.09552 85.1342 3.09552C84.292 3.09552 83.6066 3.35967 83.0781 3.88797C82.5661 4.41627 82.3102 5.10967 82.3102 5.96816V13.8679H78.8668Z"
        fill={color}
      />
      <Path d="M94.3851 13.8679V9.90566H98.2496V13.8679H94.3851Z" fill={color} />
      <Path d="M102.227 16.816V2.99646H100.344V0.420989H105.67V16.816H102.227Z" fill={color} />
      <Path
        d="M109.639 13.8679V0.420989H112.364V3.73939C112.942 1.24646 114.477 0 116.971 0H117.12C118.722 0 119.936 0.520047 120.761 1.56014C121.587 2.60024 122 4.13561 122 6.16627V13.8679H118.557V5.8691C118.557 5.04363 118.317 4.375 117.838 3.86321C117.359 3.35141 116.715 3.09552 115.906 3.09552C115.064 3.09552 114.378 3.35967 113.85 3.88797C113.338 4.41627 113.082 5.10967 113.082 5.96816V13.8679H109.639Z"
        fill={color}
      />
    </Svg>
  )
}

export const OnboardingScreen: AuthStackScreenComponent<'Onboarding'> = ({ navigation }) => {
  const goTo = useMemo(
    () => ({
      logInScreen: () => navigation.navigate('LogIn'),
      registerScreen: () => navigation.navigate('Register')
    }),
    [navigation]
  )

  const scrollX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x
  })

  const colorMode = useColorMode()

  const theme = useTheme()

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor:
      colorMode.colorMode === 'dark'
        ? theme.colors.darkBackgroundSecondary
        : interpolateColor(
            scrollX.value,
            slides.map((_, i) => i * SCREEN_WIDTH),
            slides.map((item) => theme.colors[item.bg][100])
          )
  }))

  return (
    <AnimatedBox flex={1} safeAreaTop style={animatedStyle}>
      <Center my={10}>
        <Logo />
      </Center>
      <Animated.ScrollView
        horizontal
        onScroll={scrollHandler}
        pagingEnabled
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}>
        {slides.map((slide) => (
          <VStack key={slide.title} px={6} space={4} w={`${SCREEN_WIDTH}px`}>
            <Center flex={1}>
              <Image alt={slide.title} h="full" resizeMode="contain" source={slide.image} />
            </Center>
            <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
              {slide.title}
            </Heading>
            <Text fontSize="sm" fontWeight="normal" lineHeight="lg" opacity={0.8}>
              {slide.description}
            </Text>
          </VStack>
        ))}
      </Animated.ScrollView>
      <HStack p={6} pb={10} space={2}>
        {slides.map((slide, index) => (
          <AnimatedDot index={index} key={slide.title} scrollX={scrollX} />
        ))}
      </HStack>
      <VStack
        bg="white"
        _dark={{ bg: 'darkBackground' }}
        borderTopRadius="2xl"
        pb={6}
        pt={10}
        px={6}
        safeAreaBottom
        space={4}>
        <Button onPress={goTo.logInScreen} variant="outline">
          Log In
        </Button>
        <Button onPress={goTo.registerScreen}>Register</Button>
        <Button size="sm" variant="ghost">
          Just skip for now
        </Button>
      </VStack>
    </AnimatedBox>
  )
}
