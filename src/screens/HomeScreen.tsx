import { Button, Center } from 'native-base'
import { RootStackScreenComponent } from 'src/navigation'
import { supabase } from 'src/services/supabase'

export const HomeScreen: RootStackScreenComponent<'Home'> = () => (
  <Center flex={1}>
    <Button onPress={() => supabase.auth.signOut()}>Logout</Button>
  </Center>
)
