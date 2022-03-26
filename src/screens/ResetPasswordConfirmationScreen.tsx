import { Button, Center, Heading, Image, Text, VStack } from 'native-base'
import { RootStackScreenComponent } from 'src/navigation'

export const ResetPasswordConfirmationScreen: RootStackScreenComponent<
  'ResetPasswordConfirmation'
> = ({ navigation }) => (
  <VStack flex={1} p={6} safeArea space={10}>
    <VStack flex={1} space={4}>
      <Center>
        <Image
          alt="Email sent"
          maxH={48}
          resizeMode="contain"
          source={require('assets/mail-confirmation.png')}
        />
      </Center>
      <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md" textAlign="center">
        Check your email
      </Heading>
      <Text
        fontSize="sm"
        fontWeight="normal"
        lineHeight="lg"
        textAlign="center"
        _light={{ opacity: 0.6 }}>
        Please check your inbox and click in the received link to reset a password
      </Text>
    </VStack>
    <Text
      fontSize="xs"
      fontWeight="normal"
      lineHeight="md"
      textAlign="center"
      _light={{ opacity: 0.6 }}>
      Did not receive the email? Check your spam filter, or try another email address
    </Text>
    <Button onPress={navigation.popToTop} variant="outline">
      Done
    </Button>
  </VStack>
)
