"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { LiteralUnion, ClientSafeProvider } from "next-auth/react";

// Definir manualmente el tipo de los proveedores si no están disponibles en la biblioteca
type Providers = Record<string, ClientSafeProvider> | null;

const SoyNuevo = () => {
  const [providers, setProviders] = useState<Providers>(null);
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <div className="bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bienvenido al Club del Manager!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Luego de diferentes pasos, fuiste aceptado para formar parte de
            nuestro gran club! A continuación, te damos una guía para el
            onboarding en nuestras herramientas.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.492c-4.292-4.295-11.254-4.295-15.544 0-4.295 4.295-4.295 11.254 0 15.544 3.166 3.165 7.565 4.156 11.445 2.649l3.855 1.016a.974.974 0 0 0 1.212-1.212l-1.016-3.855c1.51-3.88.519-8.28-2.647-11.446zm-8.74 14.287c-3.934 0-7.132-3.199-7.132-7.132s3.199-7.132 7.132-7.132 7.132 3.199 7.132 7.132-3.199 7.132-7.132 7.132zm3.988-5.415c-.21-.104-1.238-.61-1.43-.681-.192-.071-.332-.104-.473.104-.137.21-.543.681-.666.82-.126.137-.244.155-.453.052-.21-.104-.89-.33-1.697-1.052-.627-.56-1.051-1.252-1.176-1.462-.125-.21-.014-.321.09-.426.092-.091.21-.244.31-.366.104-.125.137-.209.21-.314.07-.104.036-.197-.018-.29-.053-.093-.473-1.14-.647-1.558-.171-.415-.347-.358-.473-.365-.124-.007-.265-.009-.406-.009s-.382.054-.582.27c-.192.21-.761.743-.761 1.808 0 1.065.779 2.092.887 2.236.104.137 1.532 2.366 3.711 3.317.519.224.924.358 1.238.457.52.165.994.142 1.37.086.417-.062 1.28-.523 1.46-1.029.179-.505.179-.936.125-1.029-.053-.092-.192-.137-.402-.244z" />
                  </svg>
                </div>
                Ingreso a nuestro Grupo de Difusión
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                En{" "}
                <Link href="" className="font-semibold text-teal-600">
                  este link
                </Link>
                &nbsp; podrás acceder al grupo de Difusión del Club del Manager.
                A través del mismo, podrás mantenerte actualizado.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12h8.4c.1.5.1 1.1.1 1.7 0 6.1-4.1 10.5-10.5 10.5S0 19.8 0 12.5 4.1 2 10.5 2c2.8 0 5.2 1 7.1 2.9l-2.9 2.9c-.8-.7-1.9-1.5-4.2-1.5-3.5 0-6.4 2.9-6.4 6.4s2.9 6.4 6.4 6.4c3.3 0 5.5-2.3 5.9-4.7H12v-3.8z" />
                  </svg>
                </div>
                Acceso a nuestra Plataforma
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Como primer paso, debes &nbsp;
                <Link
                  href="/members/add"
                  target="_blank"
                  className="text-sky-600 font-semibold"
                >
                  Registrar tus datos
                </Link>
                , y a partir de ahí, quedarás habilitado para registrar tu login
                de google e ingresar a los beneficios, e información exclusiva
                para los miembros.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.001 2L2.571 17.5l3.44 4.5h13.978L21.429 17.5 12.001 2zm7.071 15h-8.142l4.071 5.294 4.071-5.294zm-9.786-1.5l-4.071 5.294h8.142L9.286 15.5zM12.001 3.732l4.071 5.294h-8.142L12.001 3.732zM7.38 10.5h9.242L12.001 16.036 7.38 10.5z" />
                  </svg>
                </div>
                Nuestra librería
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Con tu membresía al día, tenés acceso a{" "}
                <Link
                  href="https://drive.google.com/drive/folders/1TSKJmcmmPRwD8AJKmkbSgh9gc4cFsfaJ"
                  target="_blank"
                  className="text-sky-600 font-semibold"
                >
                  nuestra librería &nbsp;
                </Link>
                de recursos indispensable spara nuestra labor como líderes.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C17 14.17 12.33 13 10 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.94 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                Enterate de nuestro trabajo en células
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Para evolucionar en servicios internos y externos, tenemos
                células de trabajo multidisciplinarias con distintos objetivos.
                Conocelas, y elegí ser parte de las mismas!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SoyNuevo;
