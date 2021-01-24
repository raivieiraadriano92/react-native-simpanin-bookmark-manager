import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState
} from 'react'
import { Appearance } from 'react-native'

type GeneralContextValues = {
  darkMode: boolean
  logIn(): void
  logOut(): void
  toggleDarkMode(): void
  user: User | undefined
}

type Props = PropsWithChildren<{
  //
}>

type User = {
  id: number
  name: string
  email: string
}

const GeneralContext = createContext<GeneralContextValues>(
  {} as GeneralContextValues
)

export function useGeneralContext(): GeneralContextValues {
  return useContext(GeneralContext)
}

export default function ({ children }: Props): JSX.Element {
  const [darkMode, setDarkMode] = useState(
    // Appearance.getColorScheme() === 'dark'
    true
  )

  const [user, setUser] = useState<User>({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@gmail.com'
  })

  const logIn = useCallback(() => {
    setUser({
      id: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com'
    })
  }, [])

  const logOut = useCallback(() => {
    setUser(undefined)
  }, [])

  const toggleDarkMode = useCallback(async () => {
    setDarkMode(!darkMode)
  }, [darkMode])

  return (
    <GeneralContext.Provider
      value={{
        darkMode,
        logIn,
        logOut,
        toggleDarkMode,
        user
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
