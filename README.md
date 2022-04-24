<h1 align="center">
  LibraTech
</h1>

<h3 align="center">
  LIbraTech MVP
</h3>

<p align="center">A small library control</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/santanarscs/library-web">

  <a href="https://www.linkedin.com/in/raphael-santana-3a83a170/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Rapahel%20Santana-blue">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/santanarscs/library-web">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

- <p style="">The librarytech is a proof of concept which we can to create a small and functional program in a holiday!</p>

To see the **api**, click here: [library-api](https://github/santanarscs/library-api)</br>

## 🚀 Technologies

Technologies that I used to develop this web client

- [Angular](https://angular.io)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com)
- [Keycloak](https://www.keycloak.org)
- [TSLint](https://palantir.github.io/tslint/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

- Have this application's [API](https://github.com/santanarscs/library-api) running

**Create a keycloak docker image**
```
docker run --name keycloak -p 8081:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:18.0.0 start-dev
```

**Clone the project and access the folder**

```bash
$ git clone https://github.com/santanarscs/library-web.git && cd library-web
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork santanarscs/library-web
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd library-web

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
