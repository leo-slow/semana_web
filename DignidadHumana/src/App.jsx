import { useState } from 'react'
import Card from "./components/Card.jsx"
import './App.css'

function App() {
  const info = [    {
        "name": "Mahatma Gandhi",
        "years": "1869 - 1948",
        "originPlace": "India",
        "description": "Mahatma Gandhi fue un abogado, político, activista social y escritor que impulsó la independencia de la India mediante la protesta no violenta o satyagraha, una filosofía que promovía el cambio político y social sin recurrir a la violencia. Su papel como guía moral y político lo convirtió en una figura fundamental para su país, reconocido como el “Padre de la Nación”. Admirado por millones en India y en todo el mundo, su legado trascendió fronteras, consolidándolo como un símbolo universal de paz, justicia y resistencia pacífica."
    },
    {
        "name": "Martin Luther King Jr.",
        "years": "1929 - 1968",
        "originPlace": "Estados Unidos",
        "description": "Martin Luther King Jr. fue un líder estadounidense del movimiento por los derechos civiles, reconocido por su lucha pacífica contra la segregación racial y la discriminación hacia la población afroamericana. Inspirado en la no violencia, promovió la desobediencia civil como medio para alcanzar la igualdad. Su liderazgo en el boicot a los autobuses de Montgomery marcó el inicio de un movimiento que transformó la historia de Estados Unidos. \nA lo largo de las décadas de 1950 y 1960, encabezó manifestaciones y campañas pacíficas que visibilizaron la injusticia racial, como las protestas en Birmingham, donde fue arrestado y escribió su influyente Carta desde la cárcel de Birmingham. Su capacidad oratoria, visión ética y compromiso con la justicia social lo convirtieron en un símbolo mundial de la lucha por los derechos humanos y la igualdad."
    },
    {
        "name": "Nelson Mandela",
        "years": "1918 - 2013",
        "originPlace": "Sudáfrica",
        "description": "Nelson Mandela fue un líder sudafricano y símbolo mundial de la lucha contra el racismo y la injusticia. Encabezó el movimiento contra el apartheid, sistema de segregación racial en Sudáfrica, por lo que pasó 27 años en prisión. En 1994 se convirtió en el primer presidente democrático de Sudáfrica, marcando el fin del régimen racista. Su vida y liderazgo representaron un ejemplo de resistencia, reconciliación y búsqueda de igualdad, consolidándolo como una de las figuras más emblemáticas por la justicia social del siglo XX."
    },
    {
        "name": "Eleanor Roosevelt",
        "years": "1884 - 1962",
        "originPlace": "Estados Unidos",
        "description": "Eleanor Roosevelt fue una figura clave en la defensa de los derechos humanos y la principal impulsora de la Declaración Universal de los Derechos Humanos de 1948, considerada su mayor legado. Como presidenta de la Comisión de Derechos Humanos de la ONU, lideró la redacción de este documento fundamental para la libertad y la dignidad humanas. \nAntes de ello, desde su papel como Primera Dama de Estados Unidos, se distinguió por su activismo social y su defensa de los derechos de las mujeres, afroamericanos y trabajadores durante la Gran Depresión. Su valentía al enfrentar la discriminación racial, como en el caso de la cantante Marian Anderson, la convirtió en un símbolo de justicia e igualdad. \nReconocida como la “Primera Dama del Mundo”, dedicó su vida a promover la aplicación de los derechos humanos en todo el mundo, dejando un legado duradero en las leyes y constituciones de numerosas naciones."
    },
    {
        "name": "Malala Yousafzai",
        "years": "1997 - Presente",
        "originPlace": "Pakistán",
        "description": "Malala Yousafzai es una activista pakistaní y símbolo mundial de la lucha por la educación de las niñas. Enfrentó las restricciones impuestas por los talibanes y, tras sobrevivir a un atentado en 2012, se convirtió en una voz internacional por el derecho a aprender. \nDesde joven, denunció la violencia y la desigualdad a través de un blog sobre la situación educativa en Pakistán, lo que la llevó a convertirse en un referente del activismo juvenil. Junto con su padre, fundó el Fondo Malala para promover el acceso a la educación y el empoderamiento de las niñas. \nEn 2014, fue reconocida con el Premio Nobel de la Paz, convirtiéndose en la ganadora más joven de la historia. Desde entonces, continúa su labor como Mensajera de la Paz de la ONU, defendiendo la educación como una herramienta esencial para la igualdad y el progreso social."
    },
    {
        "name": "César Chávez",
        "years": "1927 - 1993",
        "originPlace": "Estados Unidos",
        "description": "César Chávez fue un líder sindical y activista mexicano-estadounidense que dedicó su vida a defender los derechos de los trabajadores agrícolas en Estados Unidos. Tras vivir en carne propia las duras condiciones del trabajo en el campo, fundó la National Farm Workers Association (posteriormente United Farm Workers), con la que organizó marchas, huelgas y boicots para exigir salarios justos y mejores condiciones laborales. \nGracias a su liderazgo, se implementó la primera declaración de derechos para los trabajadores agrícolas, marcando un cambio histórico en su protección legal. Su lucha no violenta y su compromiso con la justicia social y la dignidad humana lo convirtieron en un referente del movimiento obrero y de los derechos civiles. En reconocimiento a su legado, recibió póstumamente la Medalla Presidencial de la Libertad."
    },
    {
        "name": "Simone de Beauvoir",
        "years": "1908 - 1986",
        "originPlace": "Francia",
        "description": "Simone de Beauvoir fue una filósofa, escritora y pionera del pensamiento feminista moderno, reconocida por su papel en la reivindicación de los derechos de las mujeres y su influencia en el existencialismo francés. Desde su formación en filosofía y su participación en los debates intelectuales del siglo XX, defendió la libertad, la autonomía y el compromiso social como valores fundamentales. \nSu obra más trascendente, El segundo sexo (1949), se convirtió en un texto clave del feminismo contemporáneo, al analizar la opresión histórica de la mujer desde perspectivas biológicas, psicológicas y sociales. En ella, de Beauvoir cuestionó los mitos sobre la feminidad y afirmó que “no se nace mujer, se llega a serlo”, llamando a la emancipación económica y personal de las mujeres. Su pensamiento sentó las bases para los movimientos feministas posteriores y consolidó su legado como una de las intelectuales más influyentes del siglo XX."
    },
    {
        "name": "Harriet Tubman",
        "years": "1822 - 1913",
        "originPlace": "Estados Unidos",
        "description": "Harriet Tubman fue una abolicionista y símbolo de la lucha por la libertad en Estados Unidos. Nacida esclava en Maryland, escapó en 1849 y se convirtió en la conductora más reconocida del Ferrocarril Subterráneo, una red secreta que ayudó a liberar a decenas de personas esclavizadas. \nDurante la Guerra Civil estadounidense, colaboró con el Ejército de la Unión como espía y guía, contribuyendo activamente a la causa abolicionista. Tras la guerra, dedicó su vida a asistir a antiguos esclavos y personas necesitadas, demostrando su compromiso permanente con la justicia y la dignidad humana. \nSu legado como heroína de la libertad y los derechos humanos fue reconocido en 2016, cuando se anunció que su imagen aparecería en el billete de 20 dólares de Estados Unidos."
    },
    {
        "name": "Frida Kahlo",
        "years": "1907 - 1954",
        "originPlace": "México",
        "description": "Frida Kahlo fue una pintora mexicana y figura emblemática del arte y la identidad cultural de México, reconocida por reflejar en su obra el dolor físico, la fuerza interior y la condición femenina. Tras sufrir un grave accidente que la dejó con secuelas permanentes, encontró en la pintura una forma de expresar su realidad y su lucha personal, más que sus sueños. \nSu estilo, caracterizado por el autorretrato, el simbolismo y el nacionalismo mexicano, la convirtió en una voz única dentro del arte del siglo XX. Kahlo expuso su obra en Nueva York, París y México, y fue galardonada con el Premio Nacional de Pintura. \nEntre sus obras más reconocidas destacan Las dos Fridas, Viva la vida y Diego y yo. Su legado trasciende el arte: Frida Kahlo es hoy un símbolo de resistencia, autenticidad y empoderamiento femenino en todo el mundo."
    },
    {
        "name": "Greta Thunberg",
        "years": "2003 - Presente",
        "originPlace": "Suecia",
        "description": "Greta Thunberg es una activista ambiental sueca reconocida por su lucha contra el cambio climático y por inspirar un movimiento global de jóvenes llamado Fridays for Future. En 2018 comenzó a faltar a la escuela los viernes para protestar frente al parlamento sueco, lo que rápidamente atrajo atención internacional y motivó huelgas climáticas en decenas de países. \nThunberg ha influido en la opinión pública y en la acción política sobre el clima, pronunciando discursos en la ONU, el Parlamento Europeo y el Foro Económico Mundial, y promoviendo medidas concretas contra la crisis ambiental. Su activismo, conocido como “el efecto Greta”, ha convertido a Thunberg en un símbolo mundial de compromiso juvenil, conciencia ecológica y acción frente a la emergencia climática, a pesar de enfrentar críticas y detractores."
    }
]

  return (
    <>
      <div className="hero-bg" />

      <div className="relative w-[100vw] h-[100vh] bg-[rgba(176, 186, 171, 1);] m-[3%] z-10 flex flex-col items-center justify-center">
          <div className="text-5xl font-monospace text-center w-[100%] h-[10%] rounded-2xl flex items-center justify-center">
            <h1>Museo de la dignidad humana</h1>
          </div>
          <div className="w-[100%] h-[80%] mt-[2%] rounded-2xl flex flex-wrap justify-center gap-6">
          {info.map((data) => (
            <Card name={data?.name} years={data?.years} originPlace={data?.originPlace} description={data?.description} />
          ))}
          </div>
      </div>  

    </>
  )
}

export default App
