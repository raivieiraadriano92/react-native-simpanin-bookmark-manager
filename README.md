<p align="center">
  <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/raivieiraadriano92/react-native-simpanin-bookmark-manager?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/raivieiraadriano92/react-native-simpanin-bookmark-manager">
  
  <a href="https://github.com/raivieiraadriano92/react-native-simpanin-bookmark-manager/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/raivieiraadriano92/react-native-simpanin-bookmark-manager">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/raivieiraadriano92/react-native-simpanin-bookmark-manager/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/raivieiraadriano92/react-native-simpanin-bookmark-manager?style=social">
  </a>
</p>

![](./assets/readme-banner.png?raw=true)

# simpan.in - React Native Bookmark Manager

IMPORTANT: simpan.in is a UI Kit built with React Native and is based on [Simpanin Bookmark Manager App Ui Kit](https://ui8.net/smplsprfct/products/simpanin-bookmark-manager-app-ui-kit) to figma, then any figma file will be shared, if you need the figma file feel free to buy from the author.

## Goal

My goal with this project is to learn and improve my skills as a developer while building something cool that can be used to help other developers start their own projects.

So feel free to fork it and use it for your own goal.

This is the first of other UI Kits I intend to build using some cool technology like React Native, SwiftUI, Flutter and whatever.

## Features

Basically I intend to build a fully functional app, this includes UI, integration with some service like Firebase or Supabase (thinking about...) and CI/CD.

|                            Feature | UI  | Integration |
| ---------------------------------: | :-: | :---------: |
|                  Onboarding screen |  x  |      x      |
|                      Log In screen |  x  |      x      |
|                    Register screen |  x  |      x      |
|              Reset Password screen |  x  |      x      |
| Reset Password Confirmation screen |  x  |      x      |
|                New Password screen |  x  |      x      |
|                        Home screen |     |             |
|                      Search screen |     |             |
|                   Bookmarks screen |     |             |
|                 Collections screen |     |             |
|                    Settings screen |     |             |
|                Edit Profile screen |     |             |
|                  Used Space screen |     |             |
|               Upgrade/Plans screen |     |             |
|             Create Bookmark screen |     |             |
|           Create Collection screen |     |             |

## Status

This project is in `development`, so this doc will probably change.

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Expo](https://docs.expo.dev/get-started/installation/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Setting up the Supabase project

- Create a new project on [Supabase](https://supabase.com)

- Execute the below sql:

  ```sql
  -- Create a table for Public Profiles
  create table profiles (
    id uuid references auth.users not null,
    avatar_url text,
    full_name text unique,

    primary key (id)
  );

  alter table profiles enable row level security;

  create policy "Public profiles are viewable by everyone."
    on profiles for select
    using ( true );

  create policy "Users can insert their own profile."
    on profiles for insert
    with check ( auth.uid() = id );

  create policy "Users can update own profile."
    on profiles for update
    using ( auth.uid() = id );

  -- Set up Realtime!
  begin;
    drop publication if exists supabase_realtime;
    create publication supabase_realtime;
  commit;
  alter publication supabase_realtime add table profiles;

  -- Set up Storage!
  insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

  create policy "Avatar images are publicly accessible."
    on storage.objects for select
    using ( bucket_id = 'avatars' );

  create policy "Anyone can upload an avatar."
    on storage.objects for insert
    with check ( bucket_id = 'avatars' );

  create policy "Anyone can update an avatar."
    on storage.objects for update
    with check ( bucket_id = 'avatars' );
  ```

- On Supabase go to `Database -> Functions` and create a new function called `create_profile_for_user` with the below config.

  - `Schema` = `public`
  - `Return type` = `trigger`
  - `Definition`:

    ```sql
    begin
      insert into public.profiles(id, full_name)
      values (new.id, new.raw_user_meta_data->>'full_name');

      return new;
    end;
    ```

  - Enable `Show advanced settings` and set `Type of security` to `Security Definer`

- Now go to `Database -> Triggers` and create a new trigger called `create_profile_for_user` with the below config.

  - `Table` = `users`
  - `Events` = `INSERT`
  - `Trigger type` = `After the event`
  - `Orientation` = `Row`
  - `Function to trigger` = Select your function `create_profile_for_user`

#### Running the application

```bash
# Clone this repository
$ git clone https://github.com/raivieiraadriano92/react-native-simpanin-bookmark-manager.git

# Access the project folder in your terminal
$ cd react-native-simpanin-bookmark-manager

# Install the dependencies
$ yarn

# Set the variable values
# You can find the Supabase keys on Supabase -> Settings -> API
$ cp .env.sample .env

# Run the application in development mode
$ yarn start
```

## Testing the reset password flux

```bash
$ npx uri-scheme open "exp://127.0.0.1:19000/--/create-new-password?token=YOUR_TOKEN" --ios
```

## Author

<a href="https://www.linkedin.com/in/raivieiraadriano/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/14861463?v=4" width="100px;" alt="Raí Adriano"/>
 <br />
 <sub><b>Raí Adriano</b></sub></a> <a href="https://www.linkedin.com/in/raivieiraadriano/" title="Rocketseat"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Raí-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/raivieiraadriano/)](https://www.linkedin.com/in/raivieiraadriano/)
[![Gmail Badge](https://img.shields.io/badge/-raivieiraadriano92@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:raivieiraadriano92@gmail.com)

## License

This project is under the license [MIT](./LICENSE).

Made with love by Raí Vieira Adriano 👋🏽 [Get in Touch!](Https://www.linkedin.com/in/raivieiraadriano/)
