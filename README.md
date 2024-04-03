# Portafolio Personal

## Índice

- [Introducción](#introducción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Dependencias](#dependencias)
- [Configuración](#configuración)
- [Documentación](#documentación)
- [Ejemplos](#ejemplos)
- [Colaboración](#colaboración)
- [Licencia](#licencia)

## Introducción

Este proyecto es un portafolio personal desarrollado utilizando las tecnologías React, JavaScript, y TailwindCSS para el diseño. Su finalidad es proporcionar un espacio donde pueda mostrar mi currículum vitae, destacar algunas soft skills, y ofrecerme para colaboraciones en proyectos. Además, sirve como una herramienta para demostrar mis habilidades a potenciales empleadores en el sector tecnológico.

Al ser un proyecto de código abierto, está diseñado para operar dentro de un entorno Node.js, lo que permite su fácil uso, modificación y distribución por otros desarrolladores.

## Instalación

Para instalar y ejecutar este proyecto en tu sistema, asegúrate de tener Node.js instalado. Luego, sigue estos pasos:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

## Uso

Para correr el proyecto en tu entorno local, utiliza el siguiente comando:

```bash
npm start
```

Este comando iniciará el servidor de desarrollo y abrirá automáticamente el proyecto en tu navegador predeterminado.

## Características

- **Currículum Vitae**: Una sección dedicada a mi experiencia laboral, educación y habilidades.
- **Soft Skills**: Destaca mis habilidades interpersonales y de comunicación.
- **Colaboración en Proyectos**: Información sobre cómo otros pueden colaborar conmigo en futuros proyectos.
- **Diseño Responsivo**: Asegura una buena visualización en diferentes dispositivos y tamaños de pantalla.

## Dependencias

Este proyecto utiliza varias dependencias clave:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TailwindCSS**: Un framework de CSS para estilizar el sitio.
- **React Icons**: Biblioteca de íconos que se pueden utilizar en React.

## Configuración

No se requiere configuración adicional para el uso básico del proyecto. Sin embargo, puedes personalizar TailwindCSS o agregar componentes React según sea necesario.

## Documentación

Para más detalles sobre cómo trabajar con React, TailwindCSS, o React Icons, consulta sus documentaciones oficiales:

- [React](https://reactjs.org/docs/getting-started.html)
- [TailwindCSS](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## Ejemplos
 {/*Social media*/}
      <div className='hidden lg:flex fixed flex-col top-[25%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px]  hover:bg-blue-800 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='https://www.linkedin.com/in/orlysantiago/'><FaLinkedin size={30} />Linkedin</a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px]  hover:bg-[#333333] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='https://github.com/orlymariela'><FaGithub size={30} />Github</a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px] hover:bg-[#F2901A] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='mailto:orly.frontdeveloper@gmail.com'><HiOutlineMail size={30} />Email </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px] hover:bg-[#565f69] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='/'>< BsFillPersonLinesFill size={30} />Resume </a>
          </li>
        </ul>

      </div>

## Colaboración

Si deseas colaborar en este proyecto, por favor, considera hacer un fork del repositorio y enviar tus pull requests. También puedes abrir issues para discutir cambios o nuevas ideas.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT, lo que permite su uso, modificación y distribución libremente. Para más información, consulta el archivo `LICENSE` en este repositorio.
