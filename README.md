<h1 align="center">
  SOLID API
</h1>

<p align="center">
  The SOLID API project is a gym check-in application that follows advanced software architecture principles, such as SOLID, to ensure an organized and efficient structure. The application uses Design Patterns that promote system scalability and flexibility, as well as authentication with JWT and Refresh Token to ensure the security of user sessions. Access control is based on RBAC, making it easier to manage permissions. The entire infrastructure was containerized with Docker, allowing for easy configuration and scalability, especially in database management.
</p>

<p align="center">
  <a href="#usage">Usage</a> •
  <a href="#license">License</a>
</p>

## Usage

```sh
git clone https://github.com/gustavopettine/solid-api

cd solid-api
```

```sh
docker compose up -d

npm run dev
```

```sh
npx prisma migrate dev

npx prisma studio
```

## License

MIT
