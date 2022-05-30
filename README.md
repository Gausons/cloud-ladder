## Description
This project aims to connect user and organizational data for different systems. For example, you can use it to synchronize Feishu's data to enterprise WeChat. You can also synchronize data from Windows AD to GitLab. If you want to use it for data synchronization between other systems, you need to guarantee basic openness.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

