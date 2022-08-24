## About The Project

It's a pretty basic voting system to know which pokemon is the roundest.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- NextJS
- Tailwind
- Typescript
- tRPC
- Prisma
- PlanetScale

### How to run

Install PlanetScale CLI:

https://planetscale.com/docs/concepts/planetscale-environment-setup

After your environment is setup you're gonna need to setup env variables. Create an `.env` file in the root directory and put these lines in it:

```
DATABASE_URL="mysql://root@127.0.0.1:3309/roundest-pokemon"
SHADOW_URL="mysql://root@127.0.0.1:3310/roundest-pokemon"
```

This PlanetScale structure is using `main` and `shadow` branches so you're gonna need to connect both before diving into the app. Open two terminal tabs and run these commands in each respectively:

```sh
pscale connect roundest-pokemon main --port 3309
```

```sh
pscale connect roundest-pokemon shadow --port 3310
```

After you successfully connected to PlanetScale, you can start to run the project. Run in the root directory:

```sh
yarn
```

After installation is succeeded, you can run the project with:

```sh
yarn dev
```

If you want to see the mutations or manipulate the data in a UI, you can use Prisma Studio by running:

```sh
yarn prisma studio
```

### Deploy

This app is inside Vercel so all you need to do is push the changes for the deploy to start. It'll be displayed here:
https://utzigui-roundest-pokemon.vercel.app/

### To Do

- Cache images with `next/image`
- Persist data fetched from PokemonAPI
- Create results page
